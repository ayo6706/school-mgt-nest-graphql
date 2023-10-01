import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lessom.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

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
}
