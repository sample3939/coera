"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { generateTrialAutoReply } from "@/lib/email";

export type TrialFormState = {
  status: "idle" | "error";
  errors?: Partial<
    Record<
      | "name"
      | "email"
      | "phone"
      | "format"
      | "firstChoice"
      | "secondChoice"
      | "thirdChoice"
      | "purpose"
      | "notes",
      string
    >
  >;
  message?: string;
};

export const initialTrialState: TrialFormState = {
  status: "idle",
  errors: {},
};

const trialSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください"),
  email: z
    .string()
    .trim()
    .email("正しいメールアドレスを入力してください"),
  phone: z
    .string()
    .trim()
    .optional()
    .transform((value) => (value === "" ? undefined : value))
    .refine(
      (value) => !value || /^\+?[0-9\-() ]{7,16}$/.test(value),
      "電話番号の形式を確認してください"
    ),
  format: z.enum(["対面", "オンライン"], {
    errorMap: () => ({ message: "希望形式を選択してください" }),
  }),
  firstChoice: z
    .string()
    .trim()
    .min(1, "第1希望日を選択してください"),
  secondChoice: z
    .string()
    .trim()
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
  thirdChoice: z
    .string()
    .trim()
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
  purpose: z
    .array(z.enum(["商談", "会議", "接客", "面接", "その他"]))
    .min(1, "目的を少なくとも1つ選択してください"),
  notes: z
    .string()
    .trim()
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
  website: z.string().optional(),
});

export async function submitTrial(
  _prevState: TrialFormState,
  formData: FormData
): Promise<TrialFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    format: formData.get("format"),
    firstChoice: formData.get("firstChoice"),
    secondChoice: formData.get("secondChoice"),
    thirdChoice: formData.get("thirdChoice"),
    purpose: formData.getAll("purpose") as string[],
    notes: formData.get("notes"),
    website: formData.get("website"),
  };

  const parsed = trialSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: TrialFormState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (field && field !== "website") {
        errors[field as keyof TrialFormState["errors"]] = issue.message;
      }
    }
    return {
      status: "error",
      message: "入力内容を確認してください",
      errors,
    };
  }

  if (parsed.data.website) {
    redirect("/trial/thanks");
  }

  const autoReply = generateTrialAutoReply({ name: parsed.data.name });

  console.info("trial_submission", {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    format: parsed.data.format,
    firstChoice: parsed.data.firstChoice,
    secondChoice: parsed.data.secondChoice,
    thirdChoice: parsed.data.thirdChoice,
    purpose: parsed.data.purpose,
    notes: parsed.data.notes,
    autoReply,
  });

  redirect(`/trial/thanks?name=${encodeURIComponent(parsed.data.name)}`);
}
