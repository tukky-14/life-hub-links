import { useEffect } from 'react';
import { useGridData } from './useGridData';
import { GridData } from '@/types/gridData';

const useCommonInitialization = (gridData: GridData[]) => {
    const { setGridData } = useGridData();

    /**
     * 画面共通の初期化処理
     */
    useEffect(() => {
        // グリッドデータの格納
        setGridData(gridData);
    }, []);
};

export default useCommonInitialization;
