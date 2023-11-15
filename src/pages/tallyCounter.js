import React, { Fragment, useState } from 'react';
import "./tallyCounter.css";

import InputBox from '../components/input/input';
import ActionButton from '../components/buttons/actionButton';

const TallyCounter = () => {
    const [input, setinput] = useState('0');
    const [title, setTitle] = useState("");

    const onResetHandler = () => {
        setinput('0'); // Reset input to '0'
    }
const nameResetHandler=(changedName)=>{
    setTitle(changedName)
}

    return (
        <Fragment>
            <div className='Box'>

                <InputBox />
                <div className='buttons' style={{marginTop:-7}}>
     
                    <button className='addCalButton' style={{marginTop:-30}}>Add another calculator</button>
                    </div>
            </div>
        </Fragment>
    );
}

export default TallyCounter;
