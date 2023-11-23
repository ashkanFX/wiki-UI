import {Component, Input} from '@angular/core';

@Component({
  selector: 'card[description]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   constructor() {
  }
  @Input() description  : string  = '';
  @Input({required:true})  _title :string  = '';
  @Input() subTitle  : string  = '';
  @Input() Img  : string  = 'https://primefaces.org/cdn/primeng/images/usercard.png';

}
