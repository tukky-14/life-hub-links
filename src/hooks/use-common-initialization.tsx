import { useEffect } from 'react';

import { GridData } from '@/types/grid-data';

import { useGridData } from './use-grid-data';

const useCommonInitialization = (gridData: GridData[]) => {
    const { setGridData, setAllGridData } = useGridData();

    /**
     * 画面共通の初期化処理
     */
    useEffect(() => {
        // グリッドデータの格納
        setGridData(gridData);
        setAllGridData(gridData);
    }, [gridData, setAllGridData, setGridData]);
};

export default useCommonInitialization;
