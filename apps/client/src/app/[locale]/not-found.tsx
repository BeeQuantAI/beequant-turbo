import { AuthRoute } from "@src/module/auth";
import { NotFound } from "@src/module/common/not-found-page";

export const metadata = AuthRoute.PageNotFound.Metadata;

export default function Page() {
  return (
    <NotFound message="Ooops! The page you are looking for could not be found" />
  );
}
