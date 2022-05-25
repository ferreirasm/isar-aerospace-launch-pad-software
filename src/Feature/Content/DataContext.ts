import React from 'react';

export interface IDataContextProps {
    updateData: boolean,
    setUpdateData: (value: boolean) => void,
}

export const dataContextInitial: IDataContextProps = {
    updateData: false,
    setUpdateData: () => {'';},
};

export const DataContext = React.createContext(dataContextInitial);