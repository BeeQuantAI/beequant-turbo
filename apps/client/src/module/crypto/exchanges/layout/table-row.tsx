import { useRouter } from "@src/configs/navigation";

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
        const symbol = target
          .closest("tr")
          ?.querySelector("#symbol")?.textContent;
        router.push(`/crypto/details/${symbol}`);
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
