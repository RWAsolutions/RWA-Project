import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../roles/roles.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const { user } = request;
    const { params } = request;

    console.log('user', user);
    console.log('params id', params.id);
    console.log('user id', user.userID);

    if (user.userID !== params.id) {
      throw new ForbiddenException('Your ID: ' + user.userID + ' || Only users with ID:' + params.id + ' can access this resource!');
    }

    return requiredRoles.some((role) => user.role?.includes(role));
  }
}
