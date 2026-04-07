"use client";

import { useState, FormEvent, useRef } from "react";
import { CheckCircle2, Loader2, ChevronDown } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   NativeForm — Glass Dark Theme
   Design: Industrial Dark Glass (âmbar + navy profundo)
   IDs de campos mantidos para compatibilidade com GHL tracking
   ───────────────────────────────────────────────────────────── */

type FormState = "idle" | "submitting" | "success" | "error";

const GHL_PROXY_URL =
  process.env.NEXT_PUBLIC_GHL_PROXY_URL ||
  "https://leopoldina-ghl-proxy.conta-madder-marketing.workers.dev";

const WEBHOOK_SECRET = process.env.NEXT_PUBLIC_WEBHOOK_SECRET || "";

// ─── Design tokens do tema dark glass ───
const inputCls = [
  "w-full",
  "bg-white/[0.06]",
  "border border-white/[0.12]",
  "rounded-xl",
  "px-4 py-3",
  "text-sm text-white",
  "placeholder:text-white/25",
  "focus:outline-none",
  "focus:border-brand-accent/50",
  "focus:bg-white/[0.10]",
  "focus:ring-1 focus:ring-brand-accent/25",
  "transition-all duration-300",
  "backdrop-blur-sm",
].join(" ");

const labelCls =
  "block text-[10px] font-bold tracking-[0.15em] uppercase text-brand-accent/70 mb-1.5";

export function NativeForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      payload[key] = value.toString();
    });

    try {
      const res = await fetch(GHL_PROXY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-webhook-secret": WEBHOOK_SECRET,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await res.json().catch(() => ({}));

      if (res.ok && responseData.success) {
        setFormState("success");
        form.reset();
      } else {
        setErrorMessage(responseData.error || "Ocorreu um erro. Tente novamente.");
        setFormState("error");
      }
    } catch {
      setErrorMessage("Falha de conexão. Verifique sua internet e tente novamente.");
      setFormState("error");
    }
  }

  // ─── Estado de sucesso ───
  if (formState === "success") {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-5 py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center">
          <CheckCircle2 size={28} className="text-brand-accent" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Cotação enviada!</h3>
          <p className="text-sm text-white/50 max-w-xs leading-relaxed">
            Em breve um especialista entrará em contato com a melhor solução para sua obra.
          </p>
        </div>
        <button
          onClick={() => setFormState("idle")}
          className="text-[10px] text-brand-accent/60 font-bold tracking-widest uppercase hover:text-brand-accent transition-colors"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      id="ghl-native-form-WrTPqpJZ8QcNPCYKUKrh"
      data-form-id="WrTPqpJZ8QcNPCYKUKrh"
      data-form-name="📥 Form: LP Principal B2B"
      data-location-id="tFxSu6bZAt4VLZpwVtnX"
      onSubmit={handleSubmit}
      className="w-full space-y-5"
      noValidate
    >
      {/* Grid 2 colunas: Nome + Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nome Completo */}
        <div>
          <label htmlFor="full_name" className={labelCls}>
            Nome Completo
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            placeholder="Seu nome"
            className={inputCls}
            required
            autoComplete="name"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className={labelCls}>
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            className={inputCls}
            required
            autoComplete="tel"
            data-field-key="celular"
          />
        </div>
      </div>

      {/* Grid 2 colunas: Email + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* E-mail */}
        <div>
          <label htmlFor="email" className={labelCls}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@empresa.com"
            className={inputCls}
            required
            autoComplete="email"
            data-field-key="e_mail"
          />
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="4lniLH2Sn3utdjFfMuJK" className={labelCls}>
            Empresa
          </label>
          <input
            id="4lniLH2Sn3utdjFfMuJK"
            name="4lniLH2Sn3utdjFfMuJK"
            type="text"
            placeholder="Nome da empresa"
            className={inputCls}
            autoComplete="organization"
            data-field-key="contact.empresa"
          />
        </div>
      </div>

      {/* Grid 2 colunas: Tipo de Aplicação + Volume */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tipo de Aplicação */}
        <div className="relative">
          <label htmlFor="WepKvnVLmSGYGUs3GlwS" className={labelCls}>
            Tipo de Aplicação
          </label>
          <select
            id="WepKvnVLmSGYGUs3GlwS"
            name="WepKvnVLmSGYGUs3GlwS"
            className={`${inputCls} appearance-none cursor-pointer pr-10`}
            defaultValue=""
            data-field-key="tipo_de_aplicacao"
          >
            <option value="" disabled className="bg-[#0A2540] text-white/40">
              Selecione...
            </option>
            <option value="Piso Industrial (Epóxi/PU)" className="bg-[#0A2540] text-white">
              Piso Industrial (Epóxi/PU)
            </option>
            <option value="Estrutura Metálica" className="bg-[#0A2540] text-white">
              Estrutura Metálica
            </option>
            <option value="Proteção Antichamas (Neofire)" className="bg-[#0A2540] text-white">
              Proteção Antichamas (Neofire)
            </option>
            <option value="Outro" className="bg-[#0A2540] text-white">
              Outro
            </option>
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 bottom-3.5 text-white/30 pointer-events-none"
          />
        </div>

        {/* Volume Estimado */}
        <div className="relative">
          <label htmlFor="EixP8ajkcIHcFcYmLUG1" className={labelCls}>
            Volume Estimado
          </label>
          <select
            id="EixP8ajkcIHcFcYmLUG1"
            name="EixP8ajkcIHcFcYmLUG1"
            className={`${inputCls} appearance-none cursor-pointer pr-10`}
            defaultValue=""
            data-field-key="volume_estimado"
          >
            <option value="" disabled className="bg-[#0A2540] text-white/40">
              Selecione...
            </option>
            <option value="Menos de 50 Litros" className="bg-[#0A2540] text-white">
              Menos de 50 Litros
            </option>
            <option value="50 a 200 Litros" className="bg-[#0A2540] text-white">
              50 a 200 Litros
            </option>
            <option value="Acima de 200 Litros" className="bg-[#0A2540] text-white">
              Acima de 200 Litros
            </option>
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 bottom-3.5 text-white/30 pointer-events-none"
          />
        </div>
      </div>

      {/* Termos */}
      <div className="flex items-start gap-3 pt-1">
        <div className="relative shrink-0 mt-0.5">
          <input
            id="terms_and_conditions"
            name="terms_and_conditions"
            type="checkbox"
            required
            className="peer sr-only"
          />
          <label
            htmlFor="terms_and_conditions"
            className="flex w-4 h-4 rounded border border-white/20 bg-white/[0.06] cursor-pointer peer-checked:bg-brand-accent peer-checked:border-brand-accent transition-all duration-200 items-center justify-center"
          >
            <svg
              className="hidden peer-checked:block w-2.5 h-2.5 text-brand-dark"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 12 12"
            >
              <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </label>
        </div>
        <label htmlFor="terms_and_conditions" className="text-[11px] text-white/35 leading-relaxed cursor-pointer">
          Li e estou de acordo com a{" "}
          <a
            href="/politica-de-privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent/70 hover:text-brand-accent underline underline-offset-2 transition-colors"
          >
            Política de Privacidade
          </a>
          .
        </label>
      </div>

      {/* Erro */}
      {formState === "error" && (
        <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          <p className="text-xs text-red-400 leading-relaxed">
            {errorMessage || "Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp."}
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full flex items-center justify-center gap-2.5 bg-brand-accent text-brand-dark font-bold text-sm tracking-wide px-6 py-4 rounded-xl hover:bg-brand-accentHover active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-1 shadow-[0_0_30px_rgba(255,184,0,0.15)]"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando…
          </>
        ) : (
          "SOLICITAR COTAÇÃO TÉCNICA →"
        )}
      </button>
    </form>
  );
}
