import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './create-student.input';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private repo: Repository<Student>
    ){}

    async createStudent(createStudentInput: CreateStudentInput): Promise<Student>{
        const {firstName, lastName} = createStudentInput;

        const student = this.repo.create(
            {
                id: uuid(),
                firstName,
                lastName
            }
        )

        return this.repo.save(student);
    }
}
