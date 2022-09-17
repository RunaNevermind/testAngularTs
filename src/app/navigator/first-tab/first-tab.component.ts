import { Component, OnInit} from '@angular/core';
import * as userData from 'src/assets/jsonviewer.json'
@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent  implements OnInit {

  Users: any = (userData as any).default;

  userName:any=[];

  ngOnInit() {
    for(let i=0; i<10; i++){    
      this.userName.push(this.Users.data[i])
      
    }
  }
}
