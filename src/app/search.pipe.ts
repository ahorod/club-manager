import { Pipe, PipeTransform } from '@angular/core';
import { Person} from './person.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(input: Person[], query: string): Person[] {
    if (query == '') {
      return input;
    }
    var output: Person[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].category.toLowerCase().startsWith(query.toLowerCase())) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
