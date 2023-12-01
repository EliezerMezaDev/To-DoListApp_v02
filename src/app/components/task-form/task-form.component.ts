import { Component, inject } from '@angular/core';

//? SERVICES
import { TaskService } from 'src/app/services/task.service';

//? OTHERS
import { task, task_status } from 'src/app/interfaces';
import { formOptions } from 'src/app/config/options';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  private taskService = inject(TaskService);

  public newTaskDescription: string = '';
  public newTaskStatus: { value: task_status; name: string } = formOptions[0];

  public statusOptions = formOptions;

  public mainFocus() {
    document.getElementById('formDescription')?.focus();
  }

  public changeStatus(_newStatus: { value: task_status; name: string }) {
    this.newTaskStatus = _newStatus;
  }

  public addTask() {
    if (this.newTaskDescription == '') return;

    const newTask: task = {
      id: Math.random(),
      description: this.newTaskDescription,
      status: this.newTaskStatus.value,
      createdAt: new Date(),
    };

    this.taskService.addTask(newTask);

    this.newTaskDescription = '';
    this.newTaskStatus = formOptions[0];
  }
}
