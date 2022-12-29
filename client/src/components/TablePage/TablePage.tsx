import React, {FC, useEffect, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {Table} from 'reactstrap';
import { fetchElemesAsync } from '../../redux/actions/elementsActions';
import ElementForm from '../ElementForm';
import { useAppDispatch, useAppSelector } from '../hooks';
import ImageComponent from '../ImageComponent';
import TableRows from '../TableRows';
import { oneElement } from '../types/types';



const TablePage: FC = () => {

  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchElemesAsync());
  }, []);

  const rows = useAppSelector((state) => state.elementsList.rows);
  console.log('rows id', rows);
    return (
      <>
    <ElementForm />
    <Row>
      <Col xs={5}>
      <Table hover>
  <thead>
    <tr>
      <th>
        №
      </th>
      <th>
        Тип элемента
      </th>
    </tr>
  </thead>
  <tbody>
    {rows.map((el: oneElement, index: number)=><TableRows key={el.id} el={el} index={index+1} />)}
  </tbody>
</Table>
      </Col>
      <Col>
      {rows.map((el: oneElement, index: number)=><ImageComponent key={el.id} el={el} index={index+1} />)}
      </Col>
    </Row>
</>
    );
}

export default TablePage;
