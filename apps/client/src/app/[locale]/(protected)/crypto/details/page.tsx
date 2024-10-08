import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center antialiased">
      <h1 className="mb-4 text-3xl">
        Please select a coin to view its details.
      </h1>
      <Link
        href={`/crypto/details/ETHUSDT/`}
        className="text-2xl text-blue-300 hover:cursor-pointer hover:text-blue-600"
      >
        Ethereum
      </Link>
      <Link
        href={`/crypto/details/BTCUSDT/`}
        className="text-2xl text-blue-300 hover:cursor-pointer hover:text-blue-600"
      >
        Bitcoin
      </Link>
    </main>
  );
}
