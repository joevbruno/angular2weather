import {Component, OnInit} from "@angular/core";
import { FormsModule } from '@angular/forms';

import { WeatherService } from "./weather.service";
import { WeatherItem } from "./weather.item";

@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <weather-item *ngFor="let weatherItem of weatherItems" [witem]="weatherItem"></weather-item>           
        </section>
    `,    
    providers: [WeatherService]
})
export class WeatherListComponent implements OnInit{
    
    weatherItems: WeatherItem[];

    constructor( private _weatherService: WeatherService) {}

    ngOnInit():any{
        this.weatherItems = this._weatherService.WeatherItems();        
    }   
    
}