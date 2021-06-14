const Search = async () => {
    const view = 
    `
        <div class="rounded-full bg-white bg-opacity-20 px-3">
            <form id="textField" class="google" action="https://google.com/search" method="get">
                <i class="fas fa-search text-white text-opacity-20"></i>
                <input class="bg-transparent input_box p-2  " type="text" name="q" placeholder="Search with Google">
                <i class="fas fa-arrow-right text-white text-opacity-20"></i>
            </form>
        </div>
    `;

    return view;
};

export default Search;