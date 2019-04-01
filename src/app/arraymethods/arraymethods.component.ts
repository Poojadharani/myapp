import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraymethods',
  templateUrl: './arraymethods.component.html',
  styleUrls: ['./arraymethods.component.css']
})
export class ArraymethodsComponent {

  constructor() { }
public fruits:Array<string> = ['A','C','B'];

onfriutsclick()
{
  //this.fruits.sort();
  console.log(this.fruits.sort());
  console.log(this.fruits.pop());
  this.fruits.push('D');
  console.log(this.fruits);
  this.fruits = this.fruits.concat(['E','F']);
  console.log(this.fruits);
  console.log(this.fruits.indexOf('D'));
}
}
