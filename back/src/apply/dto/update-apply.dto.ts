import { PartialType } from '@nestjs/mapped-types';
import { CreateApplyDto } from './create-apply.dto';

export class UpdateApplyDto extends PartialType(CreateApplyDto) {
    id: number

    email: string

    lastName: string

    firstName: string
}
