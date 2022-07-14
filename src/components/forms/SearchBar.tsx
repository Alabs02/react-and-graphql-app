import React, { Fragment, FC } from 'react';

// ICONS
import { RiSearch2Line } from 'react-icons/ri';

// INTERFACES
import { ISearchProps } from '@/interfaces';
interface IProps extends ISearchProps {};

const SearchBar: FC<IProps> = ({ query, setQuery }) => {
  return (
    <Fragment>
      <div className="search-bar">
        <RiSearch2Line fontSize={20} className="search-bar__icon text-secondary" />
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          value={query}
          placeholder={'Search a character by name, status, species ...'}
          className="form-control search-bar__input pdl-55"
        />
      </div>
    </Fragment>
  );
}

export { SearchBar as default };