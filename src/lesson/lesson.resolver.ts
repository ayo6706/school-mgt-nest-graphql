import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";

@Resolver(of => LessonType)
export class LessonResolver{
    constructor(private service: LessonService){}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string
    ){
        return this.service.getLesson(id)
    }

    @Mutation(returns => LessonType )
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonInput,
        ){
        return this.service.createLesson(createLessonInput)
    }
}