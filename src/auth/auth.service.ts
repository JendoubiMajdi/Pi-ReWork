import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/Schemas/Types/User.schema';

import * as bcrypt from 'bcrypt'
import { SignUpDto } from './dto/signup.dto';
import {LoginDto} from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ){}

    async signUp(signUpDto: SignUpDto): Promise<{token: string}>{
        const {nom, prenom, tel, mail, password} = signUpDto

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            nom,
            prenom,
            tel,
            mail,
            password: hashedPassword
        })
        const token = this.jwtService.sign({id: user._id})
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

            const token = this.jwtService.sign({id: user._id})
            return {token}
        }
    
}
