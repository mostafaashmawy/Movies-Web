import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ToastrService } from 'ngx-toastr';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  p: number = 1;
  searchText:any='';
  collection: any[]=[] ;  
  loadingDone:any=false;
  trendingMovies:any[]=[];
  medias: any[] = []
  userInfo:any;
  imgPrefix:string='http://image.tmdb.org/t/p/w500';
  constructor(private toastr: ToastrService,private _MoviesService: MoviesService,
    private _favoritesService: FavoritesService) {
      
      this._MoviesService.getTrending('movie').subscribe((data) => {

      this.trendingMovies = data.results.reverse().filter((item: any) => {
        return item.media_type == 'movie' && item.poster_path != null;
      })
    })

  }
  addFavorites(movieName: any, movieID: any, movieImg: any,media_type:any) {
    let detailsData: any = {
      'movieName': movieName,
      'movieID': movieID,
      "userID": this.userInfo._id,
      'imgUrl': 'https://image.tmdb.org/t/p/original/' + movieImg,

      'token': localStorage.getItem('token-login')

    }
  ;
{
  
}
    this._favoritesService.addToFavoites(detailsData,media_type).subscribe((data) => {



    })
    {

    }
  }
  addSuccessToaster(title:any)
  {
    this.toastr.success('Successflly added to Favorites',`${title}`, {
      timeOut: 1000,
    });
  }
  ngOnInit(): void {
  

  }

}

