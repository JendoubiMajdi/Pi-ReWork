import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CongeService } from './conge.service';
import { Conge } from 'src/Schemas/Conge.schema';
import { StatutCon } from 'src/Schemas/Types/statut-con.enum';
import { TypeCon } from 'src/Schemas/Types/type-con.enum';

@Controller()
export class CongeController {
  constructor(private readonly ServiceConge: CongeService) {}


  @Post('/conge')
  async createConge(@Body()congeDto: Conge) {
    console.log(congeDto)
    return this.ServiceConge.createConge(congeDto)
  } 

  @Put('/conge/:id')
async updateConge(@Param('id') id: string, @Body() congeDto: Conge) {
  return this.ServiceConge.updateConge(id, congeDto);
}

@Delete('/conge/:id')
async deleteConge(@Param('id') id: string) {
    
  await this.ServiceConge.deleteConge(id);
  return { message: 'Conge deleted successfully' }; 
}

@Get('/conge')
async findAll() {
  return this.ServiceConge.findAll();
}

@Get('/conge/:id')
async findById(@Param('id') id: string) {
  const conge = await this.ServiceConge.findById(id);
  if (!conge) {
    throw new NotFoundException('Conge not found');
  }
  return conge;
}



}