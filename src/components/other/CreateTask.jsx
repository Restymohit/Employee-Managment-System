import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import NewTask from '../TaskList/NewTask';


const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [newTask, setNewTask] = useState({});
    const submitHandler = (e) => {
        e.preventDefault();
        //setNewTask({ title, description, date, category, active: false, newTask: true, completed: false, failed: false });
        const newTask = {
            title,
            description,
            date,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        const data = userData
        data.forEach((e) => {
            if (e.firstname === assignTo) {
                e.tasks.push(newTask);
                e.taskNumbers.newTask = e.taskNumbers.newTask + 1;
            }
        })
        setUserData(data);
        console.log(data);
        setTitle('')
        setDescription('')
        setDate('')
        setAssignTo('')
        setCategory('')
    }


    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e);
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            type='text' placeholder='Make Ui' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        ></input>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            type='date' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        ></input>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value);
                            }}
                            type='text' placeholder='Employee name:' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        ></input>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                            type='text' placeholder='design dev etc.' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        ></input>
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5' >Description</h3>
                    <textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        name="" id="" cols="30" rows="10" className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    ></textarea>
                    <button type='submit' className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
