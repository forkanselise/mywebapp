import { Component } from '@angular/core';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-videoplayer-app';

  playlist = [
    {
      Title: 'Agent 327!',
      VideoUrl: 'https://media.vimejs.com/720p.mp4',
      Description: 'video/mp4'
    },
    {
      Title: 'Agent 327!',
      VideoUrl: 'https://media.vimejs.com/720p.mp4',
      Description: 'video/mp4'
    },
    {
      Title: 'Agent 327!',
      VideoUrl: 'https://media.vimejs.com/720p.mp4',
      Description: 'video/mp4'
    },
    {
      Title: 'Agent 327!',
      VideoUrl: 'https://media.vimejs.com/720p.mp4',
      Description: 'video/mp4'
    },
    {
      Title: 'Agent 327!',
      VideoUrl: 'https://media.vimejs.com/720p.mp4',
      Description: 'video/mp4'
    }
  ];

  currentIndex = 0;
  activeVideo = this.playlist[this.currentIndex];
  api!: { getDefaultMedia: () => { (): any; new(): any; subscriptions: { (): any; new(): any; loadedMetadata: { (): any; new(): any; subscribe: { (arg0: () => void): void; new(): any; }; }; ended: { (): any; new(): any; subscribe: { (arg0: () => void): void; new(): any; }; }; }; }; play: () => void; };

  constructor(
    private commonService: CommonService
  ) {
    this.dataLoad()
  }

  dataLoad() {
    this.commonService.getData().subscribe(res => {
      console.log(res);
    })
  }

  onPlayerSet(api: any) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.startVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.activeVideo = this.playlist[this.currentIndex];
  }

  startVideo() {
    this.api.play();
  }

  onClickPlaylistVideo(item: { Title: string; VideoUrl: string; Description: string; }, index: number) {
    this.currentIndex = index;
    this.activeVideo = item;
  }

}
