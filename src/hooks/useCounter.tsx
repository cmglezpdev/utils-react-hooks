import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const handleIncrease = (value = 1) => setCounter(counter + value);
    const handleDecrease = (value = 1) => setCounter(counter - value);
    const reset = (value = initialValue) => setCounter(value);

    return {
        counter,
        handleIncrease,
        handleDecrease,
        reset,
    };
};
