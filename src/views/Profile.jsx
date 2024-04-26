import { useState, useEffect } from "react";
import { useUser } from '../hooks/apiHooks'; // Make sure to import useUser

export const Profile = () => {
  const [ setUser] = useState(null);
  const {getUserBytoken} = useUser();

  const getUser = async () => {
    try{
      const token = localStorage.getItem('token');
      const userData = await getUserBytoken(token);
      setUser(userData);
    }catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Tämä on minun profiilisivuni</h2>
    </div>
  );
};
