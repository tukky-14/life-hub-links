'use client';
import LinksGrid from '@/components/LinksGrid';
import { SHOPPING_LINKS } from '@/data/shopping';
import useCommonInitialization from '@/hooks/useCommonInitialization';
import { useGridData } from '@/hooks/useGridData';

const Shopping = () => {
    useCommonInitialization(SHOPPING_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Shopping;
