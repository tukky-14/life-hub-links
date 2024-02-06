'use client';
import LinksGrid from '@/components/links-grid';
import { SWEETS_LINKS } from '@/data/sweets';
import useCommonInitialization from '@/hooks/use-common-initialization';
import { useGridData } from '@/hooks/use-grid-data';

const Sweets = () => {
    useCommonInitialization(SWEETS_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Sweets;
