'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useSidebar } from './useSidebar';
import { SIDEBAR_OPTIONS } from '@/data/sidebar';

export const NavigationEvents = () => {
    const pathname = usePathname();
    const { setSidebarOption } = useSidebar();

    useEffect(() => {
        const currentOption = SIDEBAR_OPTIONS.find((option) => option.href === pathname);
        setSidebarOption(currentOption || { href: '', label: '', icon: <></> });
    }, [pathname]);

    return null;
};
