import Link from 'next/link';
import styled from 'styled-components';
import { colorHover, colorText, colorAccent } from '@/styles/palette';
import { left } from '@/styles/directions';
import { TopbarLinkIcon, TopbarLinkTitle } from './BasicTopbarComponents';

type TopbarMenuLinkProps = {
  title: string;
  icon?: string;
  path: string;
  onClick: () => void;
  iconRight?: boolean;
};

const TopbarMenuLink = ({ title, icon, path, onClick, iconRight }: TopbarMenuLinkProps) => (
  <TopbarLink href={path} onClick={onClick} iconRight={iconRight}>
    {iconRight ? (
      <>
        <TopbarLinkTitle>{title}</TopbarLinkTitle>
        <TopbarLinkIcon className={`lnr lnr-${icon}`} />
      </>
    ) : (
      <>
        {icon && <TopbarLinkIcon className={`lnr lnr-${icon}`} />}
        <TopbarLinkTitle>{title}</TopbarLinkTitle>
      </>
    )}
  </TopbarLink>
);

export default TopbarMenuLink;

// region STYLES
type TopbarLinkProps = {
  iconRight?: boolean;
};

export const TopbarLink = styled(Link)
  .attrs<TopbarLinkProps>({})
  .withConfig({
    shouldForwardProp: (prop) => !['iconRight'].includes(prop),
  })`
  display: flex;
  justify-content: ${(props) => (props.iconRight ? 'space-between' : 'left')};
  padding: 9px 0px 9px 20px;
  transition: all 0.3s;
  height: 32px;
  width: 100%;
  position: relative;
  cursor: pointer;
  color: ${colorText};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${colorAccent};
    opacity: 0;
    transition: all 0.3s;
    ${left}: 0;
  }

  &:hover {
    background-color: ${colorHover};

    &:before {
      opacity: 1;
    }
  }
`;

// endregion
