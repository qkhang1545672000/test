import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt';

export const Page3 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Giả lập gọi API
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        // Khởi tạo table sau khi đã có dữ liệu trong DOM
        setTimeout(() => {
          $('#ajaxTable').DataTable();
        }, 100);
      });
  }, []);

  return (
    <div className="container">
      <h2>Load Data từ Server (Ajax)</h2>
      <table id="ajaxTable" className="display">
        <thead>
          <tr><th>ID</th><th>Tên</th><th>Email</th><th>Phone</th></tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};