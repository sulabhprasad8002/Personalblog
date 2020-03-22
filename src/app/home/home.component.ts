import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    
 openNav() {
  document.getElementById("myNav").style.width = "100%";
  }

 closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
}
