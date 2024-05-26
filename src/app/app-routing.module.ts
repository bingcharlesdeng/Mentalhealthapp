import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { MoodTrackerComponent } from './mood-tracker/mood-tracker.component';
import { JournalingComponent } from './journaling/journaling.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'mood-tracker', component: MoodTrackerComponent },
  { path: 'journaling', component: JournalingComponent },
  { path: 'login', component: LoginComponent },
  // Add other routes as needed
  { path: '', redirectTo: '/chat', pathMatch: 'full' }, // Default route
  { path: '**', component: LoginComponent }, // Catch-all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
