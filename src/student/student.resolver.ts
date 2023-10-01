import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { CreateStudentInput } from "./create-student.input";

@Resolver(of => StudentType)
export class StudentResolver{
    constructor(private service: StudentService){

    }

    @Mutation(returns => StudentType)
    createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput,
    ){
        return this.service.createStudent(createStudentInput);
    }

    @Query(returns =>[StudentType])
    students(){
        return this.service.students();
    }

    @Query(returns => StudentType)
    student(
        @Args('id') id: string
    ){
        return this.service.student(id)
    }
}