import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Notification } from './notification.entity';
import { UpdateNotificationDto } from 'src/dto/update.notification.dto';
import { CreateNotificationDTO } from './notification.dto';

@Injectable()
export class NotificationService {

    constructor(
        @InjectRepository(Notification)
        private notificationRepository: Repository<Notification>,
        private manager: EntityManager,
    ) {
        console.log('notificationRepository:', notificationRepository);
    }

    async getAll(): Promise<Notification[]> {
        return this.notificationRepository.find();
    }

    async getById(id: number): Promise<Notification> {
        const found = await this.notificationRepository.findOne({ where: { notificationID: id } });
        if (!found) {
            throw new NotFoundException(`Notification with id ${id} not found`);
        }
        return found;
    }

    async updateIsReadById(updateNotificationDto: UpdateNotificationDto) {

        updateNotificationDto.isRead = +updateNotificationDto.isRead;

        if (updateNotificationDto.isRead !== 0 && updateNotificationDto.isRead !== 1) {
            throw new HttpException('isRead must be 0 or 1', HttpStatus.BAD_REQUEST);
        }

        return await this.manager.query(`
            UPDATE 
                user_notification
            SET
                isRead = ${updateNotificationDto.isRead}
            WHERE 
                notificationID = ${updateNotificationDto.notificationID} AND userID = ${updateNotificationDto.userID};
            `);
    }

    async createNotification(notification: CreateNotificationDTO): Promise<any> {
        console.log('I WILL NOW ADD A NOTIFICATION');
        await this.manager.query(`
            INSERT INTO 
                Notification (title, content, courseID, profesorID)
            VALUES 
                ('${notification.title}', '${notification.content}', ${notification.courseID}, ${notification.profesorID});
        `);
        return await this.manager.query(`SELECT LAST_INSERT_ID() as notificationID;`);
    }

    async createNotificationUsers(notificationID: any, notification: CreateNotificationDTO) {

        let value = await this.manager.query(`select studentID from student_course where courseID=${notification.courseID};`);
        value.forEach(element => {
            console.log('will input user_notification on students element:', element.studentID)
            this.manager.query(`
                INSERT INTO 
                    user_notification (userID, notificationID, isRead)
                VALUES 
                    (${element.studentID}, ${notificationID}, 0);
            `);
        });

        let valueProfesor = await this.manager.query(`select profesorID from profesor_course where courseID=${notification.courseID};`);
        console.log('valueProfesor:', valueProfesor);
        valueProfesor.forEach(element => {
            console.log('element profesor:', element.profesorID)
            this.manager.query(`
                INSERT INTO 
                    user_notification (userID, notificationID, isRead)
                VALUES 
                    (${element.profesorID}, ${notificationID}, 0);
            `);
        });
    }

    getRepliesByNotificationID(id: number): any {
        // return this.manager.query(`SELECT * FROM Reply WHERE notificationID = ${id}`)
        return this.manager.query(`
            SELECT 
                Reply.userID, 
                Reply.notificationID, 
                Reply.content, 
                Reply.dateAdded, 
                Student.studentName, 
                Student.studentSurname, 
                Profesor.profesorName, 
                Profesor.profesorSurname 
            FROM 
                Reply 
            LEFT JOIN 
                User ON Reply.userID = User.userID 
            LEFT JOIN 
                Student ON User.studentID = Student.studentID 
            LEFT JOIN 
                Profesor ON User.profesorID = Profesor.profesorID 
            WHERE 
                Reply.notificationID = ${id};
        `)
    }

    async updateIsReadByNotificationID(notificationID: number) {
        return await this.manager.query(`
            UPDATE 
                user_notification
            SET
                isRead = 0
            WHERE 
                notificationID = ${notificationID};
            `);
    }

}
