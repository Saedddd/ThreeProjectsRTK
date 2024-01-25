export interface ITask {
    id: string;
    text: string;
}

export interface ITodoList{
    task: ITask[]
}