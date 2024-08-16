import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import Image from 'next/image'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4 md:py-16">
      <div className="flex flex-col gap-2 p-8">

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 flex items-center justify-between relative">
            <Image  src="/lucy.jpg" alt="Lucy the AI assistant" width={333} height={333} className="float-left rounded-full w-28 h-28" />
          </div>
          <div className="col-span-3 ">
            <h1 className="text-left text-xl font-semibold text-stone-800">Hi I'm Lucy, the AI assistant of Utopia Express.
            </h1>
            <p className="leading-normal text-stone-700 pt-4 max-w-[350px]">
                We are a small, Human-AI hybrid digital agency. Ask me anything about our services.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
