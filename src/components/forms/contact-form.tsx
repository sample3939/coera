"use client";

import { useFormState, useFormStatus } from "react-dom";

import {
  initialContactState,
  submitContact,
  type ContactFormState,
} from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="self-start"
      disabled={pending}
      data-analytics="cta_click"
      aria-label="お問い合わせ内容を送信する"
    >
      {pending ? "送信中..." : "送信する"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState<ContactFormState, FormData>(
    submitContact,
    initialContactState
  );

  return (
    <form
      action={formAction}
      className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-brand-text">
          お名前 <span className="text-brand-callout">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required
          aria-invalid={state.errors?.name ? "true" : "false"}
          className={cn(
            "h-12 rounded-xl border border-brand-primary/30 px-4 text-sm",
            state.errors?.name && "border-brand-callout"
          )}
        />
        {state.errors?.name && (
          <p className="text-xs text-brand-callout" role="alert">
            {state.errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-brand-text">
          メールアドレス <span className="text-brand-callout">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          required
          aria-required
          aria-invalid={state.errors?.email ? "true" : "false"}
          className={cn(
            "h-12 rounded-xl border border-brand-primary/30 px-4 text-sm",
            state.errors?.email && "border-brand-callout"
          )}
        />
        {state.errors?.email && (
          <p className="text-xs text-brand-callout" role="alert">
            {state.errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-brand-text">
          お問い合わせ内容 <span className="text-brand-callout">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-required
          aria-invalid={state.errors?.message ? "true" : "false"}
          className={cn(
            "rounded-xl border border-brand-primary/30 px-4 py-3 text-sm",
            state.errors?.message && "border-brand-callout"
          )}
        />
        {state.errors?.message && (
          <p className="text-xs text-brand-callout" role="alert">
            {state.errors.message}
          </p>
        )}
      </div>

      <div className="visually-hidden" aria-hidden>
        <label htmlFor="website">もしWebサイトをお持ちであれば入力してください</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />

      {state.status === "success" && state.message && (
        <p className="text-sm font-semibold text-brand-primary" role="status">
          {state.message}
        </p>
      )}

      {state.status === "error" && state.message && (
        <p className="text-sm font-semibold text-brand-callout" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
