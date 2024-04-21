import { useLocation, useNavigate } from "react-router-dom"
import SingleView from "./SingleView"

const Single = () => {
  const location = useLocation()
  const navigate = useNavigate()

  if (!location.state?.item) {
    return null
  }

  const { item } = location.state
  console.log(item)
  return (
    <SingleView
    selectedItem={item}
    setSelectedItem={() => navigate(-1)}
    ></SingleView>
  );
}

export default Single;
