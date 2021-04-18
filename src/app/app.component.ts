import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personalblog';   

      
 openNav() {
  document.getElementById("myNav").style.width = "100%";
  }

 closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
}
