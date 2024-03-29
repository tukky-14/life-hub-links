type SearchProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = (props: SearchProps) => {
    const { onChange } = props;

    return (
        <div className="ml-4 hidden items-center justify-center sm:flex">
            <div className="relative">
                <input
                    type="search"
                    className="h-10 rounded-full bg-gray-100 px-5 pr-10 text-sm focus:outline-none"
                    placeholder="Search..."
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default Search;
