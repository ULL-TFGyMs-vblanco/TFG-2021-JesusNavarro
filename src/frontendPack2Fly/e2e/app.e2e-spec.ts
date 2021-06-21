import { FrontendPack2FlyPage } from './app.po';

describe('frontend-pack2-fly App', function() {
  let page: FrontendPack2FlyPage;

  beforeEach(() => {
    page = new FrontendPack2FlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
