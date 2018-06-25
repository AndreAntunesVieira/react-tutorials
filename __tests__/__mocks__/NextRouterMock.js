export function mockPushRoute (pushRoute) {
  jest.doMock('routes', () => ({
    Router: { pushRoute }
  }))
}
