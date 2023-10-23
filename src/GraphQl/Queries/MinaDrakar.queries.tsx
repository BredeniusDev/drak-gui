import { gql } from '@apollo/client';

export const LOAD_DRAKAR = gql`
  query getDrakar {
    drakes {
      draknummer
      id
    }
  }
`;
