import { useState } from 'react';

function useTodo(defaultValue = false) {
    const [isToggle, setIsToggle] = useState(defaultValue);

    function toggle() {
        setIsToggle(prev => !prev);
        console.log("toggle")
    }
    return [isToggle, toggle];
}

export default useTodo;