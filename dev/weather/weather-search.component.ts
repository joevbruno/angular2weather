import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { WeatherService } from "./weather.service";
import { WeatherItem } from "./weather.item";

@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search">
            <form autocomplete="off" novalidate (ngSubmit)="onSubmit(f)" #f="ngForm">
                <label for="City">City</label>
                <input name="title" (ngModel)="city">
                <button type="submit">Add City</button>
            </form>
            <div>
                <span class="info">City found: </span> <div (click)="city">{{city}}</div>
            </div>            
        </section>        
    `,
    providers: [WeatherService] 
})

export class WeatherSearchComponent{

    city = '';
    startCity = 'Vinnitsa';

    constructor( private _weatherService: WeatherService ) { }

    onSubmit(form){
        this._weatherService.searchWeatherData(form.value.title)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
            )
        this.city = form.value.title;
    }

    ngOnInit(startCity){        
        this._weatherService.searchWeatherData(this.startCity)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
            )
        this.city = this.startCity;
    }
      
}