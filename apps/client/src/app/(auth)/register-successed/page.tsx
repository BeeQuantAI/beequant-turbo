import { AuthRoute } from "@src/module/auth";
import { Successed } from "@src/module/common";

export const metadata = AuthRoute.RegisterSuccessed.Metadata;

export default function Page() {
  return (
    <Successed
      title="Congratulations !"
      message="Your registration is successful"
    />
  );
}
