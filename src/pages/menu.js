import { useEffect } from 'react'
import { notification } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

import Counter from '@/components/Counter'

function Menu() {

  return (
    <div>
      <h1>Menu</h1>
      <Counter />
    </div>
  )
}

export default (props) => (
  <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
    <Menu />
  </KeepAlive>)