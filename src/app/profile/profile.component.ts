import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ConfirmedValidator } from './confirmed.validator';
import { FormControl } from '@angular/forms';
import { User } from './../models/user';
interface gender {
  value: string;

}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 hide = true;
  form!: FormGroup;

  genders: gender[] = [
    { value: 'female' },
    { value: 'male' }

  ];
    user = new User()
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
   //fake data
    this.user.fullname = " Oumaima Laib"
    this.user.gender = "female"
    this.user.birthday = new Date(1999, 8, 22).toISOString().split('T')[0];
    this.user.username = "oumaima123"
    this.user.email = "o.lb@gmail.com"
    this.user.address1 = "cite 8 mai "
    this.user.codepostal = 3900
    this.user.city = "eloued"
    this.user.wilaya = "elouad"
    this.user.address1 = "cite 8 mai "
    this.user.address2 = " "
    this.user.phone = "213542258245"
   
    this.form = this.formBuilder.group(
      {
        newpw: [''],
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required,
        Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),

          ]
        ],
        birthday: [formatDate(this.user.birthday, 'yyyy-MM-dd', 'en'), Validators.required],

        gender: [this.user.gender],
        role: [this.user.role, Validators.required],
        confirmpassword: [''],
        phone: [this.user.phone,Validators.required],
          city: [this.user.city, Validators.required],
        wilaya: [this.user.wilaya, Validators.required],
        codepostal: [this.user.codepostal, Validators.required],
        address1: [this.user.address1, Validators.required],
        address2: [this.user.address2],
      }, {
      validator: ConfirmedValidator('newpw', 'confirmpassword')
    }
    );
  }
   
  
  //
  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  formControl = new FormControl(new Date());
  //imageupload
  fileToUpload!: File;

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    //show image
    var reader = new FileReader();
    reader.onload = (event: any) => {
      //this.imagelogo = event.target.result
    }
    reader.readAsDataURL(file)
  }
  //
  submitted = false;
 
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onClickSubmit() {
    this.submitted = true;

    console.log(this.form.value)

  }

}
