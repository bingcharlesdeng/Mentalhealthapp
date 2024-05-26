import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { MoodTrackerComponent } from './mood-tracker/mood-tracker.component';
import { JournalingComponent } from './journaling/journaling.component';
import {RouterModule, RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    MoodTrackerComponent,
    JournalingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
