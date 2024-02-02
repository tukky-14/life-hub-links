'use client';
import LinksGrid from '@/components/LinksGrid';
import { MONEY_LINKS } from '@/data/money';
import useCommonInitialization from '@/hooks/useCommonInitialization';
import { useGridData } from '@/hooks/useGridData';

const Money = () => {
    useCommonInitialization(MONEY_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Money;
