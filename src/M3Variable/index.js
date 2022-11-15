import { createGlobalStyle } from "styled-components";

export const M3Variable = createGlobalStyle`
    :root{
        /* Effect styles */
        --m3---elevation--light--1:  0px 1px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);
        --m3---elevation--light--2:  0px 2px 6px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);
        --m3---elevation--light--3:  0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px rgba(0, 0, 0, 0.15);
        --m3---elevation--light--4:  0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px rgba(0, 0, 0, 0.15);
        --m3---elevation--light--5:  0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--1:  0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--2:  0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--3:  0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--4:  0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--5:  0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px rgba(0, 0, 0, 0.15);

        /*Default Colors*/
        --m3--white: rgba(255, 255, 255, 1);
        --m3--black: rgba(0, 0, 0, 1);
        /*Light*/
        --m3--sys--light--primary: rgba(103, 80, 164, 1);
        --m3--sys--light--color--primary: rgba(255, 255, 255, 1);
        --m3--surfaces--light--surface1: rgba(255, 251, 254, 1);

        /*Dark*/
        --m3--sys--dark--primary: rgba(208, 188, 255, 1);
        --m3--sys--dark--color--primary: rgba(56, 30, 114, 1);
        --m3--surfaces--dark--surface1: rgba(28, 27, 31, 1);
    }
`;