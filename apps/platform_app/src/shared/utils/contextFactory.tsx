/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useMemo, useState, useContext } from 'react';
import { IPropChild } from './types';

interface IStore {
  key: string;
  store: Record<string, any>;
  setStore: (payload: Record<string, any>) => void;
}

function getContextProvider(key: string, defaultValue: any, AppContext: React.Context<IStore>) {
  return ({ children }: IPropChild) => {
    const [store, setStore] = useState(defaultValue);
    const value = useMemo(
      () => ({
        key,
        store,
        setStore: (payload = {}) =>
          setStore((state: any) => ({
            ...state,
            ...payload,
          })),
      }),
      [store]
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  };
}

const contextCache: Record<string, Context> = {};

class Context {
  defaultStore: IStore;

  AppContext: React.Context<IStore>;

  Provider: ({ children }: IPropChild) => JSX.Element;

  constructor(key: string, defaultValue: any) {
    this.defaultStore = {
      key,
      store: defaultValue,
      setStore: () => {},
    };
    this.AppContext = createContext(this.defaultStore);
    this.Provider = getContextProvider(key, defaultValue, this.AppContext);
    contextCache[key] = this;
  }
}

export function useAppContext(key: string) {
  const cxt = contextCache[key];
  const app = useContext(cxt.AppContext);
  return {
    store: app.store,
    setStore: app.setStore,
  };
}

export function connectFactory(key: string, defaultValue: Record<string, any>) {
  const context = contextCache[key];
  let CurrentContext: Context;
  if (context) {
    CurrentContext = context;
  } else {
    CurrentContext = new Context(key, defaultValue);
  }

  return (Child: React.FunctionComponent<any>) => (props: any) => (
    <CurrentContext.Provider>
      <Child {...props} />
    </CurrentContext.Provider>
  );
}
