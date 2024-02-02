'use client';
import LinksGrid from '@/components/LinksGrid';
import { GIFT_LINKS } from '@/data/gift';
import useCommonInitialization from '@/hooks/useCommonInitialization';
import { useGridData } from '@/hooks/useGridData';

const Gift = () => {
    useCommonInitialization(GIFT_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Gift;
