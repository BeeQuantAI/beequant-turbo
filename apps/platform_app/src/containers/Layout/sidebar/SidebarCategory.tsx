import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import styled from 'styled-components';
import { colorHover, colorBackground, colorRed, colorGray } from '@/styles/palette';
import { left, paddingLeft, marginLeft } from '@/styles/directions';
import { SidebarNavLink, SidebarLinkTitle, SidebarLinkIcon } from './SidebarLink';

type SidebarCategoryProps = {
  title: string;
  icon?: string;
  $collapse: boolean | undefined;
  isNew?: boolean;
  children: React.ReactNode;
};

const SidebarCategory = ({ title, icon, isNew, children, $collapse }: SidebarCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarCategoryWrap $collapse={$collapse}>
      {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
      <SidebarCategoryButton as="button" type="button" onClick={() => setIsOpen((prev) => !prev)}>
        {icon ? <SidebarLinkIcon className={`lnr lnr-${icon}`} /> : ''}
        <SidebarLinkTitle>
          {title}
          {isNew && <SidebarCategoryNew />}
        </SidebarLinkTitle>
        {!$collapse && <SidebarCategoryChevron className="lnr lnr-chevron-right" open={isOpen} />}
      </SidebarCategoryButton>
      <Collapse in={isOpen}>
        <SidebarSubmenuWrap>
          <SidebarSubmenu>{children}</SidebarSubmenu>
        </SidebarSubmenuWrap>
      </Collapse>
    </SidebarCategoryWrap>
  );
};

export default SidebarCategory;

// region STYLES

const SidebarCategoryButton = styled(SidebarNavLink)`
  width: 100%;
`;

export const SidebarCategoryChevron = styled.span<{ open?: boolean }>`
  ${marginLeft}: auto;
  ${(props) =>
    props.open &&
    `
    transform: rotate(90deg);
  `};
  font-size: 10px;
  line-height: 14px;
  color: ${colorGray};
`;

const SidebarSubmenuWrap = styled.div<{ $collapse?: boolean }>`
  @media screen and (min-width: 576px) {
    ${(props) =>
      props.$collapse &&
      `
      position: absolute;
      width: 0;
      transition: 0.3s;
      display: none;
      ${left}: 55px;

      & & {
        position: relative;
        ${left}: 0;

        a {
          ${paddingLeft}: 30px;
        }
      }
    `}
  }
`;

const SidebarSubmenu = styled.ul<{ $collapse?: boolean }>`
  transition:
    height 0.5s 0s,
    padding 0.5s 0s,
    opacity 0.4s 0.1s;
  padding: 15px 0;
  background-color: ${colorHover};
  list-style: none;
  margin-top: -1px;

  & & {
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;

    a,
    button {
      ${paddingLeft}: 53px;
    }
  }

  a,
  button {
    ${paddingLeft}: 43px;

    &:hover {
      background-color: ${colorBackground};
    }
  }

  @media screen and (min-width: 576px) {
    ${(props) =>
      props.$collapse &&
      `
        padding: 0 0 15px 0;
        transition: 0s;
    `}
  }
`;

const SidebarCategoryWrap = styled.li<{ $collapse?: boolean }>`
  ${(props) =>
    props.$collapse &&
    `
  
    &:hover {
      
      ${SidebarCategoryButton} {
        background: ${colorHover(props)};
        
        &:before {
          opacity: 1;
        }
      }
    }
  `};

  @media screen and (min-width: 576px) {
    ${(props) =>
      props.$collapse &&
      `
      & > div {
        position: absolute;
        width: 0;
        transition: .3s;
        display: none;
        left: 55px;
        
        a,
        button {
          width: 100%;
          ${paddingLeft(props)}: 15px;
        }
      }
      
      & & > div {
        position: relative;
        min-width: 185px;
        left: 0;
        
        a,
        button {
          ${paddingLeft(props)}: 30px;
        }
      }
    
      &:hover > div,
      &:hover & > div {
        display: inherit!important;
        width: 220px;
      }
    `}
  }
`;

const SidebarCategoryNew = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  top: -3px;
  display: block;
  background: ${colorRed};
  ${marginLeft}: 5px;
`;

// endregion
