import { ObjectType, Field, ID, Int } from "@nestjs/graphql";

@ObjectType()
export class Gym {
  @Field(() => ID)
  id: number

  @Field()
  title: string

  @Field(() => Int, { nullable: true })
  capacity: number

  @Field( () => JSON, { nullable: true })
  schedule: object

  // @Field()
  // createdAt: Date
  //
  // @Field()
  // updatedAt: Date
}
