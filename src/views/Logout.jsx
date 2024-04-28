import { useEffect } from 'react';
import { useUserContext } from '../hooks/contextHooks';
import LoginForm from "./LoginForm";

const Logout = () => {
  const { handleLogout } = useUserContext();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return (
    <>
      <LoginForm/>
      {/* <RegisterForm /> */}
    </>
  );
};

export default Logout;
