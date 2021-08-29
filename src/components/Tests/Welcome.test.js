
import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import App from '../../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

test('Welcome text appering', async () => {
    render(
        <BrowserRouter>
            <WelcomeScreen />
        </BrowserRouter>
    );

    let v = await screen.findAllByText('Welcome');
    expect(v.length).toEqual(1);
    expect(v[0].tagName).toEqual('H1');
});

test('Listings button appearing', () => {
    render(
        <BrowserRouter>
            <WelcomeScreen />
        </BrowserRouter>
    );
    let buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(1);
    expect(buttons[0].textContent).toEqual('Listings');
});

test('Listings button goes to listings screen', () => {
    render(<App />)
    let buttons = screen.getAllByRole('button')
    let button = buttons[0];
    userEvent.click(button);
    expect(global.window.location.pathname).toEqual('/listings');
});
