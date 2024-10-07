export const displayNamePatten = /^[a-zA-Z0-9-_ ]+$/;
export const emailPattern =
  /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
export const urlPattern =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/;
export const passwordPatten =
  /^(?=.*[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_+=\\~<>:;”’(),./[\]_`|{}-])[A-Za-z0-9#?!@$%^&*_+=\\~<>:;”’(),./[\]_`|{}-]{8,32}$/;

export enum DisplayErrorMsgs {
  Required = "Display name is required",
  MinLength = "Display name must be at least 4 characters",
  MaxLength = "Display name must be at most 15 characters",
  Invalid = "Display name must contain only letters, numbers, hyphens and underscores",
}

export enum EmailErrorMsgs {
  Required = "Email is required",
  Invalid = "Invalid email address",
}

export enum PasswordErrorMsgs {
  Required = "Password is required",
  MinLength = "Password must be at least 8 characters",
  MaxLength = "Password must be at most 32 characters",
  Invalid = "Password must contain at least one letter, one number and one special character",
}

export enum RefErrorMsgs {
  Required = "Referral code is required",
}
