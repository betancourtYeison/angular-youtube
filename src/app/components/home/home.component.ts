import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSelected: any;

  constructor(private _youtubeService: YoutubeService) {
    this._youtubeService.getVideos().subscribe(data => (this.videos = data));
  }

  ngOnInit() {}

  showVideo(video) {
    this.videoSelected = video;
    $("#videoModal").modal();
  }

  closeVideo() {
    this.videoSelected = null;
    $("#videoModal").modal("hide");
  }

  loadMore() {
    this._youtubeService
      .getVideos()
      .subscribe(data => (this.videos = [...this.videos, ...data]));
  }
}
