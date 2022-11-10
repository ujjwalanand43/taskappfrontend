import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddbolgsComponent } from './addbolgs/addbolgs.component';
import { CalendarDayViewComponent } from 'angular-calendar';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { EditorModule } from "@tinymce/tinymce-angular";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  declarations: [
    AdminPanelComponent,
    LoginComponent,
    SidebarComponent,
    AddbolgsComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    FroalaEditorModule,
    FroalaViewModule,
    CKEditorModule,
    EditorModule,
    SlickCarouselModule,
    // CalendarModule 
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
    // CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ]
})
export class AdminModule { }
