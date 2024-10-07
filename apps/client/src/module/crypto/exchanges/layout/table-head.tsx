interface TableHeadProps<T extends Array<any>> {
  tableHeaders: T;
}

export function TableHead<T extends Array<any>>({
  tableHeaders,
}: TableHeadProps<T>) {
  return (
    <thead>
      <tr>
        {tableHeaders.map((header, index) => {
          return (
            <th key={index} className="border-b-2 py-[10px] capitalize">
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
