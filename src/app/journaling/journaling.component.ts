import { Component } from '@angular/core';
// import { JournalService } // Replace with your Journal Service

@Component({
  selector: 'app-journaling',
  templateUrl: './journaling.component.html',
  styleUrls: ['./journaling.component.css'],
 
})
export class JournalingComponent {
  entryDate: Date = new Date();
  journalEntry: string = '';

  // constructor(private journalService: JournalService) {}

  saveEntry() {
    // const entry = {
    //   date: this.entryDate,
    //   content: this.journalEntry
    // };
    // this.journalService.saveEntry(entry); // Implement logic in Journal Service
    // this.journalEntry = ''; // Clear entry after saving
  }
}