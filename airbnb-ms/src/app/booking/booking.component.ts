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
idFromUrl!:number;

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
      propertyId:[''],
      payment: this.formBuilder.group ({
         amountPaid: [''],
        paymentTime: ['']
      })
   })

   
this.route.params.subscribe(params=>{
  this.idFromUrl = +params['id'];
  this.bookingForm.patchValue({propertyId: this.idFromUrl});
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
    if(this.bookingData.id===null|| this.bookingData.id===undefined){
      this.bookingService.addBooking(this.bookingData).subscribe(message=>{
  
        alert(message);
        this.bookingForm.reset();
        this.router.navigate(['detail', this.id]);
      })
    }
    else{
      //@ts-ignore
      this.bookingService.updateBooking(this.id,this.bookingData).subscribe(message=>{
        alert(message);
        this.bookingForm.reset();
        this.router.navigate(['detail', this.id]);
      })
    }

  }
  cancelBooking(): void {
    this.bookingForm.reset(); 
  }
  
}





