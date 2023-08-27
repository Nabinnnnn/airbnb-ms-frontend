import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router
    ){}
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:['',Validators.required],
      phoneNumber:['',Validators.required],
      dob:[''],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signUp():void{
    const user= this.signupForm.value;
    this.userService.signUp(user).subscribe((message)=>{
      if(message!==null||message!==""){
        alert(message);
        this.router.navigate(['']);
      }else{
        alert('User registration failed.')
      }
    }
    )
  }

}
