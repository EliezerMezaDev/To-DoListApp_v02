import { Component, Input, inject } from '@angular/core';
import { formOptions } from 'src/app/config/options';

//? OWN
import { task, task_status } from 'src/app/interfaces';
import { TaskService } from 'src/app/services/task.service';
import { traductions } from 'src/app/utils/traductions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task?: task;

  private taskService = inject(TaskService);
  public statusOptions = formOptions;

  get optionSelected() {
    return { value: this.task?.status, name: traductions[this.task?.status!] };
  }

  public changeTaskStatus(_newStatus: { value: task_status; name: string }) {
    if (this.task?.id) {
      this.taskService.changeTaskStatus(this.task.id, _newStatus.value);
    }
  }

  public removeTask() {
    if (!this.task) return;

    this.taskService.removeTask(this.task.id);
  }
}
