import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export type AxiosMockType = MockAdapter;

export function setupAxiosMock() {
    const axiosMock = new MockAdapter(axios, { onNoMatch: 'passthrough', });

    // Add Mocks
    // mockLogin(axiosMock);
}