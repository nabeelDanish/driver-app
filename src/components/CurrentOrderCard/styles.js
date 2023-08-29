import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '1rem',

        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        marginBottom: '1rem',
    },
    button: {
        background: '#007BFF',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '1rem',
    },
    error: {
        color: 'red',
        marginTop: '1rem',
    },
    modal: {
        display: 'none',
        position: 'fixed',
        zIndex: '2',
        paddingTop: '100px',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContent: {
        backgroundColor: '#fefefe',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #888',
        width: '50%',
        borderRadius: '25px',
        animationName: `$animatetop`,
        animationDuration: '0.5s',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);'
    },
    modalClose: {
        color: '#aaaaaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold',
        '&:hover': {
            color: '#000',
            textDecoration: 'none',
            cursor: 'pointer',
        }
    },
    "@keyframes animatetop": {
        "from": { transform: 'translateY(-300%)', opacity: '0' },
        "to": { top: '0', opacity: '1' }
    }
});
