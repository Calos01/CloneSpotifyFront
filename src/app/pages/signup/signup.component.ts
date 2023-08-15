import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { RegistroDTO } from 'src/app/Models/RegistroDTO';
import { PrincipalService } from 'src/app/principal.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  registerForm!:FormGroup

  constructor(private fb:FormBuilder, private _service:PrincipalService) {
    
  }
  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['', [Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z].*')]],
      lastname:['', [Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z].*')]],
      username:['', [Validators.required,Validators.email,Validators.maxLength(30)]],
      email:['', [Validators.required,Validators.maxLength(30)]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(16)]],
    })
  } 
  Registrar(){
    let registrouser: RegistroDTO={
      name: this.name.value,
      lastName: this.lastname.value,
      email: this.email.value,
      userName: this.username.value,
      password: this.password.value
    }
    this._service.registerUser(registrouser).subscribe((dat:any)=>{
      console.log(registrouser);
      console.log(dat);
    })
  }

  get name():FormControl{
    return this.registerForm.get('name') as FormControl
  }
  get lastname():FormControl{
    return this.registerForm.get('lastname') as FormControl
  }
  get username():FormControl{
    return this.registerForm.get('username') as FormControl
  }
  get email():FormControl{
    return this.registerForm.get('email') as FormControl
  }
  
  get password():FormControl{
    return this.registerForm.get('password') as FormControl
  }
  
}
