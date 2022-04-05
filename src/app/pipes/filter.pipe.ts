import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    const resultIds = [];
    for(const id of value){
      if(id._id.indexOf(arg) > -1){
         resultIds.push(id);
      };
    };
    return resultIds;
  }
  
}
