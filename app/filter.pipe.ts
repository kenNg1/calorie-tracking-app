import { Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model'

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform (input: Meal[], desiredView:string) {
    var output: Meal[] = [];
    if (desiredView === "high"){
      for (var i=0; i<input.length; i++){
        if (input[i].calories>500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredView === "low"){
        for (var i=0; i<input.length; i++){
          if (input[i].calories<500) {
            output.push(input[i]);
          }
        }
        return output
      } else {
        return input
      }
    }
  }
