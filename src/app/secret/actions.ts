'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const COOKIE_NAME = 'shark_secret_auth'
const COOKIE_VALUE = 'authenticated'

export async function loginAction(formData: FormData) {
  const password = formData.get('password') as string
  const expected = process.env.SECRET_PAGE_PASSWORD ?? 'changeme'

  if (password !== expected) {
    redirect('/secret?error=1')
  }

  const store = await cookies()
  store.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })
  redirect('/secret')
}

export async function logoutAction() {
  const store = await cookies()
  store.delete(COOKIE_NAME)
  redirect('/secret')
}

export async function checkAuth(): Promise<boolean> {
  const store = await cookies()
  return store.get(COOKIE_NAME)?.value === COOKIE_VALUE
}
