import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: ['./whatsnew.component.css']
})
export class WhatsnewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('utype','2');
    var c = localStorage.getItem('loadpage');
    if(c == '1'){
      localStorage.setItem('loadpage','2');
      window.location.reload();
    }
  }

}
