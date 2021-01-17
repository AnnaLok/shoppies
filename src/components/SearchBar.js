import React from "react";
// antd components
import { 
  Col,
  Input,
  Row
} from 'antd';
// styling
import 'antd/dist/antd.css';

export default function SearchBar({searchHandler}) {

  const { Search } = Input;

  const onSearch = value => console.log(value);

  return (
    <Row>
      <Col span={12} offset={6}>
        <Search placeholder="Enter a movie ..." onSearch={value => searchHandler(value)} enterButton />
      </Col>
    </Row>
  );
}