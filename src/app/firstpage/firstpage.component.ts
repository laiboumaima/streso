
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';


const users: Array<any> = [
  {  name: 'user1', stresslevel : 'high', time:'2020.2.20' },
  {  name: 'user2', stresslevel : 'high', time:'2020.2.20' },
  {  name: 'user3', stresslevel : 'high', time:'2020.2.20' },
  {  name: 'user4', stresslevel : 'high', time:'2020.2.20' },

];
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})


export class FirstpageComponent implements OnInit {
displayedColumns: string[] = ['Name', 'stressLevel', 'Time'];
  dataSource = new MatTableDataSource<any>(users);
   //ViewChild
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    
  }
  
 
}
