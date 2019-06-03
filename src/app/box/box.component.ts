import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-box]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // set to OnPush
  // The idea is to make Angular only check a component’s view bindings if one of its inputs have changed.
  // requirement for OnPush: Make sure that BoxComponent’s input values are immutable.
})
export class BoxComponent implements OnInit {
  constructor() {}

  @Input() box;
  @Input() selected;

  ngOnInit() {}
}
