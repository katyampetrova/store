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
        return this.httpClient.get<IAd[]>(`/api/data/catalog${limit ? `?limit=${limit}` : ``}`);
    }

    loadAd(id: number) {
    //   return this.httpClient.get<ITheme[]>(`${apiURL}/themes`);
        // return this.httpClient.get<IAd>(`${apiURL}/data/catalog/${id}`);
        // TODO
        return this.httpClient.get<IAd>(`/api/data/catalog/${id}`);
    }
  
    createAd(title: string, description: string, price: number, img: string, tel: number, city: string) {
        return this.httpClient.post<IAd>('/api/data/catalog', {
            title: title,
            description: description,
            price: price,
            img: img,
            tel: tel,
            city: city
        })
    }

    updateAd(id: string, title: string, description: string, img: string, price: number, tel: number, city: string) {
        return this.httpClient.put<IAd>('/api/data/catalog', {
            _id: id,
            title: title,
            description: description,
            price: price,
            img: img,
            tel: tel,
            city: city
        })
    }

    deleteAd(id: string) {
        return this.httpClient.delete<IAd>('/api/data/catalog' + id);
    }
}
