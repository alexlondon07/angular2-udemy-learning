import { Angular2UdemyLearningPage } from './app.po';

describe('angular2-udemy-learning App', () => {
  let page: Angular2UdemyLearningPage;

  beforeEach(() => {
    page = new Angular2UdemyLearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
