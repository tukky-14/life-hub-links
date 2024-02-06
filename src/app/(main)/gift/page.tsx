'use client';
import LinksGrid from '@/components/links-grid';
import { GIFT_LINKS } from '@/data/gift';
import useCommonInitialization from '@/hooks/use-common-initialization';
import { useGridData } from '@/hooks/use-grid-data';

const Gift = () => {
    useCommonInitialization(GIFT_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Gift;
