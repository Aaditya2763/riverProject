import React, { useState } from 'react';
import classes from './input.module.css';
import ActionButton from '../buttons/actionButton';
import Title from '../title/title';

const InputBox = (props) => {
    const [input, setinput] = useState(null);
    const [placeholder, setPlaceholder] = useState('0');
    const [title, settitle] = useState("Tally counter");
    const [type, settype] = useState("number");

    const onChangeHandler = (e) => {
        setinput(e.target.value);
    };

    const onResetHandler = () => {
setPlaceholder('0')
        setinput(0); 
        // Reset input to '0' as a string
        console.log("Reset clicked");
        console.log(input);
    };

    const increamentHandler = () => {
        setinput((prevInput) => {
            const data = prevInput + 1;
            return data;
        });
    };

    const decreamentHandler = () => {
        setinput((prevInput) => {
            if (prevInput > 0) {
                const data = prevInput - 1;
                return data;
            }
            return prevInput;
        });
    };

    const nameChangeHandler = (e) => {
        setPlaceholder("enter title");
        settype("text");
     
        if (e.key === "Enter") {
            // Ensure the input length condition is met before updating the title
            if (input.trim().length >= 3) {
                settitle(input.trim());
        
               
            }
            
        }
    };

    return (
        <div className={classes.InputBoxContainer}>
            <Title title={title}/>
            <input
                placeholder={placeholder}
                className={classes.InputBox}
                type={type}
                onChange={onChangeHandler}
                onKeyPress={nameChangeHandler}
                value={input}
            />
            <div className='buttons'>
                <ActionButton increamentHandler={increamentHandler} decreamentHandler={decreamentHandler} />
                <button className={classes.resetButton} onClick={onResetHandler}>
                    Reset
                </button>
                <button className='titlereplaceButton' onClick={nameChangeHandler}>
                    Change calculator Name
                </button>
            </div>
        </div>
    );
};

export default InputBox;
