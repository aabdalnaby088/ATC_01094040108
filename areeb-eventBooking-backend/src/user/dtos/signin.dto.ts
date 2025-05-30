import { IsEmail, IsNotEmpty, IsString } from "class-validator";




export class signinDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsString()
    @IsNotEmpty()    
    password: string;
}