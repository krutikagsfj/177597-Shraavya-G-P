import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from '../play/play.component';
import { SuccessComponent } from '../success/success.component';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';

export const routes:Routes=[
  {
  path:'',component:PlayComponent,pathMatch:'full'},
  
  {path:'play', component: PlayComponent },
  {path:'success', component:SuccessComponent},
  
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)],
    exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
