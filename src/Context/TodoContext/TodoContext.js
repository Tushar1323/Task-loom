import { createContext, useContext } from "react"

// export const TodoContext = createContext({
//     todos: [
//         {
//             id: 1,
//             todo: "Get the placement untill 2025",
//             checked: false
//         },
//         {
//             id: 2,
//             todo: "mprove thinking",
//             checked: false
//         },
//         {
//             id: 3,
//             todo: "Be happy",
//             checked: false
//         },{},{},...
//     ],
//     addTodo: (todoMsg) => {},
//     updateTodo: (id, todoMsg) => {},
//     deleteTodo: (id) => {},
//     toggleCompleted: (id) => {}
// })

export const TodoContext = createContext()
export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
