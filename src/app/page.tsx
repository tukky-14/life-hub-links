export default function Home() {
    return (
        <div className="flex h-screen">
            <div className="bg-sidebar w-64 p-4">サイドバー</div>
            <div className="flex-1 flex flex-col">
                <div className="bg-header h-16 p-4">ヘッダー</div>
                <div className="bg-main flex-1 p-4">メインコンテンツ</div>
            </div>
        </div>
    );
}
