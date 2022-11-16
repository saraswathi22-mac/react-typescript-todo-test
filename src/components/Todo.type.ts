export interface ITodo {
    id: number,
    task: string
}

export const dummyTodoList: ITodo[] = [
    {
        id: 1,
        task: "Task 1"
    }
]

export enum PageEnum {
    list,
    add,
}