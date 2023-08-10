import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    navbar: {
        backgroundColor: '#f4df08',
        color: 'dark-gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '-webkit-fill-available'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    navItems: {
        listStyle: 'none',
        display: 'flex',

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    navItem: {
        marginLeft: '1rem',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));
