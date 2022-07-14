import { gql } from '@apollo/client';

export const FETCH_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        type
        image
        created
      }
    }
  }
`;
