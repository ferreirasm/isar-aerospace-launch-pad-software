
import React from 'react';
import io from 'socket.io-client';

const socket = io('wss://isaraerospace-webdeveloper-assignment.azurewebsites.net/api/SpectrumWS?token=0DB9D71DE67');
socket.on('connect', () => {console.log('Successfully Connected to Server')});

// export const SocketContext = React.createContext<SocketIOClient.Socket>(socket);

// "Velocity":{"X":-50.62151579575186,"Y":1.6533310798900367,"Z":1007.0109782148394},"Altitude":3481.7191398468253,"Temperature":13.04476929174626,"GoingUp":true,"StatusMessage":"Lift off"