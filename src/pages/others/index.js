import { KeepAlive, } from 'react-activation';
import { Card, Badge, Typography, Divider, Tag, Row, Col, Button } from 'antd';
const { Text } = Typography;
import Fieldset from '../../components/Fieldset';

export default (props) => (
  <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
    <Card>
      <Row gutter={24}>
        <Col md={6}>
          <Divider orientation="left">Custom Badge</Divider>
          <Badge color="#D7D7D7" text={<Text style={{ color: '#999999' }}>未开始</Text>} />
          <br /><br />
          <Badge color="#1890FF" text={<Text style={{ color: '#1890FF' }}>进行中</Text>} />
          <br /><br />
          <Badge color="#52C41A" text={<Text style={{ color: '#52C41A' }}>已通过</Text>} />
          <br /><br />
          <Badge color="#FAAD14" text={<Text style={{ color: '#FAAD14' }}>已驳回</Text>} />
          <br /><br />
          <Badge color="#FF4D4F" text={<Text style={{ color: '#FF4D4F' }}>已删除</Text>} />
          <br /><br />
          <Badge color="#6739B6" text={<Text style={{ color: '#6739B6' }}>深紫色</Text>} />
          <br /><br />
          <Badge color="#E03997" text={<Text style={{ color: '#E03997' }}>玫红色</Text>} />
          <br /><br />
          <Badge color="#1CBBB4" text={<Text style={{ color: '#1CBBB4' }}>藏青色</Text>} />
          <br /><br />
          <Badge color="#A5673F" text={<Text style={{ color: '#A5673F' }}>棕褐色</Text>} />
          <br /><br />
        </Col>
        <Col md={6}>
          <Divider orientation="left">Custom Tag</Divider>
          <Tag color="#D7D7D7">未开始</Tag>
          <br /><br />
          <Tag color="#1890FF">进行中</Tag>
          <br /><br />
          <Tag color="#52C41A">已通过</Tag>
          <br /><br />
          <Tag color="#FAAD14">已驳回</Tag>
          <br /><br />
          <Tag color="#FF4D4F">已删除</Tag>
          <br /><br />
          <Tag color="#6739B6">深紫色</Tag>
          <br /><br />
          <Tag color="#E03997">玫红色</Tag>
          <br /><br />
          <Tag color="#1CBBB4">藏青色</Tag>
          <br /><br />
          <Tag color="#A5673F">棕褐色</Tag>
          <br /><br />
        </Col>
        <Col md={6}>
          <Divider orientation="left">Custom Button</Divider>
          <Button style={{ background: '#D7D7D7', color: 'white', border: 0 }} disabled>禁用</Button>
          <br /><br />
          <Button style={{ background: '#1890FF', color: 'white', border: 0 }} >提交</Button>
          <br /><br />
          <Button style={{ background: '#52C41A', color: 'white', border: 0 }} >通过</Button>
          <br /><br />
          <Button style={{ background: '#FAAD14', color: 'white', border: 0 }} >驳回</Button>
          <br /><br />
          <Button style={{ background: '#FF4D4F', color: 'white', border: 0 }} >删除</Button>
          <br /><br />
          <Button style={{ background: '#6739B6', color: 'white', border: 0 }} >其他</Button>
          <br /><br />
          <Button style={{ background: '#E03997', color: 'white', border: 0 }} >其他</Button>
          <br /><br />
          <Button style={{ background: '#1CBBB4', color: 'white', border: 0 }} >其他</Button>
          <br /><br />
          <Button style={{ background: '#A5673F', color: 'white', border: 0 }} >其他</Button>
          <br /><br />
        </Col>
        <Col md={6}>
          <Divider orientation="left">Custom Text</Divider>
          <Text style={{ color: '#999999' }}>未开始</Text>
          <br /><br />
          <Text style={{ color: '#1890FF' }}>进行中</Text>
          <br /><br />
          <Text style={{ color: '#52C41A' }}>已通过</Text>
          <br /><br />
          <Text style={{ color: '#FAAD14' }}>已驳回</Text>
          <br /><br />
          <Text style={{ color: '#FF4D4F' }}>已删除</Text>
          <br /><br />
          <Text style={{ color: '#6739B6' }}>深紫色</Text>
          <br /><br />
          <Text style={{ color: '#E03997' }}>玫红色</Text>
          <br /><br />
          <Text style={{ color: '#1CBBB4' }}>藏青色</Text>
          <br /><br />
          <Text style={{ color: '#A5673F' }}>棕褐色</Text>
          <br /><br />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col md={6}>
          <Fieldset title="我是标题">            
            <p>我是内容1</p>
            <p>我是内容2</p>
            <p>我是内容3</p>
          </Fieldset>
        </Col>
        <Col md={12}>
          <Fieldset title="我是标题">
            <Row gutter={16} style={{marginBottom:'20px'}}>
              <Col md={6}><Button style={{ background: '#52C41A', color: 'white', border: 0 }} >通过</Button></Col> 
              <Col md={6}><Button style={{ background: '#FAAD14', color: 'white', border: 0 }} >驳回</Button></Col>  
              <Col md={6}><Button style={{ background: '#FF4D4F', color: 'white', border: 0 }} >删除</Button></Col>  
              <Col md={6}><Button style={{ background: '#6739B6', color: 'white', border: 0 }} >其他</Button></Col>  
            </Row>
            <Row gutter={16}>
              <Col md={6}><Button style={{ background: '#E03997', color: 'white', border: 0 }} >其他</Button></Col> 
              <Col md={6}><Button style={{ background: '#1CBBB4', color: 'white', border: 0 }} >其他</Button></Col>  
              <Col md={6}><Button style={{ background: '#A5673F', color: 'white', border: 0 }} >其他</Button></Col>  
            </Row>
          </Fieldset>
        </Col>
      </Row>
    </Card>
  </KeepAlive>)