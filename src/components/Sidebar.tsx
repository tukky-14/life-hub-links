'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { SIDEBAR_OPTIONS } from '@/data/sidebar';
import useKeydown from '@/hooks/use-keydown';
import { useSidebar } from '@/hooks/use-sidebar';

const Sidebar = () => {
    const { sidebarOption } = useSidebar();

    const [isCtrlOrCmdPressed, setIsCtrlOrCmdPressed] = useState(false);

    useKeydown();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey || event.metaKey) {
                setIsCtrlOrCmdPressed(true);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (!event.ctrlKey || !event.metaKey) {
                setIsCtrlOrCmdPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <aside className="relative hidden w-48 bg-sidebar py-4 sm:block">
            <h3 className="mb-5 px-4 py-1">
                <Link href="/">LifeHub Links</Link>
            </h3>
            {SIDEBAR_OPTIONS.map((option) => (
                <Link
                    key={option.href}
                    href={option.href}
                    className={`block w-full px-4 py-2 duration-200 hover:bg-gray-600 ${
                        sidebarOption === option ? 'bg-gray-600' : ''
                    }`}
                >
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            {option.icon}
                            <p>{option.label}</p>
                        </div>
                        {isCtrlOrCmdPressed && <div>{option.key}</div>}
                    </div>
                </Link>
            ))}
            <small className="absolute bottom-2 left-4">© tukky 2024</small>
        </aside>
    );
};

export default Sidebar;
