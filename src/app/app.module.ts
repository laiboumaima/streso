import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbSidebarModule,NbMenuModule,NbThemeModule, NbLayoutModule,NbButtonModule ,NbListModule, NbUserModule, NbActionsModule, NbSearchModule ,NbInputModule, NbCardModule, NbDialogModule, NbSelectModule, NbToggleModule, NbCheckboxModule, NbTagModule, NbRadioModule, NbDatepickerModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
//ng material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';




import { HelpComponent } from './help/help.component';
/*** */
import { FileUploadModule } from 'ng2-file-upload';
import {MatSelectModule} from '@angular/material/select';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProfileComponent } from './profile/profile.component';
import { ChartComponent } from './chart/chart.component';
import { RealtimechartComponent } from './realtimechart/realtimechart.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FirstpageComponent,
    

    HelpComponent,
          ProfileComponent,
          ChartComponent,
          RealtimechartComponent,

 
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
 
      //Nebular
      NbThemeModule.forRoot({ name: 'default' }),
      NbLayoutModule,
      NbSidebarModule.forRoot(),
      NbEvaIconsModule,
      NbListModule,
      NbCardModule,
      NbDialogModule.forRoot(),
      //Nebular - Components
      NbInputModule,
      NbButtonModule,
      NbSelectModule,
      NbRadioModule,
      NbCheckboxModule,
      NbToggleModule,
      NbTagModule,
      NbDatepickerModule.forRoot(),
      NgbModule,
      MatSlideToggleModule,
  
    ReactiveFormsModule,
    NgbModule,
    NbUserModule,
    NbSearchModule,
    NbActionsModule,
 
    NbMenuModule.forRoot(),

    NbDialogModule.forRoot(),
  
   
  
    
    
       DragDropModule,
       HttpClientModule,


    //material
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatProgressBarModule,
    ///
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
