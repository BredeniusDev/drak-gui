import { gql } from '@apollo/client';

export const CREATE_DRAKE_MUTATION = gql`
  mutation createDrake($createDrake: CreateDrakeInput!) {
    addDrake(createDrake: $createDrake) {
      draknummer
      id
    }
  }
`;
