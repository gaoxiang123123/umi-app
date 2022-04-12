import React from 'react';
import Top from './Header';
import LeftSide from './leftSide';
import Layout from './layout';
import { Row, Col } from 'antd';
import './global.less';
const Main = () => {
  return (
    <>
      <Col span={24}>
        <Top></Top>
      </Col>
      <Row className="leftSide">
        <Col flex="150px">
          <LeftSide></LeftSide>
        </Col>
        <Col flex="1">
          <Layout></Layout>
        </Col>
      </Row>
    </>
  );
};
export default Main;
