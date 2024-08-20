import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Conge, CongeSchema } from '../schemas/Conge.schema';
import { CongeController } from './conge.controller';
import { CongeService } from './conge.service';

@Module({
imports: [MongooseModule.forFeature([{name: "conge",schema:CongeSchema}])],
controllers:[CongeController],
providers:[CongeService],
})
export class CongeModule {}