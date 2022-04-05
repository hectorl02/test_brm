import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultData = [];
    for(const name of value){
      if(name.name.indexOf(arg) > -1){
         resultData.push(name);
      };
    };
    return resultData;
  }

}
