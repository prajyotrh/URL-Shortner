import { Component, OnInit } from '@angular/core';
import { UrlShortnerService } from 'src/app/shared/url-shortner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url : string = "";
  originalUrl :string = "";
  isUrlGenerated : boolean = false;
  isErrorGenerated : boolean = false;
  shortUrl : string ="";
  constructor(private urlShortnerService : UrlShortnerService) { }

  ngOnInit(): void {
    this.isUrlGenerated = false;
  }

  generateShortUrl() {
    this.urlShortnerService.getShortUrl(this.url).subscribe(res=>{
      if(res == null) {
        this.isErrorGenerated = true; 
      } else {
        this.isUrlGenerated = true;
        this.isErrorGenerated = false;
        this.shortUrl = res.shorturl;
        this.originalUrl = res.originalurl;
      }
    }, err=>{
      this.isUrlGenerated = false;
      this.isErrorGenerated = true;
    })
  }
}
