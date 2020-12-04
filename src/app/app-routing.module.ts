import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/init/init.component';

const ruta: Routes = [
  {
    path: '',
    component: InitComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(ruta, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
