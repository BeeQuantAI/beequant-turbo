/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from 'styled-components';
import { colorHover } from '@/styles/palette';

type TopbarSidebarButtonProps = {
  onClickDesktop: () => void;
  onClickMobile: () => void;
};

const IMAGE_SOURCE = '/img/burger.svg';

const TopbarSidebarButton = ({ onClickDesktop, onClickMobile }: TopbarSidebarButtonProps) => (
  <div>
    <TopbarDesktopButton onClick={onClickDesktop} type="button">
      <TopbarButtonIcon src={IMAGE_SOURCE} alt="" />
    </TopbarDesktopButton>
    <TopbarMobileButton onClick={onClickMobile} type="button">
      <TopbarButtonIcon src={IMAGE_SOURCE} alt="" />
    </TopbarMobileButton>
  </div>
);

export default TopbarSidebarButton;

// region STYLES

const TopbarButton = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${colorHover};
  }
`;

export const TopbarDesktopButton = styled(TopbarButton)`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const TopbarMobileButton = styled(TopbarButton)`
  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const TopbarButtonIcon = styled.img`
  margin: auto;
  transition: all 0.3s;
  width: 16px;
  z-index: 101;
`;

// endregion
