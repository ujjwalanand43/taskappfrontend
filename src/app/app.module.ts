import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AddblogComponent } from './components/addblog/addblog.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowblogComponent } from './components/showblog/showblog.component';
import { AdminModule } from './admin/admin.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { EditorModule } from "@tinymce/tinymce-angular";
// import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,

    
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AddblogComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ShowblogComponent,
    
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    // FontAwesomeModule,
    NgxDropzoneModule,
    CKEditorModule,
    CalendarModule ,
    SlickCarouselModule

    // CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
