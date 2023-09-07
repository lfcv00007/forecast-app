import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { ForecastModule } from 'src/forecast/forecast.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [ForecastModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/forecast/TestCity (GET)', () => {
        return request(app.getHttpServer())
            .get('/forecast/TestCity')
            .expect(200)
            .expect({
                city: 'TestCity',
                currentWeather: {
                    city: 'TestCity',
                    date: '7/9/2023',
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
                        date: '7/9/2023',
                        temp: 12,
                        maxTemp: 15,
                        minTemp: 0,
                        realFeel: 15,
                        precipitation: 83.56,
                        windSpeed: 13.7,
                        weatherCondition: 'RAIN',
                    },
                    {
                        date: '7/9/2023',
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
});
