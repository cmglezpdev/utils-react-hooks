import { useState } from 'react';

type returnToogle = [boolean, () => void];

export const useToggle = (initialState: boolean = false): returnToogle => {
    const [state, setState] = useState(initialState);

    const toogle = () => setState(state => !state);
    return [state, toogle];
};
