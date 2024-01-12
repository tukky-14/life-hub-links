'use client';

import { SIDEBAR_OPTIONS } from '@/data/sidebar';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="hidden w-48 bg-sidebar py-4 sm:block">
            <h3 className="mb-5 px-4 py-1">
                <Link href="/home" className="">
                    LifeHub Links
                </Link>
            </h3>
            <div>
                {SIDEBAR_OPTIONS.map((option) => (
                    <Link
                        key={option.href}
                        href={option.href}
                        className="block px-4 py-2 hover:bg-gray-600"
                    >
                        <div className="flex items-center gap-1">
                            {option.icon}
                            <p>{option.label}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
