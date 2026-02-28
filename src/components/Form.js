import './Form.css';
import { useRef, useState } from 'react';

function Form(props) {
    
    const inputRef = useRef(null);

    let [value, setValue] = useState(
        ''
    );
    let { addTask } = props;
    let sendSubmit = e => {
        e.preventDefault();
        addTask(inputRef.current.value);
        setValue('');
    }
    return (
        // <form onSubmit={sendSubmit}>

        <form>
            <div className='input'>
                <input type='text' name='new_task' className='input' id='new_task' ref={inputRef} ></input>
                <button type='reset'>X</button>
                {/* <button onClick={()=> setValue('')}>X</button> */}
            </div>

            {/* <input type='submit'></input> */}
            <button onClick={sendSubmit}>Submit</button>
        </form>
    )
}
export default Form;
