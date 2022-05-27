import React, { ReactChild } from 'react';
import { Button, createStyles, Dialog, DialogActions, DialogContent, 
    DialogTitle, Grid, makeStyles, Theme, Typography } from '@material-ui/core';

import { themeConfiguration } from '../../themeConfiguration';

interface IBasicAlertDialog {
    title?: string,
    open: boolean,
    description?: string,
    handlePrimaryButton?: () => void,
    handleSecondaryButton?: () => void,
    textPrimaryButton?: string,
    textSecondaryButton?: string,
    children?: ReactChild,
    onClose?: () => void,
    fullWidth?: boolean,
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
}

const useStyles = makeStyles((themeConfiguration: Theme) => createStyles({
    title: {
        paddingBottom: '0.75rem',
    },

    primaryButton:{
        color: themeConfiguration.palette.common.white,
        backgroundColor: themeConfiguration.palette.primary.main,
        '&:hover':{
            backgroundColor: themeConfiguration.palette.primary.light,
        },
    },

    secondaryButton:{
        color: themeConfiguration.palette.common.white,
        backgroundColor: themeConfiguration.palette.secondary.main,
        '&:hover':{
            backgroundColor: themeConfiguration.palette.secondary.dark,
        },
    },
    
}));

export function BasicAlertDialog({    
    title, 
    open, 
    description, 
    handlePrimaryButton, 
    handleSecondaryButton,
    textPrimaryButton, 
    textSecondaryButton, 
    children, 
    onClose,
    maxWidth,
    fullWidth}: IBasicAlertDialog){

    const classes = useStyles();
    
    return(
        <Dialog 
            onClose={onClose}
            maxWidth={maxWidth ?? 'md'}
            fullWidth={fullWidth ?? false}
            PaperProps={{ style: { borderRadius: 16, padding: '12px', backgroundColor: themeConfiguration.palette.common.white }}}
            open={open}
        >
            <>
                { (title || description) &&
                    <DialogTitle>  
                        { title &&
                            <Typography variant='h5' className={classes.title}>
                                {title}
                            </Typography>
                        }
                        { description &&
                            <Typography variant='subtitle1'>
                                {description}
                            </Typography>
                        }
                    </DialogTitle>
                
                }
                {children && 
                    <DialogContent>
                        {children}
                    </DialogContent>
                }

                {(handlePrimaryButton || handleSecondaryButton) &&
                    <DialogActions>
                        <Grid
                            container
                            spacing={2}
                            direction='row'
                            justify='flex-end'
                        >
                            <Grid item>
                                <Button
                                    disableElevation
                                    onClick={handlePrimaryButton}
                                    variant='contained'
                                    size='large'
                                    className={classes.primaryButton}
                                >
                                    {textPrimaryButton}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    disableElevation
                                    onClick={handleSecondaryButton}
                                    variant='contained'
                                    size='large'
                                    className={classes.secondaryButton}
                                >
                                    {textSecondaryButton}
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                }
            </>
        </Dialog>
    );
}