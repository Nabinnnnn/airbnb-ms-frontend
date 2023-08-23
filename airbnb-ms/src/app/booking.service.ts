import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
 
 

private url ="http://localhost:8081/booking"
  constructor(private http:HttpClient) { }

showBookingByPropertyId(id:number):Observable<Booking[]>{
return this.http.get<Booking[]>(this.url.concat(String("/propertyId/"+id)));
}
deleteBooking(id: number):Observable<string> {
  //@ts-ignore

  return this.http.delete<String>(this.url.concat(String("/"+id)),{responseType:'text'});
}
updateBooking(id:number,booking:Booking):Observable<string>{
  //@ts-ignore

  return this.http.put<String>(this.url.concat(String("/"+id)),{responseType:'text'});
}
getBookingByBookingId(id: number):Observable<Booking>{
return this.http.get<Booking>(this.url.concat(String("/bookingId/"+id)))
}
addBooking(booking:Booking):Observable<Booking> {
  //@ts-ignore
  return this.http.post<Booking>(this.url,booking,{responseType:'text'});
  
}


}

