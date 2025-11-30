import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"role_name",length:20})
    roleName:string;
}
