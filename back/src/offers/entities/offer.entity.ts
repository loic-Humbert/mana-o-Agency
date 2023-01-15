import { Apply } from "src/apply/entities/apply.entity";
import { Company } from "src/companies/entities/company.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";

@Entity()
export class Offer {


    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;


    @Column()
    vue : number = 0


    @Column()
    companyName: string

    @Column()
    email: string


    @Column()
    offerName: string


    @Column()
    city: string

    @Column()
    description: string

    @Column()
    types: string



    @OneToMany(() => Apply, (apply) => apply.offer, { cascade: true })
    apply: Apply[];




}
