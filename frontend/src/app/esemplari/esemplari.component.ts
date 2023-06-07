import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-esemplari',
  templateUrl: './esemplari.component.html',
  styleUrls: ['./esemplari.component.css']
})
export class EsemplariComponent {

  constructor(private httpClient : HttpClient){
    this.selectData()
  }

  items = [
    {'ID': 0,'IDVasca': 1, 'NomeSpecie': 'x'}
  ]

  selectData(){
    this.httpClient.get<any>(
      "http://127.0.0.1:8080/esemplari"
      )
    .subscribe({
      next: ris => {
        console.log(ris)
        this.items = []
        for (let x of ris){
          this.items.push({'ID': x.ID, 'IDVasca': x.IDVasca, 'NomeSpecie': x.NomeSpecie})
        }
      },
      error: error => {
        console.error(error);
        
    }
  }
    )
}

}
