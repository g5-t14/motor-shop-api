import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces"
import { userSchema, userSchemaResponse } from "../../schemas/user.schema"



const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {

    const { email } = data

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser: User | null = await userRepository.findOne({
        where: {
            email
        }
    })

    if(findUser){
        throw new Error("User already exists!")
    }

    const user: User = userRepository.create(data)

    await userRepository.save(user)

    return userSchemaResponse.parse(user)

}


export { createUserService }