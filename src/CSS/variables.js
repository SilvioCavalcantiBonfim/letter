import { createGlobalStyle } from "styled-components";

export const Variables = createGlobalStyle`
    :root{
        /*Global Control animations and transition*/
        --animation--duration: .3s;
        --transition--duration: .1s;
        --animation--timing--function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
        --transition--timing--function: cubic-bezier(0.250, 0.460, 0.450, 0.940);

        /* Effect styles */
        --backdrop-filter--blur: 5px;

        --m3---elevation--light--1:  0px 1px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);
        --m3---elevation--light--2:  0px 2px 6px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);
        --m3---elevation--dark--1: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--2: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px rgba(0, 0, 0, 0.15);
        /*Light*/
        --m3--sys--light--primary: var(--m3--ref--${({ theme }) => theme.color}--primary40);
        --m3--sys--light--on-primary: var(--m3--ref--${({ theme }) => theme.color}--primary100);
        --m3--sys--light--primary-container: var(--m3--ref--${({ theme }) => theme.color}--primary90);
        --m3--sys--light--on-primary-container: var(--m3--ref--${({ theme }) => theme.color}--primary10);

        --m3--sys--light--error: var(--m3--ref--error40);
        --m3--sys--light--error-container: var(--m3--ref--error90);
        --m3--sys--light--success: var(--m3--ref--success40);
        --m3--sys--light--success-container: var(--m3--ref--success90);

        --m3--sys--light--surface: var(--m3--ref--neutral99);
        --m3--sys--light--on-surface: var(--m3--ref--neutral10);
        --m3--sys--light--surface-variant: var(--m3--ref--neutral-variant90);
        --m3--sys--light--on-surface-variant: var(--m3--ref--neutral-variant30);
        --m3--sys--light--outline: var(--m3--ref--neutral-variant50);
        --m3--sys--light--outline-variant: var(--m3--ref--neutral-variant80);

        --m3--state-layers--light--primary--opacity-008: rgba(103, 80, 164, 0.07999999821186066);
        --m3--state-layers--light--primary--opacity-012: rgba(103, 80, 164, 0.11999999731779099);

        /*dark*/
        --m3--sys--dark--primary: var(--m3--ref--${({ theme }) => theme.color}--primary80);
        --m3--sys--dark--on-primary: var(--m3--ref--${({ theme }) => theme.color}--primary20);
        --m3--sys--dark--primary-container: var(--m3--ref--${({ theme }) => theme.color}--primary30);
        --m3--sys--dark--on-primary-container: var(--m3--ref--${({ theme }) => theme.color}--primary90);

        --m3--sys--dark--error: var(--m3--ref--error80);
        --m3--sys--dark--error-container: var(--m3--ref--error30);
        --m3--sys--dark--success: var(--m3--ref--success80);
        --m3--sys--dark--success-container: var(--m3--ref--success30);
        
        --m3--sys--dark--surface: var(--m3--ref--neutral10);
        --m3--sys--dark--on-surface: var(--m3--ref--neutral90);
        --m3--sys--dark--surface-variant: var(--m3--ref--neutral-variant30);
        --m3--sys--dark--on-surface-variant: var(--m3--ref--neutral-variant80);

        --m3--sys--dark--outline: var(--m3--ref--neutral-variant60);
        --m3--sys--dark--outline-variant: var(--m3--ref--neutral-variant30);

        --m3--state-layers--dark--primary--opacity-008: rgba(208, 188, 255, 0.07999999821186066);
        --m3--state-layers--dark--primary--opacity-012: rgba(208, 188, 255, 0.11999999731779099);

        --m3--body--large: 0.28rem;
        --m3--body--medium: 0.25rem;
        --m3--body--small: 0.21rem;
        --m3--title--medium: 0.28rem;
        --m3--title--small: 0.25rem;

        /*ref gold*/
        --m3--ref--gold--primary10: #271900;
        --m3--ref--gold--primary20: #412d00;
        --m3--ref--gold--primary30: #5e4200;
        --m3--ref--gold--primary40: #7c5800;
        --m3--ref--gold--primary60: #bb8810;
        --m3--ref--gold--primary80: #f8bd48;
        --m3--ref--gold--primary90: #ffdea8;
        --m3--ref--gold--primary100: #ffffff;
        
        /*ref pink*/
        --m3--ref--pink--primary10: #3f0018;
        --m3--ref--pink--primary20: #5f112c;
        --m3--ref--pink--primary30: #7c2942;
        --m3--ref--pink--primary40: #9a4059;
        --m3--ref--pink--primary60: #d7718b;
        --m3--ref--pink--primary80: #ffb1c2;
        --m3--ref--pink--primary90: #ffd9df;
        --m3--ref--pink--primary100: #ffffff;
        
        /*ref blue*/
        --m3--ref--blue--primary10: #001d36;
        --m3--ref--blue--primary20: #003258;
        --m3--ref--blue--primary30: #00497c;
        --m3--ref--blue--primary40: #0061a3;
        --m3--ref--blue--primary60: #1b95f1;
        --m3--ref--blue--primary80: #9ecaff;
        --m3--ref--blue--primary90: #d1e4ff;
        --m3--ref--blue--primary100: #ffffff;
        
        /*ref green*/
        --m3--ref--green--primary10: #002111;
        --m3--ref--green--primary20: #003920;
        --m3--ref--green--primary30: #005231;
        --m3--ref--green--primary40: #006d42;
        --m3--ref--green--primary60: #33a36c;
        --m3--ref--green--primary80: #70db9f;
        --m3--ref--green--primary90: #8cf8b9;
        --m3--ref--green--primary100: #ffffff;
  
        /* neutral */
        --m3--ref--neutral10: #1a1c1e;
        --m3--ref--neutral90: #e2e2e6;
        --m3--ref--neutral99: #fdfcff;

        /* neutral-variant */
        --m3--ref--neutral-variant30: #42474e;
        --m3--ref--neutral-variant50: #73777f;
        --m3--ref--neutral-variant60: #8d9199;
        --m3--ref--neutral-variant80: #c3c7cf;
        --m3--ref--neutral-variant90: #dfe2eb;
        
        /* error */
        --m3--ref--error30: #93000a;
        --m3--ref--error40: #ba1a1a;
        --m3--ref--error80: #ffb4ab;
        --m3--ref--error90: #ffdad6;
        
        /* success */
        --m3--ref--success30: #005307;
        --m3--ref--success40: #006e0c;
        --m3--ref--success80: #77dd6a;
        --m3--ref--success90: #92fa83;
    }
`;