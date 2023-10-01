import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class AssignStudentsToLessonInput{
    @Field(type => ID)
    lessonID: string;

    @Field(type => [ID])
    studentIDs: string[]
}