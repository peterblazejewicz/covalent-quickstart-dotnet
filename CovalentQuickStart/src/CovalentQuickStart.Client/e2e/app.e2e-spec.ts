import { CovalentQuickStartPage } from './app.po';

describe('covalent-quick-start App', function() {
  let page: CovalentQuickStartPage;

  beforeEach(() => {
    page = new CovalentQuickStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
