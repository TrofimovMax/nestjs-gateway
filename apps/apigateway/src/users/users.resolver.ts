import { User } from "./models/user";
import { UsersService } from "./users.service";
import { GetUserArgs } from "./dto/args/get-user.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { RemoveUserInput } from "./dto/input/remove-user.input";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { map, Observable } from "rxjs";

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, {name: 'getUser', nullable: true})
  getUser(@Args() getUserArgs: GetUserArgs): Observable<User> {
    return this.usersService.findOne(getUserArgs.id);
  }
  @Query(() => [User], { name: 'getUsers', nullable: 'items' })
  getUsers(): Observable<User[]> {
    return this.usersService.findAll().pipe(
      map((usersResponse) => usersResponse.users),
    );
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): Observable<User>{
    return this.usersService.create(createUserData);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): Observable<User>{
    return this.usersService.update(updateUserData.id ,updateUserData);
  }

  @Mutation(() => User)
  removeUser(@Args('removeUserData') removeUserData: RemoveUserInput): Observable<User>{
    return this.usersService.remove(removeUserData.id);
  }
}