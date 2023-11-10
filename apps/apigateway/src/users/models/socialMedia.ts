import { Field, InputType, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class SocialMedia {
  @Field({ nullable: true })
  twitterUri?: string;

  @Field({ nullable: true })
  fbUri?: string;
}