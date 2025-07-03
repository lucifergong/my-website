import { Layout, Menu, Card, Avatar, Typography, Row, Col } from 'antd';
import { 
  UserOutlined, 
  FileTextOutlined, 
  ReadOutlined, 
  EditOutlined, 
  ProjectOutlined,
  GithubOutlined, 
  TwitterOutlined, 
  MailOutlined 
} from '@ant-design/icons';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(10px)',
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
          <Menu.Item key="1" icon={<UserOutlined />}>Home</Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>CV</Menu.Item>
          <Menu.Item key="3" icon={<ReadOutlined />}>Publications</Menu.Item>
          <Menu.Item key="4" icon={<EditOutlined />}>Blog</Menu.Item>
          <Menu.Item key="5" icon={<ProjectOutlined />}>Projects</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ 
          padding: 0,
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(56, 189, 248, 0.1)'
        }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ 
            padding: 24,
            minHeight: 360,
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: '1px solid rgba(56, 189, 248, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Card bordered={false}>
                  <Card.Meta
                    avatar={<Avatar size={100} icon={<UserOutlined />} />}
                    title={<Title level={2}>您的姓名</Title>}
                    description={
                      <Paragraph type="secondary">
                        教授 | 研究机构名称
                      </Paragraph>
                    }
                  />
                  <div style={{ marginTop: '24px' }}>
                    <Paragraph>
                      这里可以填写您的个人简介、研究方向等信息。详细介绍您的研究领域、学术背景和主要成就。
                    </Paragraph>
                    <div style={{ marginTop: '16px' }}>
                      <a href="#" style={{ marginRight: '16px' }}><GithubOutlined /></a>
                      <a href="#" style={{ marginRight: '16px' }}><TwitterOutlined /></a>
                      <a href="#"><MailOutlined /></a>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ 
          textAlign: 'center',
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(56, 189, 248, 0.1)',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          个人学术主页 ©2025 - 由React和Ant Design构建
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
