import { Component, OnInit } from '@angular/core';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  instructors = [{ name: 'Kerry' }, { name: 'Luke' }, { name: 'Mario' }];
  instructorsView = [];

  currentId = null;
  boxes = [];
  offsetX;
  offsetY;

  getGender({ name }: { [name: string]: string }) {
    console.log('get gender is called');
    return name.length < 6 ? 'Male' : 'Female';
  }

  ngOnInit() {
    this.instructorsView = this.instructors.map((p) => ({
      name: p.name,
      gender: this.getGender(p),
    }));

    for (let i = 0; i < 10000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {
        id,
        x,
        y,
      };
      this.boxes.push(box);
    }
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

  doNothing() {}
}
