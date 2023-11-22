import { Component, inject } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

import { orders } from 'src/app/interfaces';
import { orderOptions } from 'src/app/config/options';

@Component({
  selector: 'app-task-orders',
  templateUrl: './task-orders.component.html',
  styleUrls: ['./task-orders.component.scss'],
})
export class TaskOrdersComponent {
  private taskService = inject(TaskService);

  public selectedOrder: { value: orders; name: string } = orderOptions[0];
  public orderOptions = orderOptions;

  orderByDate(_selectedOrder: { value: orders; name: string }) {
    this.selectedOrder = _selectedOrder;

    this.taskService.orderByDate(this.selectedOrder.value);
  }
}
