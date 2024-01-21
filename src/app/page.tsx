import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <label className="swap swap-flip mt-[150px] text-9xl">
  
          <input type="checkbox" />
          
          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>
        </label>
    </main>
  );
}
