import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {

  constructor(public socketService: SocketService) { }

  ngOnInit() {
    this.socketService.connet('ws://10.1.104.73:8081').subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('服务器已经断开');
      }
    );
  }

  send() {
    this.socketService.send('从客户端发来的消息');
  }


}
