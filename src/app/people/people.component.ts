import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  p: number = 1;
  searchText:any='';
  loadingDone:any=false;
  peoples:any[]=[];
  constructor(private _MoviesService:MoviesService) { }
getPeople()
{
 
  this._MoviesService.getTrending('person').subscribe((peopleResponse)=>

  {
   
    this.peoples = peopleResponse.results.filter((item: any) => {
      return item.profile_path != null;
    })
   
    

  })
}
  ngOnInit(): void {
   this.getPeople();


   }

}
