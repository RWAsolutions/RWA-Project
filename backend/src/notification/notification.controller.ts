import { Controller, Get, Param } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Notification } from './notification.entity';

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
    getById(@Param('id') id:number): Promise<Notification> {
        return this.notificationService.getById(id);
    }

    
}
