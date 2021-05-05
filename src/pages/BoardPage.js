import React, { useEffect, useState } from 'react';
import PlusCircle from '../assets/PlusCircle.png';
import EditCard from '../assets/editTask.png';
import { GroupTaskButton } from '../components/Button';
import { useDispatch, useSelector } from "react-redux";
import { getItems, getTodos } from '../redux/actions/BoardActions';
import Board from '../components/Board';
import Card from '../components/Card';
import DropDown from '../components/DropDown';
import { DeleteModal, TaskModal } from '../components/Modal';

const BoardPage = (props) => {
    const [dropDown, setDropDown] = useState(false)
    const { todos, items } = useSelector((state) => state.board);
    const dispatch = useDispatch();

    useEffect((id) => {
        dispatch(getTodos())
        if(todos) {
            dispatch(getItems(todos.map(item => item.id)))
        }
    }, [dispatch])

    const handleDropdown = () => {
        setDropDown(!dropDown)
    }

    console.log("result", items)
    console.log("result", todos)

    return (
        <div className='board-page'>
            <h3>Product Roadmap</h3>
            <div className='todo-list-container'>
                {todos !== null && todos.map((item, id) => (
                    <div className={`todo-list-item${id}`} key={id}>
                        <GroupTaskButton buttonName={item.title} />
                        <p>{item.description}</p>
                        <Board 
                            className={`board${id}`}
                            id={item.id}
                        >
                            <Card
                                id={id} 
                                boardClassName='card'
                                draggable='true'
                            >
                                <div className='card-item' key={id}>
                                    <p>{item.title}</p>
                                    <div className='card-detail' key={id}>
                                        <p>progress bar</p>
                                        {/* <img src={EditCard} alt='' className='dropdown' /> */}
                                        <DropDown 
                                            dropDownImg={EditCard}
                                            itemThree='Edit'
                                            itemFour='Delete'
                                            onClick={handleDropdown}
                                            className={dropDown ? 'dropdown-click' : 'dropdown'}
                                            key={id}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </Board>
                        <div className='new-task'>
                            <img src={PlusCircle} alt='' />
                            <p>New Task</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* modal */}
            <DeleteModal 
                modalTitle='Delete Task'
                firstText='Are you sure want to delete this task?'
                secondText="Your action can't be reverted"
            />
            <TaskModal
                modalTitle='Create Task'
                handleSubmit={() => console.log('submit')}
                taskName='Task Name'
                handleChange={() => console.log('change')}
                progress='Progress'
                handleCancel={() => console.log('cancel')}
                handleDone={() => console.log('done')}
                cancelText='Cancel'
                doneText='Create'
            />
        </div>
    )
}

export default BoardPage;
