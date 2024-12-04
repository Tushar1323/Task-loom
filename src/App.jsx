import { useState, useEffect, useId } from 'react'
import { TodoProvider } from './Context/TodoContext'
// import './App.css'
import { TodoForm, TodoItem } from './components/Todo'
import { DarkProvider } from "./Context/ThemeContext/Mode"

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


function App() {
  // const baseId = useId(); // Generates a stable base ID for this component instance
  const [todos, setTodos] = useState([])


  // todoMsg={
  //   todo:"Message",
  //   completed:false;
  // }

  const addTodo = (todoMsg) => {
    // setTodos((prev) => [...prev, { id: Date.now(), ...todoMsg }])
    setTodos((prev) => [...prev,
    {
      id: Date.now(),
      // id: `${baseId}-${prev.length}`, // Combines useId with an index or count for uniqueness
      ...todoMsg
    }])
    // setTodos((prev) => [...prev, { id: Date.now(), text: todoMsg, completed: false }]) // ?
  }


  const updateTodo = (id, todoMsg) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ?
      // { id: prevTodo.id, ...todoMsg }
      { ...prevTodo, ...todoMsg } // Spread `prevTodo` first, then `todoMsg` to override specific fields
      : prevTodo)))
  }


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }


  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("key"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(todos))
  }, [todos])


  // Dark mode 
  const [img, setImg] = useState("./src/Images/blue.jpg")
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setImg("./src/Images/blue.jpg")
    setThemeMode("light")

  }
  const darkTheme = () => {
    setImg("./src/Images/dark.png")
    setThemeMode("dark")

  }

  // actual change in theme - need to learn in depth
  useEffect(() => {
    const select = document.querySelector('html');
    select.classList.remove("light", "dark")
    select.classList.add(themeMode)
  }, [themeMode])



  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <DarkProvider value={{ img, darkTheme, lightTheme, themeMode, setThemeMode}}>

        <div className="main min-h-screen py-8"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'

          }}
        >
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((prevTodo) => (
                <div key={prevTodo.id}
                  className='w-full'
                >
                  <TodoItem todoObj={prevTodo} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </DarkProvider>
    </TodoProvider>
  )
}

export default App