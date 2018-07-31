import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RetrieveService } from './shared/retrieve.service';
import { DataService } from './shared/data.service';
import { PaymentsComponent } from './payments/payments.component';
import { DanComponent } from './dan/dan.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contactus/contactus.component';


// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'retrieve',
    pathMatch: 'full'
  },
  { path: 'retrieve', component: HomeComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'dan', component: DanComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PaymentsComponent,
    DanComponent,
    DropdownDirective,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [RetrieveService, DataService],  // Add the Retrieve and Data service
  bootstrap: [AppComponent]
})
export class AppModule { }
