import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input() name: string;
  @Input() skill: any;

  get currentDate() {
    console.log('CHILD date getter');
    return new Date();
  }

  clickMe() {}

  ngOnInit() {}
}
