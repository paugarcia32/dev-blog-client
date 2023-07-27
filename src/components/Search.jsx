

const Search = ({ setSearch }) => {
	return (
		<input
			type="text"
			placeholder="Search"
			onChange={({ currentTarget: input }) => setSearch(input.value)}
		/>
	);
};

export default Search;