'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { SIDEBAR_OPTIONS } from '@/data/sidebar';

import { useSidebar } from './use-sidebar';

export const NavigationEvents = () => {
    const pathname = usePathname();
    const { setSidebarOption } = useSidebar();

    useEffect(() => {
        const currentOption = SIDEBAR_OPTIONS.find((option) => option.href === pathname);
        setSidebarOption(currentOption || { href: '', label: '', icon: <></> });
    }, [pathname, setSidebarOption]);

    return null;
};
