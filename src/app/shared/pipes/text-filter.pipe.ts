import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(text: String, link: string | null | unknown  = null): unknown {
    if (text.length > 300 ){
      text   = text.slice(0,300).concat(" ...")
    }
    return text;
  }

}
