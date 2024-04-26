import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Button from '../components/UI/Button';
import {useState} from 'react';


const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);

  const toggle = () => {
    setToggleForm(!toggleForm);
  };


  return (
    <>
    {toggleForm ? <LoginForm /> : <RegisterForm />}
    <Button
      text={toggleForm ? 'Not registered ?' : 'Go to login'}
      handleClick={toggle}
    />
  </>
);
};

export default Login;
