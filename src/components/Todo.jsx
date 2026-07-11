import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Items from './Items';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const Todo = () => {

    const inputRef = useRef();

    const [todolist, setTodoList] = useState(localStorage.getItem("todos")?
     JSON.parse(localStorage.getItem("todos")) : []);

    const add = ()=>{
        const inputText = inputRef.current.value.trim();
        
        if (inputText === "") {
            alert("Please fill the box first")
            return null};
        
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }

        setTodoList((prev) => [...prev, newTodo])
        inputRef.current.value = "";

    }

    const deleteTodo = (id)=>{
        setTodoList((prvTodos)=>{
            return prvTodos.filter((todo) => todo.id !== id) 
        })}

    const toggle = (id)=>{
            setTodoList((prvTodos)=> {
                return prvTodos.map((todo) => {
                    if(todo.id === id){
                        return {...todo, isComplete: !todo.isComplete}
                    }
                    return todo;
                })
            })
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todolist))
    }, [todolist])

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md
     flex flex-col p-7 min-h-120 rounded-xl">

        <div className="flex items-center
        ">
            <PlaylistAddIcon style={{color:"black", width:"30px", height:"30px"}} />
            <h1 className="text-2xl 
            font-semibold">To-Do List</h1>
        </div>
 
        <div className='flex items-center my-7 bg-gray-200
        rounded-full'>
            <input 
            ref={inputRef}
            className='bg-transparent border-0 outline-none flex-1 h-12
            pl-6 pr-2 placeholder:text-slate-600'
            type="text" placeholder='Add your task' />
            <button
            onClick={add}
            className='
            border-none
            rounded-full
            bg-orange-600
            w-32
            h-12
            text-white
            text-lg
            font-medium
            cursor-pointer
            '
            > ADD +</button>
        </div>


        {  todolist.map((item, index) => {
            return <Items key={index} text={item.text} id={item.id}
            isComplete={item.isComplete}  deleteTodo={deleteTodo} toggle={toggle} />
        })
        }

    
    </div>
  )
}

export default Todo
