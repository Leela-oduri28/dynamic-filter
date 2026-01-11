import type { FieldType, Operator } from '../Types/filters';

export interface FilterFieldConfig {
  label: string;
  field: string;
  type: FieldType;
  operators: Operator[];
}

export const FILTER_FIELDS: FilterFieldConfig[] = [
  {
    label: 'Name',
    field: 'name',
    type: 'text',
    operators: ['contains'],
  },
  {
    label: 'Salary',
    field: 'salary',
    type: 'number',
    operators: ['greater_than'],
  },
  {
    label: 'Active',
    field: 'isActive',
    type: 'boolean',
    operators: ['equals'],
  },
];
