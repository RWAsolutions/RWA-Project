import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Profesor } from './profesor.entity';
import { Course } from 'src/course/course.entity';
import { City } from 'src/city/city.entity';

@Injectable()
export class ProfesorService {

    constructor(@InjectRepository(Profesor) private profesorRepository: Repository<Profesor>, private manager: EntityManager) {
        console.log('profesorRepository:', profesorRepository);
    }

    async getAll(): Promise<Profesor[]> {
        return this.profesorRepository.find();
    }

    async getById(id: number): Promise<Profesor> {
        const found = this.profesorRepository.findOne({ where: { profesorID: id } });
        if (!found) {
            throw new NotFoundException(`Profesor with id ${id} not found`);
        }
        return found
    }

    async getNotificationByProfesorId(id: number) {
        return this.manager.query(`
            SELECT 
                Notification.notificationID,
                Notification.title, 
                Notification.content,
                user_notification.isRead,
                Profesor.profesorName,
                Profesor.profesorSurname
            FROM 
                user_notification 
              JOIN 
            User ON user_notification.userID = User.userID 
              JOIN 
            Profesor ON User.userID = Profesor.profesorID
              JOIN 
            Notification ON Notification.notificationID = user_notification.notificationID 
            WHERE 
                User.userID = ${id};
            `);
    }

    async getCourseByProfesor(id: number): Promise<Course[]> {
        const profesor = await this.profesorRepository.createQueryBuilder('profesor')
            .leftJoinAndSelect('profesor.courses', 'courses')
            .where('profesor.profesorID = :id', { id })
            .getOne();

        if (!profesor) {
            throw new NotFoundException("Profesor with id ${id} not found");
        }

        return profesor.courses;
    }
    async getCitythroughProfesor(id: number): Promise<City> {
        const profesor = await this.profesorRepository.findOne({
            where: { profesorID: id },
            relations: ['city'],
        });

        if (!profesor) {
            throw new NotFoundException("Profesor with id ${id} not found");
        }

        return profesor.city;
    }
}
