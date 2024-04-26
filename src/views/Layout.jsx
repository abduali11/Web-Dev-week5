import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
     <nav>
        <Link to = "/">Etusivu</Link>
    <Link to = "/Profile">Profiili😊😊</Link>
    <Link to = "/Upload">Upload 😁😁</Link>
    <Link to="/login">Login</Link>
    <Link to="/logout">Logout</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
