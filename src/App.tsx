import { Container, Typography, Divider } from '@mui/material';
import { useMemo, useState } from 'react';
import FilterBuilder from './Components/FilterBuilder/FilterBuilder';
import DataTable from './Components/DataTable/DataTable';
import { employees } from './Data/Employees';
import type { FilterCondition } from './Types/filters';
import { applyFilters } from './Utils/ApplyFilters';

function App() {
  const [filters, setFilters] = useState<FilterCondition[]>([]);

  const filteredData = useMemo(
    () => applyFilters(employees, filters),
    [filters]
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Dynamic Filter System
      </Typography>

      <FilterBuilder onChange={setFilters} />

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2" gutterBottom>
        Showing {filteredData.length} of {employees.length} records
      </Typography>

      <DataTable data={filteredData} />
    </Container>
  );
}

export default App;
