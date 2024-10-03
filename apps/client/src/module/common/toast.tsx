import toast from "react-hot-toast";
export const succeedNotify = (message: string) =>
  toast.custom(
    (t) => (
      <div className="text-md rounded-lg bg-[#4CE1B6] px-8 py-4 text-[#16423C]">
        {message}
      </div>
    ),
    {
      duration: 3000,
      position: "top-right",
    },
  );
export const errorNotify = (message: string) =>
  toast.custom(
    (t) => (
      <div className="bg-error-300 text-error-900 text-error text-md rounded-lg px-8 py-4">
        {message}
      </div>
    ),
    {
      duration: 3000,
      position: "top-right",
    },
  );
