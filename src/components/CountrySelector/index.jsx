import React, { useEffect, forwardRef, useImperativeHandle, useRef, useState } from "react";
//  import { Select } from 'antd';
//  const { Option } = Select;
import Select, { Option } from 'rc-select';
import './index.less';

export default forwardRef((props, ref) => {
  const selectRef = useRef();
  const [selectValue, setSelectValue] = useState(props.value);
  const optionValue = [
    { cnName: '中国', enName: "China", code: "cn" },
    { cnName: '日本', enName: "Japan", code: "jp" },
    { cnName: '美国', enName: "USA", code: "us" },
    { cnName: '德国', enName: "Germany", code: "de" },
    { cnName: '爱尔兰', enName: "Ireland", code: "ir" },
  ];

  var index = optionValue.findIndex((item) => item.enName == props.value);
  console.log({ index });

  useEffect(() => {
    focus();
    console.log(index);
  }, []);

  const focus = () => {
    window.setTimeout(() => {
      selectRef.current.focus();
    });
  };

  const onChange = (value, option) => {
    console.log('onChange', value, option);
    setSelectValue(value);
  }

  const onSelect = (value, option) => {
    console.log('onSelect', value, option);
    setSelectValue(value);
  }

  const onSearch = (text) => {
    console.log('onSearch:', text);
  };

  const onKeyDown = e => {
    console.log('onKeyDown:', e.keyCode, e.key);
    // if (e.keyCode === 13 || e.keyCode === 9) {
    //   let t = e.target;
    //   console.log('onKeyDown-Value:', t.value);
    //   console.log('onKeyDown-Obj:', t);
    //   //setSelectValue("China");
    //   //console.log('onKeyDown:', e.currentTarget);
    //   // console.log('onEnter', selectValue);
    //   window.setTimeout(() => {
    //     // console.log('onKeyDown:', e.target.value);
    //     console.log(t.value)
    //     setSelectValue(t.value);
    //   }, 1000);
    // }

    if (e.key === 'ArrowUp') {
      index--;
      console.log(index);
      //setSelectValue(optionValue[index]?.enName);
    }
    if (e.key === 'ArrowDown') {
      index++;
      console.log(index);
      //setSelectValue(optionValue[index]?.enName);
    }

    // if ([38, 40].indexOf(e.keyCode) > -1) {// up and down
    //   setSelectValue("USA");
    // }
    //e.stopPropagation();
  };

  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return selectValue;
      },
      isPopup() {
        return true;
      },
      isCancelBeforeStart() {
        return false;
      },
      isCancelAfterEnd() {
        return true;
      }
    };
  });

  return <Select
    ref={selectRef}
    showSearch
    //defaultValue={props.value}
    showArrow={false}
    style={{ width: '100%' }}
    //onChange={onChange}
    //onSelect={onSelect}
    onSearch={onSearch}
    //optionLabelProp="value"
    onInputKeyDown={onKeyDown}
    value={selectValue}
    mode="combobox"
    backfill
  >
    {optionValue.map((item) => {
      return <Option key={item.code} value={item.enName} label={item.cnName}>
        {item.cnName} - {item.enName}
      </Option>
    })}
  </Select>;
})


