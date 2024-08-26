import {IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator'

export class LoginDto {

    @IsNotEmpty()
    @IsEmail({}, {message: "Please entre correct email"})
    readonly mail:string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password:string
}