'use client';

import { SIDEBAR_OPTIONS } from '@/data/sidebar';
import { useSidebar } from '@/hooks/useSidebar';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const router = useRouter();
    const { sidebarOption, setSidebarOption } = useSidebar();

    const handleSidebarClick = (e: React.MouseEvent) => {
        const { name } = e.currentTarget as HTMLButtonElement;
        const currentOption = SIDEBAR_OPTIONS.find((option) => option.href === name);

        setSidebarOption(currentOption || { href: '', label: '', proverb: '', icon: <></> });
        router.push(name);
    };

    return (
        <aside className="hidden w-48 bg-sidebar py-4 sm:block">
            <h3 className="mb-5 px-4 py-1">
                <button className="" onClick={handleSidebarClick}>
                    LifeHub Links
                </button>
            </h3>
            {SIDEBAR_OPTIONS.map((option) => (
                <button
                    key={option.href}
                    name={option.href}
                    className={`block w-full px-4 py-2 duration-200 hover:bg-gray-600 ${
                        sidebarOption === option ? 'bg-gray-600' : ''
                    }`}
                    onClick={handleSidebarClick}
                >
                    <div className="flex items-center gap-1">
                        {option.icon}
                        <p>{option.label}</p>
                    </div>
                </button>
            ))}
        </aside>
    );
};

export default Sidebar;
