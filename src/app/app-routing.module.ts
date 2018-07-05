import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/chat.component';
import { FinfoComponent } from './finfo/finfo.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'finfo/:id', component: FinfoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
