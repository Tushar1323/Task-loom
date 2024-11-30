import React, { useState, useRef, useEffect } from "react";
import { useTodo } from "../../Context/TodoContext";
import "../CssComponents/checkbox.css";

function TodoItem({ todoObj }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todo, setTodo] = useState(todoObj.todo);
    const { updateTodo, deleteTodo, toggleCompleted } = useTodo();
    const textareaRef = useRef(null); // adeed

    const editTodo = () => {
        updateTodo(todoObj.id, { ...todoObj, todo: todo });
        setIsTodoEditable(false);
    };

    const toggleCompletedClicked = () => {
        toggleCompleted(todoObj.id);
    };

    // Adjust the height of the textarea dynamically
    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto"; // Reset height to calculate scroll height
            textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on content
        }
    };

    // Adjust height on initial render and when `todo` changes
    useEffect(() => {
        adjustTextareaHeight();
    }, [todo]);

    return (
        <div
            className={`flex border-black/10 dark:border-white/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm duration-300 
    ${todoObj.completed
                    ? "bg-[#c6e9a7] dark:bg-[#386313]"
                    : // ? "bg-[#72d61be3] dark:bg-[#69a137e9]"
                    "bg-[#ffffff] dark:bg-[#5B5656]"
                }
    text-black dark:text-white`}
        >
            <div className="checkbox-wrapper-19">
                <input
                    type="checkbox"
                    id={`cbtest-${todoObj.id}`}
                    checked={todoObj.completed}
                    onChange={toggleCompletedClicked}
                />
                <label htmlFor={`cbtest-${todoObj.id}`} className="check-box" />
            </div>
            <textarea
                ref={textareaRef}
                className={`dark:text-white border outline-none w-full bg-transparent rounded-lg resize-none overflow-hidden 
        ${isTodoEditable
                        ? "border-black/50 dark:border-white/50 px-2"
                        : "border-transparent"
                    } 
        ${todoObj.completed ? "line-through" : ""}`}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onInput={adjustTextareaHeight}
                readOnly={!isTodoEditable}
            />

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 dark:border-white/10 justify-center items-center
                           bg-gray-50 dark:bg-[#3a3a3a] hover:bg-gray-300 dark:hover:bg-[#525252] shrink-0 disabled:opacity-50
                           disabled:hover:bg-gray-50 dark:disabled:hover:bg-[#3a3a3a]"
                onClick={() => {
                    if (todoObj.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todoObj.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 dark:border-white/10 justify-center items-center
                           bg-gray-50 dark:bg-[#3a3a3a] hover:bg-gray-300 dark:hover:bg-[#525252] shrink-0"
                onClick={() => deleteTodo(todoObj.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
