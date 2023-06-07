import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsemplariComponent } from './esemplari/esemplari.component';
import { AcquarioComponent } from './acquario/acquario.component';
import { SaleComponent } from './sale/sale.component';
import { VascaComponent } from './vasca/vasca.component';

const routes: Routes = [
  { path: 'acquario', component: AcquarioComponent},
  { path: 'esemplari', component: EsemplariComponent},
  { path: 'sale', component: SaleComponent},
  { path: 'vasca', component: VascaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
