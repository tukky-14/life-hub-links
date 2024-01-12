import { FaHome } from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { GiCookingPot } from 'react-icons/gi';
import { MdChildCare } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';

export const LINKS = [
    { href: '/house', label: '住居', icon: <FaHome /> },
    { href: '/cleaning', label: '掃除', icon: <MdCleaningServices /> },
    { href: '/shopping', label: '買物', icon: <FaCartShopping /> },
    { href: '/cooking', label: '料理', icon: <GiCookingPot /> },
    { href: '/childcare', label: '育児', icon: <MdChildCare /> },
    { href: '/money', label: 'お金', icon: <FaMoneyCheckAlt /> },
    { href: '/gift', label: 'プレゼント', icon: <FaGift /> },
];
