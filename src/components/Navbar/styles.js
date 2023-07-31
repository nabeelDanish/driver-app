import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    navItems: {
        listStyle: 'none',
        display: 'flex',
    },
    navItem: {
        marginLeft: '1rem',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});
