import { ChangeEvent, useState } from 'react';

export interface Fields {
    [key: string]: string | number;
}

export const useField = (fields: Fields) => {
    const [formValues, setFormValues] = useState(fields);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const reset = () => setFormValues(fields);

    return {
        values: formValues,
        handleInputChange,
        reset,
    };
};
