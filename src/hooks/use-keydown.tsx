import { useEffect } from 'react';

import { SIDEBAR_OPTIONS } from '@/data/sidebar';

const useKeydown = () => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey || event.metaKey) {
                const page = SIDEBAR_OPTIONS.find((option) => option.key === event.key)?.href;
                if (page) {
                    event.preventDefault();
                    const pageLink: HTMLElement | null = document.querySelector(
                        `a[href="${page}"]`
                    );
                    if (pageLink) {
                        pageLink.click();
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};

export default useKeydown;
