import { useTheme } from "@src/module/system";
export function LoadingChart() {
    const { theme } = useTheme();
    const backgroundColor = theme === "dark" ? "bg-black" : "bg-white";
    return (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${backgroundColor} bg-opacity-50`}
        >
          <div
            className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-blue-500 border-t-transparent"
            role="status"
          ></div>
        </div>
    );
}