import { useState } from 'react';
import styled from 'styled-components';
import { paddingLeft } from '@/styles/directions';
import { SIDEBAR_COLLAPSED } from '@/shared/constants/storage';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';

const Layout = () => {
  const initSidebarCollapsed =
    typeof window !== 'undefined' ? localStorage.getItem(SIDEBAR_COLLAPSED) === 'true' : false;
  // const initSidebarCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED) === 'true' || false;
  const [isSidebarShown, setIsSidebarShown] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(initSidebarCollapsed);

  const changeSidebarVisibility = () => {
    localStorage.setItem(SIDEBAR_COLLAPSED, (!isSidebarCollapsed).toString());
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const changeMobileSidebarVisibility = () => {
    setIsSidebarShown(!isSidebarShown);
  };

  return (
    <LayoutContainer $collapse={isSidebarCollapsed}>
      <Topbar
        changeMobileSidebarVisibility={changeMobileSidebarVisibility}
        changeSidebarVisibility={changeSidebarVisibility}
      />
      <Sidebar
        sidebarShow={isSidebarShown}
        $collapse={isSidebarCollapsed}
        changeMobileSidebarVisibility={changeMobileSidebarVisibility}
      />
    </LayoutContainer>
  );
};

export default Layout;

// region STYLES

const LayoutContainer = styled.div<{ $collapse?: boolean }>`
  & + div {
    ${(props) =>
      props.$collapse &&
      `
      ${paddingLeft(props)}: 0;
    `};

    @media screen and (min-width: 576px) {
      ${(props) =>
        props.$collapse &&
        `
        ${paddingLeft(props)}: 60px;
      `}
    }
  }
`;

// endregion
