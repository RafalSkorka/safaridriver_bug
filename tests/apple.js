module.exports = {
    'Apple.com page click at the bottom' : function (client) {
        let selector = '#ac-globalfooter > div > nav > div:nth-child(1) > div > ul > li:nth-child(1) > a';
        client.url('https://www.apple.com');
        client.pause(3000);
        client.getText(selector, (result) => {
            console.log(`Element text is: ${result.value}`);
        });
        client.click(selector);
        client.pause(3000);
        client.url((result) => {
            console.log(`Current url is: ${result.value}`);
        });
        client.assert.urlEquals('https://www.apple.com/mac/');
        client.end();
    }
  };