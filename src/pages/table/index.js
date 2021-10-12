import React, { useState } from 'react';
import ProTable from '@ant-design/pro-table';
import { Button,Tag } from 'antd';
import { KeepAlive, useActivate, useUnactivate } from 'react-activation';

const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
};
const tableListDataSource = [];
for (let i = 0; i < 2; i += 1) {
    tableListDataSource.push({
        key: i,
        name: `标题序号 ${i}`,
        content:'这是一段介绍.....',
        status: valueEnum[Math.floor(Math.random() * 10) % 4],
        updatedAt: Date.now() - Math.floor(Math.random() * 1000),
        createdAt: Date.now() - Math.floor(Math.random() * 2000),
        money: Math.floor(Math.random() * 2000) * i,
    });
}
const columns = [
    {
        title: '标题-1',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '状态-2',
        dataIndex: 'status',
        key: 'status',
        initialValue: 'all',
        filters: true,
        onFilter: true,
        valueType: 'select',
        valueEnum: {
            all: { text: '全部', status: 'Default' },
            close: { text: '关闭', status: 'Default' },
            running: { text: '运行中', status: 'Processing' },
            online: { text: '已上线', status: 'Success' },
            error: { text: '异常', status: 'Error' },
        },
    },
    {
        title: '详情-3',
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: '创建时间-4',
        key: 'createdAt',
        dataIndex: 'createdAt',
        valueType: 'dateTime',
    },
    {
        title: '更新时间-5',
        key: 'updatedAt',
        dataIndex: 'updatedAt',
        valueType: 'date',
        //hideInSetting: true,
    },
    {
        title: '操作-0',
        key: 'option',
        width: 120,
        align: 'center',
        valueType: 'option',
        render: (rescord) => [<Tag color="success" key={rescord.key} onClick={() => {}}>详情</Tag>],
    },
];

const Table = () => {
    const [columnsStateMap, setColumnsStateMap] = useState(JSON.parse(localStorage.getItem("tableColumns")||'{}'));
    return (
        <ProTable
            columns={columns}
            request={(params) => Promise.resolve({
                data: tableListDataSource.filter((item) => {
                    if (!(params === null || params === void 0 ? void 0 : params.keyWord)) {
                        return true;
                    }
                    if (item.name.includes(params === null || params === void 0 ? void 0 : params.keyWord) || item.status.includes(params === null || params === void 0 ? void 0 : params.keyWord)) {
                        return true;
                    }
                    return false;
                }),
                success: true,
            })}
            options={{
                search: true,
            }}
            rowKey="key"
            bordered
            size='small'
            rowSelection={{}}
            onRow={record => {}}
            // columnsStateMap={columnsStateMap}
            // onColumnsStateChange={map => setColumnsStateMap(map)}
            columnsState={{
                value: columnsStateMap,
                onChange: setColumnsStateMap,
              }}
            search={false}
            dateFormatter="string"
            headerTitle="受控模式"
            toolBarRender={() => [
                <Button
                    key="save"
                    shape="round"
                    type="primary"
                    onClick={() => {
                        //console.log(columnsStateMap);
                        localStorage.setItem("tableColumns", JSON.stringify(columnsStateMap));
                    }}
                >
                    列保存
                </Button>,
                <Button
                    key="reset"
                    shape="round"
                    onClick={() => {
                        setColumnsStateMap([]);
                        localStorage.setItem("tableColumns", "");
                    }}
                >
                    初始化
                </Button>
            ]}
        />
    );
};

export default (props) => (
    <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
      <Table />
    </KeepAlive>
  )