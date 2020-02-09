import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {DxButtonModule, DxDataGridModule, DxTreeListModule} from 'devextreme-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {Service} from './home/app.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxTreeListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
