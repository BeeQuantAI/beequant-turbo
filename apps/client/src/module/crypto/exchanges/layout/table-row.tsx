import { useRouter } from "@src/configs/navigation";
import { symbol } from "zod";

interface TableRowProps<T> {
  data: T[];
  keys: (keyof T)[];
}

export function TableRow<T extends Record<string, any>>({
  data,
  keys,
}: TableRowProps<T>) {
  const router = useRouter();
  return (
    <tbody
      className="cursor-pointer"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        const name = target
          .closest("tr")
          ?.querySelector("#symbol")?.textContent;
        const symbol = getSymbol(name!);
        router.push(`/crypto/details/${symbol}USDT`);
      }}
    >
      {data.map((item, index) =>
        index !== data.length - 1 ? (
          <tr key={index}>
            <td className="border-b-[1px] py-4 text-center">{index + 1}</td>
            {keys.map((key, index) =>
              index === 0 ? (
                <td
                  key={index}
                  className="border-b-[1px] py-4 text-center"
                  id="symbol"
                >
                  {item[key]}
                </td>
              ) : (
                <td key={index} className="border-b-[1px] py-4 text-center">
                  {item[key]}
                </td>
              ),
            )}
          </tr>
        ) : (
          <tr key={index}>
            <td className="py-4 text-center">{index + 1}</td>
            {keys.map((key, index) =>
              index === 0 ? (
                <td key={index} className="py-4 text-center" id="symbol">
                  {item[key]}
                </td>
              ) : (
                <td key={index} className="py-4 text-center">
                  {item[key]}
                </td>
              ),
            )}
          </tr>
        ),
      )}
    </tbody>
  );
}

const COIN_LIST = [
  { symbol: "BTC", fullName: "Bitcoin" },
  { symbol: "ETH", fullName: "Ethereum" },
  { symbol: "BNB", fullName: "BNB" },
  { symbol: "SOL", fullName: "Solana" },
  { symbol: "USDC", fullName: "USD Coin" },
  { symbol: "XRP", fullName: "XRP" },
  { symbol: "DOGE", fullName: "Dogecoin" },
  { symbol: "TON", fullName: "Toncoin" },
  { symbol: "ADA", fullName: "Cardano" },
  { symbol: "SHIB", fullName: "Shiba Inu" },
  { symbol: "AVAX", fullName: "Avalanche" },
  { symbol: "TRX", fullName: "Tron" },
  { symbol: "DOT", fullName: "Polkadot" },
  { symbol: "BCH", fullName: "Bitcoin cash" },
  { symbol: "LINK", fullName: "Chainlink" },
  { symbol: "NEAR", fullName: "NEAR Protocol" },
  { symbol: "MATIC", fullName: "Polygon" },
  {
    symbol: "ICP",
    fullName: "Internet Computer",
  },
  { symbol: "LTC", fullName: "Litecoin" },
  { symbol: "DAI", fullName: "Dai" },
];

function getSymbol(fullName: string) {
  return COIN_LIST.find((coin) => coin.fullName === fullName)?.symbol;
}
