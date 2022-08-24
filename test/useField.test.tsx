import { renderHook, act } from '@testing-library/react-hooks';
import { useField, Fields } from '../src';
import { ChangeEvent } from 'react';

describe('Tests about useField', () => {
    const initialValues: Fields = {
        name: 'Test',
        email: 'test@example.com',
        description: 'This is a test',
    };

    it('Should return the initialValues', () => {
        const { result } = renderHook(() => useField(initialValues));
        expect(result.current.values).toEqual(initialValues);
    });

    it('Should do the change', () => {
        const { result } = renderHook(() => useField(initialValues));
        const { handleInputChange } = result.current;

        const event = {
            target: {
                name: 'second',
                value: 'this is the change',
            },
        };

        const resultUpdate = {
            ...initialValues,
            second: 'this is the change',
        };

        act(() => handleInputChange(event as ChangeEvent<HTMLInputElement>));

        expect(result.current.values).toEqual(resultUpdate);
    });

    it('Should do the change and reset the values to the initial values', () => {
        const { result } = renderHook(() => useField(initialValues));
        const { handleInputChange, reset } = result.current;

        const event = {
            target: {
                name: 'Test',
                value: 'this is the change 2',
            },
        };

        const resultUpdate = {
            ...initialValues,
            Test: 'this is the change 2',
        };

        act(() => handleInputChange(event as ChangeEvent<HTMLInputElement>));

        expect(result.current.values).toEqual(resultUpdate);

        act(() => reset());

        expect(result.current.values).toEqual(initialValues);
    });
});
