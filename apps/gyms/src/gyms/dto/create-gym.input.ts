import { InputType, Int, Field, ID } from "@nestjs/graphql";

@InputType()
export class CreateGymInput {
  @Field({ nullable: true })
  title: string

  @Field(() => Int, { nullable: true })
  capacity: number

  @Field( () => JSON, { nullable: true })
  schedule: object
}
