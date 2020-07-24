import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
 utype = '';


  constructor() { }

  ngOnInit(): void {

    this.utype = localStorage.getItem('utype');
  }

}
