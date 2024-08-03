import { borderRadius, shadow } from '@/styles/styles';
import { left } from '@/styles/directions';
import { colorBackground, colorDustyWhite, colorGray } from '@/styles/palette';
import { Card as BootstrapCard } from 'react-bootstrap';
import styled from 'styled-components';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  centered?: boolean;
  theme?: string;
}

export const Card = styled(BootstrapCard)`
  width: 100%;
  padding-bottom: 30px;
  height: ${(props) => props.height || '100%'};
  border: none;
  background-color: transparent;
`;

export const CardBody = styled(Card.Body)`
  height: 100%;
  background-color: ${colorBackground};
  border-radius: ${borderRadius};
  box-shadow: ${shadow};
  padding: 20px;
`;

export const CardTitleWrap = styled.div`
  margin-bottom: 30px;
  text-transform: uppercase;
  position: relative;
  text-align: ${left};

  &:not(:first-child) {
    margin-top: 40px;
  }

  * {
    margin-bottom: 0;
  }
`;

export const CardTitle = styled.h5<CardTitleProps>`
  font-size: 13px;
  text-align: ${(props) => (props.centered ? 'center' : left)};
  font-weight: 700;
`;

export const WidgetCardTitle = styled.h5<CardTitleProps>`
  opacity: 0.7;
  font-size: 12px;
  text-align: ${(props) => (props.centered ? 'center' : left)};
  font-weight: 500;
  color: ${(props) => (props.theme === 'dark' ? colorDustyWhite : colorGray)};
`;

export const CardSubhead = styled.p`
  text-transform: none;
  font-size: 12px;
  line-height: 18px;
  opacity: 0.7;
  margin-top: 3px;
`;
