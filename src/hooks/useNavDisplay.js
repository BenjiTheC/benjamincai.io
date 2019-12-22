import { useState, useEffect } from 'react';

const FLEX = 'flex';
const NONE = 'none';

export default function useNavDisplay() {
    const [navDisplay, setNavDisplay] = useState(window.scrollY > 0 ? FLEX : NONE);

    useEffect(() => {
        const onScreenScroll = () => setNavDisplay(window.scrollY > 15 ? FLEX : NONE);
        window.addEventListener('scroll', onScreenScroll);
        return () => {
            window.removeEventListener('scroll', onScreenScroll);
        };
    });

    return navDisplay;
}
