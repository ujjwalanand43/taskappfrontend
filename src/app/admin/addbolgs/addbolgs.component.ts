import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";

import { NgForm } from '@angular/forms';
import axios from "axios";

@Component({
  selector: 'app-addbolgs',
  templateUrl: './addbolgs.component.html',
  styleUrls: ['./addbolgs.component.css']
})
export class AddbolgsComponent implements OnInit {
  files: File[] = [];
  editor = ClassicEditor;
  private addBlog = "http://localhost:4000/admin/blog"
  accessToken = localStorage.getItem('token')
//   data: any = `<p>Hello, world!<>`
getData:any = ""
html = 'Hi, TinyMCE!';
somefunction() {
  // Do something here.
  this.getData = this.html
 
}
//   retrieveddata: string = this.data;
//   public onChange({ editor }: ChangeEvent) {
// 	// const data = editor.getData();
// 	this.retrieveddata=data;
	
//    }

	onFilesAdded(event:any) {
		console.log(event);
		this.files.push(...event.addedFiles);

	
	}

	onFilesRejected(event:any) {
		console.log(event);

	}

	onRemove(event:any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  constructor() {

   }
ngOnInit(): void {

}

public Editor = ClassicEditor;


  public onReady( editor:any ) {
	editor.ui.getEditableElement().parentElement.insertBefore(
		editor.ui.view.toolbar.element,
		editor.ui.getEditableElement()
	);
}

onSubmit(form:NgForm){	


	console.log(form.value)
	console.log(form.value.logo)
	var data = new FormData();
	data.append('title',form.value.title)
	data.append('description',form.value.description)
	for (var i = 0; i < this.files.length; i++) {   
		data.append('image', this.files[i]);  
	  }  


	axios( {
		method: 'post',
		url: 'http://localhost:4000/admin/blog',

		headers: { 
		  'Authorization': 'Bearer ' + this.accessToken, 
		  "Content-Type": "multipart/form-data",
		  "Accept": "application/json",
		},
		data : data
	  })
	  .then( (response)=> {
	  
		console.log(JSON.stringify(response.data));
		// this.toastr.success(  JSON.stringify(response.data.message) +'Success');
	  })
	  .catch(function (error) {
		console.log(error);
	  });
}




}

