import { ApiProperty } from '@nestjs/swagger';
import { WeatherForecastPayload } from './weather-forecast.payload';

export class ForecastPayload {
    @ApiProperty({
        example: 'Madrid',
        description: 'City to get weather forecast',
    })
    city: string;

    @ApiProperty({
        description: 'Weather forecast right now.',
        type: WeatherForecastPayload,
    })
    currentWeather: WeatherForecastPayload;

    @ApiProperty({
        description: 'Array containing forecast days.',
        type: [WeatherForecastPayload],
    })
    forecast: WeatherForecastPayload[];

    @ApiProperty({
        example: 33.45,
        description: 'Average temperature of each day.',
    })
    avgTemp: number;
}
