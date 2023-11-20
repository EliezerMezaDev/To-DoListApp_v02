import { task_status } from '../interfaces';
import { traductions } from '../utils/traductions';

export const formOptions: { name: string; value: task_status }[] = [
  { value: 'empty', name: traductions['empty'] },
  { value: 'in-progress', name: traductions['in-progress'] },
  { value: 'finished', name: traductions['finished'] },
];
