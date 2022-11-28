import Head from "next/head";
import react from "react";
import styled from "styled-components";
import Card from "../src/components/card";
import Header from "../src/components/header";
import { SupaBase } from "../src/supabase";

const StyledBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    animation: FadeIn var(--animation--duration) var(--animation--timing--function);
`;

const Page = () => {
    const [content, setContent] = react.useState([]);
    const [update, setUpdate] = react.useState(0);

    SupaBase.channel('*')
    .on('postgres_changes', { event: '*', schema: '*' }, payload => {
      setUpdate(0);
    })
    .subscribe()

    react.useEffect(() => {
        const dbreq = async () => {
            update === 0 && await SupaBase.from(`letters`).select('*').then(r => {
                r.data.map(e => {
                    setContent(v => {
                        var auxV = v;
                        auxV[e.id] = e;
                        return auxV;
                    });
                    setUpdate(1);
                })
            })
        }
        dbreq();
    }, [update]);

    return (<>
        <Head>
            <title>Letter...</title>
        </Head>
        <Header />
            {update === 1 && <StyledBody>{content.map(e => <Card {...e} key={e.id}/>)}</StyledBody>}
    </>);
}

export default Page;