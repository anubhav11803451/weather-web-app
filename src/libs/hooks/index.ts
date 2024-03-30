import { RefObject, useEffect } from 'react';

/**
 * @function useClickOutside
 * @param {any} ref
 * @param {any} callback
 * @returns {any} Need not return anything
 * @description When you want to call a function when clicked outside the element Ex: Modal PopUp Pass the callback with useCallBack in your function since it's functionality always remains same for better performance.
 * @example useClickOutside(ref, () => { console.log('Clicked Outside') })
 * return <div ref={ref}>Click Outside</div>
 */

export function useClickOutside<T extends HTMLElement>(
    ref: RefObject<T>,
    callback: (event: MouseEvent | TouchEvent) => void,
) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }

            callback(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, callback]);
}
