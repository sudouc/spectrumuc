import { SpectrumucPage } from './app.po';

describe('spectrumuc App', function() {
  let page: SpectrumucPage;

  beforeEach(() => {
    page = new SpectrumucPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
