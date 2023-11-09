import { Injectable } from '@nestjs/common';
import { CreateGymInput } from './dto/create-gym.input';
import { UpdateGymInput } from './dto/update-gym.input';
import { InjectRepository } from "@nestjs/typeorm";
import { Gym } from "./entities/gym.entity";
import { Repository } from "typeorm";

@Injectable()
export class GymsService {

  constructor(
    @InjectRepository(Gym)
  private readonly gymRepository: Repository<Gym>
  ) {}
  async create(createGymInput: CreateGymInput): Promise<Gym> {
    return await this.gymRepository.save({ ...createGymInput });
  }

  async findAll(): Promise<Gym[]> {
    return await this.gymRepository.find();
  }

  async findOne(id: number): Promise<Gym> {
    return await this.gymRepository.findOne({ where{id: gym.id} });
  }

  async update(id: number, updateGymInput: UpdateGymInput): Promise<Gym> {
    await this.gymRepository.update({ id: updateGymInput.id},
      { ...updateGymInput });
    return await this.getOneUser(updateGymInput.id)
  }

  async remove(id: number): Promise<number> {
    await this.gymRepository.delete({ id });
    return id;
  }
}
