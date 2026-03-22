import type { FormCategory } from "../types/signage.types";

/**
 * Form categories → requirement groups → requirements (document uploads).
 * Replace with RTK Query when the API is available.
 */
const SIGNAGE_FORM_CATEGORIES: FormCategory[] = [
  {
    id: "form-5",
    title: "Form 5",
    groups: [
      {
        id: "form-5-core",
        title: "Core attestations",
        requirements: [
          {
            id: "f5-r1",
            title: "Organizational integrity attestation",
            status: "NOT_UPLOADED",
            documents: [],
          },
          {
            id: "f5-r2",
            title: "Financial management certification",
            status: "UPLOADED",
            documents: ["fy-summary.pdf"],
          },
        ],
      },
    ],
  },
  {
    id: "form-5a",
    title: "Form 5a",
    groups: [
      {
        id: "form-5a-svc",
        title: "Service delivery",
        requirements: [
          {
            id: "f5a-r1",
            title: "Service site listing and map",
            status: "NOT_UPLOADED",
            documents: [],
          },
          {
            id: "f5a-r2",
            title: "Mobile unit schedule (if applicable)",
            status: "SUBMITTED",
            documents: ["schedule.xlsx"],
          },
        ],
      },
    ],
  },
  {
    id: "hrsa-svp",
    title: "HRSA Program Requirements (SVP Ch 1–18)",
    groups: [
      {
        id: "need-services",
        title: "Need for Services and Service Area",
        requirements: [
          {
            id: "r-sar",
            title: "Service area reports or analysis documentation",
            status: "NOT_UPLOADED",
            documents: [],
          },
          {
            id: "r-needs",
            title: "Most recent needs assessment",
            status: "NOT_UPLOADED",
            documents: [],
          },
        ],
      },
      {
        id: "governance",
        title: "Governance",
        requirements: [
          {
            id: "r-board",
            title: "Board meeting minutes (last 4 quarters)",
            status: "VERIFIED",
            documents: ["minutes-q1.pdf"],
          },
        ],
      },
    ],
  },
  {
    id: "hipaa",
    title: "HIPAA & Privacy",
    groups: [
      {
        id: "hipaa-baa",
        title: "Business associate agreements",
        requirements: [
          {
            id: "hp-r1",
            title: "Executed BAAs for all covered vendors",
            status: "NOT_UPLOADED",
            documents: [],
          },
          {
            id: "hp-r2",
            title: "Risk analysis summary",
            status: "NOT_UPLOADED",
            documents: [],
          },
        ],
      },
    ],
  },
];

export function useSignageData() {
  return { data: SIGNAGE_FORM_CATEGORIES };
}
