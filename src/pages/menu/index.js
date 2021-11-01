import { useEffect } from 'react'
import { Badge } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'


export default (props) => (
  <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
    <Badge color="#108ee9" text="#108ee9" />
  </KeepAlive>)