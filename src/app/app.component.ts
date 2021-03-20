import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kendo-ui-app';

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
}
}
