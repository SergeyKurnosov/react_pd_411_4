import './Form.css';
import { useState } from 'react';

function Form(props){

    let[value, setValue] = useState(
        ''
    );
    let {addTask} = props;
    let sendSubmit = e =>
    {
        e.preventDefault();
        addTask(value);
        setValue('');
    }
    return(
        // <form onSubmit={sendSubmit}>
        <form>
            <div className='input'>
                <input type='text' className='input' value={value} onChange={e => setValue(e.target.value)}></input>
                <button onClick={()=> setValue('')}>X</button>
            </div>
            {/* <input type='submit'></input> */}
            <button onClick={sendSubmit}>Submit</button>
        </form>
    )
}
export default Form;
