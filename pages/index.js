import Head from "next/head";
import styled from "styled-components";
import Header from "../src/components/header";
import LetterBox from "../src/components/letterBox";

const StyledBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Page = () => {
    return (<>
        <Head>
            <title>Letter</title>
        </Head>
        <Header />
        <StyledBody>
            {[...Array(6)].map( (e,i) => <LetterBox id={i} key={i}/>)}
        </StyledBody>
    </>);
}

export default Page;