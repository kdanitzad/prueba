import {Component} from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  template: `
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
      <p class="left-paragraph">{{title}}</p>
    </div>`,
  styleUrls: ['./left.component.css']
})

export class LeftComponent {
  title:string = "Left navigation";
}

