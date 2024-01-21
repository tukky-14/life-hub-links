'use client';
import { ReactNode, ReactElement, createContext, useContext, useState } from 'react';

type SidebarOption = {
    href: string;
    label: string;
    icon: ReactElement;
};

type SidebarContextType = {
    sidebarOption: SidebarOption | undefined;
    setSidebarOption: (option: SidebarOption) => void;
};

// コンテキストの作成
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// コンテキストのプロバイダー
export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sidebarOption, setSidebarOption] = useState<SidebarOption>({
        href: '/',
        label: '',
        icon: <></>,
    });

    return (
        <SidebarContext.Provider value={{ sidebarOption, setSidebarOption }}>
            {children}
        </SidebarContext.Provider>
    );
};

// コンテキストのコンシューマー
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
