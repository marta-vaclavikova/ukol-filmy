import React from 'react';
import './style.css';

const Actor = ({name, as}) => (
    <div className="actor">
    <b>{name}</b>
    <div>as {as}</div>
    </div>
);

export default Actor;