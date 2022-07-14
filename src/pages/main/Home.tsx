import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_CHARACTERS } from '@/graphql/queries';
import { DotLoader } from 'react-spinners';
import Fuse from 'fuse.js';

// COMPONENTS
import { AppBar } from '@/components/navigation';
import { CharacterCard } from '@/components/core';

// INTERFACES
import { ICharacter, ICharactersResponse } from '@/interfaces';
import { toast } from 'material-react-toastify';

const Home = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const { data, loading, error } =
    useQuery<ICharactersResponse>(FETCH_CHARACTERS);

  const fuseOptions = {
    includeScore: true,
    keys: ['name', 'species', 'status'],
  };

  const fuse = new Fuse(data?.characters?.results || [], fuseOptions);
  const results = fuse.search(query);

  const renderLoader = () => {
    return (
      loading && (
        <div className="home-page__loader mgt-50">
          <DotLoader size={100} color={'#FA6909'} />
        </div>
      )
    );
  };

  const getCharacters = (): Array<ICharacter | any> => {
    if (query?.length > 1) {
      return results || [];
    }
    return data?.characters?.results || [];
  };

  const renderCharacters = () => {
    if (error) {
      toast.error(error?.message);
      return <div>{error?.extraInfo}</div>;
    }

    return getCharacters()?.map(
      (character: ICharacter | any, index: number) => {
        return (
          <CharacterCard
            key={character?.id || character?.item?.id || index}
            character={character}
          />
        );
      }
    );
  };

  return (
    <Fragment>
      <AppBar query={query} setQuery={setQuery} />
      {renderLoader()} {/* LOADER */}
      <div className="home-page pdx-20 pdx-lg-40 wf-100 grid grid-col-12 grid-col-lg-16 gap-x-24 gap-y-32 mgt-32 mgb-50">
        {renderCharacters()}
      </div>
    </Fragment>
  );
};

export { Home as default };
