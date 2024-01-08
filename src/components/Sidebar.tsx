'use client';

import { LINKS } from '@/data/sidebar';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="hidden w-48 bg-sidebar py-4 sm:block">
            <h3 className="mb-5 px-4 py-1">
                <Link href="/home">タイトル</Link>
            </h3>
            <div>
                {LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 hover:bg-gray-600"
                    >
                        <p>{link.label}</p>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
