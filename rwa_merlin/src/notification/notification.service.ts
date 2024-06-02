import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notification)
        private notificationRepository: Repository<Notification>,
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
}
