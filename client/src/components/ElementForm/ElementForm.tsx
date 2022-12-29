import { Dispatch } from '@reduxjs/toolkit';
import React, {FC, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addElementAsync } from '../../redux/actions/elementsActions';
import { useAppDispatch } from '../hooks';
import './ElementForm.scss';

const ElementForm: React.FC = () => {
  //???
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
    // e.preventDefault();
    console.log('clicked with', element);
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
