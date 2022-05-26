import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, GridJustification, Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import React, { ReactChild } from 'react';

interface IBasicAlertDialog {
    title?: string,
    open: boolean,
    description?: string,
    handlePrimaryButton?: () => void,
    handleSecondaryButton?: () => void,
    textPrimaryButton?: string,
    textSecondaryButton?: string,
    children?: ReactChild,
    cssProperties?: ICssProperties,
    onClose?: () => void,
    fullWidth?: boolean,
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
}

interface ICssProperties {
    colorPrimaryButton?: string,
    colorPrimaryButtonHover?: string,
    colorSecondaryButton?: string,
    colorSecondaryButtonHover?: string,
    justifyButtons?: GridJustification,
    titleVariant?: Variant,
    descriptionVariant?: Variant,
    disableOverflowY?: boolean,
}

export function BasicAlertDialog({    
    title, 
    open, 
    description, 
    handlePrimaryButton, 
    handleSecondaryButton,
    textPrimaryButton, 
    textSecondaryButton, 
    children, 
    cssProperties,
    onClose,
    maxWidth,
    fullWidth}: IBasicAlertDialog){

    return(
        <Dialog 
            onClose={onClose}
            maxWidth={maxWidth ?? 'md'}
            fullWidth={fullWidth ?? false}
            PaperProps={{ style: { borderRadius: 16, padding: '12px' }}}
            open={open}
        >
            <>
                { (title || description) &&
                    <DialogTitle>  
                        { title &&
                            <Typography>
                                {title}
                            </Typography>
                        }
                        { description &&
                            <Typography>
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
                        >
                            <Grid item>
                                <Button
                                    disableElevation
                                    onClick={handlePrimaryButton}
                                    variant='contained'
                                    size='large'
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