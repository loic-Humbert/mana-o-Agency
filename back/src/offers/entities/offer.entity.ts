import { Apply } from "src/apply/entities/apply.entity";
import {  Company } from "src/companies/entities/company.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Offer {

    @PrimaryGeneratedColumn()
    id: number

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


    @ManyToOne(() => Company, (company) => company.offer, { onDelete: 'CASCADE', onUpdate: 'CASCADE', orphanedRowAction: 'delete', nullable: true })
    company: Company;

    @OneToMany(() => Apply, (apply) => apply.offer, { cascade: true })
    apply: Apply[];
  



}
