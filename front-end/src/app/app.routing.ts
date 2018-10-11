import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './Component/FormBuilderComponent/form-builder.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Component/LoginComponent/login.component';

const routes: Routes = [
  {path: '', component: FormBuilderComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
