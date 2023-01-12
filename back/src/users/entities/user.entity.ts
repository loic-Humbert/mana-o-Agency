import { Session } from "inspector";
import { Company } from "src/companies/entities/company.entity";
import { Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Company, (company) => company.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE', orphanedRowAction: 'delete', nullable: true })
    company: Company;


}
