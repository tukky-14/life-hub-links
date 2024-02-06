'use client';
import LinksGrid from '@/components/links-grid';
import { HOUSE_LINKS } from '@/data/house';
import useCommonInitialization from '@/hooks/use-common-initialization';
import { useGridData } from '@/hooks/use-grid-data';

const House = () => {
    useCommonInitialization(HOUSE_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default House;
