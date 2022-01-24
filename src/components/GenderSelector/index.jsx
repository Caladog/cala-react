import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

export default forwardRef((props, ref) => {

  const countryData  = [
    { cnName: '中国', enName: 'China', code: 'cn' },
    { cnName: '日本', enName: 'Japan', code: 'jp' },
    { cnName: '美国', enName: 'USA', code: 'us' },
    { cnName: '德国', enName: 'Germany', code: 'de' },
    { cnName: '爱尔兰', enName: 'Ireland', code: 'ir' },
    { cnName: '马来西亚', enName: 'Malaysia', code: 'ma' },
    { cnName: '印度尼西亚', enName: 'Indonesia', code: 'id' }
  ]

  const [country, setCountry] = useState(props.value);
  const [editing, setEditing] = useState(true);
  const refContainer = useRef(null);

  useEffect(() => {
    focus();
  }, []);

  const checkAndToggleTopDown = (event) => {
    let index = countryData.findIndex((item) => item.code == country) || 0;//获取当前元素下标

    if (event.keyCode == 38) {// up    
      if (index > 0) {
        setCountry(countryData[index - 1].code);
        countryStyle(index - 1);
      }
    }

    if (event.keyCode == 40) {// down
      if (index < countryData.length-1) {
        setCountry(countryData[index + 1].code);
        countryStyle(index + 1);
      }
    }
    event.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('keydown', checkAndToggleTopDown);
    return () => {
      window.removeEventListener('keydown', checkAndToggleTopDown);
    };
  }, [checkAndToggleTopDown]);

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return country;
      },
      isPopup() {
        return true;
      },
      isCancelBeforeStart() {
        return false;
      },
      isCancelAfterEnd() {
        return false;
      }
    };
  });

  useEffect(() => {
    if (!editing) {
      props.api.stopEditing();
    }
  }, [editing]);

  const focus = () => {
    window.setTimeout(() => {
      let container = ReactDOM.findDOMNode(refContainer.current);
      if (container) {
        container.focus();
      }
    });
  };

  const countryStyle = (index) => {
    return countryData[index].code == country ? 'selected' : 'default';
  }

  return (
    <div
      ref={refContainer}
      className="countrySelector"
      tabIndex={1} 
    >
      <input className="search" type="text" onChange={(v) =>{console.log(v.target.value)}}/>
      {countryData.map((item, index) => {
        return (<div
          onClick={() => {
            setCountry(item.code);
            setEditing(false);
          }}
          className={countryStyle(index)}
          >
            {item.cnName} - {item.enName} - {item.code}
        </div>)
      })}
    </div>
  );
});
