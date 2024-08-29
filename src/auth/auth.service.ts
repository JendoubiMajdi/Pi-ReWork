import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/Schemas/Types/User.schema';

import * as bcrypt from 'bcrypt'
import { SignUpDto } from './dto/signup.dto';
import {LoginDto} from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './dto/updateuser.dto';
import { TwilioService } from 'nestjs-twilio';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
        //private twilioService: TwilioService
    ){}

    /*async sendSMS() {
        return this.twilioService.client.messages.create({
          body: 'Check your phone for notifications ...',
          from: '+21627839399',
          to: '+21627790792',
        });
      }*/

    async signUp(signUpDto: SignUpDto): Promise<{token: string}>{
        const {nom, prenom, tel, mail, password,role='user'} = signUpDto

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            nom,
            prenom,
            tel,
            mail,
            password: hashedPassword,
            role
        })
        const token = this.jwtService.sign({id: user._id, user: user.role})
        //this.sendSMS();
        return {token}
    }

    async login (LoginDto: LoginDto): Promise<{token: string}>{
        const {mail, password} = LoginDto;

        const user = await this.userModel.findOne({mail})
        if (!user){
            throw new UnauthorizedException('Invalid email or password')
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password)
            if(!isPasswordMatched){
                throw new UnauthorizedException('Invalid email or password')
            }

            const token = this.jwtService.sign({id: user._id, role: user.role})
            return {token}
        }

        async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
            const user = await this.userModel.findById(id);
            if (!user) {
                throw new UnauthorizedException('User not found');
            }
    
            if (updateUserDto.password) {
                updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
            }
    
            Object.assign(user, updateUserDto);
            return user.save();
        }
    
}
