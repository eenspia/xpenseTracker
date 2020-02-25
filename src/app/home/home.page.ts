import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 
  expense: number= 0; 
  expenses: {item:string, cost:number}[]=[];
  constructor(public alertCtrl:AlertController) {}

  
  addExpense(){
    this.alertCtrl.create({
    header:'Add Expense',
    inputs:[{name:'addExpense', placeholder:'Enter Item'},
    {name:'costExpense', placeholder:'Enter Cost'}],
    buttons:[
      {text:'Cancel', role:'Cancel'},
      {text:'update', handler:data=> {
        if(data.addExpense.length> 0 && data.costExpense.length > 0){
        this.expenses.push({item:data.addExpense, cost:data.costExpense}) 
       }
      }
    }
      ]

  }).then(alert => alert.present());
}

}


