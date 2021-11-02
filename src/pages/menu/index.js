import react, { useEffect } from 'react'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'
import { Form, Button, Input, Select, Row, Col } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

const TextEdit = () => {
  const controls = 
  [
    'undo', 'redo', 'separator',
    'font-size', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'remove-styles', 'separator', 
    'text-align', 'separator',
    'code', 'separator',
    'link', 'separator', 
    'media', 'separator',
    'clear', 'separator',
    'fullscreen'
]

  const handleSubmit = (event) => {
    //提交表单
    console.log(event.title)
    console.log(event.type)
    console.log(event.keywords)
    console.log(event?.content.toHTML() || '')
    //console.log(event.content.toRAW())
  }
  return (
    <Form onFinish={handleSubmit}>
      <Row>
        <Col span={12}>
          <Form.Item label="文章标题" name="title" labelCol={{ span: 3 }}>
            <Input size="large" placeholder="请输入标题" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item label="文章分类" name="type" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
            <Select size="large" placeholder="请选择分类">
              <Option value="t1">分类一</Option>
              <Option value="t2">分类二</Option>
              <Option value="t3">分类三</Option>
              <Option value="t4">分类四</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="关 键 字" name="keywords" labelCol={{ span: 6 }}>
            <Select size="large" mode="tags" open={false} placeholder="请输入关键字"></Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={18}>
          <Form.Item label="文章正文" name="content" labelCol={{ span: 2 }}>
            <BraftEditor
              controls={controls}
              placeholder="请输入正文内容"
              style={{ border: '1px solid #d1d1d1', borderRadius: '5px' }}
              contentStyle={{ background: '#ffffff' }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24} offset={2}>
          <Form.Item>
            <Button size="large" type="primary" htmlType="submit"> 提 交 </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default (props) => (
  <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
    <TextEdit />
  </KeepAlive>)