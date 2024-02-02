'use client';
import LinksGrid from '@/components/LinksGrid';
import { SWEETS_LINKS } from '@/data/sweets';
import useCommonInitialization from '@/hooks/useCommonInitialization';
import { useGridData } from '@/hooks/useGridData';

const Sweets = () => {
    useCommonInitialization(SWEETS_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Sweets;
