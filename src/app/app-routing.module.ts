import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './pages/room/room.component';

export const appRoutes: Routes = [
  { path: '', component: RoomComponent },
  { path: 'room', component: RoomComponent },
  {
    path: '**',
    redirectTo: 'room',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
