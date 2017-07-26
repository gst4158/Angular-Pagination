import { MonkeysportsPage } from './app.po';

describe('monkeysports App', () => {
  let page: MonkeysportsPage;

  beforeEach(() => {
    page = new MonkeysportsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
