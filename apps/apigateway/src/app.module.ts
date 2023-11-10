import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}