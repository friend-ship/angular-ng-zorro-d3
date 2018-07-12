import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SocketService {

  ws: WebSocket;
  constructor() { }

  // 连接服务器
  connet(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete;
      }
    );
  }

  // 向服务器发送消息
  send(message: string) {
    this.ws.send(message);
  }

}
