import { useRouter } from "@src/configs/navigation";
interface TableRowProps<T> {
  data: T[];
  keys: (keyof T)[];
}

interface TableHeaderProps<T> {
  headers: string[];
}

export function RenderTableHeader<T extends Record<string, any>>({
  headers,
}: TableHeaderProps<T>) {
  return (
    <thead>
      <tr className="flex">
        {headers.map((header, index) =>
          index === 0 ? (
            <th key={index} className="w-[40%] capitalize">
              {header}
            </th>
          ) : (
            <th key={index} className="w-full capitalize">
              {header}
            </th>
          ),
        )}
      </tr>
    </thead>
  );
}

export function RenderTableContent<T extends Record<string, any>>({
  data,
  keys,
}: TableRowProps<T>) {
  const router = useRouter();
  const colors = ["#f6a81e", "#5e62e6", "#3ddb42", "#21cbe6", "#6d6a6a"];

  return (
    <tbody
      className="flex cursor-pointer flex-col text-center"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        const symbol = target
          .closest("tr")
          ?.querySelector("#symbol")?.textContent;
        router.push(`/crypto/details/${symbol}`);
      }}
    >
      {data.map((item, index) => (
        <tr
          key={index}
          className="dark:odd:bg-primary-700 odd:bg-primary-100 flex py-2"
        >
          {keys.map((key, i) =>
            i === 0 ? (
              <td
                key={i}
                className="w-[40%] font-bold"
                style={{ color: colors[index] }}
                id="symbol"
              >
                {item[key]}
              </td>
            ) : (
              <td key={i} className="w-full">
                {item[key]}
              </td>
            ),
          )}
        </tr>
      ))}
    </tbody>
  );
}
