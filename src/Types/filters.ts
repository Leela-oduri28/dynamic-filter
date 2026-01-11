export type FieldType = 'text' | 'number' | 'boolean';

export type Operator =
  | 'contains'
  | 'greater_than'
  | 'equals';

export interface FilterCondition {
  id: string;
  field: string;
  type: FieldType;
  operator: Operator;
  value: string | number | boolean;
}
