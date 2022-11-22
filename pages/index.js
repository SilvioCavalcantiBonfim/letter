import Head from "next/head";
import styled from "styled-components";
import Card from "../src/components/card";
import Header from "../src/components/header";

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
            <title>Letter...</title>
        </Head>
        <Header />
        <StyledBody>
            {[...Array(6)].map((e, i) => <Card title={`title ${i}`} id={i} key={i} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Mauris maximus nisl risus, ut mollis ligula tempor et.\n Nulla ac eros eu turpis scelerisque efficitur mollis quis lacus.\n Morbi sagittis rhoncus nisi a vehicula. Maecenas a porta est.\n Nullam at felis in sapien congue malesuada.\n Quisque id suscipit nulla, at tempor lectus.\n Nullam porttitor ultricies velit, in lacinia neque elementum in.\n Vestibulum euismod ante eget gravida aliquet.\n Aliquam mauris lacus, tincidunt non euismod vel, lobortis a nisi.\n Nullam sit amet pulvinar quam, eu fringilla turpis.\n Sed elementum malesuada fermentum.\n Donec semper enim magna, ac molestie ligula laoreet a.\n Praesent urna orci, faucibus sit amet tincidunt non, tristique sit amet velit.\n Proin auctor dolor urna, nec tincidunt arcu rhoncus at."} />)}
        </StyledBody>
    </>);
}

export default Page;