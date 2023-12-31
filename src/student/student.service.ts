import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { In, Repository } from 'typeorm';
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

    async students(): Promise<Student[]>{
        return this.repo.find();
    }

    async student(id: string): Promise<Student>{
        return this.repo.findOneBy({id})
    }

    async getManyStudents(studentIDs: string[]): Promise<Student[]>{
        return await this.repo.find({
            where: {
                id: {
                    $in: studentIDs
                } as any,
            },
          }) ;

    }
}
