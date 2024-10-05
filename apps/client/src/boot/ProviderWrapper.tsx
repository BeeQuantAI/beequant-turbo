"use client";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import React from "react";

const ProviderWrapper: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ProviderWrapper;
