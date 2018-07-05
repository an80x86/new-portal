// in src/Foo.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ViewTitle } from 'react-admin';

const Foo = () => (
    <Card>
        <ViewTitle title="My Page" />

    </Card>
);

export default Foo;