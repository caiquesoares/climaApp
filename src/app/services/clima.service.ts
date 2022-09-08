import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private key = '37444155e0be71a6d77b51130f15223c'

  constructor(private http: HttpClient) { }

  public getClima(location:any): any{
    const url = 'http://api.weatherstack.com/current?access_key=' + this.key + '&query=';
    return this.http.get(url + location);
  }
}
