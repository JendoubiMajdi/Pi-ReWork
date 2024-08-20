import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import mongoose, { Document } from "mongoose";
import { StatutCon } from "src/Schemas/Types/statut-con.enum";
import { TypeCon } from "src/Schemas/Types/type-con.enum";

export type CongeDocument = Conge & Document

@Schema()
export class Conge{
    @Prop()
    id: string;
    @Prop({default:Date.now})
    date_debut: Date;
    @Prop()
    date_fin: Date;
    @Prop()
    jours_restants: number;
  
    @Prop({ type: String, enum: Object.values(StatutCon) })
    statut: StatutCon;
  
    @Prop({ type: String, enum: Object.values(TypeCon) })
    type_conge: TypeCon;
    
}



export const CongeSchema = SchemaFactory.createForClass(Conge)  

function isStatutCon(value: any): value is StatutCon {
  return StatutCon.hasOwnProperty(value);
}

function isTypeCon(value: any): value is TypeCon {
  return TypeCon.hasOwnProperty(value);
}
