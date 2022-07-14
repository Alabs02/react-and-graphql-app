import React, { Fragment, Dispatch, SetStateAction, FC } from 'react';

// COMPONENTS
import { SearchBar } from '@/components/forms';

// INTERFACES
import { ISearchProps } from '@/interfaces';
interface IProps extends ISearchProps {}

const AppBar: FC<IProps> = ({ query, setQuery }) => {
  return (
    <Fragment>
      <div className="app-bar pdy-32 pdx-20 pdx-lg-40">
        <div className="app-bar__title fs-18 fs-lg-24 hide visible-lg">
          Discover your favourites.
        </div>

        <div className="app-bar__actions wf-100 wf-lg-40">
          <SearchBar query={query} setQuery={setQuery} />
        </div>
      </div>
    </Fragment>
  );
};

export { AppBar as default };
