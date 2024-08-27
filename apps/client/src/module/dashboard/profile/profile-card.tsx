"use client";
import { useUser, fetchUserInfo } from "@src/module/auth/user-store";
import { Button, ControlledTextInput } from "@src/module/common";
import { useState } from "react";
import { updateUserProfile } from "./profile-service";
import { useTranslations } from "next-intl";
import { z } from 'zod';
import { displayNamePatten } from "@src/utils/validation-message";


export function ProfileCard() {
  const t = useTranslations();
  const displayNameSchema = z
    .string()
    .min(4, { message: t("Profile.invalid-input") })
    .max(15, { message: t("Profile.invalid-input") })
    .regex(displayNamePatten, { message: t("Profile.invalid-input") })

  const validateDisplayName = (displayName: string): string => {
    const result = displayNameSchema.safeParse(displayName);
    if (!result.success) {
      return result.error.errors[0].message;
    }
    return '';
  };
  const user = useUser((s) => s.user);
  const [msg, setMsg] = useState('');
  const handleUpdateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const displayName = formData.get('displayName') as string;
    const error = validateDisplayName(displayName);
    if (error) {
      setMsg(error);
      return;
    }
    setMsg('');
    try {
      const result = await updateUserProfile({ id: user!.id, displayName });
      if ('success' in result) {
        setMsg('')
        await fetchUserInfo();
      } else {
        setMsg(result.error&& t("Profile.invalid-input") || t("Profile.update-profile-error"));
      }
    } catch (error) {
      setMsg(t("Profile.unknown-error"));
    }
  };

  return (
    <div className="bg-primary-50 dark:bg-primary-900 flex flex-col items-center gap-8 rounded-md p-4 shadow-md md:p-8">
      <div className="flex flex-col gap-0 float-left w-full">
        <h3 className="font-bold">{t("Profile.header")}</h3>
        <p className="text-primary-700 dark:text-primary-100 opacity-70">{t("Profile.sub-header")}</p>
      </div>
      {!user && "Loading..."}
      {!!user && (
        <form className="flex flex-col gap-y-5 w-full" onSubmit={handleUpdateSubmit}>
          <div className="flex flex-row gap-20">
            <label className="w-20 flex-shrink-0">{t("Profile.displayName")}</label>
            <input name="displayName" type="text" className="w-full px-2 py-1 border bg-transparent text-base dark:border-primary-600" defaultValue={user.displayName} />
          </div>
          <div className="flex flex-row gap-20">
            <label className="w-20 flex-shrink-0">{t("Profile.email")}</label>
            <p className="w-full px-2 py-1 border dark:border-primary-600 bg-primary-100 dark:bg-primary-800 text-base">{user?.email}</p>
          </div>
          <div className="flex flex-row gap-20">
            <label className="w-20 flex-shrink-0">{t("Profile.reference")}</label>
            <p className="w-full px-2 py-1 border dark:border-primary-600 bg-primary-100 dark:bg-primary-800 text-base">{user?.ref}</p>
          </div>
          <div className="flex flex-row gap-20">
            <div className="w-20 flex-shrink-0" />
              <Button type="submit">
                {t("Profile.submit")}
              </Button>
          </div>

        </form>
      )}
      {msg && <div className="bg-error-300 text-error-900 text-error rounded-md px-5 py-3 text-sm">{msg}</div>}
    </div>
  );
}
