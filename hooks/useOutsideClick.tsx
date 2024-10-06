import { useEffect } from 'react';

const useOutsideClick = (ref: any, callback: () => void, linkCheck = false) => {
	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (!ref?.current?.contains(event.target)) {
				callback();
			}
			if (
				linkCheck &&
				ref?.current?.contains(event.target) &&
				event?.target?.tagName === 'A'
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
