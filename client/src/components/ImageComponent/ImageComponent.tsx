import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { setMarker } from '../../redux/actions/markerActions';
import { useAppDispatch, useAppSelector } from '../hooks';

interface Props {
  el: {
    id: number,
    elementName: string,
  };
  index: number;
}

const ImageComponent = ({el, index}:Props) => {
 let flag:string = '';
 
 switch(el.elementName){
  case 'БТ' || 'СБТ' || 'Амортизатор' || 'КОС' || 'ЛБТ'|| 'НКТ'|| 'НУБТ'||
  'пакер' ||'РУС'||'скрепер'|| 'ТС'||'турбобур' || 'фреза' || 'башмак' ||
  'заливочный патрубок' ||'заливочная муфта' || 'трубный пакет' || 
  'центратор (фонарь)' || 'скребок':
  {
      flag = './ElementsImages/DT001.png';
      break;
  }

  case 'УБТ' || 'обратный клапан' || 'ТБТ' :
    {
      flag = './ElementsImages/DT002.png';
      break;
    }
  case 'Переводник':
    {
     flag = './ElementsImages/DT003.png';
     break;
    }
    case 'Ясс':
      {
       flag = './ElementsImages/DT006.png';
       break;
      }
      case 'ВЗД':
        {
         flag = './ElementsImages/DT009.png';
         break;
        }
      case 'Калибратор' || 'КЛС' || 'центратор':
        {
         flag = './ElementsImages/DT010.png';
         break;
        }
  case 'Долото' :
    {
     flag = './ElementsImages/DT012.png';
     break;
    }

    default:{
       flag = './ElementsImages/DT001.png';
       break;
    }
 }

 const dispatch = useAppDispatch();
 const markerHandler = () => {
  dispatch(setMarker(el.id))
 }
 const marker = useAppSelector((state)=>state.marker);

  return (
    <>
    {marker === el.id ? (
      <Row onClick={markerHandler} style={{backgroundColor:'lightblue'}}>
      <Col style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>{index}</Col>
      <Col><img src={flag} alt="elementImage" /></Col>
     </Row>
    ): (
      <Row onClick={markerHandler}>
    <Col style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>{index}</Col>
    <Col><img src={flag} alt="elementImage" /></Col>
   </Row>
    )}
    </>
   
  );
}

export default ImageComponent;
