import type { FilterCondition } from '../Types/filters';

// Applies all active filters to the dataset
// Uses AND logic across different filter fields
export function applyFilters<T extends Record<string, any>>(
  data: T[],
  filters: FilterCondition[]
): T[] {
  if (filters.length === 0) return data;

  return data.filter((item) =>
    filters.every((filter) => {
      if (!filter.field) return true;

      // Support nested fields like "address.city"
      const value = filter.field
        .split('.')
        .reduce((acc, key) => acc?.[key], item);

      if (value === undefined || value === null) return false;

      switch (filter.operator) {
        case 'contains':
          return String(value)
            .toLowerCase()
            .includes(String(filter.value).toLowerCase());

        case 'greater_than':
          return Number(value) > Number(filter.value);

        case 'equals':
          return String(value) === String(filter.value);

        default:
          return true;
      }
    })
  );
}
