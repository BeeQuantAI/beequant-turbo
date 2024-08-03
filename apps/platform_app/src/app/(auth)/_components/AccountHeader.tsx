import {
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  AccountTitle,
} from '@/shared/components/account/AccountElements';

const AccountHeader = () => {
  return (
    <AccountHead>
      <AccountTitle>
        Welcome to
        <br />
        <AccountLogo>
          BeeQuant
          <AccountLogoAccent> AI</AccountLogoAccent>
        </AccountLogo>
      </AccountTitle>
      <h4 className="subhead">Trading smart, trading with BeeQuant AI</h4>
    </AccountHead>
  );
};

export default AccountHeader;
