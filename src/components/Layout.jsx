import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
     <nav>
        <Link to = "/">Etusivu</Link>
    <Link to = "/Profile">Profiili😊😊</Link>
    <Link to = "/Upload">Upload 😁😁</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
