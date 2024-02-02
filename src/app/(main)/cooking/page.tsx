'use client';
import LinksGrid from '@/components/LinksGrid';
import { COOKING_LINKS } from '@/data/cooking';
import useCommonInitialization from '@/hooks/useCommonInitialization';
import { useGridData } from '@/hooks/useGridData';

const Cooking = () => {
    useCommonInitialization(COOKING_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Cooking;
