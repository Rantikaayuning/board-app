import React from 'react';

const DropDown = (props) => {
    const {
        dropDownImg, 
        itemOne, 
        itemTwo, 
        itemThree, 
        itemFour, 
        onClick, 
        className,
        itemOneClick,
        itemTwoClick,
        itemThreeClick,
        itemFourClick
    } = props;
    return (
        <div class={className}>
            <img src={dropDownImg} alt='' className='dropbtn' onClick={onClick}/>
            <div class="dropdown-content">
            <p onClick={itemOneClick}>{itemOne}</p>
            <p onClick={itemTwoClick}>{itemTwo}</p>
            <p onClick={itemThreeClick}>{itemThree}</p>
            <p onClick={itemFourClick}>{itemFour}</p>
            </div>
        </div>
    )
}

export default DropDown;
