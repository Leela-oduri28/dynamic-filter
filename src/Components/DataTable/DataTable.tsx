import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import type { Employee } from '../../Types/employee';

interface Props {
  data: Employee[];
}

const DataTable = ({ data }: Props) => {
  if (data.length === 0) {
    return <Typography>No results found</Typography>;
  }

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Department</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>City</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((emp) => (
          <TableRow key={emp.id}>
            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.department}</TableCell>
            <TableCell>{emp.salary}</TableCell>
            <TableCell>{emp.isActive ? 'Yes' : 'No'}</TableCell>
            <TableCell>{emp.address.city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
