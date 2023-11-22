import { Injectable } from '@angular/core';
import { filter_status, orders, task, task_status } from '../interfaces';

import { BehaviorSubject, Observable } from 'rxjs';

const taskListAux: task[] = [
  {
    createdAt: new Date(),
    description: 'asdasdasd',
    id: 1,
    status: 'empty',
  },
  {
    createdAt: new Date(),
    description: 'asdasdasd 2',
    id: 2,
    status: 'empty',
  },
  {
    createdAt: new Date(),
    description: 'asdasdasd 3',
    id: 3,
    status: 'empty',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskList: task[] = [];
  private taskSubject = new BehaviorSubject<task[]>(this.taskList);

  public taskFilterSubject = new BehaviorSubject<filter_status>('all');

  constructor() {
    this.loadTaskList();
    this.setupFiltering();
  }

  public getAllTask(): Observable<task[]> {
    return this.taskSubject.asObservable();
  }

  public setupFiltering() {
    this.taskFilterSubject.subscribe((status: any) => {
      const filteredTask =
        status === 'all'
          ? this.taskList
          : this.taskList.filter((task: task) => task.status === status);

      this.taskSubject.next(filteredTask);
    });
  }

  public filterByStatus(_stauts: filter_status) {
    this.taskFilterSubject.next(_stauts);

    return this.taskSubject.asObservable();
  }

  public orderByDate(order: orders) {
    this.taskList.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return order === 'newest' ? dateA - dateB : dateB - dateA;
    });

    this.update();
  }

  public addTask(_task: task) {
    this.taskList.push(_task);

    this.update();
  }

  public removeTask(_taskID: task['id']) {
    this.taskList = this.taskList.filter((task) => task.id !== _taskID);

    this.update();
  }

  public changeTaskStatus(_taskID: task['id'], _newStatus: task_status) {
    const taskIndex: any = this.taskList.findIndex(
      (task) => task.id === _taskID
    );

    if (taskIndex === -1) return;

    this.taskList[taskIndex].status = _newStatus;

    this.update();
  }

  private update() {
    this.taskSubject.next(this.taskList);

    this.saveTaskList();
  }

  private loadTaskList() {
    const storedTask = localStorage.getItem('ToDoListAppV02_data');

    if (storedTask) {
      this.taskList = JSON.parse(storedTask);

      this.update();
    }
  }

  private saveTaskList() {
    localStorage.setItem('ToDoListAppV02_data', JSON.stringify(this.taskList));
  }
}
