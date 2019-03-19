import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
answer:number;
  constructor() { }

  ngOnInit() {
  }
click(firstnumber,secondnumber)
{
  console.log(firstnumber)
  console.log(secondnumber)
  var myFirstNumber = +firstnumber
  var mySecondNumner = +secondnumber
  this.answer = myFirstNumber + mySecondNumner;
  console.log(this.answer)
}
getAnswer()
{
return this.answer;
}
}
