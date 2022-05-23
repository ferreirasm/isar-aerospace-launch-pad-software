import { createTheme } from '@material-ui/core';

export const themeConfiguration = createTheme({
    palette: {
        primary: {
            light: '#E0FBC8',
            main: '#115fb0'
        },
        secondary: {
            main: '#A870DB',
            dark: '#383888'
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
            paper: '#FFFFFF',
            default: '#FAFAFA',
        },
    },
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: '6rem',
            lineHeight: '7.25rem',
            letterSpacing: '0rem'
        },
        h2: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: '3.75rem',
            lineHeight: '4.5rem',
            letterSpacing: '0rem'
        },
        h3: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: '3.625rem',
            letterSpacing: '0rem'
        },
        h4: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: '2.125rem',
            lineHeight: '2.5rem',
            letterSpacing: '0rem'
        },
        h5: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: '1.75rem',
            letterSpacing: '0rem'
        },
        h6: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
            letterSpacing: '0rem'
        },
        subtitle1: {
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: '1.25rem',
            letterSpacing: '0rem'
        },
        subtitle2: {
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: '0.875rem',
            lineHeight: '1rem',
            letterSpacing: '0rem'
        },
        body1: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.25rem',
            letterSpacing: '0rem'
        },
        body2: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1rem',
            letterSpacing: '0rem'
        },
        button: {
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            letterSpacing: '0.018rem'
        },
        caption: {
            fontFamily: 'Open Sans',
            fontWeight: 500,
            fontSize: '0.75rem',
            lineHeight: '0.875rem',
            letterSpacing: '0.01rem'
        },
        overline: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: '0.625rem',
            lineHeight: '0.75rem',
            letterSpacing: '0.1rem'
        }
    }
});