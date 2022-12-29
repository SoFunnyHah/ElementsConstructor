import { Button } from 'react-bootstrap';
import { deleteElementAsync } from '../../redux/actions/elementsActions';
import { setMarker } from '../../redux/actions/markerActions';
import { useAppDispatch, useAppSelector } from '../hooks';

interface Props {
  el: {
    id: number,
    elementName: string,
  };
  index: number;
}


const TableRows = ({el, index}:Props) => {
  
  const dispatch = useAppDispatch();
  
  const onClick = (e:any, id: number) => {
    e.stopPropagation();
    dispatch(deleteElementAsync(id));
  }

 const markerHandler = () => {
  dispatch(setMarker(el.id))
 }
 const marker = useAppSelector((state)=>state.marker);
    return (
      <>
      {marker === el.id ? (
        <tr onClick={markerHandler} style={{backgroundColor: 'lightblue'}}>
      <th scope="row">
        {index}
      </th>
      <td>
      {el.elementName}
      </td>
      <td>
      <Button onClick={(e)=>onClick(e, el.id)} variant="primary">Удалить</Button>
      </td>
    </tr>
      ) : (
        <tr onClick={markerHandler}>
      <th scope="row">
        {index}
      </th>
      <td>
      {el.elementName}
      </td>
      <td>
      <Button onClick={(e)=>onClick(e, el.id)} variant="primary">Удалить</Button>
      </td>
    </tr>
      )}
      </>
    );
}

export default TableRows;
