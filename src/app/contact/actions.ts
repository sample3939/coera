"use server";

import { z } from "zod";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  errors: {},
};

const contactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください"),
  email: z
    .string()
    .trim()
    .email("正しいメールアドレスを入力してください"),
  message: z
    .string()
    .trim()
    .min(10, "お問い合わせ内容は10文字以上で入力してください"),
  website: z.string().optional(),
});

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: ContactFormState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (field && field !== "website") {
        errors[field as "name" | "email" | "message"] = issue.message;
      }
    }
    return {
      status: "error",
      message: "入力内容を確認してください",
      errors,
    };
  }

  if (parsed.data.website) {
    // Honeypotに値が入っている場合は成功扱いで終了。
    return {
      status: "success",
      message: "お問い合わせを受け付けました。",
    };
  }

  // 実際の送信処理は後日実装予定。
  console.info("contact_submission", {
    name: parsed.data.name,
    email: parsed.data.email,
  });

  return {
    status: "success",
    message: "お問い合わせを受け付けました。24時間以内にご連絡いたします。",
  };
}
