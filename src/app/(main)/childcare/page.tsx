'use client';
import LinksGrid from '@/components/LinksGrid';
import { CHILDCARE_LINKS } from '@/data/childcare';
import useCommonInitialization from '@/hooks/useCommonInitialization';
import { useGridData } from '@/hooks/useGridData';

const Childcare = () => {
    useCommonInitialization(CHILDCARE_LINKS);
    const { gridData } = useGridData();

    return <LinksGrid links={gridData} />;
};

export default Childcare;
