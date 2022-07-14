import React, { Fragment } from 'react';

// ICONS
import { RiSearch2Line } from 'react-icons/ri';

const SearchBar = () => {
  return (
    <Fragment>
      <div className="search-bar">
        <RiSearch2Line fontSize={20} className="search-bar__icon text-secondary" />
        <input
          type="text"
          placeholder={'Search a character ...'}
          className="form-control search-bar__input pdl-55"
        />
      </div>
    </Fragment>
  );
}

export { SearchBar as default };