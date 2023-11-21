import { filter_status, orders, task_status } from '../interfaces';
import { traductions } from '../utils/traductions';

export const formOptions: { name: string; value: task_status }[] = [
  { value: 'empty', name: traductions['empty'] },
  { value: 'in-progress', name: traductions['in-progress'] },
  { value: 'finished', name: traductions['finished'] },
];

export const filterOptions: { name: string; value: filter_status }[] = [
  { value: 'all', name: traductions['all'] },
  ...formOptions,
];

export const orderOptions: { name: string; value: orders }[] = [
  { value: 'newest', name: 'Recientes' },
  { value: 'oldest', name: 'Antiguos' },
];
