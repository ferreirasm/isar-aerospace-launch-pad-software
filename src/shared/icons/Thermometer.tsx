import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { IconProps } from './IconProps';

export function Thermometer({ size, color }: IconProps) {
    return (
        <SvgIcon
            viewBox={'0 0 24 24'}
            style={{
                width: size ?? '24px',
                height: size ?? '24px',
                fill:'none'
            }}
        >
            <path
                stroke={color ?? 'white'}
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
            />
        </SvgIcon>
    );
}