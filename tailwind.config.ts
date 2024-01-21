import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                header: '#4B5563', // ヘッダー用の色
                sidebar: '#9CA3AF', // サイドバー用の色
                main: '#E5E7EB', // メイン画面用の色
            },
            animation: {
                'slide-in-bck-center':
                    'slide-in-bck-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
            },
            keyframes: {
                'slide-in-bck-center': {
                    '0%': {
                        transform: 'translateZ(600px)',
                        opacity: '0',
                    },
                    to: {
                        transform: 'translateZ(0)',
                        opacity: '1',
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
