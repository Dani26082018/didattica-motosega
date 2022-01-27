import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 /* qui ho dichiarato le variabili del primo carrello */
  num1:number;
  num2:number;
  num3:number;
  num1x2:number;
  num2i:number;
  total:number;
  iva:number;
/* qui ho dichiarato le variabili del secondo carrello */
  num4:number;
  num5:number;
  iva2:number;
  num4i:number;
  iva3:number;
  num5i:number;
  iva2tot:number;
  total1:number;

/* qui ho dichiarato le variabili del terzo carrello */
  num6:number;
  num7:number;
  num8:number;
  num9:number;
  iva4:number; 
  num6i:number;
  iva5:number;
  num7i:number;
  num9x3:number;
  num9i:number;
  iva6:number;
  iva3tot:number;
  total2:number;
/* qui ho dichiarato le variabili dei 3 eventi */
  show : boolean = false;
  show2 : boolean = false;
  show3 : boolean = false;

constructor(){
  /*  ho richiamato le variabili dandogli un valore  */
 this.num1=12.49;
 this.num2=14.99;
 this.num3=0.85;
 this.num4=10.00;
 this.num5=47.50;
 this.num6=27.99;
 this.num7=18.99;
 this.num8=9.75;
 this.num9=11.25;
 this.total= 0;
 this.iva= 0;
 this.iva2= 0;
 this.num2i= 0;
 this.num1x2= 0;
 this.num4i= 0;
 this.iva3 = 0;
 this.num5i=0;
 this.iva2tot=0;
 this.total1= 0;
 this.iva4= 0;
 this.num6i= 0 ;
 this.iva5 = 0;
 this.num7i = 0 ;
 this.num9x3= 0 ;
 this.iva6 = 0;
 this.num9i = 0;
 this.iva3tot = 0;
 this.total2 = 0;
}

  ngOnInit(): void {
   
  }
  title = 'scontrino';

  stampa1(){
   if(this.show = !this.show){ 
    this.num1x2 = (this.num1 * 2)  ;
    this.iva = (this.num2 * 10) /100  ;
    this.num2i = this.num2 + this.iva ;
   }else {
    alert("questo è lo scontrino finale della sua spesa, se vuole rivedere lo scontrino clicchi di nuovo su 'mostra scontrino'");
   }

  }

  stampa2(){
    if(this.show2 = !this.show2){
      this.iva2 = (this.num4 * 5) /100;
     this.num4i = this.iva2 + this.num4;
     this.iva3 = (this.num5 * 15) /100;
     this.num5i = this.iva3 + this.num5;
     this.iva2tot = this.iva3 + this.iva2;
    }else{
      alert("questo è lo scontrino finale della sua spesa, se vuole rivedere lo scontrino clicchi di nuovo su 'mostra scontrino'");
    }
  }

  stampa3(){
    if(this.show3 = !this.show3){
       this.iva4 = (this.num6 * 15) /100;
       this.num6i = this.iva4 + this.num6;
       this.iva5 = (this.num7 * 10) /100;
       this.num7i = this.iva5 + this.num7;
       this.num9x3 = this.num9 * 3 ;
       this.iva6 = (this.num9x3 * 5) /100;
       this.num9i= this.iva6 + this.num9x3;
       this.iva3tot= this.iva4 + this.iva5 + this.iva6;
    }else{
      alert("questo è lo scontrino finale della sua spesa, se vuole rivedere lo scontrino clicchi di nuovo su 'mostra scontrino'");
    }
  }

      
  somma(){
    this.total = this.num1x2 + this.num2i + (this.num3 * 10) /10;
  }
  somma1(){
    this.total1 = this.num4i + this.num5i;
  }

  somma2(){
    this.total2 = this.num6i + this.num7i + this.num8 + this.num9i;
  }

 
}
