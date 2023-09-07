import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/config.module';
import { ForecastModule } from './forecast/forecast.module';

@Module({
    imports: [AppConfigModule, ForecastModule],
})
export class AppModule {}
