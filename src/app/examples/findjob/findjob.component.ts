import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findjob',
  templateUrl: './findjob.component.html',
  styleUrls: ['./findjob.component.css']
})
export class FindjobComponent implements OnInit {

  forms = <any>{};
  constructor() { }

  ngOnInit(): void {
  }

  searchJob(forms){
    alert('Under Progress');
    console.log(forms);
    console.log(this.forms);
  }

}
