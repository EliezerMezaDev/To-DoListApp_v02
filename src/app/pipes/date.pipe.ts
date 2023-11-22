import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DatePipe implements PipeTransform {
  transform(_value: string | Date, ...args: unknown[]): String {
    let inputDate: Date;

    if (typeof _value == 'string') {
      inputDate = new Date(_value);

      if (isNaN(inputDate.getTime())) return '';
    } else if (_value instanceof Date) {
      inputDate = _value;
    } else return '';

    if (this.isSameDay(new Date(), inputDate)) {
      return 'Hoy';
    } else if (this.isYesterday(new Date(), inputDate)) {
      return 'Ayer';
    } else {
      return inputDate.toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    }
  }

  private isSameDay(_date1: Date, _date2: Date): boolean {
    return (
      _date1.getDay() === _date2.getDay() &&
      _date1.getMonth() === _date2.getMonth() &&
      _date1.getFullYear() === _date2.getFullYear()
    );
  }

  private isYesterday(_date1: Date, _date2: Date): boolean {
    const yesterday = new Date(_date1);
    yesterday.setDate(yesterday.getDate() - 1);

    return (
      _date1.getDay() === yesterday.getDay() &&
      _date1.getMonth() === yesterday.getMonth() &&
      _date1.getFullYear() === yesterday.getFullYear()
    );
  }
}
