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
        background: '#f4df08',
        color: 'black',
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
});
