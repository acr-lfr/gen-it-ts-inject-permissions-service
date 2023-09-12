import { UsersRolesAndPermissionsRolesRequestFromService } from '../rabbitMQ/interfaces';
import emitRolesToRabbitMq from '@/utils/emitRolesToRabbitMq';

export default async (
  payload: UsersRolesAndPermissionsRolesRequestFromService,
  operationId?: string
): Promise<void> => {
  await emitRolesToRabbitMq();
};
