import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

export default forwardRef((props, ref) => {
  const isHappy = (value) => value === 'Happy';

  const [happy, setHappy] = useState(isHappy(props.value));
  const [editing, setEditing] = useState(true);
  const refContainer = useRef(null);

  useEffect(() => {
    focus();
  }, []);

  const checkAndToggleMoodIfLeftRight = (event) => {
    if ([37, 39].indexOf(event.keyCode) > -1) {// left and right
      setHappy(!happy);
      event.stopPropagation();
    }
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
        return happy ? 'Happy' : 'Sad';
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

  const happyStyle = happy ? 'selected' : 'default';
  const sadStyle = !happy ? 'selected' : 'default';

  return (
    <div
      ref={refContainer}
      className="mood"
      tabIndex={1} // important - without this the key presses wont be caught
    >
      <img
        src="https://www.ag-grid.com/example-assets/smileys/happy.png"
        onClick={() => {
          setHappy(true);
          setEditing(false);
        }}
        className={happyStyle}
      />
      <img
        src="https://www.ag-grid.com/example-assets/smileys/sad.png"
        onClick={() => {
          setHappy(false);
          setEditing(false);
        }}
        className={sadStyle}
      />
    </div>
  );
});