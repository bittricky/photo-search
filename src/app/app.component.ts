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

    public empty: boolean;

    constructor(private pexelService:PexelPhotoService) {
      this.pexelService.getData(this.search, this.perPage);
    }

    searchPhotos() {
      this.pexelService.getData(this.search, this.perPage).subscribe((data) => {
        this.data = data.photos;
        if (this.data.length === 0) {
          this.empty = true;
        }
        this.empty = false;
      }, (error) => {
        console.error("ERROR:::", error)
      })
    }

}
