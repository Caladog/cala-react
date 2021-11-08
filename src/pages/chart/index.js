import { useEffect } from 'react'
import { Row, Col, Typography, Divider, Form, Button, Input, Space, List, Tag } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'
import { GridContent } from '@ant-design/pro-layout';
import { StarTwoTone, LikeOutlined, MessageFilled } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
import styles from './index.less';

function Chart() {
  const [form] = Form.useForm();
  const onFinish = () => { }

  const listData = [{
    "id": "10001",
    "owner": "付小小",
    "title": "阿里企业级产品 Aliyun",
    "description": "其中往往存在很多类似的页面和组件，这些类似的在中台产品的研发过程中，会出现不同的设计规范和实现方式，但组件会被抽离成一套标准规范。",
    "star": 123,
    "like": 128,
    "message": 5,
    "keywords":["关键字1","关键字2","关键字3","关键字4"]
  },{
    "id": "10002",
    "owner": "付小小",
    "title": "蚂蚁企业级产品 Ant Design",
    "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
    "star": 143,
    "like": 328,
    "message": 12,
    "keywords":["关键字一","关键字二","关键字三"]
  }]

  const IconText = ({ icon, text }) => (
    <span>
      {icon} {text}
    </span>
  );
  return (
    <GridContent>
      <Row gutter={16}>
        <Col lg={24} xl={8}>
          <div style={{ background: '#ffffff', margin: '10px 20px', padding: '10px' }}>
            <Form form={form} onFinish={onFinish} style={{ width: '90%', minWidth: '270px', margin: '0px auto', marginBottom: '-24px' }}>
              <Space size={1}>
                <Form.Item name="keyword">
                  <Input placeholder="请输入要查询的关键字" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    搜 索
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </div>
          {/* 查询列表 */}
          <List
            className={styles.articleList}
            size="large"
            rowKey="id"
            itemLayout="vertical"
            dataSource={listData || []}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <IconText key="star" icon={<StarTwoTone />} text={item.star} />,
                  <IconText key="like" icon={<LikeOutlined />} text={item.like} />,
                  <IconText key="message" icon={<MessageFilled />} text={item.message} />,
                ]}
              >
                <List.Item.Meta
                  title={
                    <a href={item.href}>
                      {item.title}
                    </a>
                  }
                  description={
                    <span>
                      {item.keywords.map((item)=><Tag color='green'>{item}</Tag>)}
                    </span>
                  }
                />
                <div className={styles.description}>{item.description}</div>
              </List.Item>
            )}
          />

        </Col>
        <Col lg={24} xl={16}>
          {/* 内容详情 */}
          <Typography style={{ margin: '10px 20px', padding: '50px 100px', boxShadow: '0 0 10px 10px #e0e0e0', background: '#ffffff', minHeight: '600px' }}>
            <Title>Introduction</Title>
            <Paragraph>
              In the process of internal desktop applications development, many different design specs and
              implementations would be involved, which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design language for background
              applications, is refined by Ant UED Team, which aims to <Text strong>
                uniform the user interface specs for internal background projects, lower the unnecessary
                cost of design differences and implementation and liberate the resources of design and
                front-end development</Text>.
            </Paragraph>
            <Title level={2}>Guidelines and Resources</Title>
            <Paragraph>
              We supply a series of design principles, practical patterns and high quality design resources
              (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
              prototypes beautifully and efficiently.
            </Paragraph>

            <Divider />

            <Title>介绍</Title>
            <Paragraph>
              蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
            </Paragraph>
            <Paragraph>
              随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
              Ant Design。基于<Text mark>『确定』和『自然』</Text>
              的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
              <Text strong>更好的用户体验</Text>。
            </Paragraph>
            <Title level={2}>设计资源</Title>
            <Paragraph>
              我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
              <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <Link href="/docs/spec/proximity-cn">设计原则</Link>
                </li>
                <li>
                  <Link href="/docs/spec/overview-cn">设计模式</Link>
                </li>
                <li>
                  <Link href="/docs/resources-cn">设计资源</Link>
                </li>
              </ul>
            </Paragraph>

            <Paragraph>
              按<Text keyboard>Esc</Text>键退出阅读……
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </GridContent>
  )
}

export default (props) => (
  <KeepAlive name={props.route.name} path={props.route.path} saveScrollPosition="screen">
    <Chart />
  </KeepAlive>
)
