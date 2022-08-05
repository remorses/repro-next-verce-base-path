export default function Page({ host }) {
    return (
        <div className=''>
            <div className=''>about</div>
            <br /> <div className=''> {host}</div>
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
