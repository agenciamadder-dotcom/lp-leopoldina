import Link from "next/link";

export const metadata = {
    title: "Política de Privacidade | Leopoldina Tintas",
    description: "Política de privacidade e uso de dados da Leopoldina Tintas.",
};

export default function PoliticaDePrivacidade() {
    return (
        <div className="bg-brand-light min-h-screen pb-20">
            <section className="bg-brand-primary text-white py-28 px-8">
                <div className="max-w-6xl mx-auto md:px-16 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">Política de Privacidade</h1>
                    <p className="text-sm text-gray-300 max-w-lg mx-auto">Última atualização: Março de 2026</p>
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-8 py-14">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 prose prose-sm prose-gray max-w-none">
                    <h2 className="text-lg font-bold text-brand-primary">1. Informações Gerais</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        A Leopoldina Tintas, pessoa jurídica de direito privado, com sede na Avenida Pistóia, 510 — Jardim Gramacho, Duque de Caxias, RJ — CEP 25055-052, é a controladora responsável pelo tratamento dos dados pessoais coletados neste site.
                    </p>

                    <h2 className="text-lg font-bold text-brand-primary mt-8">2. Dados Coletados</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Coletamos apenas os dados fornecidos voluntariamente por você através de nossos formulários de contato: nome, e-mail, telefone, empresa e informações sobre o projeto/obra. Não coletamos dados sensíveis.
                    </p>

                    <h2 className="text-lg font-bold text-brand-primary mt-8">3. Finalidade do Tratamento</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Os dados coletados são utilizados exclusivamente para fins comerciais: responder solicitações de orçamento, enviar fichas técnicas, e manter contato sobre nossas soluções em tintas industriais.
                    </p>

                    <h2 className="text-lg font-bold text-brand-primary mt-8">4. Compartilhamento de Dados</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para o cumprimento de obrigações legais ou regulatórias.
                    </p>

                    <h2 className="text-lg font-bold text-brand-primary mt-8">5. Armazenamento e Segurança</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Seus dados são armazenados em servidores seguros com criptografia, e adotamos medidas técnicas e organizacionais para protegê-los contra acesso não autorizado, perda ou destruição.
                    </p>

                    <h2 className="text-lg font-bold text-brand-primary mt-8">6. Seus Direitos</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a: confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos, solicitar a eliminação de dados desnecessários, e revogar o consentimento.
                    </p>

                    <h2 className="text-lg font-bold text-brand-primary mt-8">7. Contato</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail{" "}
                        <a href="mailto:comercial@leopoldinatintas.com.br" className="text-brand-accent font-semibold hover:underline">
                            comercial@leopoldinatintas.com.br
                        </a>{" "}
                        ou pelo telefone{" "}
                        <a href="tel:+552133911993" className="text-brand-accent font-semibold hover:underline">(21) 3391-1993</a>.
                    </p>

                    <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                        <Link href="/" className="text-brand-primary text-sm font-semibold hover:text-brand-accent transition-colors">
                            ← Voltar para o site
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
