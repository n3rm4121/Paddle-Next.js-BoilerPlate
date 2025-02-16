'use client'

import { useState } from 'react'
import { PricingCard } from './PricingCard'

interface Feature {
    text: string
    included: boolean
    tooltip?: string
    commingSoon?: boolean
}

export interface PlanProps {
    title: string
    monthlyPrice?: number
    annualPrice?: number
    oneTimePrice?: number
    features: Feature[]
    buttonText: string
    isPro?: boolean
    monthlyPriceId?: string
    annualPriceId?: string
    oneTimePriceId?: string
}

export default function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(false)
    const plans: PlanProps[] = [
        {
            title: "Starter",
            monthlyPrice: 0,
            features: Array(4).fill({ text: "Feature 1", included: true }),
            buttonText: "Get Started",
        },
        {
            title: "Pro",
            monthlyPrice: 8,
            features: Array(4).fill({ text: "Feature 1", included: true }),
            buttonText: 'Upgrade Now',
            isPro: true,
            monthlyPriceId: 'pri_01j7qw0djsh1vrvh9c8gb5jn49',
            annualPriceId: 'pri_01jazh6htrrzwww5r5hys0c4c1',
        },

    ]

    return (
        <section id="pricing" className="py-20 hero-background">
            <div className="lg:text-center">
                <h2 className="text-base text-primary font-semibold tracking-wide uppercase mb-4">Pricing</h2>


            </div>

            <div className="mb-16 flex gap-10 items-center justify-center ">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} isAnnual={isAnnual} />
                ))}
            </div>



        </section>
    )
}
