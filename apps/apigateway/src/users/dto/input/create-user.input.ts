import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "@nestjs/class-validator";
@InputType('UserInput')
export class CreateUserInput{

  @Field()
  @IsNotEmpty()
  //@IsEmail() for email value for example
  username: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsNotEmpty()
  age: number;
}