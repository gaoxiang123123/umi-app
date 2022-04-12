import React from 'react';
import styles from './index.less';
import { Avatar } from 'antd';
import Icon, { UserOutlined } from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
const Main = () => {
  return (
    <div className={styles.topMain}>
      <div className={styles.logo}>
        <Icon component={LogoSvg} style={{ fontSize: 36 }}></Icon>
      </div>
      {/* 头部一级菜单 */}
      <div></div>
      {/* 个人信息 */}
      <div className={styles.person}>
        <Avatar icon={<UserOutlined />} />
        <span className={styles.personName}>小高</span>
      </div>
    </div>
  );
};
export default Main;
