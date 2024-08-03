import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';
import styled from 'styled-components';
import {
  colorAccentGreen,
  colorBlue,
  colorDustyWhite,
  colorGreen,
  colorRed,
  colorText,
  colorViolet,
  colorYellow,
} from '@/styles/palette';
import { paddingRight, right } from '@/styles/directions';

type ProgressBarProps = {
  size: string; // 'default', 'small', 'middle', 'big'
  color?: string;
  $gradient: string;
  $rounded: boolean;
  $top: boolean;
  label: string;
  now?: any;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  size = 'default',
  color = '',
  $rounded = false,
  $gradient = '',
  label = '',
  $top = false,
  ...other
}) => {
  const renderLabel = () => {
    if (!label) return '';

    return (
      <ProgressBarLabel $top={$top} color={color} $gradient={$gradient}>
        {label}
      </ProgressBarLabel>
    );
  };

  return (
    <ProgressBarWrap size={size} color={color} $rounded={$rounded} $gradient={$gradient}>
      <BootstrapProgressBar label={renderLabel()} {...other} />
    </ProgressBarWrap>
  );
};

export default ProgressBar;

// region STYLES

const getColor = (color: string) => {
  switch (color) {
    case 'yellow':
      return colorYellow;
    case 'violet':
      return colorViolet;
    case 'pink':
      return colorRed;
    case 'blue':
      return colorBlue;
    case 'green':
      return colorGreen;
    case 'lime':
      return colorGreen;

    default:
      return colorAccentGreen;
  }
};

const getSize = (size: string) => {
  switch (size) {
    case 'small':
      return '8px';
    case 'middle':
      return '12px';
    case 'big':
      return '16px';

    default:
      return '4px';
  }
};

const getGradient = (gradient: string) => {
  switch (gradient) {
    case 'pink':
      return '#ff7e9a, #ff4861';
    case 'lime':
      return '#d8efc1, #b8e986)';
    case 'yellow':
      return '#f4dd87, #f6da6e)';
    case 'blue':
      return '#7edbff, #48b5ff';
    case 'turquoise':
      return ' #a6efda, #4ce1b6';
    default:
      return '';
  }
};

const ProgressBarLabel = styled.p<{
  $top: boolean;
  $gradient: string;
  color: string;
}>`
  ${(props) =>
    props.$top &&
    `
    position: absolute;
    ${right(props)}: 0;
    color: ${getColor(props.$gradient || props.color)};
    font-size: 10px;
    bottom: 16px;
    margin: 0;
  `}
`;

const ProgressBarWrap = styled.div<{
  size: string;
  $rounded: boolean;
  $gradient: string;
  color: string;
}>`
  margin-bottom: 20px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  .progress {
    height: fit-content;
    border-radius: 10px;
    box-shadow: none;
    background-color: ${colorDustyWhite};
    margin-bottom: 0;
  }

  .progress-bar {
    background-color: ${(props) => (props.$gradient ? 'unset' : getColor(props.color))};
    ${(props) =>
      props.$gradient &&
      `background-image: linear-gradient(to left, ${getGradient(props.$gradient)});`};
    color: ${colorText};
    box-shadow: none;
    height: ${(props) => getSize(props.size)};
    text-align: ${right};
    ${paddingRight}: 10px;
    font-size: 9px;
    line-height: 13px;
    border-radius: ${(props) => (props.$rounded ? '5px' : 0)};
  }
`;

// endregion
