import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Notification } from './notification.entity';
import { UpdateNotificationDto } from 'src/dto/update.notification.dto';

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
}
