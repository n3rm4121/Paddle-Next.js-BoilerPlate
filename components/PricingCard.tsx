import { Button, buttonVariants } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PlanProps } from './PricingSection'
import Link from 'next/link'

interface PricingCardProps extends PlanProps {
    isAnnual: boolean
}

export function PricingCard({
    title,
    monthlyPrice,
    features,
    buttonText,
    isPro,
    monthlyPriceId,
}: PricingCardProps) {

    const getCheckoutLink = () => {
        if (buttonText === 'Get Started') {
            return '/login'
        }

        return `/checkout?priceId= ${monthlyPriceId}`
    }


    return (
        <Card className={`${isPro ? 'border-indigo-500' : ''}`}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>

                    <>
                        <span className="text-3xl font-bold">${monthlyPrice}</span>
                        <span className="text-gray-500">/month</span>
                    </>

                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">

                            <span className="text-sm text-gray-300">{feature.text}</span>

                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Link
                    href={getCheckoutLink()}
                    className={buttonVariants({
                        variant: isPro ? 'default' : 'outline',
                        size: 'lg',
                        className: 'w-full'
                    })}
                >
                    {buttonText}
                </Link>
            </CardFooter>
        </Card>
    )
}