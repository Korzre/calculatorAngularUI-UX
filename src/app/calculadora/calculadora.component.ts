import { Component} from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  result:string='';
  longButtons:string[] =['AC','C'];
  buttons:string[]=['7','8','9','+','4','5','6','-','1','2','3','*','0','.','=','/'];
  date1:string=new Date().getHours()+":"+new Date().getMinutes();
  private prevValue:string='';
  private curlValue:string='';

  addToExpression(value:string){
    if (this.result != '') {
      this.prevValue = this.curlValue;
      this.curlValue = value;
    }
    if (value == 'AC') {
      this.result = '';
    }else if (value == 'C') {
      this.result = this.prevValue != "=" ? this.result.slice(0,-1):this.result;
    }else if(value == '='){
      this.result = eval(this.result);
    }
    else{
      this.result +=value; 
    }
  }
}



