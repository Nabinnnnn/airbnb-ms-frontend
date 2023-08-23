import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Address, Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  
  
    private url = "http://localhost:8081/property";
    constructor(private http:HttpClient){}
  getAllProperty():Observable<Property[]> {
    return this.http.get<Property[]>(this.url);
}
deleteProperty(id:number):Observable<string>{
  //@ts-ignore
  return this.http.delete<String>(this.url.concat(String("/"+id)),{responseType:'text'});
}
search(searchValue: String):Observable<Property[]> {
  return this.http.get<Property[]>(this.url.concat(String("/price/"+searchValue)));
}
searchByCity(city:String):Observable< Property[]>{
  return this.http.get<Property[]>(this.url.concat(String("/city/"+city)));
}
getPropertyById(id:number):Observable<Property>{
  return this.http.get<Property>(this.url.concat(String("/"+id)));
}
addProperty(property:Property):Observable<string>{
  //@ts-ignore
  return this.http.post<string>(this.url,property,{responseType:'text'});

}
updateProperty(property:Property,id:number):Observable<string>{
  //@ts-ignore
  return this.http.put<string>(this.url.concat("/"+id),property,{responseType:'text'});
}
showAddress(id: number):Observable<Address> {

  return this.http.get<Address>(this.url.concat("/address/"+id));
}

}

