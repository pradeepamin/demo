exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub', 

    // directConnect:true,
    specs: ['files/dropdownn.js'],
    capabilities: {
        'browserName': 'chrome'
      },
    jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
}

}

