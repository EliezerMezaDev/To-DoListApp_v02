import { Component, inject } from '@angular/core';

//? OWN
import { task } from './interfaces';
import { TaskService } from './services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public viewConfig: any = {
    title: 'toDoListAppV02',
  };

  public taskList?: task[];

  private taskService = inject(TaskService);
  private taskSubjectSubscription: Subscription;

  constructor() {
    this.taskSubjectSubscription = this.taskService
      .getAllTask()
      .subscribe((resp) => {
        this.taskList = resp;
      });
  }

  ngDestroy() {
    this.taskSubjectSubscription.unsubscribe();
  }

  // get taskList() {

  //   this.taskService.getAllTask().subscribe((response: task[]) => {
  //     this.
  //   });
  // }
}
