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
            <th key={index} className="ml-2 w-[40%] text-start capitalize">
              {header}
            </th>
          ) : (
            <th key={index} className="w-full text-start capitalize">
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
  const colors = ["#f6a81e", "#5e62e6", "#3ddb42", "#21cbe6", "#6d6a6a"];

  return (
    <tbody className="flex flex-col">
      {data.map((item, index) => (
        <tr
          key={index}
          className="dark:odd:bg-primary-700 odd:bg-primary-100 flex py-2"
        >
          {keys.map((key, i) =>
            i === 0 ? (
              <td
                key={i}
                className="ml-2 w-[40%] font-bold"
                style={{ color: colors[index] }}
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
