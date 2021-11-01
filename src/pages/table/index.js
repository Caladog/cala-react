import React, { useState } from 'react';
import { KeepAlive } from 'react-activation';
import ProTable from '@ant-design/pro-table';
import { Button, Tag, DatePicker, Row, Col, Form, Input } from 'antd';
import moment from 'moment';


const MonthSelect = () => {
    const [startDate, setStartDate] = useState('2021-01-01');
    const [endDate, setEndDate] = useState('2021-01-31');

    function onChange(date, dateString) {
        console.log(dateString);
    }

    return (
        <Row>
            <Col span={8}>
                <Form.Item label="会计期间">
                    <DatePicker onChange={onChange} picker="month" defaultValue={moment('2015/01', 'YYYY-MM')} />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item label="开始日期" labelCol={{ span: 12 }}>
                    <Input value={startDate} readOnly />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item label="结束日期" labelCol={{ span: 12 }}>
                    <Input value={endDate} readOnly />
                </Form.Item>
            </Col>
        </Row>
    );
}

const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
};
const tableListDataSource = [];
for (let i = 0; i < 10000; i += 1) {
    tableListDataSource.push({
        key: i,
        name: `标题序号 ${i}`,
        content: '这是一段介绍.....',
        status: valueEnum[Math.floor(Math.random() * 10) % 4],
        updatedAt: Date.now() - Math.floor(Math.random() * 1000),
        createdAt: Date.now() - Math.floor(Math.random() * 2000),
        money: Math.floor(Math.random() * 2000) * i,
    });
}

const columns = [
    {
        title: '',
        key: 'createdAt',
        dataIndex: 'createdAt',
        hideInSetting: true,
        hideinline: true,
        renderFormItem: (item, { type, defaultRender,...rest }, form) => {
            const stateType = form.getFieldValue('createdAt');
            return (<MonthSelect {...rest}/>);
        }
    },
    {
        title: '标题-1',
        dataIndex: 'name',
        key: 'name',
        search: false
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
        search: false
    },
    {
        title: '详情-3',
        dataIndex: 'content',
        key: 'content',
        search: false
    },
    {
        title: '创建时间-4',
        key: 'createdAt',
        dataIndex: 'createdAt',
        valueType: 'dateTime',
        search: false
    },
    {
        title: '更新时间-5',
        key: 'updatedAt',
        dataIndex: 'updatedAt',
        valueType: 'date',
        search: false
        //hideInSetting: true,
    },
    {
        title: '操作-0',
        key: 'option',
        width: 120,
        align: 'center',
        valueType: 'option',
        render: (rescord) => [<Tag color="success" key={rescord.key} onClick={() => { }}>详情</Tag>],
    },
];

const Table = () => {
    const [columnsStateMap, setColumnsStateMap] = useState(JSON.parse(localStorage.getItem("tableColumns") || '{}'));
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
            onRow={record => { }}
            columnsState={{
                value: columnsStateMap,
                onChange: setColumnsStateMap,
            }}
            scroll={{y:480}}
            pagination={{ pageSize: 20 }}
            //pagination={false}
            search={{ span: 12 }}
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