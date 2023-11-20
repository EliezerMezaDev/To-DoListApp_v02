import { Component, Input } from '@angular/core';

//? OWN
import { task } from 'src/app/interfaces';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() taskList?: task[] | null;
}
