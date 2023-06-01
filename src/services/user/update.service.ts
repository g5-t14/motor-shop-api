import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { TUserResponse, TUserUpdateRequest } from "../../interfaces/user.interfaces"
import { userSchemaResponse } from "../../schemas/user.schema"
import { Repository } from "typeorm"


const updateUserService = async (data: TUserUpdateRequest, userId: string): Promise<TUserResponse> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        id: parseInt(userId)
    })

    if(!user){
        throw new Error("User not found")
    }

    const userUpdated: User = userRepository.create({
        ...user,
        ...data
    })

    await userRepository.save(userUpdated)

    return userSchemaResponse.parse(userUpdated)

}


export { updateUserService }