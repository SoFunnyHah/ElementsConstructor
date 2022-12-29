import React from 'react';
import {Form} from 'react-bootstrap';
import { addElementAsync } from '../../redux/actions/elementsActions';
import { useAppDispatch } from '../hooks';
import './ElementForm.scss';

const ElementForm: React.FC = () => {
  const optionList = [
    'БТ', 'УБТ', 'СБТ', 'Переводник','Калибратор',
    'Ясс','Долото', 'Амортизатор','ВЗД','КЛС','КОС', 
    'ЛБТ', 'НКТ', 'НУБТ', 'обратный клапан', 'пакер', 
    'РУС', 'скрепер', 'ТБТ', 'ТС', 'турбобур', 'фреза', 
    'центратор', 'башмак','заливочный патрубок',
    'заливочная муфта','трубный пакет', 'центратор (фонарь)',
    'скребок'
  ]
  const dispatch = useAppDispatch();
 
  const onChange = ( element:string) : void=> {
    dispatch(addElementAsync(element));
  }
 
    return (
      <div className='formContainer'>
    <Form.Select aria-label="Default select example"
    onChange={(e)=>onChange(e.target.value)}
    >
      <option>Список элементов</option>
      {optionList.map((el, index)=>
      <option key={index} value={el}>{el}</option>
      )}
    </Form.Select>
    </div>
    );
}

export default ElementForm;
