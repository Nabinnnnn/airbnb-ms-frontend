import { Component, OnInit } from '@angular/core';
import { Address, Property } from '../property';
import { PropertyService } from '../property-service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
propertyList:Property[]=[];
address:Address[]=[];

searchValue:string='';
city:string='';
constructor(private propertyService:PropertyService){}



  ngOnInit(): void {
    this.getProperty();
    
    
  }
  getProperty(){
    this.propertyService.getAllProperty().subscribe(data=>{
      console.log(data);
      this.propertyList=data;
    }) }

    deleteProperty(id:number){
      this.propertyService.deleteProperty(id).subscribe(message=>{
        
        this.getProperty();

        
      })
    }
    search():void{
      //@ts-ignore
      this.propertyService.search(this.searchValue).subscribe((data: Property[])=>{
        this.propertyList=data;

      }
        )
    }
    searchByCity():void{
      this.propertyService.searchByCity(this.city).subscribe((data:Property[])=>{
this.propertyList=data;
      })
    }

}
