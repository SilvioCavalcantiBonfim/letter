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
        --m3--sys--light--on-primary: rgba(255, 255, 255, 1);
        --m3--sys--light--on-primary-container: rgba(33, 0, 93, 1);
        --m3--sys--light--surface: rgba(255, 251, 254, 1);
        --m3--sys--light--outline: rgba(121, 116, 126, 1);
        --m3--sys--light--outline-variant: rgba(202, 196, 208, 1);
        --m3--sys--light--inverse-on-surface: rgba(244, 239, 244, 1);
        --m3--sys--light--on-surface: rgba(28, 27, 31, 1);
        --m3--sys--light--on-surface-variant: rgba(73, 69, 79, 1);
        

        /*Dark*/
        --m3--sys--dark--primary: rgba(208, 188, 255, 1);
        --m3--sys--dark--color--primary: rgba(56, 30, 114, 1);
        --m3--sys--dark--on-primary: rgba(56, 30, 114, 1);
        --m3--sys--dark--primary-container: rgba(79, 55, 139, 1);
        --m3--sys--dark--on-primary-container: rgba(234, 221, 255, 1);
        --m3--sys--dark--surface: rgba(28, 27, 31, 1);
        --m3--sys--dark--outline: rgba(147, 143, 153, 1);
        --m3--sys--dark--outline-variant: rgba(73, 69, 79, 1);
        --m3--sys--dark--inverse-on-surface: rgba(49, 48, 51, 1);
        --m3--sys--dark--on-surface: rgba(230, 225, 229, 1);
        --m3--sys--dark--on-surface-variant: rgba(202, 196, 208, 1);

        /* base size: m3--display--large (57px) */
        --m3--display--large: 1em;
        --m3--display--medium: 0.79em;
        --m3--display--small: 0.63em;
        --m3--headline--large: 0.56em;
        --m3--headline--medium: 0.49em;
        --m3--headline--small: 0.42em;
        --m3--title--large: 0.39em;
        --m3--title--medium: 0.28em;
        --m3--title--small: 0.25em;
        --m3--label--large: 0.25em;
        --m3--label--medium: 0.21em;
        --m3--label--small: 0.19em;
        --m3--body--large: 0.28em;
        --m3--body--medium: 0.25em;
        --m3--body--small: 0.21em;
    }
`;