import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { WeatherConditionEnum } from '../enums/weather-condition.enum';

export class WeatherForecastPayload {
    @ApiProperty({
        example: '06-09-2023',
        description: 'Date format DD-MM-YYYY.',
    })
    date: string;

    @ApiProperty({
        example: 30,
        description: 'Temperature value in °C.',
    })
    temp: number;

    @ApiProperty({
        example: 30,
        description: 'Maximun temperature value in °C.',
    })
    maxTemp: number;

    @ApiProperty({
        example: 30,
        description: 'Minimun temperature value in °C.',
    })
    minTemp: number;

    @ApiPropertyOptional({
        example: 31,
        description: 'Real feel temperature value in °C.',
    })
    realFeel?: number;

    @ApiPropertyOptional({
        example: 6.5,
        description: 'Rain precipitation total, in mm.',
    })
    precipitation?: number;

    @ApiPropertyOptional({
        example: 30,
        description: 'Wind speed value km/h.',
    })
    windSpeed?: number;

    @ApiProperty({
        example: WeatherConditionEnum.WINDY,
        description: 'Weather and sky condition resume.',
    })
    weatherCondition: WeatherConditionEnum;
}
