import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Card, Avatar, Typography, Row, Col } from 'antd';
import { 
  UserOutlined, 
  FileTextOutlined, 
  ReadOutlined, 
  EditOutlined, 
  ProjectOutlined
} from '@ant-design/icons';
import './App.css';
import CV from './CV';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => (
  <Content style={{ margin: '24px 16px 0' }}>
    <div style={{ 
      padding: 24,
      minHeight: 360,
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid rgba(56, 189, 248, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
    }}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card bordered={false}>
            <Card.Meta
              avatar={<Avatar size={100} icon={<UserOutlined />} />}
              title={<Title level={2}>龚令朴</Title>}
              description={
                <Paragraph type="secondary">
                  凝聚态物理学博士 | 南京大学
                </Paragraph>
              }
            />
            <div style={{ marginTop: '24px' }}>
              <Paragraph>
                南京大学物理学院凝聚态物理学博士研究生，研究方向为第一性原理计算。
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  </Content>
);

function App() {
  return (
    <Router>
      <Layout style={{ 
      minHeight: '100vh',
      background: '#ffffff'
    }}>
        <Sider 
          collapsible
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            background: '#ffffff',
            borderRight: '1px solid rgba(56, 189, 248, 0.1)'
          }}
        >
          <div className="logo" style={{
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            个人学术主页
          </div>
          <Menu 
            theme="dark" 
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FileTextOutlined />}>
              <Link to="/cv">CV</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ReadOutlined />}>
              <Link to="/publications">Publications</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<EditOutlined />}>
              <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<ProjectOutlined />}>
              <Link to="/projects">Projects</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ 
            padding: 0,
            background: '#ffffff',
            borderBottom: '1px solid rgba(56, 189, 248, 0.1)'
          }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
          <Footer style={{ 
            textAlign: 'center',
            background: '#ffffff',
            borderTop: '1px solid rgba(56, 189, 248, 0.1)',
            color: 'rgba(0, 0, 0, 0.7)'
          }}>
            个人学术主页 ©2025 - 由React和Ant Design构建
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
