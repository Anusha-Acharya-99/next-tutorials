import Footer from "@/layout/Footer";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>Codevolution</title>
                <meta name="description" content="About page of the app" />
            </Head>
            <div className="content">About</div>
        </>
    )
}

export default About;

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}