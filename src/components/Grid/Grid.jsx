import React from 'react';
import { useStyles } from './styles';

const Grid = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.grid}>
            {React.Children.map(children, (child, index) => (
                <div key={index} className={classes.gridItem}>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Grid;
