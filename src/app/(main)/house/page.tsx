'use client';
import LinksGrid from '@/components/LinksGrid';
import { HOUSE_LINKS } from '@/data/house';
import useCommonInitialization from '@/hooks/useCommonInitialization';
import { useGridData } from '@/hooks/useGridData';

const House = () => {
    useCommonInitialization(HOUSE_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default House;
