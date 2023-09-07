import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ForecastPayload } from './payload/forecast.payload';
import { WeatherForecastPayload } from './payload/weather-forecast.payload';
import WEATHER_DATA from './mocks/weather-data';

@Injectable()
export class ForecastService {
    /**
     * Return forecast for given city
     * @param city
     */
    getCityForecast(city: string): ForecastPayload {
        const forecastData = this.getWeatherDataByCity(city);
        if (forecastData.length === 0) {
            throw new HttpException('City not found', HttpStatus.NOT_FOUND);
        }
        return this.mapPayload(forecastData, city);
    }

    /**
     * Creates ForecastPayload with given data
     * @param forecastData[]
     * @param city
     */
    private mapPayload(forecastData: any[], city: string): ForecastPayload {
        const currentWeather = forecastData.find((value) => value.date === new Date().toLocaleDateString('es-ES'));
        const forecast = forecastData.map((data) => ({
            date: data.date,
            temp: data.temp,
            maxTemp: data.maxTemp,
            minTemp: data.minTemp,
            realFeel: data.realFeel ?? '',
            precipitation: data.precipitation ?? '',
            windSpeed: data.windSpeed ?? '',
            weatherCondition: data.weatherCondition,
        }));

        return {
            city,
            currentWeather,
            forecast,
            avgTemp: this.calculateAvgTemperature(forecast),
        };
    }

    /**
     * Calculate avg temperature
     * @param data WeatherForecastPayload
     */
    private calculateAvgTemperature(data: WeatherForecastPayload[]): number {
        let total = 0;
        data.forEach((element) => {
            total = total + element.temp;
        });
        return total / data.length;
    }

    /**
     * Return weather data by city
     * @param city
     * @returns [data]
     */
    getWeatherDataByCity(city: string): any[] {
        const data = WEATHER_DATA.map((data) => (data.city === city ? data : null));
        return data.filter((data) => data !== undefined && data !== null);
    }
}
