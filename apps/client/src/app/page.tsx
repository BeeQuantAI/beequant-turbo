export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      <span>
        {
          "If you are seeing this, it most likely means you are authenticated. (having a \"token\" cookie, we don't check if it's valid btw)."
        }
      </span>
      <span>You probably want to go to the /dashboard page at this stage.</span>
    </main>
  );
}
