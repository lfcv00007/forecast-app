import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    constructor(private configService: ConfigService) {}

    get nodeEnv() {
        return this.configService.get<string>('app.env');
    }

    get port() {
        return parseInt(this.configService.get<string>('app.port'));
    }
}
