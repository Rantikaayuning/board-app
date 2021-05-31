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
    const [deleteModal, setDeleteModal] = useState(false)
    const [createTaskModal, setCreateTaskModal] = useState(false)
    const [deleteClass, setDeleteClass] = useState('modal')
    const [editClass, setEditClass] = useState('modal')

    const { todos, items } = useSelector((state) => state.board);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos())
        if(todos) {
            dispatch(getItems(todos.map(item => item.id)))
        }
    }, [dispatch, todos])

    const handleDropdown = () => {
        setDropDown(!dropDown)
    }

    const handleDeleteModal = () => {
        setDeleteModal(true)
        setDeleteClass('modal-open')
    }

    const handleEditModal = () => {
        setDeleteModal(true)
        setDeleteClass('modal-open')
    }

    const handleCreateTaskModal = () => {
        setCreateTaskModal(true)
    }

    // console.log("result", items)
    // console.log("result", todos)

    return (
        <div className='board-page'>
            <h3>Product Roadmap</h3>
            <div className='board-box'>
            {todos !== null && todos.map((item, id) => (
                <Board 
                    className={`board ${id}`}
                    id={item.id}
                    idClassname={`todo-list-item${id}`}
                    groupButton={<GroupTaskButton buttonName={item.title} />}
                    description={item.description}
                    imgBoard={PlusCircle}
                    boardContentClass='todo-list-container'
                    newTaskClass='boardContentClass'
                >
                    <Card
                        id={id} 
                        boardClassName='card'
                        draggable='true'
                    >
                        <div className='card-item' key={id}>
                            <p>{item.title}</p>
                            <div className='card-detail' key={item.id}>
                                <p>progress bar</p>
                                <DropDown 
                                    dropDownImg={EditCard}
                                    onClick={() => handleDropdown()}
                                    itemThree='Edit'
                                    itemFour='Delete'
                                    itemThreeClick={handleCreateTaskModal}
                                    itemFourClick={handleDeleteModal}
                                    className={dropDown ? 'dropdown-click' : 'dropdown'}
                                    key={id}
                                />
                            </div>
                        </div>
                    </Card>
                </Board>
            ))}
            </div>

            {/* modal */}
            <div className={deleteClass}>
                <DeleteModal 
                modalTitle='Delete Task'
                firstText='Are you sure want to delete this task?'
                secondText="Your action can't be reverted"
                handleCancel={() => setDeleteClass('modal')}
                />
            </div>
            <div className={editClass}>
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
        </div>
    )
}

export default BoardPage;
