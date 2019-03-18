import { Component, OnInit } from '@angular/core';
import { USERtypeserviceService } from '../usertypeservice.service';
import { Usertype } from '../usertype';

@Component({
  selector: 'app-addusertype',
  templateUrl: './addusertype.component.html',
  styleUrls: ['./addusertype.component.css']
})
export class AddusertypeComponent implements OnInit {
modelu:Usertype[];
  constructor(private service:USERtypeserviceService) { }

  ngOnInit() {
  }
  sno:string;
  code:string;
  name:string;
  status:string;
  public rows: Array<{sno: string, code: string, name: string}> = [];
  onclick(){
     //console.log(this.sno);
     //console.log(this.code);
     //console.log(this.name);
    this.rows.push( {sno: this.sno, code: this.code, name: this.name } );
    this.status="Added Successfully";
    this.sno='';this.code='';this.name='';
  }
  onclear(){
    this.sno='';this.code='';this.name='';
  }
}
