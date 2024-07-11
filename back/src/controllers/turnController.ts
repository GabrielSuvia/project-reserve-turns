import { Request,Response } from "express";
import { turnsGetService, turnGetService, turnCreateService,turnCancelledService } from "../services/turnService";


export const turnsGetController = async (req:Request,res:Response)=>{
       try {
        const turns =  await turnsGetService();
        res.status(200).json(turns);
       } catch (error) {
        res.status(500).json("error de servidor");
       };
   
};

export const turnGetController = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const turn =  await turnGetService(Number(id));
        res.status(200).json(turn);
       } catch (error) {
        res.status(500).json("error de servidor");
       };
};


export const turnCreateController = async (req:Request,res:Response)=>{
    try {
        const {date, time, userId, status} =req.body;
    
        await turnCreateService(date, time, userId, status)
        res.status(200).json("turno reservado");

       } catch (error) {
        console.log("hay un error")
        res.status(500).json(error);
       };
};


export const turnsUpdateController = async (req:Request,res:Response)=>{
    try {
        const {id}=req.params;//?????verificar
        await turnCancelledService(Number(id));
     res.status(200).json("Turno cancelado...");
    } catch (error) {
        res.status(404).json("Error")
    }
   
};