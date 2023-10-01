import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./create-lesson.input";
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input";

@Resolver(of => LessonType)
export class LessonResolver{
    constructor(private service: LessonService){}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string
    ){
        return this.service.getLesson(id)
    }

    @Query(returns =>[LessonType])
    lessons(){
        return this.service.getLessons()
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonInput,
        ){
        return this.service.createLesson(createLessonInput)
    }

    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput
    ){
        const {lessonID, studentIDs} = assignStudentsToLessonInput

        return this.service.assignStudentsToLesson(lessonID, studentIDs)

    }
}