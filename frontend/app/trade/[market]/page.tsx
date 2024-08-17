"use client"
import { Depth } from '@/app/components/Depth'
import { MarketBar } from '@/app/components/MarketBar'
import { TradeView } from '@/app/components/TradeView'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page ()  {
  const { market } = useParams()
  return (
    <div className='flex flex-row flex-1'>
       <div className='flex flex-col flex-1'>
          <MarketBar market={market as string} /> 
          <div className='flex flex-row h-[920px] border-y border-red-500'>
             <div className='flex flex-col flex-1'>
                 <TradeView market={market as string} />
             </div>
             <div className='flex flex-col w-[250px] overflow-hidden'>
               <Depth market={market as string} />
             </div>
          </div>
       </div>
    </div>
  )
}

