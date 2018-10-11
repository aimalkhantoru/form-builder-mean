import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'ngx-schema-form';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FormBuilderComponent } from './Component/FormBuilderComponent/form-builder.component';
import { HttpService } from './services/httpService';
import { AuthService } from './services/auth.service'
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './Component/NavBarComponent/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './Component/LoginComponent/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    NavBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SchemaFormModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule
  ],
  providers: [AuthService, HttpService, {provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
  bootstrap: [AppComponent]
})
export class AppModule { }
