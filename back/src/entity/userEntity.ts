import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./credentialEntity";
import {Turn} from "./turnEntity";


@Entity({
 name:"users"
})
export class Usser {
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:100})
    name:string

    @Column({length:255})
    email:string

    @Column()
    birthdate:string
    
    @Column("integer")
    nDni: number

    @OneToOne(()=>Credential)
    @JoinColumn()
    credentialsld:Credential
 
    @OneToMany(()=>Turn,(turn)=> turn.userId)
    turnId:Turn[]
}