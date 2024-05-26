import { Component } from '@angular/core';
// import { ChatService } // Replace with your Chat Service

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  
})
export class ChatComponent {
  chatHistory: any[] = []; // Replace with actual message data structure
  newMessage: string = '';
  currentUser: string = '';

  // constructor(private chatService: ChatService) {}

  ngOnInit() {
    // this.chatService.getChatHistory().subscribe(data => {
    //   this.chatHistory = data; // Update chat history on init
    // });
  }

  sendMessage() {
  //   if (this.newMessage.trim()) {
  //     const message = {
  //       user: 'Me', // Replace with username
  //       content: this.newMessage
  //     };
  //     this.chatService.sendMessage(message); // Implement logic in Chat Service
  //     this.chatHistory.push(message); // Update chat window locally
  //     this.newMessage = '';
  //   }
  // }
}
}
