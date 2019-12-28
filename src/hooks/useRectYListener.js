import { useState, useEffect } from 'react';

export default function useRectYListener(clientRef) {
    const [rectY, setRectY] = useState(window.innerHeight);
    const [rectYOverBaseline, setRectYOverBaseline] = useState(false);

    const baseline = (2 / 3) * window.innerHeight;

    useEffect(() => {
        if (clientRef.current) {
            window.scroll({ top: 1 }); // a hack around to make the auto type responsively triggered
            const onWindowScroll = () => setRectY(clientRef.current.getBoundingClientRect().y);
            window.addEventListener('scroll', onWindowScroll);
            return () => {
                window.removeEventListener('scroll', onWindowScroll);
            };
        }
    }, [clientRef]);

    useEffect(() => {
        if (!rectYOverBaseline && rectY < baseline) {
            setRectYOverBaseline(true);
        }
    }, [rectY]);

    return rectYOverBaseline;
}
