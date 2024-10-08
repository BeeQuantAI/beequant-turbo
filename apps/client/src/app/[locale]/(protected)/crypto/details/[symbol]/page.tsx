import { CandleStickWrapper } from '@src/module/crypto/details/CandleStickWrapper';
import { RouteHelper } from '@src/module/crypto/details/RouteHelper';
import { CryptoRoutes } from '@src/module/crypto/route';

export const metadata = CryptoRoutes.Details.Metadata;
export default function Page() {
  return (
    <RouteHelper>
      <CandleStickWrapper />
    </RouteHelper>
  );
}
