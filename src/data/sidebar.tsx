import { FaHome } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { GiCookingPot } from 'react-icons/gi';
import { MdChildCare } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';
import { GiChocolateBar } from 'react-icons/gi';

export const SIDEBAR_OPTIONS = [
    {
        href: '/house',
        label: '住居',
        icon: <FaHome />,
    },
    {
        href: '/shopping',
        label: '買物',
        icon: <FaCartShopping />,
    },
    {
        href: '/cooking',
        label: '料理',
        icon: <GiCookingPot />,
    },
    {
        href: '/childcare',
        label: '育児',
        icon: <MdChildCare />,
    },
    {
        href: '/money',
        label: 'お金',
        icon: <FaMoneyCheckAlt />,
    },
    {
        href: '/gift',
        label: 'ギフト',
        icon: <FaGift />,
    },
    // { href: '/sweets', label: 'お菓子', icon: <GiChocolateBar /> },
];
