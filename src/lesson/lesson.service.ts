import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './create-lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private repo: Repository<Lesson>
    ){}

    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>{
        const {name, startDate, endDate} = createLessonInput;
        const lesson = this.repo.create({
            id: uuid(),
            name,
            startDate,
            endDate
        })

        return this.repo.save(lesson);
    }

    async getLesson(id: string): Promise<Lesson>{
        return this.repo.findOneBy({ id })
    }

    async getLessons(): Promise<Lesson[]>{
        return this.repo.find();
    }

    async assignStudentsToLesson(lessonID: string, studentIDS: string[]): Promise<Lesson>{
        const lesson = await this.repo.findOneBy({
            id:lessonID
        });

        lesson.students= [...lesson.students, ...studentIDS];

        return this.repo.save(lesson)

    }
}
