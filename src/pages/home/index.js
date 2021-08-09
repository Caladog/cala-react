import { KeepAlive } from 'react-activation';
import { Card, Col, Row } from 'antd';
import { Line, Bar, Liquid, Histogram } from '@ant-design/charts';

export default (props) => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 300,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  const data1 = [
    { value: 1.2 },
    { value: 3.4 },
    { value: 3.7 },
    { value: 4.3 },
    { value: 5.2 },
    { value: 5.8 },
    { value: 6.1 },
    { value: 6.5 },
    { value: 6.8 },
    { value: 7.1 },
    { value: 7.3 },
    { value: 7.7 },
    { value: 8.3 },
    { value: 8.6 },
    { value: 8.8 },
    { value: 9.1 },
    { value: 9.2 },
    { value: 9.4 },
    { value: 9.5 },
    { value: 9.7 },
    { value: 10.5 },
    { value: 10.7 },
    { value: 10.8 },
    { value: 11 },
    { value: 11 },
    { value: 11.1 },
    { value: 11.2 },
    { value: 11.3 },
    { value: 11.4 },
    { value: 11.4 },
    { value: 11.7 },
    { value: 12 },
    { value: 12.9 },
    { value: 12.9 },
    { value: 13.3 },
    { value: 13.7 },
    { value: 13.8 },
    { value: 13.9 },
    { value: 14 },
    { value: 14.2 },
    { value: 14.5 },
    { value: 15 },
    { value: 15.2 },
    { value: 15.6 },
    { value: 16 },
    { value: 16.3 },
    { value: 17.3 },
    { value: 17.5 },
    { value: 17.9 },
    { value: 18 },
    { value: 18 },
    { value: 20.6 },
    { value: 21 },
    { value: 23.4 },
  ];
  const config1 = {
    data: data1,
    binField: 'value',
    height: 300,
    binWidth: 1,
  };
  const config2 = {
    percent: 0.35,
    height: 300,
  };
  return (
    <KeepAlive name={props.route.name} path={props.route.path}>

      <div>
        <Row gutter={24}>
          <Col span={18}>
            <Card>
              <Histogram {...config1} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Liquid {...config2} />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ marginTop: 25 }}>
          <Col span={18}>
            <Card>
              <Line {...config} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Bar {...config} />
            </Card>
          </Col>
        </Row>
      </div>

    </KeepAlive>
  );
}
