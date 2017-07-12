import { Ng4AppPage } from './app.po';

describe('ng4-app App', () => {
  let page: Ng4AppPage;

  beforeEach(() => {
    page = new Ng4AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
