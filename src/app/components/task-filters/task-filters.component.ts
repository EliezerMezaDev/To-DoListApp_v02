import { Component, inject } from '@angular/core';

//? SERVICES
import { TaskService } from 'src/app/services/task.service';

import { filter_status } from 'src/app/interfaces';
import { filterOptions } from 'src/app/config/options';
import { traductions } from 'src/app/utils/traductions';

@Component({
  selector: 'app-task-filters',
  templateUrl: './task-filters.component.html',
  styleUrls: ['./task-filters.component.scss'],
})
export class TaskFiltersComponent {
  public selectedStatus: { name: string; value: filter_status } =
    filterOptions[0];

  private taskService = inject(TaskService);
  public filterOptions = filterOptions;

  constructor() {
    this.taskService.taskFilterSubject.pipe().subscribe((filter) => {
      this.selectedStatus = { name: traductions[filter], value: filter };
    });
  }

  public filterByStatus(_selectedStatus: {
    name: string;
    value: filter_status;
  }) {
    this.taskService.filterByStatus(_selectedStatus.value);
  }
}
