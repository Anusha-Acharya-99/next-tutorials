import Head from "next/head";

const BlogDisplay = ({ title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name = "description" content={description} />
            </Head>
            <h1 className="content">Blog</h1>
            <div className="content">Env user {process.env.DB_USER} password {process.env.DB_PASSWORD}</div>
            <div className="content">ID {process.env.NEXT_PUBLIC_ID}</div>
        </>
    )
}

export default BlogDisplay;

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params:{blogId: "1"}
            }
        ],
        fallback: true
    }
}

export const getStaticProps = async () => {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    console.log(`The user is ${user} and password is ${password}`)
    return {
        props: {
            title: "Article title",
            description: "Artcile description"
        }
    }
}