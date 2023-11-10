import { User } from "./user";
import { Field, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class Users {
  @Field(type => [User], {nullable:'items'})
  users: User[];
}