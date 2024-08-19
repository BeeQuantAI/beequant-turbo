import { Button } from "@src/module/common";
import { AuthRoute } from "./route";

export function RegisterSuccessed() {
  return (
    <div className="dark:bg-primary-600 bg-primary-50 flex max-w-[520px] flex-col gap-5 px-[60px] py-[50px]">
      <div className="mb-5">
        <img
          src="/image/success.png"
          alt="success pic"
          width={400}
          height={380.5}
        />
      </div>

      <div className="border-accent-400 dark:text-primary-50 flex flex-col border-l-4 px-3 text-[24px]">
        <span className="text-accent-400 font-bold">Congratulations !</span>
        <span>Your registration is successful</span>
      </div>

      <div className="mb-5 mt-3">
        <AuthRoute.Login.Link>
          <Button variant="outline">Back to Login</Button>
        </AuthRoute.Login.Link>
      </div>
    </div>
  );
}
