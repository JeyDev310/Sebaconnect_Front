import { Component, OnInit } from '@angular/core';
import { ChatData} from './chat-data';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  chatData = ChatData;
  selectUser: any;
  background: any =[];
  constructor() { }

  ngOnInit() {
  }
  onClickChatUser(index){
    this.background = [];
    this.background[index] = "user-select-bg";
    this.selectUser = this.chatData[index];
  }
}
