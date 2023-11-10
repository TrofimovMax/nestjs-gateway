import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "@nestjs/class-validator";
@ArgsType()
export class GetUserArgs {
  @Field()
  @IsNotEmpty()
  id: string
}