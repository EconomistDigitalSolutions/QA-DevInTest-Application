const blockLocatorTemplate = type => `//*[contains(@class,'grid-item') and contains(@class,'one-half') and contains(.,'${type}') and .//form[@action]]`;

module.exports = { blockLocatorTemplate };
