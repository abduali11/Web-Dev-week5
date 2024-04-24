// TODO: add necessary imports
import {useState, useEffect} from 'react';
import {fetchData} from '../lib/fetchData';
const useMedia = () => {
  // TODO: move mediaArray state here
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    const mediaResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media',
    );

    const mediaWithUser = await Promise.all(
      mediaResult.map(async (mediaItem) => {
        const userResult = await fetchData(
          import.meta.env.VITE_AUTH_API + '/users/' + mediaItem.user_id,
        );
        return {...mediaItem, username: userResult.username};
      }),
    );

    console.log(mediaWithUser);
    setMediaArray(mediaWithUser);
  };

  // TODO: move useEffect here
  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
