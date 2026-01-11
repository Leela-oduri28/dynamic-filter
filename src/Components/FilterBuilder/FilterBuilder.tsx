import { useState } from 'react';
import { Button, Stack } from '@mui/material';
import FilterRow from './FilterRow';
import type { FilterCondition } from '../../Types/filters';

// simple id generator (no extra dependency)
const generateId = () => Math.random().toString(36).substring(2, 9);

interface Props {
  onChange: (filters: FilterCondition[]) => void;
}

const FilterBuilder = ({ onChange }: Props) => {
  const [filters, setFilters] = useState<FilterCondition[]>([]);

  const addFilter = () => {
    const updated: FilterCondition[] = [
      ...filters,
      {
        id: generateId(),
        field: '',
        type: 'text',
        operator: 'contains',
        value: '',
      } as FilterCondition,
    ];

    setFilters(updated);
    onChange(updated);
  };

  const updateFilter = (updatedFilter: FilterCondition) => {
    const updated = filters.map((f) =>
      f.id === updatedFilter.id ? updatedFilter : f
    );

    setFilters(updated);
    onChange(updated);
  };

  const removeFilter = (id: string) => {
    const updated = filters.filter((f) => f.id !== id);

    setFilters(updated);
    onChange(updated);
  };

  return (
    <Stack spacing={2}>
      {filters.map((filter) => (
        <FilterRow
          key={filter.id}
          filter={filter}
          onChange={updateFilter}
          onRemove={removeFilter}
        />
      ))}

      <Button variant="outlined" onClick={addFilter}>
        Add Filter
      </Button>
    </Stack>
  );
};

export default FilterBuilder;
