import { Component } from '@angular/core';


export type LayoutMode = 'full' | 'side' | 'top' | 'all';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-flip-video-layout';

  mode: LayoutMode = 'side';

  setMode(mode: LayoutMode) {
    this.mode = mode;
  }
}
