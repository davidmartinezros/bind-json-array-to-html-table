import { BindJsonArrayToHtmlTablePage } from './app.po';

describe('bind-json-array-to-html-table App', function() {
  let page: BindJsonArrayToHtmlTablePage;

  beforeEach(() => {
    page = new BindJsonArrayToHtmlTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
