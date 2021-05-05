import React from 'react';
import WarnLogo from '../assets/ExclamationCircle.png';

export const DeleteModal = ({modalTitle, firstText, secondText, handleCancel, handleDelete}) => {
    return (
        <div className='delete-modal'>
            <img src={WarnLogo} alt='' />
            <div>
                <p>{modalTitle}</p>
                <p>{firstText}</p>
                <p>{secondText}</p>
                <div className='button-section'>
                    <button onClick={handleCancel} className='cancel'>Cancel</button>
                    <button onClick={handleDelete} className='delete'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export const TaskModal = ({modalTitle, handleSubmit, taskName, handleChange, progress, handleCancel, handleDone, cancelText, doneText}) => {
    return (
        <div className='task-modal'>
            <p>{modalTitle}</p>
            <form onSubmit={handleSubmit}>
                <p>
                    <label for='taskName'>{taskName}</label><br/>
                    <input
                        type="text"
                        placeholder="example: Build rocket to Mars"
                        name='taskName'
                        onChange={(e) => handleChange(e)}
                    />
                </p>
                <p>    
                    <label for='progress'>{progress}</label><br/>
                    <input
                        type="text"
                        placeholder="example: Build rocket to Mars"
                        name='progress'
                        onChange={(e) => handleChange(e)}
                    />
                </p>
                <div className='button'>
                    <button onClick={handleCancel} className='cancel'>{cancelText}</button>
                    <button onClick={handleDone} className='delete'>{doneText}</button>
                </div>
            </form>
        </div>
    )
}
