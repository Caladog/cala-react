import React, { useState } from 'react';
import { useHistory, useLocation } from 'umi';
import { useAliveController } from 'react-activation';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { CloseCircleOutlined } from '@ant-design/icons';

export default () => {
  const history = useHistory();
  const location = useLocation();
  const { getCachingNodes, dropScope, refresh } = useAliveController();
  const cachingNodes = getCachingNodes();

  const closable = cachingNodes.length > 1;

  const dropTab = (item) => {
    const currentName = item.name;
    if (location.pathname === item.path) {
      history.push(cachingNodes.filter((node) => node.name !== currentName).pop().path);
    }
    dropScope(currentName);
  }

  return (
    <Tabs size="small" activeKey={location.pathname} type={closable ? 'editable-card' : 'card'} hideAdd className="cala-Tabs">
      {cachingNodes.map((item) => (
        <TabPane key={item.path} tab={
          <li onClick={() => { history.push(item.path); }} onDoubleClick={() => { refresh(item.name) }}>
            <span style={{ userSelect: 'none' }}> {item.name} </span>
          </li>
        } closeIcon={(<CloseCircleOutlined onClick={() => { dropTab(item) }} />)} />
      ))}
    </Tabs>
  )
}