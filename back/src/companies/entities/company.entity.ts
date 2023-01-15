import { Offer } from "src/offers/entities/offer.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {


    @PrimaryGeneratedColumn()
    id: number


    @OneToMany(() => User, (user) => user.company, { cascade: true })
    user: User[];

}

