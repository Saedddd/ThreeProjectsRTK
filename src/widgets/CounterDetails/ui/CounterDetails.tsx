"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "@/features/counterSlice/slice/counterSlice";
import Button from "@/shared/ui/Button";

const CounterDetails = () => {
  const counter = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <main className="w-full h-screen bg-black text-white">
        <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
          <Button
            type="button"
            onClick={() => dispatch(increment())}
            className="btn btn-outline btn-primary"
          >
            Increment
          </Button>
          <span>{counter}</span>
          <Button
            type="button"
            onClick={() => dispatch(decrement())}
            className="btn btn-outline btn-primary"
          >
            Decrement
          </Button>
          <Button
            type="button"
            onClick={() => dispatch(reset())}
            className="btn btn-outline btn-primary"
          >
            Reset
          </Button>
        </div>
      </main>
    </>
  );
};

export default CounterDetails;
