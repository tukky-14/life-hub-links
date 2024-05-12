import { FaHome } from 'react-icons/fa';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { GiCookingPot } from 'react-icons/gi';
import { MdChildCare } from 'react-icons/md';

export const SIDEBAR_OPTIONS = [
    {
        key: '1',
        href: '/house',
        label: '住居',
        icon: <FaHome />,
    },
    {
        key: '2',
        href: '/shopping',
        label: '買物',
        icon: <FaCartShopping />,
    },
    {
        key: '3',
        href: '/cooking',
        label: '料理',
        icon: <GiCookingPot />,
    },
    {
        key: '4',
        href: '/childcare',
        label: '育児',
        icon: <MdChildCare />,
    },
    {
        key: '5',
        href: '/money',
        label: 'お金',
        icon: <FaMoneyCheckAlt />,
    },
    {
        key: '6',
        href: '/gift',
        label: 'ギフト',
        icon: <FaGift />,
    },
    // { href: '/sweets', label: 'お菓子', icon: <GiChocolateBar /> },
];
