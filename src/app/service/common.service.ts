import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get('http://localhost:3000/videos');
  }

  postData(data: any) {
    return this.http.post('http://localhost:3000/videos', data)
  }

}
