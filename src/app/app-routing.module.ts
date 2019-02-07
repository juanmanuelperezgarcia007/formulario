import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {path:"", redirectTo: '/tempalte',pathMatch:'full'},
  { path: 'template', component:TemplateComponent },
  {path: "**", redirectTo: '/template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
