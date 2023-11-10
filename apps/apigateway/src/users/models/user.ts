import { Field, Int, ObjectType } from "@nestjs/graphql";
import { SocialMedia } from "./socialMedia";
@ObjectType('User')
export class User {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field({ nullable: true })
  subscribed?: boolean;

  @Field(() => SocialMedia, { nullable: true })
  socialMedia?: SocialMedia;
}