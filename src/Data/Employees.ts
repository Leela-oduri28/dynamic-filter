import type { Employee } from '../Types/employee';

const baseEmployees: Employee[] = [
  {
    id: 1,
    name: 'John Smith',
    department: 'Engineering',
    salary: 90000,
    isActive: true,
    address: { city: 'San Francisco' },
  },
  {
    id: 2,
    name: 'Sarah Lee',
    department: 'Design',
    salary: 75000,
    isActive: false,
    address: { city: 'New York' },
  },
  {
    id: 3,
    name: 'Amit Kumar',
    department: 'Engineering',
    salary: 105000,
    isActive: true,
    address: { city: 'Bangalore' },
  },
  {
    id: 4,
    name: 'Emily Watson',
    department: 'HR',
    salary: 65000,
    isActive: true,
    address: { city: 'London' },
  },
  {
    id: 5,
    name: 'Carlos Mendes',
    department: 'Finance',
    salary: 85000,
    isActive: false,
    address: { city: 'Toronto' },
  },
];

// ✅ Generate 50 records
export const employees: Employee[] = Array.from({ length: 50 }, (_, index) => {
  const base = baseEmployees[index % baseEmployees.length];

  return {
    ...base,
    id: index + 1,
    name: `${base.name} ${index + 1}`,
    salary: base.salary + (index % 5) * 3000,
    isActive: index % 2 === 0,
  };
});
