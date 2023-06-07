import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acquario',
  templateUrl: './acquario.component.html',
  styleUrls: ['./acquario.component.css']
})
export class AcquarioComponent {

  constructor(private httpClient : HttpClient){
    this.selectData()
  }

  items = [
    {'ID': 0, 'nome': 'pesce di maio'},
    {'ID': 1, 'nome': 'pesce'},
    {'ID': 2, 'nome': 'pesce pallina'}
  ]

  selectData(){
    this.httpClient.get<any>(
      "http://127.0.0.1:8080/acquario"
      )
    .subscribe({
      next: ris => {
        console.log(ris)
        this.items = []
        for (let x of ris){
          this.items.push({'ID': x.ID, 'nome': x.Nome})
        }
      },
      error: error => {
        console.error(error);
        
    }
  }
    )
  }

}
