import { IsEnum } from 'class-validator';
import { StatutCon } from 'src/Schemas/Types/statut-con.enum';

export class UpdateCongeStatusDto {
   @IsEnum(StatutCon)
   statut: StatutCon;
}
