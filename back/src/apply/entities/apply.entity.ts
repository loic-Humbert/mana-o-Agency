import { Offer } from "src/offers/entities/offer.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Apply {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    file: string


    @ManyToOne(() => Offer, (offer) => offer.id, {onDelete: 'CASCADE', onUpdate: 'CASCADE', orphanedRowAction: 'delete', nullable: true})
    offer: Offer;
  
}

