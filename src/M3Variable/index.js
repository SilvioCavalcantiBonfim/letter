import { createGlobalStyle } from "styled-components";

export const M3Variable = createGlobalStyle`
    :root{
        /* Effect styles */
        --m3---elevation--light--1:  0px 1px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);
        --m3---elevation--light--2:  0px 2px 6px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);
        --m3---elevation--light--3:  0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px rgba(0, 0, 0, 0.15);
        --m3---elevation--light--4:  0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px rgba(0, 0, 0, 0.15);
        --m3---elevation--light--5:  0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--1: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--2: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--3: 0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--4: 0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px rgba(0, 0, 0, 0.15);
        --m3---elevation--dark--5: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px rgba(0, 0, 0, 0.15);
        /*Background*/
        --m3--bg--gradient--1: var(--m3--ref--${({ theme }) => `${theme.color}--primary${[4, 6][Number(theme.type === 'dark')]}0`});
        --m3--bg--gradient--2: var(--m3--ref--${({ theme }) => `${theme.color}--primary${[6, 4][Number(theme.type === 'dark')]}0`});

        --m3--bg--cloud--level1: var(--m3--ref--${({ theme }) => theme.color}--primary20);
        --m3--bg--cloud--level2: var(--m3--ref--${({ theme }) => theme.color}--primary30);
        --m3--bg--cloud--level3: var(--m3--ref--${({ theme }) => theme.color}--primary60);
        --m3--bg--cloud--level4: var(--m3--ref--${({ theme }) => theme.color}--primary100);

        /*Light*/
        --m3--sys--light--primary: var(--m3--ref--${({ theme }) => theme.color}--primary40);
        --m3--sys--light--on-primary: var(--m3--ref--${({ theme }) => theme.color}--primary100);
        --m3--sys--light--primary-container: var(--m3--ref--${({ theme }) => theme.color}--primary90);
        --m3--sys--light--on-primary-container: var(--m3--ref--${({ theme }) => theme.color}--primary10);
        --m3--sys--light--surface: var(--m3--ref--${({ theme }) => theme.color}--neutral99);
        --m3--sys--light--on-surface: var(--m3--ref--${({ theme }) => theme.color}--neutral10);
        --m3--sys--light--surface-variant: var(--m3--ref--${({ theme }) => theme.color}--neutral-variant90);
        --m3--sys--light--on-surface-variant: var(--m3--ref--${({ theme }) => theme.color}--neutral-variant30);
        --m3--sys--light--outline: var(--m3--ref--${({ theme }) => theme.color}--neutral-variant50);
        --m3--sys--light--outline-variant: var(--m3--ref--${({ theme }) => theme.color}--neutral-variant80);

        --m3--state-layers--light--primary--opacity-008: rgba(103, 80, 164, 0.07999999821186066);
        --m3--state-layers--light--primary--opacity-012: rgba(103, 80, 164, 0.11999999731779099);
        --m3--state-layers--light--primary--opacity-016: rgba(103, 80, 164, 0.1599999964237213);

        /*dark*/
        --m3--sys--dark--primary: var(--m3--ref--${({ theme }) => theme.color}--primary80);
        --m3--sys--dark--on-primary: var(--m3--ref--${({ theme }) => theme.color}--primary20);
        --m3--sys--dark--primary-container: var(--m3--ref--${({ theme }) => theme.color}--primary30);
        --m3--sys--dark--on-primary-container: var(--m3--ref--${({ theme }) => theme.color}--primary90);
        
        --m3--sys--dark--surface: var(--m3--ref--${({ theme }) => theme.color}--neutral10);
        --m3--sys--dark--on-surface: var(--m3--ref--${({ theme }) => theme.color}--neutral90);
        --m3--sys--dark--surface-variant: var(--m3--ref--${({ theme }) => theme.color}--neutral-variant30);
        --m3--sys--dark--on-surface-variant: var(--m3--ref--${({ theme }) => theme.color}--neutral-variant80);

        --m3--sys--dark--outline: var(--m3--ref--${({ theme }) => theme.color}--neutral-variant60);
        --m3--sys--dark--outline-variant: var(--m3--ref--${({ theme }) => theme.color}--neutral-variant30);

        --m3--state-layers--dark--primary--opacity-008: rgba(208, 188, 255, 0.07999999821186066);
        --m3--state-layers--dark--primary--opacity-012: rgba(208, 188, 255, 0.11999999731779099);
        --m3--state-layers--dark--primary--opacity-016: rgba(208, 188, 255, 0.1599999964237213);

        /*  */

        --m3--sys--light--outline: rgba(121, 116, 126, 1);
        --m3--sys--light--outline-variant: rgba(202, 196, 208, 1);
        --m3--sys--light--inverse-on-surface: rgba(244, 239, 244, 1);
        --m3--sys--light--on-surface: rgba(28, 27, 31, 1);
        --m3--sys--light--on-surface-variant: rgba(73, 69, 79, 1);
        --m3--sys--light--surface-variant: rgba(231, 224, 236, 1);
        --m3--state-layers--light--primary--opacity-008: rgba(103, 80, 164, 0.07999999821186066);
        --m3--sys--light--error: rgba(179, 38, 30, 1);
        --m3--sys--light--error-container: rgba(249, 222, 220, 1);
        --m3--sys--light--success: rgba(38, 140, 85, 1);
        --m3--sys--light--success-container: rgba(227, 251, 238, 1);
        --m3--sys--light--color--primary: rgba(255, 255, 255, 1);
        --m3--sys--light--inverse-surface: rgba(49, 48, 51, 1);
        --m3--sys--light--surface05: rgba(255, 251, 254, 0.5);

        --m3--surfaces--light--surface1: rgba(255, 251, 254, 1);
        --m3--surfaces--light--surface2: rgba(255, 251, 254, 1);
        --m3--surfaces--light--surface3: rgba(255, 251, 254, 1);
        --m3--surfaces--light--surface4: rgba(255, 251, 254, 1);
        --m3--surfaces--light--surface5: rgba(255, 251, 254, 1);
        /* base size: m3--display--large (57px) */
        --m3--display--large: 1rem;
        --m3--display--medium: 0.79rem;
        --m3--display--small: 0.63rem;
        --m3--headline--large: 0.56rem;
        --m3--headline--medium: 0.49rem;
        --m3--headline--small: 0.42rem;
        --m3--title--large: 0.39rem;
        --m3--title--medium: 0.28rem;
        --m3--title--small: 0.25rem;
        --m3--label--large: 0.25rem;
        --m3--label--medium: 0.21rem;
        --m3--label--small: 0.19rem;
        --m3--body--large: 0.28rem;
        --m3--body--medium: 0.25rem;
        --m3--body--small: 0.21rem;

        /*ref gold*/
        --m3--ref--gold--primary0: #000000;
        --m3--ref--gold--primary10: #271900;
        --m3--ref--gold--primary20: #412d00;
        --m3--ref--gold--primary25: #503700;
        --m3--ref--gold--primary30: #5e4200;
        --m3--ref--gold--primary35: #6d4d00;
        --m3--ref--gold--primary40: #7c5800;
        --m3--ref--gold--primary50: #9c6f00;
        --m3--ref--gold--primary60: #bb8810;
        --m3--ref--gold--primary70: #d9a22f;
        --m3--ref--gold--primary80: #f8bd48;
        --m3--ref--gold--primary90: #ffdea8;
        --m3--ref--gold--primary95: #ffeed8;
        --m3--ref--gold--primary98: #fff8f3;
        --m3--ref--gold--primary99: #fffbff;
        --m3--ref--gold--primary100: #ffffff;

        /*ref pink*/
        --m3--ref--pink--primary0: #000000;
        --m3--ref--pink--primary10: #3f0018;
        --m3--ref--pink--primary20: #5f112c;
        --m3--ref--pink--primary25: #6d1d37;
        --m3--ref--pink--primary30: #7c2942;
        --m3--ref--pink--primary35: #8b344d;
        --m3--ref--pink--primary40: #9a4059;
        --m3--ref--pink--primary50: #b85872;
        --m3--ref--pink--primary60: #d7718b;
        --m3--ref--pink--primary70: #f78aa5;
        --m3--ref--pink--primary80: #ffb1c2;
        --m3--ref--pink--primary90: #ffd9df;
        --m3--ref--pink--primary95: #ffecee;
        --m3--ref--pink--primary98: #fff8f7;
        --m3--ref--pink--primary99: #fffbff;
        --m3--ref--pink--primary100: #ffffff;

        /*ref charcoal*/
        --m3--ref--charcoal--primary0: #000000;
        --m3--ref--charcoal--primary10: #001e30;
        --m3--ref--charcoal--primary20: #00344f;
        --m3--ref--charcoal--primary25: #003f5f;
        --m3--ref--charcoal--primary30: #004b70;
        --m3--ref--charcoal--primary35: #005881;
        --m3--ref--charcoal--primary40: #006493;
        --m3--ref--charcoal--primary50: #047eb7;
        --m3--ref--charcoal--primary60: #3998d3;
        --m3--ref--charcoal--primary70: #5ab3ef;
        --m3--ref--charcoal--primary80: #8dcdff;
        --m3--ref--charcoal--primary90: #cae6ff;
        --m3--ref--charcoal--primary95: #e6f2ff;
        --m3--ref--charcoal--primary98: #f6f9ff;
        --m3--ref--charcoal--primary99: #fcfcff;
        --m3--ref--charcoal--primary100: #ffffff;

        /*ref blue*/
        --m3--ref--blue--primary0: #000000;
        --m3--ref--blue--primary10: #001d36;
        --m3--ref--blue--primary20: #003258;
        --m3--ref--blue--primary25: #003d6a;
        --m3--ref--blue--primary30: #00497c;
        --m3--ref--blue--primary35: #00558f;
        --m3--ref--blue--primary40: #0061a3;
        --m3--ref--blue--primary50: #007bcb;
        --m3--ref--blue--primary60: #1b95f1;
        --m3--ref--blue--primary70: #62b0ff;
        --m3--ref--blue--primary80: #9ecaff;
        --m3--ref--blue--primary90: #d1e4ff;
        --m3--ref--blue--primary95: #e9f1ff;
        --m3--ref--blue--primary98: #f8f9ff;
        --m3--ref--blue--primary99: #fdfcff;
        --m3--ref--blue--primary100: #ffffff;
        /* secondary */
        --m3--ref--blue--secondary0: #000000;
        --m3--ref--blue--secondary10: #0f1c2b;
        --m3--ref--blue--secondary20: #253140;
        --m3--ref--blue--secondary25: #303c4c;
        --m3--ref--blue--secondary30: #3b4858;
        --m3--ref--blue--secondary35: #475364;
        --m3--ref--blue--secondary40: #535f70;
        --m3--ref--blue--secondary50: #6b7889;
        --m3--ref--blue--secondary60: #8592a4;
        --m3--ref--blue--secondary70: #9facbf;
        --m3--ref--blue--secondary80: #bac8db;
        --m3--ref--blue--secondary90: #d6e3f7;
        --m3--ref--blue--secondary95: #e9f1ff;
        --m3--ref--blue--secondary98: #f8f9ff;
        --m3--ref--blue--secondary99: #fdfcff;
        --m3--ref--blue--secondary100: #ffffff;
        /* tertiary */
        --m3--ref--blue--tertiary0: #000000;
        --m3--ref--blue--tertiary10: #251432;
        --m3--ref--blue--tertiary20: #3b2948;
        --m3--ref--blue--tertiary25: #463453;
        --m3--ref--blue--tertiary30: #523f5f;
        --m3--ref--blue--tertiary35: #5e4b6c;
        --m3--ref--blue--tertiary40: #6b5778;
        --m3--ref--blue--tertiary50: #846f92;
        --m3--ref--blue--tertiary60: #9f89ad;
        --m3--ref--blue--tertiary70: #baa3c8;
        --m3--ref--blue--tertiary80: #d6bee5;
        --m3--ref--blue--tertiary90: #f2daff;
        --m3--ref--blue--tertiary95: #fbecff;
        --m3--ref--blue--tertiary98: #fff7fd;
        --m3--ref--blue--tertiary99: #fffbff;
        --m3--ref--blue--tertiary100: #ffffff;
        /* neutral */
        --m3--ref--blue--neutral0: #000000;
        --m3--ref--blue--neutral10: #1a1c1e;
        --m3--ref--blue--neutral20: #2f3033;
        --m3--ref--blue--neutral25: #3a3b3e;
        --m3--ref--blue--neutral30: #45474a;
        --m3--ref--blue--neutral35: #515255;
        --m3--ref--blue--neutral40: #5d5e61;
        --m3--ref--blue--neutral50: #76777a;
        --m3--ref--blue--neutral60: #909094;
        --m3--ref--blue--neutral70: #ababae;
        --m3--ref--blue--neutral80: #c6c6ca;
        --m3--ref--blue--neutral90: #e2e2e6;
        --m3--ref--blue--neutral95: #f1f0f4;
        --m3--ref--blue--neutral98: #faf9fc;
        --m3--ref--blue--neutral99: #fdfcff;
        --m3--ref--blue--neutral100: #ffffff;
        /* neutral-variant */
        --m3--ref--blue--neutral-variant0: #000000;
        --m3--ref--blue--neutral-variant10: #171c22;
        --m3--ref--blue--neutral-variant20: #2c3137;
        --m3--ref--blue--neutral-variant25: #373c42;
        --m3--ref--blue--neutral-variant30: #42474e;
        --m3--ref--blue--neutral-variant35: #4e535a;
        --m3--ref--blue--neutral-variant40: #5a5f66;
        --m3--ref--blue--neutral-variant50: #73777f;
        --m3--ref--blue--neutral-variant60: #8d9199;
        --m3--ref--blue--neutral-variant70: #a7abb4;
        --m3--ref--blue--neutral-variant80: #c3c7cf;
        --m3--ref--blue--neutral-variant90: #dfe2eb;
        --m3--ref--blue--neutral-variant95: #edf1f9;
        --m3--ref--blue--neutral-variant98: #f8f9ff;
        --m3--ref--blue--neutral-variant99: #fdfcff;
        --m3--ref--blue--neutral-variant100: #ffffff;
        /* error */
        --m3--ref--blue--error0: #000000;
        --m3--ref--blue--error10: #410002;
        --m3--ref--blue--error20: #690005;
        --m3--ref--blue--error25: #7e0007;
        --m3--ref--blue--error30: #93000a;
        --m3--ref--blue--error35: #a80710;
        --m3--ref--blue--error40: #ba1a1a;
        --m3--ref--blue--error50: #de3730;
        --m3--ref--blue--error60: #ff5449;
        --m3--ref--blue--error70: #ff897d;
        --m3--ref--blue--error80: #ffb4ab;
        --m3--ref--blue--error90: #ffdad6;
        --m3--ref--blue--error95: #ffedea;
        --m3--ref--blue--error98: #fff8f7;
        --m3--ref--blue--error99: #fffbff;
        --m3--ref--blue--error100: #ffffff;

        /*ref green*/
        --m3--ref--green--primary0: #000000;
        --m3--ref--green--primary10: #002111;
        --m3--ref--green--primary20: #003920;
        --m3--ref--green--primary25: #004528;
        --m3--ref--green--primary30: #005231;
        --m3--ref--green--primary35: #005f39;
        --m3--ref--green--primary40: #006d42;
        --m3--ref--green--primary50: #028954;
        --m3--ref--green--primary60: #33a36c;
        --m3--ref--green--primary70: #53bf85;
        --m3--ref--green--primary80: #70db9f;
        --m3--ref--green--primary90: #8cf8b9;
        --m3--ref--green--primary95: #c0ffd6;
        --m3--ref--green--primary98: #e9ffed;
        --m3--ref--green--primary99: #f5fff4;
        --m3--ref--green--primary100: #ffffff;
    }
`;