import { API_ENDPOINTS } from '@/constants/api';
import { GetProjectsResponse } from '@/types/api/projects';
import { get } from '@/utils/api';

export const getProjects = async () => {
  const data = await get<GetProjectsResponse>(API_ENDPOINTS.PROJECTS);
  return data;
};
