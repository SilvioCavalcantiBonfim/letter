import Head from "next/head";
import Header from "../src/components/header";
import LetterBox from "../src/components/letterBox";

const Page = () => {
    return (<>
        <Head>
            <title>Letter</title>
        </Head>
        <Header />
        {[...Array(1)].map( (e,i) => <LetterBox key={i}/>)}
    </>);
}

export default Page;