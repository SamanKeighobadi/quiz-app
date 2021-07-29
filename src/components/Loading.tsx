import React,{useState} from 'react';
import {FadeLoader} from 'react-spinners'
const Loading = () => {

    const [spinnerColor,] = useState("#00d1fc")

    return (
        <div className='loading'>
            <FadeLoader color={spinnerColor} height={20} width={5} radius={2} margin={2} />
        </div>
    );
};

export default Loading;