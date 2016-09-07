import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { WeatherListComponent } from './weather/weather-list.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    WeatherItemComponent,
    WeatherSearchComponent,
    WeatherListComponent    
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
