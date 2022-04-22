Feature('Store');

Scenario('test', ({ I }) => {
    I.amOnPage('/');
    I.see('Women');
    I.fillField('Search', 'helloworld');
    I.see('BEST SELLERS', '.blockbestsellers');
});





