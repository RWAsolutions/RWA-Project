import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }


    async getAllUsers(): Promise<User[]> {

        const found: User[] = await this.userRepo.find()

        console.log(found[0])

        return found
    }


    async getUserByEmail(email: string): Promise<User> {

        const id: number = this.extractNumber(email)

        const found = await this.userRepo.findOne({ where: { userID: id } })

        return found
    }


    private extractNumber(email) {
        const match = email.match(/(\d+)@/);
        return match ? match[1] : null;
    }
}
