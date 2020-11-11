import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { heatcheckModule } from './healtcheck/healtcheck.module';

@Module({
  imports: [heatcheckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
