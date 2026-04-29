import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt';
import { mockUsers } from '../data/userData';

export const Page1 = () => {
  useEffect(() => {
    $('#userTable').DataTable();
  }, []);

  return (
    <div className="container">
      <h2>DataTable Đơn giản</h2>
      <table id="userTable" className="display">
        <thead>
          <tr><th>ID</th><th>Tên</th><th>Email</th><th>Phone</th><th>Lớp</th></tr>
        </thead>
        <tbody>
          {mockUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};