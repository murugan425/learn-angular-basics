import { HelloangularPage } from './app.po';

describe('helloangular App', () => {
  let page: HelloangularPage;

  beforeEach(() => {
    page = new HelloangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
