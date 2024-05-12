import { useEffect } from 'react';

import { SIDEBAR_OPTIONS } from '@/data/sidebar';

const useKeydown = () => {
    useEffect(() => {
        /**
         * キーボードのキーが押されたときの処理
         * @param event
         */
        const handleKeyDown = (event: KeyboardEvent) => {
            // CtrlキーまたはCmdキーが押されているとき
            if (event.ctrlKey || event.metaKey) {
                // 押されたキーの番号に対応するページを取得
                const page = SIDEBAR_OPTIONS.find((option) => option.key === event.key)?.href;
                if (page) {
                    // デフォルトのイベントをキャンセル
                    event.preventDefault();

                    // ページ遷移
                    const pageLink: HTMLElement | null = document.querySelector(
                        `a[href="${page}"]`
                    );
                    if (pageLink) {
                        pageLink.click();
                    }
                }
            }
        };

        // イベントリスナーを追加
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};

export default useKeydown;
