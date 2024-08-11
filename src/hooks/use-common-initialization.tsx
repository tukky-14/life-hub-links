import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { GridData } from '@/types/grid-data';

import { useAuth } from './use-auth';
import { useGridData } from './use-grid-data';

const useCommonInitialization = (gridData: GridData[]) => {
    const { setGridData, setAllGridData } = useGridData();
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    /**
     * 画面共通の初期化処理
     */
    useEffect(() => {
        const authCheck = async () => {
            const res = await isAuthenticated();
            // console.log('isAuthenticated:', res);
            // サインイン中でない場合は、サインイン画面に遷移
            // if (!res) {
            //     router.push('/signin');
            // }
        };
        authCheck();

        // グリッドデータの格納
        if (gridData.length === 0) {
            return;
        }
        setGridData(gridData);
        setAllGridData(gridData);
    }, [gridData, setAllGridData, setGridData, isAuthenticated, router]);
};

export default useCommonInitialization;
