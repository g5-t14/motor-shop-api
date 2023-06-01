import { hashSync, getRounds } from "bcryptjs"
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm"

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
    @BeforeUpdate()
    async hashPassword() {
        const isEncryptRound = getRounds(this.password)
        if(!isEncryptRound){
            this.password = hashSync(this.password, 10)
        }
    }

}


export { User }