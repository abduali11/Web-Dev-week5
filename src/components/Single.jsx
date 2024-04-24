import { useLocation, useNavigate, useParams, } from "react-router-dom"
import SingleView from "./SingleView"
import  mediaArray from "../data/Media.js"


const Single = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()


  const id = Number(params.id)
let item;


  if (!location.state?.item) {

  item = mediaArray.find(({media_id}) => Number(media_id) === id)
  }else{
    item = location.state.item
  }

  if(!item){
    return <>Media not found</>
  }
  return (
    <SingleView
    selectedItem={item}
    setSelectedItem={() => navigate(-1)}
    ></SingleView>
  );
}

export default Single;
