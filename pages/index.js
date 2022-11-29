import Head from "next/head";
import react from "react";
import styled from "styled-components";
import Card from "../src/components/card";
import Header from "../src/components/header";
import Loading from "../src/components/loading";
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
        .on('postgres_changes', { event: 'INSERT', schema: '*' }, payload => {
            setContent(v => v.concat([payload.new]));
        })
        .subscribe()

    react.useEffect(() => {
        const dbreq = async () => {
            update === 0 && await SupaBase.from(`letters`).select('*').order('complaint', { ascending: true }).then(r => {
                r.data.map(e => {
                    setContent(v => {
                        return (v.map(e => JSON.stringify(e)).indexOf(JSON.stringify(e)) === -1) ? v.concat([e]) : v;
                    });
                });
                setUpdate(1);
            });
        }
        dbreq();
    }, [update]);

    return (<>
        <Head>
            <title>Letter...</title>
        </Head>
        <Header />
        {update === 0 && <Loading/>}
        {update === 1 && <StyledBody>{content.map((e, i) => <Card {...e} key={e.id} index={i} handle={setContent} />)}</StyledBody>}
    </>);
}



export default Page;