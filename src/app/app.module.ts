import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {ReactiveFormsModule} from '@angular/forms'



import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,MatToolbarModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,
    MatButtonModule,ReactiveFormsModule],
  declarations: [ AppComponent,RegisterComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
