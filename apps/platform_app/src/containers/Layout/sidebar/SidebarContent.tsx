/* eslint-disable @typescript-eslint/no-use-before-define */
import { colorBorder, colorBackground, colorHover } from '@/styles/palette';
import { left } from '@/styles/directions';
import styled from 'styled-components';
import { AUTH_TOKEN, THEME } from '@/shared/constants/storage';
import { useUserContext } from '@/hooks/userHooks';
import { ROUTE_KEY, getPublicRouteByKey, getRouteByKey } from '@/routes/routeConfig';
import SidebarCategory from './SidebarCategory';
import SidebarLink, { SidebarLinkTitle, SidebarNavLink } from './SidebarLink';

type SidebarContentProps = {
  onClick: () => void;
  // eslint-disable-next-line react/require-default-props
  $collapse?: boolean;
};

const SidebarContent = ({ onClick, $collapse }: SidebarContentProps) => {
  const { store, setStore } = useUserContext();
  const logout = () => {
    sessionStorage.setItem(AUTH_TOKEN, '');
    localStorage.setItem(AUTH_TOKEN, '');
  };

  const changeTheme = (color: string) => {
    setStore({
      ...store,
      themeColor: color,
    });
    localStorage.setItem(THEME, color);
  };

  return (
    <SidebarContentWrap $collapse={$collapse}>
      <SidebarBlock $collapse={$collapse}>
        <SidebarLink
          title={getRouteByKey(ROUTE_KEY.DASHBOARD).name}
          icon="home"
          route={getRouteByKey(ROUTE_KEY.DASHBOARD).path}
          onClick={onClick}
        />
      </SidebarBlock>
      <SidebarBlock $collapse={$collapse}>
        <SidebarCategory title="Bots" icon="chart-bars" $collapse={$collapse}>
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.BOT_DASHBOARD).name}
            route={getRouteByKey(ROUTE_KEY.BOT_DASHBOARD).path}
            onClick={() => {}}
          />
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.BOT_MANAGEMENT).name}
            route={getRouteByKey(ROUTE_KEY.BOT_MANAGEMENT).path}
            onClick={() => {}}
          />
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.BOT_CREATE).name}
            route={getRouteByKey(ROUTE_KEY.BOT_CREATE).path}
            onClick={() => {}}
          />
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.BOT_DETAILS).name}
            route={getRouteByKey(ROUTE_KEY.BOT_DETAILS).path}
            onClick={() => {}}
          />
        </SidebarCategory>
        <SidebarCategory title="Cryptoeconomy" icon="earth" $collapse={$collapse}>
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.CRYPTO_PRICES).name}
            route={getRouteByKey(ROUTE_KEY.CRYPTO_PRICES).path}
            onClick={() => {}}
          />
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.CRYPTO_PRICE_DETAILS).name}
            route={getRouteByKey(ROUTE_KEY.CRYPTO_PRICE_DETAILS).path}
            onClick={() => {}}
          />
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.CRYPTO_EXCHANGES).name}
            route={getRouteByKey(ROUTE_KEY.CRYPTO_EXCHANGES).path}
            onClick={() => {}}
          />
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.CRYPTO_EXCHANGE_DETAILS).name}
            route={getRouteByKey(ROUTE_KEY.CRYPTO_EXCHANGE_DETAILS).path}
            onClick={() => {}}
          />
        </SidebarCategory>
      </SidebarBlock>
      <SidebarBlock $collapse={$collapse}>
        <SidebarCategory title="Theme" icon="diamond" $collapse={$collapse}>
          {/* eslint-disable-next-line max-len */}
          {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
          <SidebarNavLink as="button" type="button" onClick={() => changeTheme('light')}>
            <SidebarLinkTitle>Light Theme</SidebarLinkTitle>
          </SidebarNavLink>
          {/* eslint-disable-next-line max-len */}
          {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
          <SidebarNavLink as="button" type="button" onClick={() => changeTheme('dark')}>
            <SidebarLinkTitle>Dark Theme</SidebarLinkTitle>
          </SidebarNavLink>
        </SidebarCategory>
        <SidebarCategory title="Account" icon="user" $collapse={$collapse}>
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.ACCOUNT_PROFILE).name}
            route={getRouteByKey(ROUTE_KEY.ACCOUNT_PROFILE).path}
            onClick={onClick}
          />
          <SidebarLink
            title={getRouteByKey(ROUTE_KEY.EXCHANGE_MANAGEMENT).name}
            route={getRouteByKey(ROUTE_KEY.EXCHANGE_MANAGEMENT).path}
            onClick={onClick}
          />
        </SidebarCategory>
      </SidebarBlock>
      <SidebarBlock $collapse={$collapse}>
        <SidebarLink
          title="Log Out"
          icon="exit"
          route={getPublicRouteByKey(ROUTE_KEY.LOGIN).path}
          onClick={logout}
        />
      </SidebarBlock>
    </SidebarContentWrap>
  );
};

export default SidebarContent;

// region STYLES

const SidebarContentWrap = styled.div<{ $collapse?: boolean }>`
  height: 100%;
  overflow: auto;
  padding-top: 0;

  & > div:last-child {
    width: 4px !important;

    div {
      transition: height 0.3s;
      opacity: 0.52;
    }
  }

  @media screen and (min-width: 576px) {
    padding-top: 15px;

    ${(props) =>
      props.$collapse &&
      `
      width: 55px;
      overflow: visible !important;
      transition: width 0.3s;
    `}
  }
`;

const SidebarBlock = styled.ul<{ $collapse?: boolean }>`
  padding: 15px 0;
  border-bottom: 1px solid ${colorBorder};
  list-style-type: none;

  &:last-child {
    border: none;
  }

  @media screen and (min-width: 576px) {
    ${(props) =>
      props.$collapse &&
      `
      & > li > a,
      & > li > button {
        overflow: hidden;
        width: 55px;
        background: ${colorBackground(props)};
        
        span:last-of-type {
          opacity: 0;
        }
  
        ${SidebarLinkTitle} {
          position: absolute;
          width: 160px;
          ${left(props)}: 70px;
        }
  
        &:hover {
          background: ${colorHover(props)};
        }
      }
      
      & > li:hover > a,
      & > li:hover > button {
        width: 275px;
        
        span {
          opacity: 1;
        }
      }
    `}
  }
`;

// endregion
