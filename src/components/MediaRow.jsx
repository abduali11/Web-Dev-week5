import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MediaRow = (props) => {
  const {item} = props;

  return (
    <tr key={item.media_id}>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <Link
          to= { `/media/${item.media_id}`}
          state={{item}}
          className="m-3 mt-0 rounded-lg bg-stone-500 p-3 text-stone-50 "
        >
          View
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MediaRow;
