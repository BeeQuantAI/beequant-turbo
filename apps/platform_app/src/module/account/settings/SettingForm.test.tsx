import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DisplayErrorMsgs, EmailErrorMsgs, PasswordErrorMsgs } from '@/shared/utils/helpers';
import SettingForm from './SettingForm';

function renderSettingPage() {
  render(<SettingForm />);
}

describe('setting', () => {
  // TODO：need a happy path test

  it('should show a required field warning for each empty input field', async () => {
    renderSettingPage();
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);
    expect(await screen.findByText(DisplayErrorMsgs.Required)).toBeVisible();
    expect(await screen.findByText(EmailErrorMsgs.Required)).toBeVisible();
  });

  it('should show an minLength error when display name is too short', async () => {
    renderSettingPage();
    const displayNameInput = screen.getByPlaceholderText(/display name/i);
    await userEvent.type(displayNameInput, 'a');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);
    expect(await screen.findByText(DisplayErrorMsgs.MinLength)).toBeVisible();
  });

  it('should show an maxLength error when display name is too long', async () => {
    renderSettingPage();
    const displayNameInput = screen.getByPlaceholderText(/display name/i);
    await userEvent.type(displayNameInput, 'seihuangabcfromchinashanghai');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);
    expect(await screen.findByText(DisplayErrorMsgs.MaxLength)).toBeVisible();
  });

  it('should show invalid field errors for each invalid input field', async () => {
    renderSettingPage();
    const displayNameInput = screen.getByPlaceholderText(/display name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    await userEvent.type(displayNameInput, 'asd!');
    await userEvent.type(emailInput, 'a');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);
    expect(await screen.findByText(EmailErrorMsgs.Invalid)).toBeVisible();
    expect(await screen.findByText(DisplayErrorMsgs.Invalid)).toBeVisible();
  });
});
