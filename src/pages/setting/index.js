import React, { useState, useEffect, useRef } from 'react';
import { KeepAlive, useActivate, useUnactivate } from 'react-activation';
import { Button, Badge,Typography } from 'antd';
import VirtualTable from '@/components/VirtualTable';
const { Text } = Typography;

const Setting = () => {
  const valueEnum = {
    0: 'default',
    1: 'processing',
    2: 'success',
    3: 'warning',
    4: 'error',
  };

  const columns = [
    {
      name: '标题-1',
      code: 'name',
      width: 200,
      align:'center'
    },
    {
      name: '状态-2',
      code: 'status',
      width: 120,
      render(v){
        return <Badge status={v} text={v}/>
      }
    },
    {
      name: '金额-6',
      code: 'money',
      width: 100,
      align:'right',
      render(v) {
        const danger = v > 1000
        const safe = v < 100
        return (
          <div
            style={{
              color: danger ? 'red' : safe ? 'green' : 'unset',
              fontWeight: danger || safe ? 'bold' : 'normal',
            }}
          >
            {v}.00
          </div>
        )
      }
    },
    {
      name: '介绍-3',
      code: 'content',
      width: 200,
      render(text){
        return <Text ellipsis={{tooltip:text}}>{text}</Text>
      }
    },
    {
      name: '详情-3',
      code: 'content',
    },
    {
      name: '创建时间-4',
      code: 'createdAt',
      width: 200
    },
    {
      name: '更新时间-5',
      code: 'updatedAt',
      width: 200
    }
  ];

  const [dataSource, setDataSource] = useState([]);
  const [keys, onSetKeys] = useState([]);

  return <>
    <VirtualTable columns={columns} dataSource={dataSource} style={{ height: 700, overflow: 'auto' }} onSelect={(keys) => {onSetKeys(keys);}} />
    <Button type="primary" style={{ margin: '10px' }} onClick={() => { console.log({ keys }) }}>提交</Button>
    <Button type="primary" style={{ margin: '10px' }} onClick={() => {
      const dataSource = [];
      for (let i = 0; i < 50000; i += 1) {
        dataSource.push({
          id: 'dsi' + i,
          name: `标题序号 ${i}`,
          content: '这是一段介绍青海西宁市新增1名新冠肺炎本土确诊病例。西宁通报新增确诊病例详情',
          status: valueEnum[Math.floor(Math.random() * 10) % 5],
          updatedAt: Date.now() - Math.floor(Math.random() * 1000),
          createdAt: Date.now() - Math.floor(Math.random() * 2000),
          money: Math.floor(Math.random() * 2000),
        });
      }
      setDataSource(dataSource);
    }}>加载</Button>
  </>
}

export default (props) => {
  return (
    <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
      <Setting />
    </KeepAlive>
  )
}
