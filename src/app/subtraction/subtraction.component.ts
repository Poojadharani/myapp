import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {
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
  this.answer = myFirstNumber - mySecondNumner;
  console.log(this.answer)
}
getAnswer()
{
return this.answer;
}
}
