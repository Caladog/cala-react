import { useEffect } from 'react'
import { notification } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

import Counter from '@/components/Counter'

function Setting() {

  return (
    <div>
      <h1>Setting</h1>
      <Counter />
      {Array(20)
        .fill('')
        .map((item, idx) => (
          <div key={idx}>Setting Item {idx + 1}</div>
        ))}
    </div>
  )
}

export default (props) => (
  <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
    <Setting />
  </KeepAlive>
)
