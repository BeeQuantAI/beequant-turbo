'use client';
import {
  AccountCard,
  AccountContent,
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  AccountOr,
  AccountSocial,
  AccountSocialButtonFacebook,
  AccountSocialButtonGoogle,
  AccountTitle,
  AccountWrap,
} from '@/shared/components/account/AccountElements';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import FormLayout from './FormLayout';
export default function LoginForm() {
  return (
    <AccountWrap>
      <AccountContent>
        <AccountCard>
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
          <FormLayout />
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
        </AccountCard>
      </AccountContent>
    </AccountWrap>
  );
}
