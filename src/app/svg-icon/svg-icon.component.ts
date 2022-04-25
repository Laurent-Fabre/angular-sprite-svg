import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent {

  @Input() public icon: string | undefined;

  constructor() {
  }

  get path(): string {
    return `assets/icons/symbol-defs.svg#${this.icon}`;
  }

}
