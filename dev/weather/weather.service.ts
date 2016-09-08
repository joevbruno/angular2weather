import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";
import 'rxjs/Rx';

import { WeatherItem } from "./weather.item";
import { WEATHER_ITEMS } from './weather.data';

@Injectable()
export class WeatherService{
    ykey = '241498f48fe94a200a0af3b728c14b27';
    
    constructor ( private _http: Http ) { }

    WeatherItems(){
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any> {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID='+this.ykey+'&units=metric')
            .map( response => response.json() )
            .catch( error => {
                console.error(error);
                return Observable.throw(error.json());
            }
         )
    }
}