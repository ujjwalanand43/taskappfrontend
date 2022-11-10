import { CalendarView } from 'angular-calendar';
import axios from 'axios';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  accessToken = localStorage.getItem('token');
  private fetchSuperAdmin = 'http://localhost:4000/getsuperadmin';
  private addTask = 'http://localhost:4000/superadmin/todo';
  private subTaskGet = 'http://localhost:4000/superadmin/subtodo';

  files: File[] = [];

  onFilesAdded(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log(this.files);
  }

  onFilesRejected(event: any) {
    console.log(event);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  constructor(private auth: AdminLoginService) {}
  data = {};
  taskId = '';
  getIdForMain = '';
  ngOnInit(): void {
    this.brands();
    this.taskGet();
    this.SubtaskGet();
    console.log(this.productDetails2.image);
  }

  productDetails: any = [];
  productDetails2: any = [];
  task: any = [];
  descriptionMessage: any = '';
  reminderData: any = [];
  sideBar: boolean = true;
  toogleSidebar() {
    this.sideBar = this.sideBar;
  }

  // slider component starts here
  slides = [
    {
      img: 'https://cdn.dribbble.com/users/225637/screenshots/15637013/media/3a59c156ae32faf10a26a0e272872d18.png',
    },
    {
      img: 'https://cdn.dribbble.com/users/45787/screenshots/14440819/media/8f48de6bd09b10275098379259f9789f.png?compress=1&resize=1000x750&vertical=top',
    },
    {
      img: 'https://cdn.dribbble.com/users/4189231/screenshots/14532608/media/0649aa76f8f52ed8421b281956cf1d80.png?compress=1&resize=1000x750&vertical=top',
    },
    {
      img: 'https://cdn.dribbble.com/users/555934/screenshots/16466111/media/2784008ea5ae9d2628538b1fff6f9e08.png?compress=1&resize=1000x750&vertical=top',
    },
    {
      img: 'https://cdn.dribbble.com/users/555934/screenshots/16466111/media/2784008ea5ae9d2628538b1fff6f9e08.png?compress=1&resize=1000x750&vertical=top',
    },
    {
      img: 'https://cdn.dribbble.com/users/555934/screenshots/16466111/media/2784008ea5ae9d2628538b1fff6f9e08.png?compress=1&resize=1000x750&vertical=top',
    },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    // console.log('slick initialized');
  }

  breakpoint(e: any) {
    // console.log('breakpoint');
  }

  afterChange(e: any) {
    // console.log('afterChange');
  }

  beforeChange(e: any) {
    // console.log('beforeChange');
  }

  brands() {
    const req = {};

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.accessToken,
    };
    axios
      .get(this.fetchSuperAdmin, {
        headers: headers,
      })
      .then((res) => {
        this.productDetails = res.data;
        console.log(res.data.data);
        console.log(this.productDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  checkImg: any = '';
  taskGet() {
    this.auth.accessTodo().subscribe(
      (res) => {
        console.log(res.data);
        // res.data[].email.map((data2:any)=>{
        //   console.log("heii",data2);
        // })
        this.productDetails2 = res.data;

        // console.log(res);

        this.productDetails2[0].image.map((data: any) => {
          // console.log(data);
          this.checkImg = data;
          // console.log(this.checkImg);
        });
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
  SubtaskGet() {
    const req = {};

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.accessToken,
    };
    axios
      .get(this.subTaskGet, {
        headers: headers,
      })
      .then((res) => {
    
        this.task = res.data.data;
   
    
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onSubmit(form: NgForm) {
    // console.log(form.value);
    var str = form.value.email;
    // var stringArray = str.split(/(\s+)/).filter(function(el:any) {return el.length != 0});
    var stringArray = str.split(' ').filter(function(el:any) {return el.length != 0});

    console.log(stringArray);
    var data = new FormData();
    data.append('title', form.value.title);
    data.append('description', form.value.description);
    data.append('image', form.value.image);
    // data.append('email', form.value.email);
    stringArray.map((data2: any) => {
      data.append('email', data2);
    });

    for (var i = 0; i < this.files.length; i++) {
      data.append('image', this.files[i]);
    }

    axios({
      method: 'post',
      url: 'http://localhost:4000/superadmin/todo',

      headers: {
        Authorization: 'Bearer ' + this.accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  subTask(form: NgForm) {
    console.log(form);

    var data = {
      main: this.taskId,
      title: form.value.title,
      description: form.value.description,
      topic: 'Sub Tasks',
    };

    axios({
      method: 'post',
      url: 'http://localhost:4000/superadmin/subtodo',

      headers: {
        Authorization: 'Bearer ' + this.accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    })
      .then((response) => {
        this.getIdForMain = response.data._id;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getId(i: any) {
    this.taskId = this.productDetails2[i]._id;
    console.log(this.taskId);
    this.descriptionMessage = this.productDetails2[i].description;
  }

  reminder(form: NgForm) {
    var data = {
      user: this.productDetails._id,
      date: form.value.date,
      subject: 'Testing',
      description: this.descriptionMessage,
    };

    axios({
      method: 'post',
      url: 'http://localhost:4000/superadmin/reminder',

      headers: {
        Authorization: 'Bearer ' + this.accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    })
      .then((response) => {
        console.log(response);
        this.reminderData = response.data;
        // console.log(response.data._id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
