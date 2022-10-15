import { ChangeEvent, useState } from 'react';

export const useField = (fields: Fields, options?: Options) => {
    const [formValues, setFormValues] = useState(fields);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const reset = () => setFormValues(fields);

    const isValid = (nameField: string): boolean => {
        const valid = options?.validators.filter(
            val => val.field === nameField
        )[0];

        return valid?.validator(formValues[nameField]) || true;
    };

    return {
        values: formValues,
        handleInputChange,
        reset,
        isValid,
    };
};

export type Field = string | number;

export type Validator = {
    field: string;
    validator: (field: Field) => boolean;
};
export interface Fields {
    [key: string]: Field;
}
export interface Options {
    validators: Validator[];
}
