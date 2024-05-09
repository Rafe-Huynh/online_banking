'use client'
import React from 'react'
import Image from 'next/image'
import { cn } from '../../lib/utils'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from '../../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" width={30} height={30} className='cursor-pointer' />

                </SheetTrigger>
                <SheetContent side='left' className='border-none bg-white'>
                    <Link href="/" className='cursor-pointer flex items-center gap-1 px-4'>
                        <Image src='./icons/logo.svg' width={34} height={34} />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Online Banking</h1>
                    </Link>

                    {sidebarLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                        return (
                            // ONLY show bg-bank if the isActive is true 
                            <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
                                {
                                    <div className='relative size-6'>
                                        <Image src={item.imgURL} alt={item.label} fill className={cn({ 'brightness-[3] invert-0': isActive })} />

                                    </div>

                                }
                                <p className={cn('sidebar-label', { 'text-white': isActive })}>
                                    {item.label}
                                </p>
                            </Link>
                        )
                    })}
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav