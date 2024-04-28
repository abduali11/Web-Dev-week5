import { useState, useEffect } from "react";
import { useUser } from '../hooks/apiHooks';

export const Profile = () => {
  const [user, setUser] = useState(null); // Corrected here
  const {getUserByToken} = useUser();

  const getUser = async () => {
    try{
      const token = localStorage.getItem('token');
      const userData = await getUserByToken(token);
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
