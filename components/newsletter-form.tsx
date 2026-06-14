'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { ArrowRight } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { NewsletterFormSchema } from '@/lib/schemas'
import { subscribe } from '@/lib/actions'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

type Inputs = z.infer<typeof NewsletterFormSchema>

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await subscribe(data)

    if (result?.error) {
      toast.error(
        typeof result.error === 'string'
          ? result.error
          : 'Something went wrong'
      )
      return
    }

    toast.success('Subscribed successfully!')
    reset()
  }

  return (
    <section className='relative overflow-hidden'>
      {/* Background Blur */}
      <div className='absolute inset-0 -z-10 from-zinc-100 via-transparent to-zinc-200 dark:from-zinc-900 dark:to-zinc-950' />

      <Card className='relative overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/70 p-8 shadow-xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 md:p-10'>
        {/* Decorative Glow */}
        <div className='absolute -right-24 -top-24 h-56 w-56 rounded-full bg-zinc-300/30 blur-3xl dark:bg-zinc-700/20' />
        <div className='absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-zinc-300/20 blur-3xl dark:bg-zinc-700/10' />

        <div className='relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between'>
          {/* Left Content */}
          <div className='max-w-xl space-y-4'>
            <div className='inline-flex items-center rounded-full border border-zinc-300/70 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'>
              Newsletter
            </div>

            <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
              Dev notes, straight to your inbox
            </h2>

            <p className='text-muted-foreground max-w-lg text-sm leading-relaxed md:text-base'>
              Occasional writes on things I'm building, problems I've solved,
              and tools worth knowing about. No fluff, just signal.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(processForm)}
            className='w-full max-w-md space-y-4'
          >
            <div className='space-y-2'>
              <div className='flex flex-col gap-3 sm:flex-row'>
                <Input
                  type='email'
                  id='email'
                  autoComplete='email'
                  placeholder='you@example.com'
                  className='h-12 rounded-xl border-zinc-300 bg-white/80 text-sm shadow-sm dark:border-zinc-700 dark:bg-zinc-950/70'
                  {...register('email')}
                />

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='h-12 rounded-xl px-5 font-medium shadow-lg transition-all duration-300 hover:scale-[1.02]'
                >
                  {isSubmitting ? (
                    'Subscribing...'
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </>
                  )}
                </Button>
              </div>

              {errors.email?.message && (
                <p className='ml-1 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <p className='text-muted-foreground text-xs leading-relaxed'>
              No spam, ever. Unsubscribe with one click. Read the{' '}
              <Link
                href='/privacy'
                className='font-semibold underline underline-offset-4'
              >
                privacy policy
              </Link>
              .
            </p>
          </form>
        </div>
      </Card>
    </section>
  )
}