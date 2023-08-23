import { Component, OnInit } from '@angular/core';
import { Booking,Payment} from '../booking';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 
  bookingForm!:FormGroup;
  bookingData:Booking=new Booking();
id!:number;

  constructor(
    private formBuilder:FormBuilder,
    private bookingService:BookingService,
    private router:Router,
    private route:ActivatedRoute
  ){}
  

  ngOnInit(): void {
   this.bookingForm=this.formBuilder.group({
      checkInDate: [''],
      checkOutDate: [''], 
      guestCount: [''],
      payment: this.formBuilder.group ({
         amountPaid: [''],
        paymentTime: ['']
      })
   })
   //@ts-ignore
   this.id=this.route.snapshot.paramMap.get('id');
   if(this.id!==null){

  
    this.bookingService.getBookingByBookingId(this.id).subscribe( (bookingdata:any) =>{
      this.bookingForm.patchValue(bookingdata);
  })
}
  }
  saveBooking():void{
    this.bookingData=this.bookingForm.value;
    if(this.id==null){
      this.bookingService.addBooking(this.bookingForm.value).subscribe(message=>{
  
        alert(message);
        this.router.navigate(['"detail/"{id}']);
      })
    }
    else{
      //@ts-ignore
      this.bookingService.updateBooking(this.bookingData,this.id).subscribe(message=>{
        alert(message);
        this.router.navigate(['"detail/"{id}']);
      })
    }

  }
}





