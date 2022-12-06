import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAd } from './interfaces/ad';
// import { ITheme } from './interfaces/theme';
// import { IPost } from './interfaces/post';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    constructor(private httpClient: HttpClient) { }

    loadAds(limit?: number) {
    //   return this.httpClient.get<ITheme[]>(`${apiURL}/themes`);
        // return this.httpClient.get<IAd[]>(`${apiURL}/data/catalog`);
        // TODO
        return this.httpClient.get<IAd[]>(`http://localhost:3030/data/catalog${limit ? `?limit=${limit}` : ``}`);
    }

    loadAd(id: number) {
    //   return this.httpClient.get<ITheme[]>(`${apiURL}/themes`);
        // return this.httpClient.get<IAd>(`${apiURL}/data/catalog/${id}`);
        // TODO
        return this.httpClient.get<IAd>(`http://localhost:3030/data/catalog/${id}`);
    }
  
    // loadPosts(limit?: number) {
    //   return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`);
    // }
}
