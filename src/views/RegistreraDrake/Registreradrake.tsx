import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CreateDrakeInput } from '../../GraphQl/Model/CreateDrakeInput';
import { CREATE_DRAKE_MUTATION } from '../../GraphQl/Mutation/RegistreraDrake.mutation';

export function Registreradrake() {
  const [drakeNummer, setDrakeNummer] = useState<string>('');
  const [createDrake, { error }] = useMutation<CreateDrakeInput>(
    CREATE_DRAKE_MUTATION
  );

  function addDrake() {
    console.log(drakeNummer);
    const input: CreateDrakeInput = {
      draknummer: drakeNummer,
      ryttareId: '6530200783671d927c780d45',
    };
    createDrake({
      variables: {
        createDrake: input,
      },
    });
    if (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>Skapa en drake</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <form className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="1337"
              onChange={(e) => {
                setDrakeNummer(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Drakens id</label>
            <button
              onClick={addDrake}
              type="button"
              className="btn btn-dark btn-lg mt-3"
            >
              Skapa drake
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
