import { TextField, Checkbox } from '@mui/material';
import type { FilterCondition } from '../../Types/filters';

interface Props {
  filter: FilterCondition;
  onChange: (filter: FilterCondition) => void;
}

const FilterInput = ({ filter, onChange }: Props) => {
  if (!filter.field) return null;

  switch (filter.type) {
    case 'number':
      return (
        <TextField
          type="number"
          size="small"
          value={filter.value}
          onChange={(e) =>
            onChange({ ...filter, value: Number(e.target.value) })
          }
        />
      );

    case 'boolean':
      return (
        <Checkbox
          checked={Boolean(filter.value)}
          onChange={(e) =>
            onChange({ ...filter, value: e.target.checked })
          }
        />
      );

    default:
      return (
        <TextField
          size="small"
          value={filter.value}
          onChange={(e) =>
            onChange({ ...filter, value: e.target.value })
          }
        />
      );
  }
};

export default FilterInput;
