import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { DatePipe } from './pipes/date.pipe';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ArrowComponent } from './components/dropdown/components/arrow.components';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    DatePipe,
    TaskFormComponent,
    DropdownComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
