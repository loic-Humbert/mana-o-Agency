import { Company } from "src/companies/entities/company.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Offer {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Company, (company) => company.offer, { onDelete: 'CASCADE', onUpdate: 'CASCADE', orphanedRowAction: 'delete', nullable: true })
    company: Company;

}
