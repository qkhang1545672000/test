import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';
import { mockUsers } from '../data/userData';

export const Page2 = () => {
  useEffect(() => {
    $('#exportTable').DataTable({
      dom: 'Bfrtip',
      buttons: ['excel', 'pdf', 'print'],
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json'
      }
    });
  }, []);

  return (
    <div className="container">
      <h2>DataTable: Export & Tiếng Việt</h2>
      <table id="exportTable" className="display">
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