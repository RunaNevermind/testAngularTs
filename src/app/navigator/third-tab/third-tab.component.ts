import { Component, OnInit} from '@angular/core';
import * as userData from 'src/assets/jsonviewer.json'
@Component({
  selector: 'app-third-tab',
  templateUrl: './third-tab.component.html',
  styleUrls: ['./third-tab.component.scss']
})
export class ThirdTabComponent  implements OnInit {

  Users: any = (userData as any).default;

  userName:any=[];

  ngOnInit() {
    for(let i=0; i<7; i++){    
      this.userName.push(this.Users.data[i])
      
    }
  }
}
