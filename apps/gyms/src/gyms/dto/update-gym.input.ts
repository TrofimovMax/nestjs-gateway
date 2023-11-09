import { InputType, Field, Int, ID } from "@nestjs/graphql";

@InputType()
export class UpdateGymInput {
  @Field(() => ID)
  id: number

  @Field({ nullable: true })
  title: string

  @Field(() => Int, { nullable: true })
  capacity: number

  @Field( () => JSON, { nullable: true })
  schedule: object
}
