import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    public num1 : number;
    public num2 : number;
    public num3 : number;

    
  constructor() {
   this.num1 = 0;
   this.num2 = 0;
   this.num3= 0;
   }

  ngOnInit(): void {
  }
  
  somma(){
    if(this.num1 < 0 ){
      alert("negativi non consentiti" )
    } else if(this.num2 < 0)
    {
      alert("negativi non consentiti")
    }else if(this.num1 > 1000){
      this.num3 = this.num2;
    }else if(this.num2 > 1000){
      this.num3 = this.num1;
    }else
    this.num3 = this.num1 + this.num2; 
  }
  
}
