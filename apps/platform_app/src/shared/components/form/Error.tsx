import styled from 'styled-components';
import { colorDarkRed, colorVeryLightRed } from '@/styles/palette';
import { right } from '@/styles/directions';

type ErrorProps = {
  error: string;
  $top?: boolean;
};

const Error = ({ error, $top }: ErrorProps) => <ErrorText $top={$top}>{error}</ErrorText>;

export default Error;

// region STYLES

const ErrorText = styled.span<{ $top?: boolean }>`
  font-size: 10px;
  line-height: 13px;
  color: ${colorDarkRed};
  margin-bottom: -5px;
  display: block;
  margin-top: 10px;

  ${(props) =>
    props.$top &&
    `
    position: absolute;
    margin: 0;
    ${right(props)}: 0;
    top: 0;
    padding: 5px 10px;
    background: ${colorVeryLightRed};
    border-radius: 3px;

    &:after {
      content: '';
      position: absolute;
      ${right(props)}: 10px;
      bottom: -8px;
      border: 4px solid transparent;
      border-top: 4px solid ${colorVeryLightRed};
    }
  `}
`;

// endregion
