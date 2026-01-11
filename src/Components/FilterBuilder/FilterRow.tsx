import {
  Stack,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { FilterCondition, Operator } from '../../Types/filters';
import { FILTER_FIELDS } from '../../Config/FilterConfig';
import FilterInput from './FilterInput';

interface Props {
  filter: FilterCondition;
  onChange: (filter: FilterCondition) => void;
  onRemove: (id: string) => void;
}

const FilterRow = ({ filter, onChange, onRemove }: Props) => {
  const fieldConfig = FILTER_FIELDS.find(
    (f) => f.field === filter.field
  );

  const handleFieldChange = (field: string) => {
    const config = FILTER_FIELDS.find((f) => f.field === field);

    if (!config) return;

    onChange({
      ...filter,
      field,
      type: config.type,
      operator: config.operators[0],
      value: '',
    });
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {/* Field Selector */}
      <Select
        value={filter.field}
        onChange={(e) => handleFieldChange(e.target.value)}
        displayEmpty
        size="small"
        sx={{ minWidth: 160 }}
      >
        <MenuItem value="" disabled>
          Select Field
        </MenuItem>
        {FILTER_FIELDS.map((field) => (
          <MenuItem key={field.field} value={field.field}>
            {field.label}
          </MenuItem>
        ))}
      </Select>

      {/* Operator Selector */}
      <Select
        value={filter.operator}
        onChange={(e) =>
          onChange({ ...filter, operator: e.target.value as Operator })
        }
        size="small"
        sx={{ minWidth: 140 }}
        disabled={!fieldConfig}
      >
        {fieldConfig?.operators.map((op) => (
          <MenuItem key={op} value={op}>
            {op.replace('_', ' ')}
          </MenuItem>
        ))}
      </Select>

      {/* Value Input */}
      <FilterInput filter={filter} onChange={onChange} />

      {/* Remove */}
      <IconButton onClick={() => onRemove(filter.id)}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default FilterRow;
