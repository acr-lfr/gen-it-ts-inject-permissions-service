import { UsersRolesAndPermissionsPermissionsUpdateFromService } from '../rabbitMQ/interfaces';
import PermissionRepository from '@/database/PermissionRepository';

export default async (
  payload: UsersRolesAndPermissionsPermissionsUpdateFromService,
  operationId?: string
): Promise<void> => {
  await PermissionRepository.upsertPermissions(payload.fromService, payload.permissions);
};
