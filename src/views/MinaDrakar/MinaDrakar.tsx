import { useQuery } from '@apollo/client';
import { LOAD_DRAKAR } from '../../GraphQl/Queries/MinaDrakar.queries';
import { useEffect, useState } from 'react';
import { DrakesQuerie } from '../../GraphQl/Model/DrakesQuerie';
import { Drake } from './Model/Drake';

const cardStyle: React.CSSProperties = {
  width: '18rem',
};

export function MinaDrakar() {
  // TODO: borde brytas ut till en funktion eller service.
  const { data } = useQuery<DrakesQuerie>(LOAD_DRAKAR);
  const [drakar, setDrakar] = useState<Drake[]>();
  useEffect(() => {
    if (data) {
      setDrakar(data.drakes);
    }
  }, [data]);
  return (
    <>
      <h1>Mina drakar!</h1>
      <div className="row">
        {drakar?.map((drak) => {
          return (
            <div className="col-3 mt-5" key={drak.id}>
              <div className="card" style={cardStyle}>
                <h1>
                  <i className="bi bi-android2"></i>
                </h1>
                <div className="card-body">
                  <h5 className="card-title">Drake {drak.draknummer}</h5>
                  <p className="card-text">{drak.draknummer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
