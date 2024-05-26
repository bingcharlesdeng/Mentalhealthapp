import { Component } from '@angular/core';
// import { MoodService } // Replace with your Mood Service

@Component({
  selector: 'app-mood-tracker',
  templateUrl: './mood-tracker.component.html',
  styleUrls: ['./mood-tracker.component.css'],
  
})
export class MoodTrackerComponent {
  selectedMood: string | null = null;
  moodNote: string = '';

  // constructor(private moodService: MoodService) {}

  selectMood(mood: string) {
    this.selectedMood = mood;
  }

  saveMood() {
    // const moodEntry = {
    //   mood: this.selectedMood,
    //   note: this.moodNote,
    //   // Add timestamp if needed
    // };
    // this.moodService.saveMood(moodEntry); // Implement logic in Mood Service
    // this.selectedMood = null;
    // this.moodNote = '';
  }
}
