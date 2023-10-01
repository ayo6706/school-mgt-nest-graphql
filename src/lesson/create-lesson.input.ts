import { Field, InputType } from "@nestjs/graphql";
import { IsDateString, MinLength } from "class-validator";

@InputType()
export class CreateLessonInput {

    @Field()
    @MinLength(1)
    name:string;

    @IsDateString()
    @Field()
    startDate: string;

    @Field()
    endDate: string;
}