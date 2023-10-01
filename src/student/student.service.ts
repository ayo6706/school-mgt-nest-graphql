import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private repo: Repository<Student>
    ){}

    async createStudent(createStudentInput: CreateStudentInput){
        const {firstName, lastName} =createStudentInput;

        const student = await this.repo.create(
            {
                id: uuid(), 
                firstName,
                lastName
            }
        )
    }
}
