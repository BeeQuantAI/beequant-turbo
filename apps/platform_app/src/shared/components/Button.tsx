import {
  Button as BootstrapButton,
  ButtonToolbar as BootstrapButtonToolbar,
  ButtonGroup as BootstrapButtonGroup,
  ButtonProps,
} from 'react-bootstrap';
import styled from 'styled-components';
import { darken } from 'polished';
import {
  colorLightGray,
  colorBlue,
  colorAccent,
  colorYellow,
  colorRed,
  colorGray,
  colorWhite,
  colorText,
  colorBlueHover,
  colorAccentHover,
  colorYellowHover,
  colorRedHover,
  colorBackgroundBody,
  colorDustyWhite,
} from '@/styles/palette';
import { marginRight, translate, left, marginLeft } from '@/styles/directions';

const getColor = (variant: string | undefined) => {
  switch (true) {
    case variant?.includes('secondary'):
      return colorLightGray;
    case variant?.includes('primary'):
      return colorBlue;
    case variant?.includes('success'):
      return colorAccent;
    case variant?.includes('warning'):
      return colorYellow;
    case variant?.includes('danger'):
      return colorRed;
    default:
      return colorLightGray;
  }
};

const getBackgroundColor = (variant: string | undefined) => {
  if (!variant || variant?.includes('outline')) {
    return null;
  }

  return getColor(variant);
};

const getHoverColor = (variant: string | undefined) => {
  if (variant?.includes('outline')) {
    return getColor(variant);
  }

  switch (true) {
    case variant?.includes('secondary'):
      return null;
    case variant?.includes('primary'):
      return colorBlueHover;
    case variant?.includes('success'):
      return colorAccentHover;
    case variant?.includes('warning'):
      return colorYellowHover;
    case variant?.includes('danger'):
      return colorRedHover;
    default:
      return null;
  }
};

const getHoverTextColor = (variant: string | undefined) => {
  if (!variant || variant?.includes('secondary')) {
    return colorGray;
  }

  return colorWhite;
};

const getTextColor = (variant: string | undefined) => {
  if (!variant?.includes('outline')) {
    return variant?.includes('secondary') ? colorGray : colorWhite;
  }

  return variant?.includes('secondary') ? colorText : getColor(variant);
};

const getPaddings = (size: string | undefined) => {
  switch (size) {
    case 'sm':
      return '5px 25px';
    case 'lg':
      return '12px 25px';
    default:
      return '10px 25px';
  }
};

const getBorderRadius = (rounded: boolean, squared: boolean) => {
  switch (true) {
    case rounded:
      return '30px';
    case squared:
      return 0;
    default:
      return '5px';
  }
};

export const Button = styled(BootstrapButton)<ButtonProps>`
  border-radius: ${(props) => getBorderRadius(props.rounded, props.squared)};
  padding: ${(props) => getPaddings(props.size)};
  margin-bottom: 20px;
  transition: all 0.4s;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  ${marginRight}: 15px;
  background-color: ${(props) => getBackgroundColor(props.variant) ?? 'transparent'};
  border: 1px solid;
  border-color: ${(props) => getColor(props.variant)};
  color: ${(props) => getTextColor(props.variant)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:last-child {
    margin-right: 0;
    ${marginRight}: 0;
  }

  &:before {
    position: absolute;
    height: 0;
    width: 0;
    border-radius: 50%;
    background-color: ${colorAccent};
    transition:
      width 0.3s ease-in-out,
      height 0.3s ease-in-out;
    z-index: -1;
    content: '';
    top: 0;
    transform: ${translate};
    ${left}: 0;
    background-color: ${(props) => getHoverColor(props.variant) || darken(0.1, colorLightGray)};
  }

  span {
    transition: all 0.3s;
    font-weight: 500;
    color: ${(props) => getTextColor(props.variant)};
  }

  svg {
    height: 14px;
    width: 14px;
    transition: all 0.3s;
    fill: ${(props) => getTextColor(props.variant)};

    &:not(:last-child) {
      ${marginRight}: 5px;
    }

    &:not(:first-child) {
      ${marginLeft}: 5px;
    }
  }

  &:hover,
  &:focus,
  &:active,
  &:active:focus {
    outline: none;
    box-shadow: none !important;
    color: ${(props) => getHoverTextColor(props.variant)};
    border-color: ${(props) => getHoverColor(props.variant) || darken(0.1, colorLightGray)};
    background-color: ${(props) => getBackgroundColor(props.variant) || 'transparent'};

    &:before {
      height: 500%;
      width: 225%;
    }

    span {
      color: ${(props) => getHoverTextColor(props.variant)};
    }

    svg {
      fill: ${(props) => getHoverTextColor(props.variant)};
    }
  }

  &:focus,
  &:active,
  &:active:focus {
    &:before {
      transition: all 0s;
    }
  }

  &:disabled {
    background-color: ${colorBackgroundBody};
    border-color: ${colorBackgroundBody};
    color: ${colorDustyWhite};
    pointer-events: none;

    span {
      color: ${colorDustyWhite};
    }

    svg {
      fill: ${colorDustyWhite};
    }
  }
`;

export const ButtonToolbar = styled(BootstrapButtonToolbar)<{
  centered?: boolean;
}>`
  margin-top: 15px;
  margin-bottom: 10px;

  & > * {
    ${marginRight}: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: -10px;
  }

  ${(props) =>
    props.centered &&
    `
    & > * {
      &,
      &:last-child,
      &:first-child {
        margin-right: auto;
        margin-left: auto;
      }
    }
  `}
`;

export const ButtonGroup = styled(BootstrapButtonGroup)`
  border-radius: 5px;
  margin-bottom: -10px;

  .btn {
    padding: 10px 15px;
    font-weight: 500;
    ${marginRight}: 0;
  }

  ${(props) =>
    props.justified &&
    `
    display: flex;
    justify-content: space-between;
    width: 100%;

    .btn {
      width: 100%;
    }
  `}

  ${(props) =>
    props.icons &&
    `
    .btn {
      padding: 7px 8px;
      line-height: 14px;
    }
  `}

  &.open .dropdown-toggle {
    box-shadow: none;
  }
`;
