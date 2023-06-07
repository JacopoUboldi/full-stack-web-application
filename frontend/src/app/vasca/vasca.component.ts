import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vasca',
  templateUrl: './vasca.component.html',
  styleUrls: ['./vasca.component.css']
})
export class VascaComponent {

  constructor(private httpClient : HttpClient){
    this.selectData()
  }

  items = [
    {'ID': 0,'IDSale': 1, 'IDAcquario': 0}
  ]

  selectData(){
    this.httpClient.get<any>(
      "http://127.0.0.1:8080/vasca"
      )
    .subscribe({
      next: ris => {
        console.log(ris)
        this.items = []
        for (let x of ris){
          this.items.push({'ID': x.ID, 'IDSale': x.IDSale, 'IDAcquario': x.IDAcquario})
        }
      },
      error: error => {
        console.error(error);
        
    }
  }
    )
}

}
