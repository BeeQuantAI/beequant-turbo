/* eslint-disable react/react-in-jsx-scope */
type Props = { children: React.ReactNode };
export default function TestComp({ children }: Props) {
  return <div className=" bg-slate-500 text-white">index{children}</div>;
}
