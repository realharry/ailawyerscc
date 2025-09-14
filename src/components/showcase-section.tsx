"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, Users, FileText, Shield, Briefcase, Gavel, Heart, Car, Landmark } from "lucide-react"

const aiLawyers = [
  {
    id: 1,
    name: "Corporate Counsel AI",
    specialty: "Corporate Law",
    description: "Expert in business formation, contracts, mergers & acquisitions, and corporate governance.",
    icon: Building2,
    color: "from-gold-400 to-gold-600"
  },
  {
    id: 2,
    name: "Estate Planning AI",
    specialty: "Estate Planning",
    description: "Specialized in wills, trusts, estate administration, and succession planning.",
    icon: Home,
    color: "from-gold-300 to-gold-500"
  },
  {
    id: 3,
    name: "Family Law AI",
    specialty: "Family Law",
    description: "Focused on divorce, custody, adoption, domestic relations, and family mediation.",
    icon: Users,
    color: "from-gold-500 to-gold-700"
  },
  {
    id: 4,
    name: "Contract AI",
    specialty: "Contract Law",
    description: "Expert in contract drafting, review, negotiation, and dispute resolution.",
    icon: FileText,
    color: "from-gold-400 to-gold-600"
  },
  {
    id: 5,
    name: "IP Protection AI",
    specialty: "Intellectual Property",
    description: "Specialized in patents, trademarks, copyrights, and trade secret protection.",
    icon: Shield,
    color: "from-gold-300 to-gold-500"
  },
  {
    id: 6,
    name: "Employment Law AI",
    specialty: "Employment Law",
    description: "Expert in workplace rights, discrimination, labor relations, and HR compliance.",
    icon: Briefcase,
    color: "from-gold-500 to-gold-700"
  },
  {
    id: 7,
    name: "Criminal Defense AI",
    specialty: "Criminal Law",
    description: "Focused on criminal defense strategies, plea negotiations, and legal procedures.",
    icon: Gavel,
    color: "from-gold-400 to-gold-600"
  },
  {
    id: 8,
    name: "Healthcare Law AI",
    specialty: "Healthcare Law",
    description: "Specialized in medical malpractice, healthcare compliance, and patient rights.",
    icon: Heart,
    color: "from-gold-300 to-gold-500"
  },
  {
    id: 9,
    name: "Personal Injury AI",
    specialty: "Personal Injury",
    description: "Expert in accident claims, liability assessment, and damage calculations.",
    icon: Car,
    color: "from-gold-500 to-gold-700"
  },
  {
    id: 10,
    name: "Constitutional AI",
    specialty: "Constitutional Law",
    description: "Focused on constitutional rights, civil liberties, and government law.",
    icon: Landmark,
    color: "from-gold-400 to-gold-600"
  }
]

export function ShowcaseSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            Our AI Legal Specialists
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our diverse team of AI lawyers, each specialized in different areas of law 
            and trained on comprehensive legal knowledge bases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {aiLawyers.map((lawyer) => {
            const IconComponent = lawyer.icon
            return (
              <Card 
                key={lawyer.id} 
                className="group hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gold-500/30 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-gold-500/10 to-gold-600/10 ring-1 ring-gold-500/20 group-hover:ring-gold-400/40 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-gold-400 group-hover:text-gold-300 transition-colors" />
                  </div>
                  <CardTitle className="text-gold-300 group-hover:text-gold-200 transition-colors">
                    {lawyer.name}
                  </CardTitle>
                  <CardDescription className="text-gold-500 font-medium">
                    {lawyer.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {lawyer.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-gold-500/30 text-gold-300 hover:bg-gold-500/10 hover:border-gold-400 transition-all duration-300"
                  >
                    Consult Now
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="gold" 
            size="lg"
            className="shadow-2xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all duration-300"
          >
            View All Specialists
          </Button>
        </div>
      </div>
    </section>
  )
}