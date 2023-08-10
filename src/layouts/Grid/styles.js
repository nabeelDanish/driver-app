import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    grid: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        padding: '1.5rem',
        gap: '1rem',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    gridItem: {
        flex: 1,

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginBottom: '1rem',
        },
    },
}));
