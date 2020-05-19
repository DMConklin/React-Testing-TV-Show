import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { act } from 'react-dom/test-utils';

jest.mock('./api/fetchShow');

const mockData = {
    data: {
        _embedded: {
            episodes: [
                {
                    id: 1234,
                    image: {
                        medium: 'https://www.tutorialgateway.org/wp-content/uploads/JavaScript-Date-Now-Function-1-1024x700.png'
                    },
                    name: 'name',
                    season: 1,
                    episode: 1,
                    summary: 'summary',
                    runtime: 60
                }
            ]
        },
        name: 'name',
        image: {
            original: 'google.com'
        },
        summary: 'summary'
    }
}

test('Does App render', async () => {
        mockFetchShow.mockResolvedValueOnce(mockData);
        const {getByText} = render(<App />);
        getByText(/Fetching data.../i);
        waitFor(() => expect(getByText(/Select a season/i)));
})


