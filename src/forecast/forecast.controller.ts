import { Controller, Get, Param, Res } from '@nestjs/common';
import { ForecastService } from './forecast.service';
import { ApiTags, ApiOperation, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { ForecastPayload } from './payload/forecast.payload';
import { Response } from 'express';

@Controller()
@ApiTags('forecast')
export class ForecastController {
    constructor(private readonly forecastService: ForecastService) {}

    @Get()
    @ApiOperation({ summary: 'Display a basic forecast html page.' })
    @ApiOkResponse({ description: 'Forecast raw HTML page.' })
    getCityForecast(@Res() res: Response) {
        res.sendFile('index.html', { root: 'public' });
    }

    @Get('api/forecast/:city')
    @ApiOperation({ summary: 'Get forecast of given city' })
    @ApiBadRequestResponse({ description: 'Bad request.' })
    @ApiOkResponse({ description: 'OK.', type: [ForecastPayload] })
    getCityForecastAPI(@Param('city') city: string): ForecastPayload {
        return this.forecastService.getCityForecast(city.trim().toLocaleLowerCase());
    }
}
