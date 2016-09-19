import { Component } from '@angular/core';
import { WeatherItem } from './weather.item';

@Component({
    selector: 'weather-item',
    template: `
        <article class="weather-element">
            <div class="col-1">
            <h3>{{ witem.cityName }}</h3>
                <p class="info">{{witem.description}}</p>
            </div>
            <div class="col-2">
                <span class="temperature">{{witem.temperature}}°C</span>
            </div>
        </article>
   `,
    styleUrls: ['src/css/weather-item.css'],
    inputs: ['witem']
})
export class WeatherItemComponent {
    witem: WeatherItem[];
}
