import { useSelector } from 'react-redux';

const Display = () => {
  const data = useSelector((state) => state.article.item);

  return (
    <div style={{
      width: '400px',
      backgroundColor: 'grey',
      margin: '10px',
    }}>
      <h1>{data.name}</h1>
      <div>{data.location}</div>
      <div>{data.rating}</div>
    </div>
    )
}

export default Display;
