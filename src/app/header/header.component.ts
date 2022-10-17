import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links!: Array<any>
  constructor() { }

  ngOnInit(): void {
    this.links = new Array();

    this.links.push({
      rota: "home",

      textContent: "Home",
    })
  }


}
