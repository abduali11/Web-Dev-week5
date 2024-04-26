import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from '../hooks/apiHooks';

export const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  const getUser = async () => {
    try{
      const token = localStorage.getItem('token');
      const userData = await getUserByToken(token);
      setUser(userData.user);
    }catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  console.log('user', user);

  return (
    <div>
      <h2 className="text-2xl font-bold">Tämä on minun profiilisivuni</h2>
      <p>
        <Link to="/">Navigoi takaisin etusivulle</Link>
      </p>

      {user && (
        <>
          <h1>Profiili</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>User id: {user.user_id}</p>
          <p>User Level: {user.level_name}</p>

        </>
      )}
    </div>
  );
};

export default Profile;
