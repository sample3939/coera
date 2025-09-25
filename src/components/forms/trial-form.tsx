"use client";

import { useFormState, useFormStatus } from "react-dom";

import {
  initialTrialState,
  submitTrial,
  type TrialFormState,
} from "@/app/trial/actions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const formatOptions = [
  { label: "対面", value: "対面" },
  { label: "オンライン", value: "オンライン" },
];

const purposeOptions = [
  { label: "商談", value: "商談" },
  { label: "会議", value: "会議" },
  { label: "接客", value: "接客" },
  { label: "面接", value: "面接" },
  { label: "その他", value: "その他" },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      data-analytics="trial_submit"
      className="self-start"
      aria-label="体験予約を送信する"
    >
      {pending ? "送信中..." : "体験を予約する"}
    </Button>
  );
}

export function TrialForm() {
  const [state, formAction] = useFormState<TrialFormState, FormData>(
    submitTrial,
    initialTrialState
  );

  const dateFields: Array<{
    label: string;
    name: "firstChoice" | "secondChoice" | "thirdChoice";
    required: boolean;
  }> = [
    { label: "第1希望日", name: "firstChoice", required: true },
    { label: "第2希望日", name: "secondChoice", required: false },
    { label: "第3希望日", name: "thirdChoice", required: false },
  ];

  const formatError = state.errors?.format;
  const formatErrorId = formatError ? "format-error" : undefined;

  return (
    <form
      action={formAction}
      className="flex flex-col gap-8 rounded-3xl bg-white p-6 shadow-sm"
      noValidate
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-brand-text">
            お名前 <span className="text-brand-callout">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
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
            aria-required="true"
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
          <label htmlFor="phone" className="text-sm font-semibold text-brand-text">
            電話番号（任意）
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            aria-invalid={state.errors?.phone ? "true" : "false"}
            className={cn(
              "h-12 rounded-xl border border-brand-primary/30 px-4 text-sm",
              state.errors?.phone && "border-brand-callout"
            )}
          />
          {state.errors?.phone && (
            <p className="text-xs text-brand-callout" role="alert">
              {state.errors.phone}
            </p>
          )}
        </div>

        <fieldset
          className="flex flex-col gap-3"
          aria-required="true"
          aria-invalid={formatError ? "true" : undefined}
          aria-describedby={formatErrorId}
        >
          <legend className="text-sm font-semibold text-brand-text">
            希望形式 <span className="text-brand-callout">*</span>
          </legend>
          <div className="flex flex-wrap gap-4">
            {formatOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2 text-sm">
                <input type="radio" name="format" value={option.value} required />
                {option.label}
              </label>
            ))}
          </div>
          {formatError && (
            <p id={formatErrorId} className="text-xs text-brand-callout" role="alert">
              {formatError}
            </p>
          )}
        </fieldset>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {dateFields.map((item) => {
          const errorKey = item.name;
          const errorMessage = state.errors?.[errorKey];
          return (
            <div key={item.name} className="flex flex-col gap-2">
              <label htmlFor={item.name} className="text-sm font-semibold text-brand-text">
                {item.label}
                {item.required && <span className="text-brand-callout"> *</span>}
              </label>
              <input
                id={item.name}
                name={item.name}
                type="date"
                required={item.required}
                aria-required={item.required ? "true" : undefined}
                aria-invalid={errorMessage ? "true" : "false"}
                className={cn(
                  "h-12 rounded-xl border border-brand-primary/30 px-4 text-sm",
                  errorMessage && "border-brand-callout"
                )}
              />
              {errorMessage && (
                <p className="text-xs text-brand-callout" role="alert">
                  {errorMessage}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-brand-text">
          目的（複数選択可） <span className="text-brand-callout">*</span>
        </p>
        <div className="flex flex-wrap gap-4">
          {purposeOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="purpose"
                value={option.value}
                aria-invalid={state.errors?.purpose ? "true" : "false"}
              />
              {option.label}
            </label>
          ))}
        </div>
        {state.errors?.purpose && (
          <p className="text-xs text-brand-callout" role="alert">
            {state.errors.purpose}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className="text-sm font-semibold text-brand-text">
          自由記述（任意）
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          aria-invalid={state.errors?.notes ? "true" : "false"}
          className={cn(
            "rounded-xl border border-brand-primary/30 px-4 py-3 text-sm",
            state.errors?.notes && "border-brand-callout"
          )}
        />
        {state.errors?.notes && (
          <p className="text-xs text-brand-callout" role="alert">
            {state.errors.notes}
          </p>
        )}
      </div>

      <div className="visually-hidden" aria-hidden>
        <label htmlFor="website">もしWebサイトをお持ちであれば入力してください</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p className="text-sm font-semibold text-brand-callout" role="alert">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
