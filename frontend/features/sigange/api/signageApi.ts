import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { FormCategory } from "../types/signage.types";
import type { SignageCategoryApi } from "./signageApi.types";
import { mapSignageApiToFormCategories } from "../utils/mapSignageApiToFormCategories";

const rawBase =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

function normalizeListPayload(
  response: unknown,
): SignageCategoryApi[] {
  if (Array.isArray(response)) {
    return response as SignageCategoryApi[];
  }
  if (
    response &&
    typeof response === "object" &&
    "results" in response &&
    Array.isArray((response as { results: unknown }).results)
  ) {
    return (response as { results: SignageCategoryApi[] }).results;
  }
  return [];
}

export const signageApi = createApi({
  reducerPath: "signageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${rawBase.replace(/\/$/, "")}/api`,
  }),
  tagTypes: ["SignageCategories"],
  endpoints: (build) => ({
    getSignageCategories: build.query<FormCategory[], void>({
      query: () => ({ url: "/signage/", method: "GET" }),
      transformResponse: (response: unknown) =>
        mapSignageApiToFormCategories(normalizeListPayload(response)),
      providesTags: ["SignageCategories"],
    }),
  }),
});

export const { useGetSignageCategoriesQuery } = signageApi;
