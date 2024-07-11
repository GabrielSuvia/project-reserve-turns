import {Iturn} from "../interfaces/turn";
import {Turn} from "../entity/turnEntity";
import {dataBaseTurn} from "../config/data-source";
import {dataBaseUser} from "../config/data-source";
//import {Usser} from "../entity/userEntity";
//import {IturnDtb} from "../dtb/turnDtb";


export const turnsGetService = async ():Promise<Turn[]> =>{
     const turns = await dataBaseTurn.find();
    return turns;
};

export const turnGetService = async (id:number) :Promise<Turn | null> =>{

    const turns: Turn | null = await dataBaseTurn.findOneBy({id});
    return turns;
};

 export const turnCreateService = async (date:string, time:number, userId:number, status:string): Promise<void>=>{
  
    const findUser = await dataBaseUser.findOneBy({id: userId});
    console.log(findUser)
    if(findUser){
     const turnRegister: Iturn= {date:date, time:time, userId:findUser, status:status};
     console.log(turnRegister)
    const newTurn = await dataBaseTurn.create(turnRegister);
     await dataBaseTurn.save(newTurn);

     if (!findUser.turnId) {
      findUser.turnId = [];
    }
    findUser.turnId.push(newTurn);

     await dataBaseUser.save(findUser);
   
    };
  

  
};

export const turnCancelledService = async (id:number): Promise<void>=>{
 
  const turnNumber : Turn | null = await dataBaseTurn.findOneBy({id});
  if(turnNumber){
    turnNumber.status="cancelled";
    await dataBaseTurn.save(turnNumber);
  }else{
    throw new Error("Reserva invalida");
  }
  
};