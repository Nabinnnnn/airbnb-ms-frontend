import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router){}
  loginForm!:FormGroup;


  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
    
  }
  login():void{
    const user = this.loginForm.value;
    this.userService.login(user).subscribe((message:string)=>{
      if(message ==='Success'){
        this.router.navigate(['home']);
      }
      else{
      alert(message);}
    }
    )
    
  }


}
