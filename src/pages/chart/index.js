import { useEffect } from 'react'
import { notification } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

import Counter from '@/components/Counter'


function Chart() {

  return (
    <div>
      <h1>Chart</h1>
      <Counter />
      {Array(30)
        .fill('')
        .map((item, idx) => (
          <div key={idx}>Chart Item {idx + 1}</div>
        ))}
    </div>
  )
}

export default (props) => (
  <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
    <Chart />
  </KeepAlive>
)
