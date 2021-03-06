import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let today = new Date().getFullYear();
    let date = value.split('-');
    return today - date[0];
  }

}
