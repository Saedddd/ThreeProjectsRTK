import TotalComletedItems from "@/entities/TotalComletedItems";
import AddTodoForm from "@/features/AddTodoForm";
import ToDoList from "@/widgets/ToDoList";
import React from "react";

const page = () => {
  return (
    <main className="h-screen text-center flex justify-center  bg-black text-white">
      <div className="py-[10rem] items-center">
        <h1 className="mb-12">Todo List</h1>

        <div className="">
          <AddTodoForm />
          <ToDoList />
          <TotalComletedItems />
        </div>
      </div>
    </main>
  );
};

export default page;
