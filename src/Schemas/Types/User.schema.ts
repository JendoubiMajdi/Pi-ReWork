import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User{
   @Prop()
   id: string;
   @Prop()
   nom: string;
   @Prop()
   prenom: string; 
   @Prop()
   tel: string;
   @Prop({unique: [true, 'Duplicate email entred']})
   mail: string;
   @Prop()
   password: string;
   @Prop()
   Role: string;
}

export const UserSchema = SchemaFactory.createForClass(User)
