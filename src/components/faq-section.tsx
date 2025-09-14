"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What makes AI Lawyers different from traditional legal services?",
    answer: "Our AI Lawyers are available 24/7, provide instant responses, and have access to comprehensive legal databases. They offer cost-effective preliminary legal guidance and can handle routine legal questions efficiently. However, they complement rather than replace human lawyers for complex cases."
  },
  {
    question: "Are AI Lawyers qualified to provide legal advice?",
    answer: "AI Lawyers are trained on extensive legal databases and provide informational guidance based on legal principles and precedents. While they offer valuable insights and preliminary advice, for formal legal representation and complex matters, we recommend consulting with licensed human attorneys."
  },
  {
    question: "How secure and confidential are my interactions with AI Lawyers?",
    answer: "We prioritize your privacy and confidentiality. All interactions are encrypted end-to-end, and we follow strict data protection protocols. Your personal information and legal queries are never shared with third parties and are stored securely according to industry standards."
  },
  {
    question: "Can AI Lawyers help with document preparation and review?",
    answer: "Yes! Our AI Lawyers can assist with drafting basic legal documents, reviewing contracts, and identifying potential issues. They can help with templates for common documents like NDAs, simple contracts, and legal letters. For complex documents, we recommend human attorney review."
  },
  {
    question: "What types of legal areas do AI Lawyers cover?",
    answer: "Our AI Lawyers specialize in various practice areas including Corporate Law, Family Law, Estate Planning, Intellectual Property, Employment Law, Criminal Defense, Personal Injury, Healthcare Law, and Constitutional Law. Each AI is trained specifically for their area of expertise."
  },
  {
    question: "How much does it cost to consult with an AI Lawyer?",
    answer: "We offer flexible pricing models including free basic consultations, subscription plans for regular users, and pay-per-consultation options. Our AI Lawyers provide significant cost savings compared to traditional legal services while maintaining high-quality guidance."
  },
  {
    question: "Can AI Lawyers represent me in court?",
    answer: "No, AI Lawyers cannot represent you in court or provide formal legal representation. They are designed to provide legal information, guidance, and document assistance. For court representation and formal legal proceedings, you'll need to work with a licensed human attorney."
  },
  {
    question: "How often is the AI Lawyers' knowledge updated?",
    answer: "Our AI Lawyers' knowledge bases are continuously updated with the latest legal developments, case law, and regulatory changes. We regularly retrain our models to ensure they have access to current legal information and emerging legal trends."
  }
]

export function FAQSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-gold-500/10 p-4 ring-1 ring-gold-500/20">
              <HelpCircle className="h-12 w-12 text-gold-500" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our AI Lawyers and how they can assist you 
            with your legal needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm px-6 data-[state=open]:border-gold-500/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-gold-300 hover:text-gold-200 transition-colors text-lg font-medium py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Still have questions? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gold-500 text-black font-semibold rounded-lg hover:bg-gold-600 transition-colors shadow-lg hover:shadow-gold-500/25">
              Contact Support
            </button>
            <button className="px-8 py-3 border border-gold-500/30 text-gold-300 rounded-lg hover:bg-gold-500/10 hover:border-gold-400 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}