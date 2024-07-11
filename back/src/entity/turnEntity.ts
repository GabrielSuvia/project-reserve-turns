import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usser } from "./userEntity";



@Entity({
    name:"turns"
})
export class Turn{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    date:string

    @Column("integer")
    time:number

    @ManyToOne(()=>Usser,(user)=>user.turnId)
    userId:Usser

    @Column({
        length:255
    })
    status:string
}