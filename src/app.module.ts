import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { BountyModule } from './bounty/bounty.module';
import { BreedModule } from './breed/breed.module';
import { Bounty } from './bounty/entities/bounty.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.dev.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pg',
      password: 'pg',
      database: 'pg',
      synchronize: true,
      autoLoadEntities: true,
      logging: ["query", "error"],
    }),
    CatModule,
    BountyModule,
    BreedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
