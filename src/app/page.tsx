import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="flex bg-black min-h-screen flex-col items-center justify-between p-24">
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
            Hello
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">
            World
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </main>
  );
}
