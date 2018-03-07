import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyObject } from '../my-object';


@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'
  ];



  model = new MyObject(18, 'Dr IQ', '', 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor() {}

  ngOnInit() {}

}
