import ITodoItem from "@/entities/TodoItem/types";

interface Todo extends ITodoItem {}

export default interface TodoState {
  list: Todo[];
}
