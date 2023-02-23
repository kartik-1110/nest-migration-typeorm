import { User } from "src/users/entities/user.entity";
import { setSeederFactory } from "typeorm-extension";
import {randFullName, randEmail, randRole} from '@ngneat/falso'

/* A factory function used to add data in DB using seeding */ 
export default setSeederFactory(User,() => {
    const user = new User()

    /* random data is added in user object using falso package */ 
    user.name = randFullName()
    user.email = randEmail()
    user.role = randRole()

    return user
})