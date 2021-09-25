
import { Component, OnDestroy ,OnInit} from '@angular/core';

import { Subject } from 'rxjs';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy  {

   constructor(private sidebarService: NbSidebarService) { }

 

  private destroy$ = new Subject<void>();
  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
 ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  items: NbMenuItem[] = [

    {
       home: true,
      title: 'Dashboard',
      icon: 'home',
      link: "/dash",
   
    
    },
     {
      title: 'Realtime Chart',
      icon: 'pie-chart',
      link: '/Realtimechart'
    },
      {
      title: 'Profile',
      icon: 'person',
      link: '/profile'
    },
    {
      title: '',
    },
    {
      title: '',
    },
 
    {
      title: '',
      

    },
    {
      title: '',
      

    },
    {
      title: '',
      

    },
    {
      title: '',
      

    },
    {
      title: '',
      

    },
    {
      title: '',
      

    },
      {
      title: 'Help',
      icon: 'question-mark-circle',
      link: '/'
    },
    
 
  
  ];

 
  items3: NbMenuItem[] = [
    {
      title: 'Logout',
      icon: 'log-out',
    }
  ];
}


  


