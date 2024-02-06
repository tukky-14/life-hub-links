'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

import { GridDataContextType, GridData } from '@/types/grid-data';

// コンテキストの作成
export const GridDataContext = createContext<GridDataContextType | undefined>(undefined);

// コンテキストのプロバイダー
export const GridDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [allGridData, setAllGridData] = useState<GridData[]>([
        {
            href: '',
            image: '',
            title: '',
            description: '',
            tag: [],
        },
    ]);
    const [gridData, setGridData] = useState<GridData[]>([
        {
            href: '',
            image: '',
            title: '',
            description: '',
            tag: [],
        },
    ]);

    return (
        <GridDataContext.Provider value={{ gridData, setGridData, allGridData, setAllGridData }}>
            {children}
        </GridDataContext.Provider>
    );
};

// コンテキストのコンシューマー
export const useGridData = () => {
    const context = useContext(GridDataContext);
    if (!context) {
        throw new Error('useGridData must be used within a GridDataProvider');
    }
    return context;
};
