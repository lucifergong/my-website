import React from 'react';
import { Layout } from 'antd';
import './App.css';

const { Content } = Layout;

const CV = () => {
  return (
    <Layout style={{ 
      minHeight: '100vh', 
      background: '#ffffff',
      position: 'relative'
    }}>
      {/* 黑色横线 - 位于页面顶部1/5处 */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: '#38bdf8',
        zIndex: 10,
        boxShadow: '0 0 5px rgba(56, 189, 248, 0.5)'
      }} />
      
      <Content style={{ 
        padding: '24px',
        height: '100vh'
      }}>
        <div style={{
          width: '100%',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '10px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            padding: '0 20px'
          }}>
            {/* 头像列 */}
            <div style={{ flex: '0 0 auto' }}>
              <img 
                src="/src/assets/person.jpg" 
                alt="个人头像"
                style={{
                  width: 'auto',
                  height: '180px',
                  maxWidth: '250px'
                }}
              />
            </div>
          
          {/* 信息列1 */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'grid', gap: '15px' }}>
              <div>
                <div style={{ color: '#64748b', fontSize: '14px' }}>邮箱</div>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>gong799981307@163.com</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: '14px' }}>电话</div>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>18252071187</div>
              </div>
            </div>
          </div>
          
          {/* 信息列2 */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'grid', gap: '15px' }}>
              <div>
                <div style={{ color: '#64748b', fontSize: '14px' }}>GitHub</div>
                <a 
                  href="https://github.com/lucifergong" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: 500,
                    color: '#38bdf8',
                    textDecoration: 'none'
                  }}
                >
                  github.com/lucifergong
                </a>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: '14px' }}>ORCID</div>
                <a 
                  href="https://orcid.org/0000-0002-8014-9870" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: 500,
                    color: '#38bdf8',
                    textDecoration: 'none'
                  }}
                >
                  orcid.org/0000-0002-8014-9870
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Content>
    </Layout>
  );
};

export default CV;
