import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '../src/hooks/useToggle';

describe('Tests about useToggle hook', () => {
    it('Should do the change', () => {
        const { result } = renderHook(() => useToggle(false));

        const [, toggle] = result.current;

        expect(result.current[0]).toBe(false);
        act(() => toggle());
        expect(result.current[0]).toBe(true);
    });
});
