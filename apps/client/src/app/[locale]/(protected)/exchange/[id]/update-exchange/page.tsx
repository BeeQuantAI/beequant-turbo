import { UpdateExchangePage } from "@src/module/exchange/components/update-exchange-page";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page(props: PageProps) {
  const { id } = props.params;
  return <UpdateExchangePage exchangeKeyId={id} />;
}
