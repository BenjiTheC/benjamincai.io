import { useState, useEffect, useRef } from 'react';

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [innerDivTop, setInnerDivTop] = useState(0);
    const innerRef = useRef(null);

    useEffect(() => {
        const onWindowSizeChange = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', onWindowSizeChange);
        return () => {
            window.removeEventListener('resize', onWindowSizeChange);
        };
    });

    useEffect(() => {
        if (innerRef.current) {
            const { height: innerDivHeight } = innerRef.current.getBoundingClientRect();
            setInnerDivTop((window.innerHeight - innerDivHeight) / 2);
        }
    }, [windowSize]);

    return [innerRef, windowSize, innerDivTop];
}
