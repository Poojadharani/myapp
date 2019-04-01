import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
answer:number;
  constructor() { }

  ngOnInit() {
  }
click(firstnumber,secondnumber)
{
  console.log(firstnumber);
  console.log(secondnumber);
  var myfirstnumber=+firstnumber;
  var mysecondnumber=+secondnumber;
  this.answer=myfirstnumber/mysecondnumber;
  console.log(this.answer);
}
getAnswer()
{
  return this.answer;
}
}
