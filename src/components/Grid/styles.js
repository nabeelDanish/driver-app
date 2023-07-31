import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    grid: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        padding: '1.5rem',
        gap: '1rem'
    },
    gridItem: {
        flex: 1,
    },
});
