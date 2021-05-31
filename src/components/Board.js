import React from 'react';

const Board = (props) => {
    const {className, id, children, boardClassName, idClassName, groupButton, description, imgBoard} = props;
    // dnd
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    // console.log("result", items)

    return (
        <div 
            id={id}
            className={className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            <div 
                className={boardClassName}
            >
            <div className='todo-list-container'>
                    <div className={idClassName}>
                        {groupButton}
                        <p>{description}</p>
                {children}
                <div className='new-task'>
                            <img src={imgBoard} alt='' />
                            <p>New Task</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Board;
