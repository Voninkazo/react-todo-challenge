import { useState } from 'react';

function useTodo() {
    const [isToggle, setIsToggle] = useState(false);

    function toggle() {
        setIsToggle(prev => !prev);
        console.log("toggle")
    }
    return [isToggle, toggle];
}

export default useTodo;