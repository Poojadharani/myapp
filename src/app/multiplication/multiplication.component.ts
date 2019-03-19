import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
answer:number;
  constructor() { }

  ngOnInit() {
  }
click(firstnumber,secondnumber)
{
  console.log(firstnumber);
  console.log(secondnumber);
  var myfisrtnumber=+firstnumber;
  var mysecondnumber=+secondnumber;
  this.answer=myfisrtnumber*mysecondnumber;
  console.log(this.answer);
}
getAnswer()
{
return this.answer;
}
}
