import { InternationalizationProjectPage } from './app.po';

describe('internationalization-project App', function() {
  let page: InternationalizationProjectPage;

  beforeEach(() => {
    page = new InternationalizationProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
