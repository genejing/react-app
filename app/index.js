// require('react');
// require('./index.less');
import React from 'react'
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root'
import '../static/css/common.css'
import '../static/css/reset.css'


render(
    <AppContainer>
        <Root />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewHello = require('./root').default;
        render(
            <AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}