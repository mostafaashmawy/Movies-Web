import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
mediaType:any='';
id:any='';
trendingDetails:any='';
genres:any='';
  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.mediaType=this._ActivatedRoute.snapshot.paramMap.get('mediaType');
   this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
  

this._MoviesService.getTrendingDetails(this.mediaType,this.id).subscribe((Data)=>
{
this.trendingDetails=Data;
this.genres=Data.genres;

})


  }

}
