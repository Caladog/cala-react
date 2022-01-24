import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import happyIcon from '@/assets/icon/happy.png';
import angryIcon from '@/assets/icon/angry.png';
import sadIcon from '@/assets/icon/sad.png';
import laughIcon from '@/assets/icon/laugh.png';
import './index.less';

export default forwardRef((props, ref) => {

  const moodData = [
    { value: 'Happy', icon: happyIcon },
    { value: 'Angry', icon: angryIcon },
    { value: 'Sad', icon: sadIcon },
    { value: 'Laugh', icon: laughIcon }
  ];

  const [mood, setMood] = useState(props.value);
  const [editing, setEditing] = useState(true);
  const refContainer = useRef(null);

  useEffect(() => {
    focus();
  }, []);

  const checkAndToggleMoodIfLeftRight = (event) => {
    let index = moodData.findIndex((item) => item.value == mood);//获取当前元素下标

    if (event.keyCode == 37) {// left      
      if (index > 0) {
        setMood(moodData[index - 1].value);//设置心情值
        moodStyle(index - 1);//设置心情样式
      }
    }

    if (event.keyCode == 39) {// right
      if (index < moodData.length-1) {
        setMood(moodData[index + 1].value);//设置心情值
        moodStyle(index + 1);//设置心情样式
      }
    }
    event.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('keydown', checkAndToggleMoodIfLeftRight);

    return () => {
      window.removeEventListener('keydown', checkAndToggleMoodIfLeftRight);
    };
  }, [checkAndToggleMoodIfLeftRight]);

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return mood;
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

  const moodStyle = (index) => {
    return moodData[index].value == mood ? 'selected' : 'default';
  }

  return (
    <div
      ref={refContainer}
      className="moodSelector"
      tabIndex={1} // important - without this the key presses wont be caught
    >
      {moodData.map((item, index) => {
        return (<img
          key={index}
          src={item.icon}
          onClick={() => {
            setMood(item.value);
            setEditing(false);
          }}
          className={moodStyle(index)}
        />)
      })}
    </div>
  );
});

{/* <img
  src={happyIcon}
  onClick={() => {
    setHappy(true);
    setEditing(false);
  }}
  className={happyStyle}
/>
<img
  src={angryIcon}
  onClick={() => {
    setHappy(false);
    setEditing(false);
  }}
  className={sadStyle}
/>
<img
  src={sadIcon}
  onClick={() => {
    setHappy(true);
    setEditing(false);
  }}
  className={happyStyle}
/>
<img
  src={laughIcon}
  onClick={() => {
    setHappy(false);
    setEditing(false);
  }}
  className={sadStyle}
/> */}