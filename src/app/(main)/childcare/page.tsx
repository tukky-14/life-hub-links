'use client';
import LinksGrid from '@/components/links-grid';
import { CHILDCARE_LINKS } from '@/data/childcare';
import useCommonInitialization from '@/hooks/use-common-initialization';
import { useGridData } from '@/hooks/use-grid-data';

const Childcare = () => {
    useCommonInitialization(CHILDCARE_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Childcare;
