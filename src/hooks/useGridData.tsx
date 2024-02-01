'use client';
import { GridDataContextType, GridData } from '@/types/gridData';
import { ReactNode, createContext, useContext, useState } from 'react';

// コンテキストの作成
export const GridDataContext = createContext<GridDataContextType | undefined>(undefined);

// コンテキストのプロバイダー
export const GridDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
        <GridDataContext.Provider value={{ gridData, setGridData }}>
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