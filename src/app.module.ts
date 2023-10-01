import { Module } from '@nestjs/common';
import { LessonModule } from './lesson/lesson.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lessom.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities:  [Lesson]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    LessonModule,
    StudentModule
  ],
})
export class AppModule {}
