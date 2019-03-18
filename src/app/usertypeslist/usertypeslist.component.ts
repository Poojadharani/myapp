import { Component, OnInit } from '@angular/core';
import { Usertype } from '../usertype';

@Component({
  selector: 'app-usertypeslist',
  templateUrl: './usertypeslist.component.html',
  styleUrls: ['./usertypeslist.component.css']
})
export class UsertypeslistComponent implements OnInit {
user:Usertype;
  constructor(){
  }
  ngOnInit() {
  }
  
  public show:boolean = false;
  sno:string='';
  code:string='';
  name:string='';
  status:string;
  columnDefs = [
    {headerName: 'S.No.', field: 'sno'},
    {headerName: 'UserTypeCode', field: 'code'},
    {headerName: 'UserTypeName', field: 'name'}
   ];
rowData = [
  {sno: this.sno, code: this.code, name: this.name}
];
  //columns: Array<{sno: string, code: string, name: string}> = [];
  //rows: Array<{sno: string, code: string, name: string}> = [];
onsubmitclick(){
  // console.log(this.sno);
  // console.log(this.code);
  // console.log(this.name);
  //this.columns.push({sno: this.sno, code: this.code, name: this.name });
  //this.rows.push( {sno: this.sno, code: this.code, name: this.name } );
  //this.rowData.push({sno:this.sno,code:this.code,name:this.name});
  
  //this.show = !this.show;
  this.rowData = [
    {sno: this.sno, code: this.code, name: this.name}
  ];
  this.status="Added Successfully";
  this.sno='';this.code='';this.name='';
}
}

