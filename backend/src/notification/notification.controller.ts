import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Notification } from './notification.entity';
import { UpdateNotificationDto } from 'src/dto/update.notification.dto';
import { CreateNotificationDTO } from './notification.dto';

@Controller('notifications')
export class NotificationController {
    constructor(private notificationService: NotificationService) {
        console.log('notificationService:', notificationService);
    }

    @Get()
    getAll(): Promise<Notification[]> {
        return this.notificationService.getAll();
    }

    @Get('/:id')
    getById(@Param('id') id: number): Promise<Notification> {
        return this.notificationService.getById(id);
    }

    @Patch()
    async updateIsReadById(@Body() updateNotificationDto: UpdateNotificationDto): Promise<HttpStatus> {
        await this.notificationService.updateIsReadById(updateNotificationDto);
        return HttpStatus.OK;
    }

    @Post()
    async createNotification(@Body() notification: CreateNotificationDTO): Promise<HttpStatus> {
        await this.notificationService.createNotification(notification);
        return HttpStatus.CREATED;
    }
}
