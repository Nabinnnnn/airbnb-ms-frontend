import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../property';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id!:number;
  address: Address = {
    city: '',
    houseNumber: '',
    id:0,
    
    state: '',
    streetName: '',
    zipCode: ''
  };
  bookingList:Booking[]=[];

  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private propertyService:PropertyService,
    private bookingService:BookingService

  ){}
  ngOnInit(): void {
    //@ts-ignore
    this.id=this.route.snapshot.paramMap.get('id');
    this.showAddres();
    this.showBooking();
  }
  showAddres(){
    this.propertyService.showAddress(this.id).subscribe(data=>{
      console.log(data);
      this.address=data;
    })
  }
  showBooking(){
    this.bookingService.showBookingByPropertyId(this.id).subscribe(data=>{
      console.log(data);
      this.bookingList=data;
    })
  }
  deleteBooking(id:number){
    this.bookingService.deleteBooking(id).subscribe(data=>{
      this.showBooking();
    })
  }


}
