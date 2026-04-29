import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Quản lý Users - Nhóm 01</h1>
      <p>Thành viên tham gia: Nguyễn Văn A, Trần Thị B, Lê Văn C</p>
      <hr />
      <nav>
        <ul>
          <li><Link to="/page1">Ví dụ 1: DataTable Đơn giản</Link></li>
          <li><Link to="/page2">Ví dụ 2: Ngôn ngữ & Export</Link></li>
          <li><Link to="/page3">Ví dụ 3: Load Data Ajax (Server Side)</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;