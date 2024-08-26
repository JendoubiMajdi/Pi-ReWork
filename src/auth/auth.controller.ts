import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}

    @Post('/signup')
    signUp(@Body() SignUpDto: SignUpDto): Promise<{token: string}> {
        return this.authService.signUp(SignUpDto);
    }

    @Get('/login')
    login(@Body() LoginDto: LoginDto): Promise<{token: string}> {
        return this.authService.login(LoginDto);
    }
}
