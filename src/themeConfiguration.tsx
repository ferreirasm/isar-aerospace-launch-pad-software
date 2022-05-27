import { createMuiTheme } from '@material-ui/core';

export const themeConfiguration = createMuiTheme({
    palette: {
        primary: {
            light: '#0F447A',
            main: '#115FB0'
        },
        secondary: {
            main: '#1176B0',
            dark: '#0B4D73'
        },
        success: {
            light: '#E0FBC8',
            main: '#4ECF49',
            dark: '#1C9C16',
        },
        error: {
            light: '#FDDCD5',
            main: '#E95F6D',
            dark: '#DB2E50',
        },
        warning: {
            light: '#FFE9CC',
            main: '#ffa800',
            dark: '#F46600',
        },
        info: {
            light: '#D8F7FF',
            main: '#52C8EA',
            dark: '#1a88be',
        },
        text: {
            primary: '#0E0E0E',
            secondary: '#424242',
            disabled: '#B6B6B6',
        },
        common: {
            black: '#0E0E0E',
            white: '#FFFFFF',
        },
        grey: {
            50: '#FAFAFA',
            200: '#E6E6E6',
            500: '#B6B6B6',
            700: '#6E6E6E',
            900: '#424242',
        },
        background: {
            paper: '#3d3947',
            default: '#2a2a35',
        },
    },
    typography: {
        fontFamily: 'Didact Gothic',
        h1: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '6rem',
            lineHeight: '7.25rem',
            letterSpacing: '0rem'
        },
        h2: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '3.75rem',
            lineHeight: '4.5rem',
            letterSpacing: '0rem'
        },
        h3: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '3rem',
            lineHeight: '3.625rem',
            letterSpacing: '0rem'
        },
        h4: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '2.125rem',
            lineHeight: '2.5rem',
            letterSpacing: '0rem'
        },
        h5: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: '1.75rem',
            letterSpacing: '0rem'
        },
        h6: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
            letterSpacing: '0rem'
        },
        subtitle1: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.25rem',
            letterSpacing: '0rem'
        },
        subtitle2: {
            fontFamily: 'Didact Gothic',
            fontWeight: 600,
            fontSize: '0.875rem',
            lineHeight: '1rem',
            letterSpacing: '0rem'
        },
        body1: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.25rem',
            letterSpacing: '0rem'
        },
        body2: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1rem',
            letterSpacing: '0rem'
        },
        button: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            letterSpacing: '0.018rem'
        },
        caption: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '0.875rem',
            letterSpacing: '0.01rem'
        },
        overline: {
            fontFamily: 'Didact Gothic',
            fontWeight: 400,
            fontSize: '0.625rem',
            lineHeight: '0.75rem',
            letterSpacing: '0.1rem'
        }
    }
});