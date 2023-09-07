import { Test, TestingModule } from '@nestjs/testing';
import { ForecastController } from './forecast.controller';
import { ForecastService } from './forecast.service';

describe('AppController', () => {
    let forecastController: ForecastController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ForecastController],
            providers: [ForecastService],
        }).compile();

        forecastController = app.get<ForecastController>(ForecastController);
    });

    describe('root', () => {
        it('Should return an object with TestCity mock forecast data.', () => {
            expect(forecastController.getCityForecastAPI('TestCity')).toEqual({
                city: 'TestCity',
                currentWeather: {
                    city: 'TestCity',
                    date: new Date().toLocaleDateString('es-ES'),
                    temp: 12,
                    maxTemp: 15,
                    minTemp: 0,
                    realFeel: 15,
                    precipitation: 83.56,
                    windSpeed: 13.7,
                    weatherCondition: 'RAIN',
                },
                forecast: [
                    {
                        date: new Date().toLocaleDateString('es-ES'),
                        temp: 12,
                        maxTemp: 15,
                        minTemp: 0,
                        realFeel: 15,
                        precipitation: 83.56,
                        windSpeed: 13.7,
                        weatherCondition: 'RAIN',
                    },
                    {
                        date: new Date().toLocaleDateString('es-ES'),
                        temp: 5,
                        maxTemp: 10,
                        minTemp: 0,
                        realFeel: 2,
                        precipitation: 3.56,
                        windSpeed: 1.7,
                        weatherCondition: 'CLEAR',
                    },
                ],
                avgTemp: 8.5,
            });
        });

        it('Average temperature calculated from TestCity mock data.', () => {
            expect(forecastController.getCityForecastAPI('TestCity').avgTemp).toEqual(8.5);
        });
    });
});
