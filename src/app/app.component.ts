import { Component } from '@angular/core';
import { PexelPhotoService } from './services/pexel-photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    search: String
    perPage: Number
    data: String[]

    constructor(private pexelService:PexelPhotoService) {
      this.pexelService.getData(this.search, this.perPage);
    }

    searchPhotos() {
      this.pexelService.getData(this.search, this.perPage).subscribe((data) => {
        console.log(data)
        this.data = data.photos
      }, (error) => {
        console.error("ERROR:::", error)
      })
    }

}
