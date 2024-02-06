'use client';
import LinksGrid from '@/components/links-grid';
import { MONEY_LINKS } from '@/data/money';
import useCommonInitialization from '@/hooks/use-common-initialization';
import { useGridData } from '@/hooks/use-grid-data';

const Money = () => {
    useCommonInitialization(MONEY_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Money;
