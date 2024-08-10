import { Profile } from "@src/module/dashboard";

export default function Page() {
  return (
    <div>
      Yeaaahh dashboard
      <Profile />
      <button id="showDialogBtn">Show a dialog</button>
      <dialog id="favDialog">
        <form method="dialog">
          <p>The background shown outside of this dialog is a backdrop.</p>
          <button id="confirmBtn">Close the dialog</button>
        </form>
      </dialog>
    </div>
  );
}
