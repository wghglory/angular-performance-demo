import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
} from '@angular/core';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
    // console.log('constructor: ');
  }

  skill = { name: 'Coding javascript' };
  skillView: any;

  currentId = null;
  boxes = [];
  offsetX;
  offsetY;

  items = [{ name: 'Kerry', id: 1 }, { name: 'Luke', id: 2 }, { name: 'Magic Ma', id: 3 }];

  getSkillRate({ name }: { [name: string]: string }) {
    // console.log('getSkillRate function is called');
    return 5;
  }

  get currentDate() {
    console.log('PARENT date getter');
    return new Date();
    // return Date.now();
  }

  doNothing() {
    // this.cdr.detectChanges();
    this.cdr.reattach();
  }

  mouseDown(event) {
    const id = Number(event.target.getAttribute('dataId'));
    const box = this.boxes[id];
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.currentId = id;
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(this.currentId, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  mouseUp($event) {
    this.currentId = null;
  }

  updateBox(id, x, y) {
    // const box = this.boxes[id];
    // box.x = x;
    // box.y = y;

    this.boxes[id] = { id, x, y }; // new references instead of mutation due to OnPush
  }

  trackById(index, item) {
    return item.id;
  }

  change() {
    for (const item of this.items) {
      item.id = item.id + 1;
    }
  }

  reset() {
    this.items = [{ name: 'Kerry', id: 1 }, { name: 'Luke', id: 2 }, { name: 'Magic Ma', id: 3 }];
  }

  ngOnChanges(): void {
    // console.log('ngOnChanges: ');
  }

  ngOnInit() {
    // console.log('ngOnInit: ');

    this.skillView = { ...this.skill, rate: this.getSkillRate(this.skill) };

    // for (let i = 0; i < 10000; i++) {
    //   const id = i;
    //   const x = getRandomInt(0, 500);
    //   const y = getRandomInt(0, 500);
    //   const box = {
    //     id,
    //     x,
    //     y,
    //   };
    //   this.boxes.push(box);
    // }
  }

  // trigger twice in dev mode
  ngDoCheck(): void {
    // console.warn('ngDoCheck: ');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit: ');
  }

  // trigger twice in dev mode
  ngAfterContentChecked(): void {
    // console.warn('ngAfterContentChecked: ');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit: ');
    // this.cdr.detach();
  }

  // trigger twice in dev mode
  ngAfterViewChecked(): void {
    // console.warn('ngAfterViewChecked: ');
  }
}
