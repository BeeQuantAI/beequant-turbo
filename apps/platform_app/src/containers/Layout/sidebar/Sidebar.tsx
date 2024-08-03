/* eslint-disable @typescript-eslint/no-use-before-define */
import { Scrollbar } from 'smooth-scrollbar-react';
import styled from 'styled-components';
import { colorBackground, colorScrollbar } from '@/styles/palette';
import { sidebarClose, marginRight } from '@/styles/directions';
import SidebarContent from './SidebarContent';

type SidebarProps = {
  changeMobileSidebarVisibility: () => void;
  sidebarShow?: boolean;
  $collapse?: boolean;
};

const Sidebar = ({ changeMobileSidebarVisibility, sidebarShow, $collapse }: SidebarProps) => (
  <SidebarWrap $show={sidebarShow} $collapse={$collapse}>
    <SidebarBack
      type="button"
      aria-label="sidebar visibility"
      onClick={changeMobileSidebarVisibility}
      $show={sidebarShow}
    />
    <SidebarScroll>
      <SidebarWrapper>
        <SidebarContent onClick={() => {}} $collapse={$collapse} />
      </SidebarWrapper>
    </SidebarScroll>
  </SidebarWrap>
);

export default Sidebar;

// region STYLES

const SidebarWrapper = styled.div<{ topNavigation?: string }>`
  display: block;

  @media screen and (min-width: 576px) {
    display: ${(props) => (props.topNavigation ? 'none' : 'block')};
  }
`;

const SidebarScroll = styled(Scrollbar)`
  width: 240px;
  height: calc(100vh - 60px);

  .scrollbar-track {
    background: transparent;

    &.scrollbar-track-y {
      width: 5px;
    }

    &.scrollbar-track-x {
      display: none !important;
    }
  }

  .scrollbar-thumb {
    width: 5px;
    opacity: 0.3;
    transition: height 0.3s;
    cursor: pointer;
    background: ${colorScrollbar};
  }
`;

const SidebarWrap = styled.div<{ $show?: boolean; $collapse?: boolean; topNavigation?: string }>`
  position: fixed;
  bottom: 0;
  height: 100vh;
  width: 240px;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  transition: transform 0.3s;
  background: ${colorBackground};
  top: 60px;
  padding-top: 0;
  z-index: 101;
  display: none;
  
  ${(props) =>
    props.$show &&
    `
    display: block;
    transform: ${sidebarClose};
  `};

  @media screen and (min-width: 576px) {
    padding-top: 60px;
    z-index: 99;
    display: block;
    top: 0;

    ${(props) =>
      props.$collapse &&
      `
      width: 55px;
      overflow: visible;
      transition: transform 0.3s, width 0.3s;
  
      ${SidebarScroll} {
        width: 55px;
        overflow: visible !important;
        transition: width 0.3s;
      }
  
      .scrollbar-track.scrollbar-track-y {
        ${marginRight(props)}: 188px;
      }
    }
  `};

  @media screen and (min-width: 1300px) {

    ${(props) =>
      props.topNavigation &&
      `
      transform: translateX(0);
      display: none;
    `}
  }

  @media screen and (max-width: 1400px) {
    ${(props) => props.topNavigation && 'display: none;'}
    ${(props) => props.topNavigation && props.$show && 'display: block;'}
  }
`;

const SidebarBack = styled.button<{ $show?: boolean }>`
  width: 100vw;
  position: fixed;
  display: ${(props) => (props.$show ? 'block' : 'none')};
  background: transparent;
  border: none;
  top: 60px;
  bottom: 0;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

// endregion
