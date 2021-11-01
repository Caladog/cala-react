import React, { useState } from 'react';
import { BaseTable, useTablePipeline, features } from 'ali-react-table';
import * as antd from 'antd';
import { AntdBaseTable } from './AntdBaseTable';

export default (props) => {
    const dataSource = props.dataSource;
    const columns = props.columns;
    const [value, onChange] = useState([]);
    // 单选
    const pipelineS = useTablePipeline({ components: antd })
        .input({ dataSource: dataSource, columns: columns })
        .primaryKey('id')
        .use(
            features.singleSelect({
                value,
                onChange: (value) => {
                    onChange(value);
                    props.onSelect({ keys: value });
                },
                clickArea: 'row',
                radioColumn: { width: 40 },
            })
        )
    // 多选
    const pipelineM = useTablePipeline({ components: antd })
        .input({ dataSource: dataSource, columns: columns })
        .primaryKey('id')
        .use(
            features.multiSelect({
                value,
                onChange: (value) => {
                    onChange(value);
                    props.onSelect({ keys: value });
                },
                clickArea: 'row',
                checkboxColumn: { width: 60 },
            })
        )
    
    const pipeline = props.selectType ==='single' ? pipelineS : pipelineM;
    const antTable = {
        backgroundColor:'#ff0000'
    }

    return (<AntdBaseTable {...pipeline.getProps()} style={props.style} className='bordered compact'/>)
}