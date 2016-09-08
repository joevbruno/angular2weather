import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { WeatherService } from "./weather.service";
import { WeatherItem } from "./weather.item";
import { Subject } from "rxjs/Subject";
import{ arr } from './pipes';
 
@Component({
    selector: 'weather-search',
    
   
    template: `
        <section class="weather-search">
            <form autocomplete="off" (ngSubmit)="onSubmit()">
                <label for="City">City</label>
                <input name="title" (ngModel)="title" (input)="onSelectSearch(input.value)" #input required>
                <button type="submit">Add City</button>
            </form>
            <div>
                <span class="info">City found: </span> {{data.name}}
            </div>            
            <div class="found_city"> cities that were found: {{dataCity}} </div>
        </section>        
    `,
    
    providers: [WeatherService] 
})

export class WeatherSearchComponent{

    private searchStream = new Subject<string>();
    data:any = {};
    dataCity = [];

    constructor( private _weatherService: WeatherService ) { }

    onSubmit(){
        const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
        this._weatherService.addWeatherItem(weatherItem);
    }

    onSelectSearch(cityName: string){
        this.searchStream
            .next(cityName)            
    }

    ngOnInit(){
        this.searchStream
            .debounceTime(0)
            .distinctUntilChanged()
            .switchMap((cityName: string) => this._weatherService.searchWeatherData(cityName))
            .subscribe(
                data => { 
                    this.data = data;                   
                    
                    //  this.dataCity.push(this.data.name);
                    //  console.log(this.dataCity)

                }          
            )                 
    }          
}