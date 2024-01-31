import { ReactElement } from 'react';

export type SidebarOption = {
    href: string;
    label: string;
    icon: ReactElement;
};

export type SidebarContextType = {
    sidebarOption: SidebarOption | undefined;
    setSidebarOption: (option: SidebarOption) => void;
};
