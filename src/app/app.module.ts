import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { FormsModule } from '@angular/forms';

import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { GojsAngularModule } from "gojs-angular";
import { RoomComponent } from './pages/room/room.component';
import DiagramComponent from './pages/diagram/diagram.component';
const config: SocketIoConfig = {
  // url: 'https://primerparcialapi.herokuapp.com',
  // url: 'http://localhost:3000',
  url: 'https://sw1-parcial1-verano.herokuapp.com/',
  options: {
    transports: ['websocket', 'polling']
  }
}

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    DiagramComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    GojsAngularModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right', timeOut: 1000 }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
