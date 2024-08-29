import { Injectable, NotFoundException } from '@nestjs/common';
import { Conge,CongeDocument } from '../schemas/Conge.schema';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCongeStatusDto } from 'src/auth/dto/update-conge-status.dto';
import { TwilioService } from 'nestjs-twilio';
import { User } from 'src/Schemas/Types/User.schema';

@Injectable()
export class CongeService{
  
  constructor(
    @InjectModel('conge') private readonly congeModel: Model<CongeDocument>
  ){}

  private async getEnumDocumentId<TEnum extends string>(enumClass: TEnum, value: string): Promise<mongoose.Types.ObjectId> {
    const enumModel = this.congeModel.db.model(enumClass);
  const enumDocument = await enumModel.findOne({ value: { $regex: new RegExp("^" + value + "$", "i") } });

  if (!enumDocument) {
    throw new Error(`Enum document for ${enumClass}.${value} not found`);
  }

  return enumDocument._id;
  }

  

  // création d'un congé
  async createConge(conge: Conge): Promise<Conge> {
    const newConge = new this.congeModel(conge);
    return newConge.save();
  }
   

  //Mise à jours d'un congé
  async updateConge(id: string, conge: Conge): Promise<Conge | null> {
    console.log(id)
    const existingConge = await this.congeModel.findByIdAndUpdate(id, conge, { new: true }); 
    if (!existingConge) {
      throw new NotFoundException('Conge not found');
    }
    return existingConge;
  }

  //Effacer un congé
  async deleteConge(id: string): Promise<void> {
    const deletedConge = await this.congeModel.findByIdAndDelete(id);
    if (!deletedConge) {
      throw new NotFoundException('Conge not found');
    }
  }
  
  //Trouver tous les= congés
  async findAll(): Promise<Conge[]> {
    return await this.congeModel.find();
  }
  
  //Trouver un congé avec :id:
  async findById(id: string): Promise<Conge | null> {
    return await this.congeModel.findById(id);
  }

  async updateStatus(id: string, updateCongeStatusDto: UpdateCongeStatusDto): Promise<Conge> {
    const conge = await this.congeModel.findById(id);
    if (!conge) {
        throw new NotFoundException(`Leave with ID ${id} not found`);
    }
    console.log('Before update:', conge);
    conge.statut = updateCongeStatusDto.statut;
    const updatedConge = await conge.save();
    console.log('After update:', updatedConge);

    return updatedConge;
}

async findByUser(userId: string): Promise<Conge[]> {
  return this.congeModel.find({ userId }).exec();
}

  
  

}