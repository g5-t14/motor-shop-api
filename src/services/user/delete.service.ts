import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"



const deleteUserService = async (userId: string): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        id: parseInt(userId)
    })

    if(!user){
        throw new Error("User not found")
    }

    await userRepository.remove(user)

}



export { deleteUserService }