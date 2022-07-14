import { ReactNode } from 'react';
import { Dispatch, SetStateAction } from 'react';

export interface IChildren {
  children: ReactNode;
}

export interface ICharacter {
  id: string | number;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
  created: string;
}

export interface ICharactersResponse {
  characters: {
    results: Array<ICharacter>;
  };
}

export interface ISearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}
