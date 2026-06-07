'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function botsLoginAction(formData: FormData) {
  const password = formData.get('password') as string
  const expected = process.env.SECRET_PAGE_PASSWORD ?? 'changeme'

  if (password !== expected) {
    redirect('/employees?error=1')
  }

  const store = await cookies()
  store.set('shark_secret_auth', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  redirect('/employees')
}
