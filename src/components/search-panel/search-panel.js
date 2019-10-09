import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    const SearchStyle = {
        fontSize: '15px'
    };
    return(<input placeholder="search" style = {SearchStyle}/>);
};

export default SearchPanel;

