import React, { useEffect, forwardRef, useImperativeHandle, useRef, useState } from "react";
import AsyncSelect from 'react-select/async';

export default forwardRef((props, ref) => {
  const selectRef = useRef();
  const [selectValue, setSelectValue] = useState(props.value);
  const optionValue = [
    {cnName:'中国',enName:"China",code:"cn"},
    {cnName:'日本',enName:"Japan",code:"jp"},
    {cnName:'美国',enName:"USA",code:"us"},
    {cnName:'德国',enName:"Germany",code:"de"},
    {cnName:'爱尔兰',enName:"Ireland",code:"ir"},
  ];
  var eValue = '';

  useEffect(() => {
    focus();
  }, []);

  const focus = () => {
    window.setTimeout(() => {
      selectRef.current.focus();
    });
  };

  const promiseOptions = [{ value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' }]

  const onKeyDown = e => {    
    if ([38, 40].indexOf(e.keyCode) > -1) {
      Promise.resolve().then(() => {
        console.log(selectRef.current.state.focusedOption?.value);
        eValue = selectRef.current.state.focusedOption?.value;
        setSelectValue(selectRef.current.state.focusedOption?.value);
      });
      ///e.stopPropagation();
    }
    if([9, 13].indexOf(e.keyCode) > -1) {//// TAB & ENTER
      console.log(e.keyCode,eValue);
      setSelectValue(eValue);
    }
  };

  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return selectValue;
      },  
      isPopup() {
        return true;
      },
    };
  });

  return <AsyncSelect ref={selectRef} defaultOptions={promiseOptions} onKeyDown={onKeyDown}  style={{width:'200px'}}/>;
})


