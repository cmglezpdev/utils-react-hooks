import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../src';

describe('Test about useCounter hook', () => {
    it('should return the default value', () => {
        const { result } = renderHook(() => useCounter());
        const { counter } = result.current;

        expect(counter).toBe(0);
    });

    it('should increase and decrease 5 to the couter', () => {
        const { result } = renderHook(() => useCounter(10));

        expect(result.current.counter).toBe(10);
        act(() => result.current.handleIncrease(2));
        expect(result.current.counter).toBe(12);
        act(() => result.current.handleIncrease(-8));
        expect(result.current.counter).toBe(4);
        act(() => result.current.handleDecrease(-6));
        expect(result.current.counter).toBe(10);
        act(() => result.current.handleDecrease(10));
        expect(result.current.counter).toBe(0);
    });

    it('should reset correctly', () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => result.current.reset());
        expect(result.current.counter).toBe(10);
        act(() => result.current.reset(2));
        expect(result.current.counter).toBe(2);
    });
});
