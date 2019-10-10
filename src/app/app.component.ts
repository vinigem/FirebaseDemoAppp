import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users = [];
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.appService.getUsers().subscribe(data => {
      this.users = data;
    });

    this.userForm = this.fb.group({
      id: [''],
      name: [''],
      role: ['']
    });
  }

  
  addUser() {
    let user = this.userForm.value;
    this.appService.addUser(user).subscribe(()=> {
      this.userForm.reset();
    })
  }

  delete(docId) {
    this.appService.deleteUser(docId);
  }
}
