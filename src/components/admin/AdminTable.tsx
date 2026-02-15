import { Paper } from "@mui/material";

interface AdminTableProps {}

const AdminTable: React.FC<AdminTableProps> = () => (
  <Paper sx={{ p: 3 }}>
    <h2>Admin Dashboard</h2>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{/* Real data from Firestore */}</tbody>
    </table>
  </Paper>
);

export default AdminTable;
