import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ForecastDto {
    @ApiProperty({
        example: 'Madrid',
        description: 'City to get weather forecast',
    })
    @IsString()
    city: string;
}
