import { useEffect } from 'react';

const useOutsideClick = (
	ref: React.RefObject<HTMLElement>,
	callback: () => void,
	linkCheck = false,
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (!ref?.current?.contains(event.target as Node)) {
				callback();
			}
			if (
				linkCheck &&
				ref?.current?.contains(event.target as Node) &&
				(event.target as HTMLElement).tagName === 'A'
			) {
				const timeout = setTimeout(() => {
					callback();
					clearTimeout(timeout);
				}, 250);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.addEventListener('mousedown', handleClickOutside);
		};
	}, [ref, callback, linkCheck]);
};

export default useOutsideClick;
