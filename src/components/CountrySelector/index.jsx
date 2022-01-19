import React, { useEffect, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Select, { Option } from 'rc-select';
import './index.less';

export default forwardRef((props, ref) => {
  const selectRef = useRef()
  //const [selectValue, setSelectValue] = useState(props.value)
  const optionValue = [
    { cnName: '中国', enName: 'China', code: 'cn' },
    { cnName: '日本', enName: 'Japan', code: 'jp' },
    { cnName: '美国', enName: 'USA', code: 'us' },
    { cnName: '德国', enName: 'Germany', code: 'de' },
    { cnName: '爱尔兰', enName: 'Ireland', code: 'ir' },
    { cnName: '中国', enName: 'Chinas', code: 'cns' },
    { cnName: '日本', enName: 'Japans', code: 'jps' },
    { cnName: '美国', enName: 'USAs', code: 'uss' },
    { cnName: '德国', enName: 'Germanys', code: 'des' },
    { cnName: '爱尔兰', enName: 'Irelands', code: 'irs' }
  ]

  useEffect(() => {
    focus()
  }, [])

  const focus = () => {
    window.setTimeout(() => {
      selectRef.current.focus()
    })
  }

  ////回写值
  const setValue = (value) => {
    props.api.forEachNodeAfterFilterAndSort(function (rowNode) {
      if (rowNode.rowIndex === props.rowIndex) {
        rowNode.setDataValue(props.column.colId, value || props.value);
      }
    })
  }

  const onBlur = (e) => {
    setValue(e.target.value);
  }

  const onSelect = (value) => {
    setValue(value);
  }

  const onSearch = (text) => {
    console.log('onSearch:', text)
  }

  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return ''
      },
      isPopup() {
        return true
      }
    }
  })

  return (
    <Select
      ref={selectRef}
      showSearch
      showArrow={false}
      style={{ width: '100%' }}
      onSelect={onSelect}
      onSearch={onSearch}
      onBlur={onBlur}
      defaultValue={props.value}
      mode="combobox"
      backfill
    >
      {optionValue.map((item) => {
        return (
          <Option key={item.code} value={item.enName} label={item.cnName}>
            {item.cnName} - {item.enName}
          </Option>
        )
      })}
    </Select>
  )
})
