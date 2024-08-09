import { FormGroupIcon } from '@/shared/components/form/FormElements';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import CellphoneIcon from 'mdi-react/CellphoneIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import React from 'react';

const iconForField = {
  realName: <AccountOutlineIcon />,
  displayName: <AccountOutlineIcon />,
  email: <AccountOutlineIcon />,
  password: <KeyVariantIcon />,
  mobile: <CellphoneIcon />,
  ref: <AccountOutlineIcon />,
};

function FormIcon({ name }: { name: keyof typeof iconForField }): React.JSX.Element {
  return <FormGroupIcon>{iconForField[name]}</FormGroupIcon>;
}

export default FormIcon;
