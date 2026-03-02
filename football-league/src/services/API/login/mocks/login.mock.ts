

export default mockLogin(mock: AxiosMockType) {
    mock.onPost('/login').reply(200, {
        token: 'token'
    });
}