import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersComponent } from './users/users.component';
import { ChatdataService} from './chatdata.service';
import { ChatComponent } from './chat/chat.component';
import { FinfoComponent } from './finfo/finfo.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ChatComponent,
    FinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ChatdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
