import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
  })

  export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
      this.starWidth = this.rating * 75 / 5;
    }

    onClick() {
        this.notify.emit(`${this.rating} stars for this product`);
    }
}