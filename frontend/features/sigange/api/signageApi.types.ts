/**
 * Shapes returned by Django REST for apps.signage (field names match the API).
 */

export type RequirementApi = {
  id: number;
  group: number;
  name: string;
  is_mandatory: boolean;
  created_at?: string;
  updated_at?: string;
  is_active?: boolean;
};

export type RequirementGroupApi = {
  id: number;
  signage_category: number;
  name: string;
  requirements?: RequirementApi[];
  created_at?: string;
  updated_at?: string;
  is_active?: boolean;
};

export type SignageCategoryApi = {
  id: number;
  name: string;
  code: string;
  requirement_groups?: RequirementGroupApi[];
  created_at?: string;
  updated_at?: string;
  is_active?: boolean;
};
