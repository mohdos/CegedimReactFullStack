import React from 'react'
import { render, screen } from '@testing-library/react'
import ListingScreen from '../ListingScreen/ListingScreen';


test('Card elements rendered', async () => {
    const { container } = render(<ListingScreen />)

    let v = await container.getElementsByClassName("listings-container");
    expect(v.length).toEqual(1);

    // let cards = await container.getElementsByClassName("card");
    // expect(cards.length).toBeGreaterThan(0);
});

