// Comps_Map_Marker.js
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    width: 38px;
    height: 37px;
    background-image: url(https://icon-library.com/images/pin-icon-png/pin-icon-png-9.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    cursor: grab;
`;

export const Comps_Map_Marker = ({ text, onClick }) => (
    <Wrapper
        alt={text}
        onClick={onClick}
    />
);

// Comps_Map_Marker.defaultProps = {
//     onClick: null,
// };

// Comps_Map_Marker.propTypes = {
//     onClick: PropTypes.func,
//     text: PropTypes.string.isRequired,
// };
