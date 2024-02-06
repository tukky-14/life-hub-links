'use client';

import Link from 'next/link';

import { SIDEBAR_OPTIONS } from '@/data/sidebar';
import { useSidebar } from '@/hooks/use-sidebar';

const Sidebar = () => {
    const { sidebarOption } = useSidebar();

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
                    <div className="flex items-center gap-1">
                        {option.icon}
                        <p>{option.label}</p>
                    </div>
                </Link>
            ))}
            <small className="absolute bottom-2 left-4">© tukky 2024</small>
        </aside>
    );
};

export default Sidebar;
