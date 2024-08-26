import {IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator'

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    readonly nom:string

    @IsNotEmpty()
    @IsString()
    readonly prenom:string

    @IsNotEmpty()
    @IsString()
    readonly tel:string

    @IsNotEmpty()
    @IsEmail({}, {message: "Please entre correct email"})
    readonly mail:string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password:string
}