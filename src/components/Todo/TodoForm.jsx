// import React, { useState } from 'react'
// import { useTodo } from '../../Context/TodoContext';
// import useDark from '../../Context/ThemeContext/Mode';


// function TodoForm() {
//     const [todo, setTodo] = useState("") // my message will store at this state
//     const { addTodo } = useTodo()

//     const add = (e) => {
//         e.preventDefault()
//         if (!todo) return;
//         // addTodo({ todo, completed: false }) 
//         addTodo({ todo: todo, completed: false })
//         setTodo("")
//     }


//     // Dark mode ------------------------------------
//     const { img, darkTheme, lightTheme } = useDark()
//     const fun = () => {
//         console.log("Hooooo jaaaa")
//         if (img === "/src/Images/blue.jpg") {
//             darkTheme()
//         } else {
//             lightTheme()
//         }
//     }

//     return (
//         <form onSubmit={add} className="flex">

//             <button onClick={fun} type="button" class="rounded-l-lg px-3 py-1 text-gray-900 bg-white hover:bg-gray-300 border  focus:ring-gray-100 font-medium  text-center inline-flex items-center ">
//                 D & L Mode
//             </button>

//             <input
//                 type="text"
//                 placeholder="Write Todo..."
//                 className="w-full border border-black/10  px-3 outline-none duration-150 bg-white/20 py-1.5"
//                 value={todo}
//                 onChange={(e) => setTodo(e.target.value)}
//             />
//             <button type="submit" class="rounded-r-lg px-3 py-1 text-gray-900 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-yellow-100">Add</button>
//         </form>
//     );
// }

// export default TodoForm;



import React, { useState } from 'react';
import { useTodo } from '../../Context/TodoContext';
import { ToggleButton } from './index.js'; // Import ToggleButton from its file
import '../CssComponents/Add.css'

function TodoForm() {
    const [todo, setTodo] = useState(""); // Input state for the Todo message
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo: todo, completed: false });
        setTodo("");
    };

    return (
        // <form onSubmit={add} className="flex gap-1 items-center ">
        //     <ToggleButton />
        //     <input
        //         type="text"
        //         placeholder="Write Todo..."
        //         className="rounded-full placeholder-white w-full border border-black/10 px-3 outline-none duration-150 bg-white/20 py-1.5"
        //         value={todo}
        //         onChange={(e) => setTodo(e.target.value)}
        //     />
        //     <button type="submit" class="neon-glow-button">
        //         <i class="fas fa-lightbulb"></i> Add
        //     </button>
        // </form>
        <form onSubmit={add} className="flex gap-1 items-center">
            <ToggleButton className="h-10" /> {/* Set consistent height */}
            <input
                type="text"
                placeholder="Write Todo..."
                className="rounded-full placeholder-white w-full border border-black/10 px-3 outline-none duration-150 bg-white/20 py-1.5 h-10"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="neon-glow-button h-10 px-4 flex items-center justify-center">
                <i className="fas fa-lightbulb"></i> Add
            </button>
        </form>

    );
}

export default TodoForm;


