import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/signin.dto';
import { User } from 'src/Schemas/Types/User.schema';
import { UpdateUserDto } from './dto/updateuser.dto';
import { AppService } from 'src/app.service';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}

    @Post('signup')
    signUp(@Body() SignUpDto: SignUpDto): Promise<{token: string}> {
        console.log(SignUpDto);
        return this.authService.signUp(SignUpDto);
    }

    @Post('login')
    login(@Body() LoginDto: LoginDto): Promise<{token: string}> {
        return this.authService.login(LoginDto);
    }

    @Patch('update/:id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.authService.updateUser(id, updateUserDto);
    }
}
