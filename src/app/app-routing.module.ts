import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { S3Component } from './s3/s3.component';
import { S4Component } from './s4/s4.component';

const routes: Routes = [

  {path:'s1',component:S1Component},
  {path:'s2',component:S2Component},
  {path:'s3',component:S3Component},
  {path:'s4',component:S4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
