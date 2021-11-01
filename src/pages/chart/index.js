import { useEffect } from 'react'
import { notification } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

function Chart() {
  return (
    <div>
      <h1>Chart</h1>
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
