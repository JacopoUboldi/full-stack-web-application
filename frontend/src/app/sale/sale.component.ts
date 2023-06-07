import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {

  constructor(private httpClient : HttpClient){
    this.selectData()
  }

  items = [
    {'ID': 0,'IDAcquario': 1, 'Tema': 'x'}
  ]

  selectData(){
    this.httpClient.get<any>(
      "http://127.0.0.1:8080/sale"
      )
    .subscribe({
      next: ris => {
        console.log(ris)
        this.items = []
        for (let x of ris){
          this.items.push({'ID': x.ID, 'IDAcquario': x.IDAcquario, 'Tema': x.Tema})
        }
      },
      error: error => {
        console.error(error);
        
    }
  }
    )
}

}
