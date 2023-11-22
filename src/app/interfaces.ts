export interface task {
  id: String | Number;
  description: String;
  status: task_status;
  createdAt: string | Date;
}

export type task_status = 'empty' | 'in-progress' | 'finished';

export type filter_status = task_status | 'all';

export type orders = 'newest' | 'oldest';
