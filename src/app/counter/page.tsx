

const Counter = () => {

  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
        <button  className="btn btn-outline btn-primary">
          Increment
        </button>
        <span>0</span>
        <button  className="btn btn-outline btn-primary">
          Decrement
        </button>
        <button  className="btn btn-outline btn-primary">
          Reset
        </button>
      </div>
    </main>
  );
};

export default Counter;