
import { Component, OnInit } from '@angular/core';
import * as userData from 'src/assets/jsonviewer.json'


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],

})


export class NavigatorComponent implements OnInit{

  users: any = (userData as any).default;

  ngOnInit(): void {

  }
 
  incom = false;
  outcome =false;
  loans = false;
  investments = false;


  status:boolean = false;

  

}

