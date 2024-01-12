import { FaHome } from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';
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
        proverb: '家の中の調和は心の平和をもたらす。',
        icon: <FaHome />,
    },
    {
        href: '/cleaning',
        label: '掃除',
        proverb: '環境の整理は心の整理。',
        icon: <MdCleaningServices />,
    },
    {
        href: '/shopping',
        label: '買物',
        proverb: '必要なものを選ぶ智恵が、豊かな生活を作る。',
        icon: <FaCartShopping />,
    },
    {
        href: '/cooking',
        label: '料理',
        proverb: '料理はただの食事ではなく、共有される経験。',
        icon: <GiCookingPot />,
    },
    {
        href: '/childcare',
        label: '育児',
        proverb: '育児は日々の挑戦だが、成長の喜びも同じくらい大きい。',
        icon: <MdChildCare />,
    },
    {
        href: '/money',
        label: 'お金',
        proverb: '財布の中身よりも心の豊かさが真の富。',
        icon: <FaMoneyCheckAlt />,
    },
    {
        href: '/gift',
        label: 'プレゼント',
        proverb: '贈り物は、言葉にできない思いの代弁者。',
        icon: <FaGift />,
    },
    { href: '/sweets', label: 'お菓子', proverb: '小さなしあわせ。', icon: <GiChocolateBar /> },
];
