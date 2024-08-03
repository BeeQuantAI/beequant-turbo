import {
  AccountHaveAccount,
  AccountOr,
  AccountSocial,
  AccountSocialButtonFacebook,
  AccountSocialButtonGoogle,
} from '@/shared/components/account/AccountElements';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import Link from 'next/link';

interface AccountFooterProps {
  isLogin?: boolean;
}

const AccountFooter = ({ isLogin }: AccountFooterProps) => {
  if (isLogin) {
    return (
      <>
        <AccountOr>
          <p>Or Easily Using</p>
        </AccountOr>
        <AccountSocial>
          {/* @ts-ignore - Ignoring because of complex union types incorrectly inferred */}
          <AccountSocialButtonFacebook
            className="account__social-btn account__social-btn--facebook"
            to="/login"
          >
            <FacebookIcon />
          </AccountSocialButtonFacebook>
          <AccountSocialButtonGoogle to="/login">
            <GooglePlusIcon />
          </AccountSocialButtonGoogle>
        </AccountSocial>
      </>
    );
  }
  return (
    <AccountHaveAccount>
      <p>
        Already have an account?
        <Link href="/login">Login</Link>
      </p>
    </AccountHaveAccount>
  );
};

export default AccountFooter;
