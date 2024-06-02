import { City } from "src/city/city.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Faculty {

    @PrimaryGeneratedColumn()
    facultyID: number

    @Column()
    facultyName: string
    
    @Column()
    street: string

    @Column()
    streetNumber: number

    @Column()
    contactNumber: number

    @Column()
    contactMail: string

    @ManyToOne(() => City, (city) => city.postNumber)
    @JoinColumn({name: 'cityID'})
    city: City
}