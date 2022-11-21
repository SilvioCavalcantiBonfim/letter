import { createGlobalStyle } from "styled-components";

export const M3Variable = createGlobalStyle`
    :root{
        /* Effect styles */
        --m3---elevation--light--1:  0px 1px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);
        --m3---elevation--light--2:  0px 2px 6px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);
        --m3---elevation--light--3:  0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px rgba(0, 0, 0, 0.15);
        --m3---elevation--light--4:  0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px rgba(0, 0, 0, 0.15);
        --m3---elevation--light--5:  0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px rgba(0, 0, 0, 0.15);
        /*Background*/
        --m3--bg--gradient--1: var(--m3--ref--${({theme}) => `${theme.color}--primary${[4,6][Number(theme.type === 'dark')]}0`});
        --m3--bg--gradient--2:var(--m3--ref--${({theme}) => `${theme.color}--primary${[6,4][Number(theme.type === 'dark')]}0`});

        --m3--bg--cloud--level1: var(--m3--ref--${({theme}) => theme.color}--primary20);
        --m3--bg--cloud--level2: var(--m3--ref--${({theme}) => theme.color}--primary30);
        --m3--bg--cloud--level3: var(--m3--ref--${({theme}) => theme.color}--primary60);
        --m3--bg--cloud--level4: var(--m3--ref--${({theme}) => theme.color}--primary100);
        /*Light*/
        --m3--sys--light--primary: var(--m3--ref--${({theme}) => theme.color}--primary40);
        --m3--sys--light--on-primary: var(--m3--ref--${({theme}) => theme.color}--primary100);
        --m3--sys--light--primary-container: var(--m3--ref--${({theme}) => theme.color}--primary90);
        --m3--sys--light--on-primary-container: var(--m3--ref--${({theme}) => theme.color}--primary10);

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
        --m3--sys--light--surface: rgba(255, 251, 254, 1);
        --m3--sys--light--surface05: rgba(255, 251, 254, 0.5);

        --m3--state-layers--light--primary--opacity-008: rgba(103, 80, 164, 0.07999999821186066);
        --m3--state-layers--light--primary--opacity-012: rgba(103, 80, 164, 0.11999999731779099);
        

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

        /* Ref lavender*/
        --m3--ref--lavender--primary100: rgba(255, 255, 255, 1);
        --m3--ref--lavender--primary90: rgba(234, 221, 255, 1);
        --m3--ref--lavender--primary80: rgba(235, 236, 255, 1);
        --m3--ref--lavender--primary70: rgba(217, 220, 253, 1);
        --m3--ref--lavender--primary60: rgba(185, 190, 255, 1);
        --m3--ref--lavender--primary50: rgba(159, 166, 255, 1);
        --m3--ref--lavender--primary40: rgba(129, 138, 236, 1);
        --m3--ref--lavender--primary30: rgba(98, 105, 197, 1);
        --m3--ref--lavender--primary20: rgba(64, 73, 150, 1);
        --m3--ref--lavender--primary10: rgba(35, 42, 92, 1);
        --m3--ref--lavender--primary0: rgba(0, 0, 0, 1);

        /*ref gold*/
        --m3--ref--gold--primary100: rgba(255, 255, 255, 1);
        --m3--ref--gold--primary90: rgba(168, 54, 10, 1);
        --m3--ref--gold--primary80: rgba(178, 67, 25, 1);
        --m3--ref--gold--primary70: rgba(206, 113, 41, 1);
        --m3--ref--gold--primary60: rgba(232, 150, 53, 1);
        --m3--ref--gold--primary50: rgba(250, 179, 71, 1);
        --m3--ref--gold--primary40: rgba(255, 197, 85, 1);
        --m3--ref--gold--primary30: rgba(253, 216, 142, 1);
        --m3--ref--gold--primary20: rgba(255, 231, 184, 1);
        --m3--ref--gold--primary10: rgba(255, 242, 215, 1);
        --m3--ref--gold--primary0: rgba(0, 0, 0, 1);

        /*ref green*/
        --m3--ref--green--primary100: rgba(255, 255, 255, 1);
        --m3--ref--green--primary90: rgba(1, 38, 18, 1);
        --m3--ref--green--primary80: rgba(0, 60, 28, 1);
        --m3--ref--green--primary70: rgba(16, 98, 54, 1);
        --m3--ref--green--primary60: rgba(38, 140, 85, 1);
        --m3--ref--green--primary50: rgba(57, 172, 110, 1);
        --m3--ref--green--primary40: rgba(86, 194, 136, 1);
        --m3--ref--green--primary30: rgba(135, 219, 174, 1);
        --m3--ref--green--primary20: rgba(194, 240, 215, 1);
        --m3--ref--green--primary10: rgba(245, 255, 249, 1);
        --m3--ref--green--primary0: rgba(0, 0, 0, 1);

        /*ref pink*/
        --m3--ref--pink--primary100: rgba(255, 255, 255, 1);
        --m3--ref--pink--primary90: rgba(224, 47, 82, 1);
        --m3--ref--pink--primary80: rgba(242, 52, 89, 1);
        --m3--ref--pink--primary70: rgba(252, 93, 125, 1);
        --m3--ref--pink--primary60: rgba(255, 129, 154, 1);
        --m3--ref--pink--primary50: rgba(253, 154, 174, 1);
        --m3--ref--pink--primary40: rgba(255, 179, 195, 1);
        --m3--ref--pink--primary30: rgba(255, 204, 215, 1);
        --m3--ref--pink--primary20: rgba(255, 225, 231, 1);
        --m3--ref--pink--primary10: rgba(255, 238, 241, 1);
        --m3--ref--pink--primary0: rgba(0, 0, 0, 1);

        /*ref charcoal*/
        --m3--ref--charcoal--primary100: rgba(255, 255, 255, 1);
        --m3--ref--charcoal--primary90: rgba(10, 10, 10, 1);
        --m3--ref--charcoal--primary80: rgba(18, 27, 33, 1);
        --m3--ref--charcoal--primary70: rgba(29, 43, 54, 1);
        --m3--ref--charcoal--primary60: rgba(37, 54, 66, 1);
        --m3--ref--charcoal--primary50: rgba(49, 67, 81, 1);
        --m3--ref--charcoal--primary40: rgba(64, 82, 97, 1);
        --m3--ref--charcoal--primary30: rgba(85, 101, 117, 1);
        --m3--ref--charcoal--primary20: rgba(116, 132, 148, 1);
        --m3--ref--charcoal--primary10: rgba(147, 161, 176, 1);
        --m3--ref--charcoal--primary0: rgba(0, 0, 0, 1);

        /*ref blue*/
        --m3--ref--blue--primary100: rgba(255, 255, 255, 1);
        --m3--ref--blue--primary99: rgba(255, 251, 254, 1);
        --m3--ref--blue--primary95: rgba(246, 237, 255, 1);
        --m3--ref--blue--primary90: rgba(234, 221, 255, 1);
        --m3--ref--blue--primary80: rgba(208, 188, 255, 1);
        --m3--ref--blue--primary70: rgba(182, 157, 248, 1);
        --m3--ref--blue--primary60: rgba(154, 130, 219, 1);
        --m3--ref--blue--primary50: rgba(127, 103, 190, 1);
        --m3--ref--blue--primary40: rgba(103, 80, 164, 1);
        --m3--ref--blue--primary30: rgba(79, 55, 139, 1);
        --m3--ref--blue--primary20: rgba(56, 30, 114, 1);
        --m3--ref--blue--primary10: rgba(33, 0, 93, 1);
        --m3--ref--blue--primary0: rgba(0, 0, 0, 1);
    }
`;