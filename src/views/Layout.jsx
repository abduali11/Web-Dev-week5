import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useUserContext } from '../hooks/contextHooks';

export const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, [handleAutoLogin]);

  return (
    <div>
      <nav>
        <Link to="/">Etusivu</Link>
        {user ? (
          <>
            <Link to="/Profile">Profiili😊😊</Link>
            <Link to="/Upload">Upload 😁😁</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
