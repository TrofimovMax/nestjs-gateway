import { Module } from '@nestjs/common';
import { GymsModule } from './gyms/gyms.module';

@Module({
  imports: [GymsModule],
  controllers: [],
  providers: [],
})
export class GymsGQLModule {}
