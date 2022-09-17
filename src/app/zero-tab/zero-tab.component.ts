import { Component, OnInit} from '@angular/core';
import * as userData from 'src/assets/jsonviewer.json'
@Component({
  selector: 'app-zero-tab',
  templateUrl: './zero-tab.component.html',
  styleUrls: ['./zero-tab.component.scss']
})

export class ZeroTabComponent implements OnInit {

  Users: any = (userData as any).default;

  userName:any=[];

  ngOnInit() {
    for(let i=0; i<10; i++){    
      this.userName.push(this.Users.data[i])
      
    }
  }


}
