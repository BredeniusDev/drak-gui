import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link className="nav-link ps-0 pe-2 text-white" to={'/'}>
                  Mina drakar
                </Link>
              </li>
              <li>
                <Link to={'/drake/new'} className="nav-link px-2 text-white">
                  Skapa drake
                </Link>
              </li>
              <li>
                <Link to={'/about'} className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
