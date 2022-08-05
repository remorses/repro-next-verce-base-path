export default function Page({ host }) {
    return (
        <div className=''>
            <div className=''>host: {host}</div>
            <br /> 
            <div className=''>about</div>
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
