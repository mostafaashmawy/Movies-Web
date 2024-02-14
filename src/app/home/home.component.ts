import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { ToastrService } from 'ngx-toastr';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  searchText:any='';
  imgPrefix:string='http://image.tmdb.org/t/p/w500';
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  medias: any[] = ["blanks"];
  userInfo: any='';
  loadingDone:any=false;

  addFavorites(movieName: any, movieID: any, movieImg: any,media_type: any) {
    let detailsData: any = {
      'movieName': movieName,
      'movieID': movieID,
      "userID": this.userInfo._id,
      'imgUrl': 'https://image.tmdb.org/t/p/original/' + movieImg,

      'token': localStorage.getItem('token-login')

    }
    localStorage.setItem("userID",this.userInfo._id)
    
    this._favoritesService.addToFavoites(detailsData,media_type).subscribe((data) => {
      
      

    
    })
    {

    }
  }
  

  constructor( private toastr: ToastrService,private _MoviesService: MoviesService,private _favoritesService: FavoritesService) {
    
    localStorage.setItem(`favorites-media`,JSON.stringify(this.medias))
    
  }

  addSuccessToaster(title:any)
  {
    this.toastr.success('Successflly added to Favorites',`${title}`, {
      timeOut: 1000,
    });
  }
  getTrending() {
    this._MoviesService.getTrending('all').subscribe((trendingRespose) => {
      

     
  
      this.trendingMovies = trendingRespose.results.filter((item: any) => {
        return item.media_type == 'movie' && item.poster_path != null; 
      })
 
      
      this.trendingTv = trendingRespose.results.filter((item: any) => {
        return item.media_type == 'tv' && item.poster_path != null;
      })
   
    })



  }
  ngOnInit(): void {
    this.getTrending();
   
    
    
  }

}