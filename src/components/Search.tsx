const Search = () => {
    return (
        <div className="ml-4 flex items-center justify-center">
            <div className="relative">
                <input
                    type="search"
                    className="h-10 rounded-full bg-gray-100 px-5 pr-10 text-sm focus:outline-none"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
};

export default Search;
