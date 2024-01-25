import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-black min-h-screen flex-col items-center justify-between p-24">
        <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
              Click me to show/hide content
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
        </div>


        <div className="">
        <label className="swap swap-flip  text-9xl">
  
          <input type="checkbox" />
          
          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>

         
        </label>

        </div>

       
    </main>
  );
}
