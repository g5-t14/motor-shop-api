import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { TUserResponse } from "../../interfaces/user.interfaces"
import { userSchemaResponse } from "../../schemas/user.schema"



const retrieveUserService = async (userId: string): Promise<TUserResponse> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)


    const user: User | null = await userRepository.findOneBy({
        id: parseInt(userId)
    })

    if(!user){
        throw new Error("User not found")
    }

    return userSchemaResponse.parse(user)

}


export { retrieveUserService }