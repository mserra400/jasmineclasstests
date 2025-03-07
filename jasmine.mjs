import Jasmine from 'jasmine';

const jasmine = new Jasmine();
await jasmine.loadConfigFile('spec/support/jasmine.json');
await jasmine.execute();
