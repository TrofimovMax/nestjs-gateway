import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, ValidateNested } from "@nestjs/class-validator";
import { Type } from "class-transformer";
import { CreateSocialMediaInput } from "./create-socialMedia.input";

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field(() => CreateSocialMediaInput, { nullable: true })
  @ValidateNested()
  @Type(() => CreateSocialMediaInput)
  socialMedia: CreateSocialMediaInput;
}