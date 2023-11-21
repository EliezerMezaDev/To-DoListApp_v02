import { Injectable } from '@angular/core';
import { task, task_status } from '../interfaces';

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
  private taskObserver = new BehaviorSubject<task[]>(this.taskList);

  constructor() {
    this.loadTaskList();
  }

  public getAllTask(): Observable<task[]> {
    return this.taskObserver.asObservable();
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
    this.taskObserver.next(this.taskList);

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
