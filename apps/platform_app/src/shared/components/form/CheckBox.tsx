import CheckIcon from 'mdi-react/CheckIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import styled from 'styled-components';
import { renderComponentField } from '@/shared/components/form/FormField';
import {
  colorAccent,
  colorAccentHover,
  colorDustyWhite,
  colorFieldsBorder,
  colorHover,
  colorIcon,
  colorText,
  colorWhite,
} from '@/styles/palette';
import { marginRight, paddingLeft } from '@/styles/directions';

type CheckBoxFieldProps = {
  checked: boolean;
  onChange: () => void;
  name: string;
  label?: string;
  disabled?: boolean;
  $styletype?: string;
  color?: string;
};

export const CheckBoxField = ({
  checked,
  onChange,
  name,
  label,
  disabled,
  $styletype,
  color,
}: CheckBoxFieldProps) => (
  <CheckboxWrap disabled={disabled} $styletype={$styletype} htmlFor={name}>
    <CheckboxInput
      type="checkbox"
      id={name}
      name={name}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
    <CheckboxCustom color={color}>
      <CheckIcon />
    </CheckboxCustom>
    {$styletype === 'button' ? (
      <CheckboxSvgWrap>
        <CheckIcon />
        <CloseIcon />
      </CheckboxSvgWrap>
    ) : (
      ''
    )}
    <CheckboxLabel>{label}</CheckboxLabel>
  </CheckboxWrap>
);

export default renderComponentField(CheckBoxField);

// region STYLES

const CheckboxCustom = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.color || colorIcon};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  background-color: ${(props) => props.color || 'transparent'};

  svg {
    transition: all 0.3s;
    opacity: 0;
    height: 16px;
    width: 16px;
    fill: ${(props) => (props.color ? colorWhite : colorAccent)};
  }
`;

const CheckboxLabel = styled.span`
  line-height: 18px;
  ${paddingLeft}: 28px;
  padding-top: 2px;
  color: ${colorText};
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s;
`;

const CheckboxInput = styled.input`
  display: none;

  &:checked + ${CheckboxCustom} {
    svg {
      opacity: 1;
    }
  }
`;

const CheckboxSvgWrap = styled.span``;

const CheckboxWrap = styled.label<{ disabled?: boolean; $styletype?: string }>`
  display: flex;
  cursor: pointer;

  &:hover {
    ${CheckboxCustom} {
      border-color: ${colorAccent};
    }

    ${CheckboxLabel} {
      color: ${colorAccent};
    }
  }

  ${(props) =>
    props.disabled &&
    `
    pointer-events: none;
    cursor: default;
    opacity: 0.4;

    ${CheckboxCustom} {
      transition: 0s;
      background-color: ${colorHover(props)};
      border-color: ${colorFieldsBorder(props)};

      svg {
        fill: ${colorDustyWhite};
      }
    }

    ${CheckboxLabel} {
      color: ${colorDustyWhite};
    }
  `}

  ${(props) =>
    props.$styletype === 'colored' &&
    `

    ${CheckboxCustom} {
      border-color: ${colorAccent};
      background-color: ${colorAccent};

      svg {
        fill: ${colorWhite};
      }
    }

    ${
      props.disabled &&
      `

      ${CheckboxCustom} {
        border-color: ${colorAccent};
        background-color: ${colorAccent};
      }
    `
    }
  `}

  ${(props) =>
    props.$styletype === 'colored-click' &&
    `

    ${CheckboxInput}:checked + ${CheckboxCustom} {
      border-color: ${colorAccent};
      background-color: ${colorAccent};

      svg {
        fill: ${colorWhite};
      }
    }

    ${
      props.disabled &&
      `

      ${CheckboxInput}:checked + ${CheckboxCustom} {
        background-color: ${colorHover(props)};
        border-color: ${colorFieldsBorder(props)};

        svg {
          fill: ${colorDustyWhite};
        }
      }
    `
    }
  `}

  ${(props) =>
    props.$styletype === 'button' &&
    `
    background: ${colorAccent};
    min-width: 150px;
    color: ${colorWhite};
    height: 24px;
    border-radius: 4px;
    transition: all 0.3s;
    padding: 0 10px;
    width: 100%;
    justify-content: center;
    align-items: center;

    ${CheckboxLabel} {
      color: ${colorWhite};
    }

    ${CheckboxCustom} {
      display: none;
    }

    ${CheckboxSvgWrap} {
      ${marginRight(props)}: 4px;
      margin-top: auto;
      margin-bottom: auto;
      height: 16px;
      line-height: 1;

      svg {
        fill: ${colorWhite};
        width: 14px;
        height: 14px;
      }

      svg:first-of-type {
        display: none;
      }
    }

    ${CheckboxInput}:checked ~ ${CheckboxSvgWrap} {

      svg:first-of-type {
        display: block;
      }

      svg:last-of-type {
        display: none;
      }
    }

    ${CheckboxLabel} {
      padding: 0;
    }

    &:hover {
      background: ${colorAccentHover};

      ${CheckboxLabel} {
        color: ${colorWhite};
      }
    }

    ${
      props.disabled &&
      `
      opacity: 0.4;

      ${CheckboxLabel} {
        color: ${colorWhite};
      }
    `
    }
  `}
`;

// endregion
