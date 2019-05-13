import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private youtubeUrl: string = "https://www.googleapis.com/youtube/v3";
  private apiKey: string = "AIzaSyD-Tbomtpy5mUaMqvq8yDqFLonMjbHncnM";
  private playlist: string = "UUECJDeK0MNapZbpaOzxrUPA";
  private nextPageToken: string = "";

  constructor(private _httpClient: HttpClient) {}

  getVideos() {
    let url = `${this.youtubeUrl}/playlistItems`;

    const params = new HttpParams()
      .set("part", "snippet")
      .set("maxResults", "10")
      .set("playlistId", this.playlist)
      .set("pageToken", this.nextPageToken)
      .set("key", this.apiKey);

    return this._httpClient.get(url, { params }).pipe(
      map(data => {
        this.nextPageToken = data["nextPageToken"];
        let videos: any[] = [];
        for (let video of data["items"]) {
          videos.push(video.snippet);
        }

        return videos;
      })
    );
  }
}
