import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() placeholder?: string;
  @Input() options?: any[] = [];
  @Input() optionSelected?: any;

  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  public open: boolean = false;

  constructor(){
    

    console.log('<>>> this.options <>>>', this.options);
  }

  public toggleDropdown() {
    this.open = !this.open;
  }

  public selectOption(_option: any) {
    this.onSelect.emit(_option);

    this.open = false;
  }
}
