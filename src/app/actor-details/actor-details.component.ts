import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-actordetails',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActordetailsComponent implements OnInit {
  actorMovies:any;
  p: number = 1;
  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute) { }
  id:any='';
  trendingDetails:any='';
  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    
    this._MoviesService.getActorsMoviesCredits(this.id).subscribe((data)=>
    {
      this.actorMovies = data.cast.filter((item: any) => {
        return item.backdrop_path != null;
      })
     
    })
 this._MoviesService.getTrendingActorsDetails(this.id).subscribe((Data)=>
 {
this.trendingDetails=Data;
 
 })
  }

}
