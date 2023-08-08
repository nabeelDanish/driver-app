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
    orderCard: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '1rem',

        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        '&:hover': {
            backgroundColor: '#f0f0f0',
            transform: 'scale(1.05)'
        }
    },
    selectedCard: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '1rem',

        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        cursor: 'pointer',
        backgroundColor: '#f0f0f0',
        transform: 'scale(1.05)'

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
});
