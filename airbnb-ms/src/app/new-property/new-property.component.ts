import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Property } from '../property';
import { PropertyService } from '../property-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {

propertyForm!:FormGroup;
propertyData:Property=new Property();
id!:number;

constructor(
  private formBuilder:FormBuilder,
  private propertyService:PropertyService,
  private router:Router,
  private route:ActivatedRoute
){}


  ngOnInit(): void {
    this.propertyForm=this.formBuilder.group({
      name:[''],
      price:[''],
      description:[''],
      address: this.formBuilder.group({
        houseNumber: [''],
        streetName:[''],
        city: [''],
        state: [''],
        zipCode: ['']
      }),
      booking: [[]]



    })
    
  //@ts-ignore
  this.id=this.route.snapshot.paramMap.get('id');
  if(this.id!==null){

  
  this.propertyService.getPropertyById(this.id).subscribe( (propertydata:any) =>{
    this.propertyForm.patchValue(propertydata);
  })
  }

}
saveProperty():void{
  this.propertyData=this.propertyForm.value;
  if(this.id==null){
    this.propertyService.addProperty(this.propertyForm.value).subscribe(message=>{

      alert(message);
      this.router.navigate(['']);
    })
  }
  else{
    //@ts-ignore
    this.propertyService.updateProperty(this.propertyData,this.id).subscribe(message=>{
      alert(message);
      this.router.navigate(['']);
    })
  }

}
}