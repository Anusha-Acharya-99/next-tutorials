const News = ({data}) => {
    return ( 
        <h1 className="content">{ data}</h1>
     );
}
 
export default News;

export const getStaticProps = async (context) => {
    console.log("Running getStaticProps", context.previewData);
    return {
        props:   {data: context.preview?"List of drafted articles": "List of news articles"}
    }
}