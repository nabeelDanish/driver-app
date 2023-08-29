import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '1rem',
        maxWidth: '50rem',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        marginTop: '1rem'
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '1rem'
    }
})