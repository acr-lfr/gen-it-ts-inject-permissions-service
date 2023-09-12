import RabbitMQService from '@/events/rabbitMQ/RabbitMQService';
import * as interfaces from '@/events/rabbitMQ/interfaces';
import RoleRepository from '@/database/RoleRepository';

export default async (): Promise<void> => {
  const roles = await RoleRepository.model.find();
  const rolesToEmit: interfaces.UsersRolesAndPermissionsRolesAll = [];
  roles.forEach((role) => {
    rolesToEmit.push(({
      roleName: role.name,
      permissions: role.permissions
    }));
  });
  RabbitMQService.publishUsersRolesAndPermissionsRolesChanged(rolesToEmit);
}
