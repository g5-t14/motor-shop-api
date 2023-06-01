import { hash } from "bcryptjs"
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm"



@Entity("users")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({length: 127})
    name: string

    @Column({length: 127, unique: true})
    email: string

    @Column({length: 60})
    password: string

    @Column({length: 11, unique: true})
    cpf: string

    @Column({length: 11})
    phone: string

    @Column({length: 8})
    birthdate: string

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, 10)
    }

}


export { User }