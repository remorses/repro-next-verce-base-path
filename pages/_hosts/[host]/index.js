import Link from 'next/link'

export default function Page({ host }) {
    return (
        <div className=''>
            {host}
            <br />
            <Link href={'/about'}>about</Link>{' '}
        </div>
    )
}

export function getServerSideProps(context) {
    return {
        props: {
            host: context.query.host,
        },
    }
}
