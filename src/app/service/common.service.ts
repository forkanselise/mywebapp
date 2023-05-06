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
    return this.http.get<any>('http://localhost:3000/videos');
  }

  postData(data: any) {
    console.log(data)
    return this.http.post<any>('http://localhost:3000/videos', data);
  }

}
