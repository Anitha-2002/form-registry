/** Document upload row within a requirement group (inside a form category). */
export type RequirementStatus =
  | "NOT_UPLOADED"
  | "UPLOADED"
  | "SUBMITTED"
  | "VERIFIED";

export type Requirement = {
  id: string;
  title: string;
  status: RequirementStatus;
  documents: string[];
};

/** Requirement category / group (e.g. "Need for Services and Service Area"). */
export type RequirementGroup = {
  id: string;
  title: string;
  requirements: Requirement[];
};

/** Top-level form category (e.g. Form 5, Form 5a, HRSA). */
export type FormCategory = {
  id: string;
  title: string;
  groups: RequirementGroup[];
};

/** @deprecated Use FormCategory — kept for gradual rename */
export type SignageCategory = FormCategory;
