import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "@nestjs/class-validator";
@InputType()
export class RemoveUserInput{
  @Field()
  @IsNotEmpty()
  id: string
}