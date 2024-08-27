import { IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    nom?: string;

    @IsOptional()
    @IsString()
    prenom?: string;

    @IsOptional()
    @IsString()
    tel?: string;

    @IsOptional()
    @IsEmail({}, { message: 'Please enter a valid email' })
    mail?: string;

    @IsOptional()
    @IsString()
    password?: string;
}
