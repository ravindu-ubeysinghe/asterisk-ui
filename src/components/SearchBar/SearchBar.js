import React from 'react';

import { SearchBox, SearchInput, SearchButton } from './SearchBarStyles';

export default function SearchBar() {
    return (
        <SearchBox>
            <SearchInput type="text" placeholder="Cuisine/Restuarant" />
            <SearchButton>Search</SearchButton>
        </SearchBox>
    );
}