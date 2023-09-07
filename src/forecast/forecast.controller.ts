import { Controller, Get, Param } from '@nestjs/common';
import { ForecastService } from './forecast.service';
import { ApiTags, ApiOperation, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { ForecastPayload } from './payload/forecast.payload';

@Controller()
@ApiTags('forecast')
export class ForecastController {
    constructor(private readonly forecastService: ForecastService) {}

    @Get('forecast/:city')
    @ApiOperation({ summary: 'Get forecast of given city' })
    @ApiBadRequestResponse({ description: 'Bad request.' })
    @ApiOkResponse({ description: 'OK.', type: [ForecastPayload] })
    getCityForecast(@Param('city') city: string): ForecastPayload {
        return this.forecastService.getCityForecast(city);
    }
}
