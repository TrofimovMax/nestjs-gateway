import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class CreateSocialMediaInput {
  @Field({ nullable: true })
  twitterUri?: string;

  @Field({ nullable: true })
  fbUri?: string;
}