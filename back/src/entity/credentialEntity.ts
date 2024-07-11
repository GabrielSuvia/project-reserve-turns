import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"credentials"
})
export class Credential  {
@PrimaryGeneratedColumn()
id:number

@Column()
userName:string

@Column()
password:string

}