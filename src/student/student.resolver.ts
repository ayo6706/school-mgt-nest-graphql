import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { CreateStudentInput } from "./create-student.input";

@Resolver(of => StudentType)
export class StudentResolver{
    constructor(private service: StudentService){

    }

    @Mutation(returns => StudentType)
    createStudent(
        @Args("createStudentInput") createStudentInput: CreateStudentInput,
    ){
        return this.service.createStudent(createStudentInput);
    }
}