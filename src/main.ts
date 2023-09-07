import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = app.get(AppConfigService);

    const swaggerConfig = new DocumentBuilder()
        .setTitle('ForecastApp')
        .setDescription('Quick forecast REST API')
        .setVersion('1.0')
        .build();

    app.use(express.static('public'));

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api/v1/docs', app, document);
    await app.listen(config.port);
}
bootstrap();
