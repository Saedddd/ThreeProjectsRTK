"use client"


import { increment, decrement, reset } from "@/features/counterSlice/ui/counterSlice";
import { useDispatch, useSelector } from "react-redux";



const Counter = () => {
  const counter = useSelector((state : any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
        <button onClick={() => dispatch(increment())} className="btn btn-outline btn-primary">
          Increment
        </button>
        <span>{counter}</span>
        <button onClick={()=> dispatch(decrement())}  className="btn btn-outline btn-primary">
          Decrement
        </button>
        <button onClick={()=> dispatch(reset())} className="btn btn-outline btn-primary">
          Reset
        </button>
      </div>

    </main>
  );
};

export default Counter;