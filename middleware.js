import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req) {
    const { pathname = '', basePath } = req.nextUrl

    const hostname = req.headers.get('host')?.replace(/:\d+$/, '')

    const pathnameWithoutBase =
        basePath && pathname.startsWith(basePath + '/')
            ? pathname.replace(basePath, '')
            : pathname

    console.info('url', req.url)

    if (
        pathnameWithoutBase.startsWith('/_next/') ||
        pathnameWithoutBase.startsWith('/_hosts')
    ) {
        return
    }

    const base = req.nextUrl.origin

    return NextResponse.rewrite(
        new URL(
            `${basePath}/_hosts/${hostname}${pathnameWithoutBase}`,
            base,
        ).toString(),
    )
}
