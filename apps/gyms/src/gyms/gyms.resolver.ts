import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GymsService } from './gyms.service';
import { Gym } from './entities/gym.entity';
import { CreateGymInput } from './dto/create-gym.input';
import { UpdateGymInput } from './dto/update-gym.input';

@Resolver(() => Gym)
export class GymsResolver {
  constructor(private readonly gymsService: GymsService) {}

  @Mutation(() => Gym)
  createGym(@Args('createGymInput') createGymInput: CreateGymInput): Promise<Gym> {
    return this.gymsService.create(createGymInput);
  }

  @Query(() => [Gym], { name: 'gyms' })
  findAll(): Promise<Gym[]> {
    return this.gymsService.findAll();
  }

  @Query(() => Gym, { name: 'gym' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Gym> {
    return this.gymsService.findOne(id);
  }

  @Mutation(() => Gym)
  updateGym(@Args('updateGymInput') updateGymInput: UpdateGymInput): Promise<Gym> {
    return this.gymsService.update(updateGymInput.id, updateGymInput);
  }

  @Mutation(() => Gym)
  removeGym(@Args('id', { type: () => Int }) id: number): Promise<number> {
    return this.gymsService.remove(id);
  }
}
