import { exchangeRoutes } from "@src/module/exchange";
import { UpdateExchangePage } from "@src/module/exchange/components/update-exchange-page";

interface PageProps {
  params: {
    id: string;
  };
}

export const metadata = exchangeRoutes.updateExchange.Metadata;

export default function Page(props: PageProps) {
  const { id } = props.params;
  return <UpdateExchangePage exchangeKeyId={id} />;
}
