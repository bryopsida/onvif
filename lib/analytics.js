const namespace = 'http://www.onvif.org/ver20/analytics/wsdl';
const linerase = require('./utils').linerase;

/**
 * Relevant WSDL: http://www.onvif.org/ver20/analytics/wsdl/analytics.wsdl
 * @namespace cam
 * @description Analytics section for Cam class
 * @author bryopsida 
 * @licence MIT
 */
module.exports = function(Cam) {

	Cam.prototype.createAnalyticsModules = function() {
		// TODO: implement me
	};

	Cam.prototype.deleteAnalyticsModules = function() {
		// TODO: implement me
	};

	Cam.prototype.getAnalyticsModuleOptions = function() {
		// TODO: implement me
	};

	Cam.prototype.getAnalyticsModules = function() {
		// TODO: implement me
	};

	Cam.prototype.getAnalyticsServiceCapabilities = function(cb) {
		this._request({
			service: 'analytics'
			, body: this._envelopeHeader() +
			`<GetServiceCapabilities xmlns="${namespace}"/>` +
			this._envelopeFooter()
		}, function(err, res, xml) {
			this.serviceCapabilities.analytics = res[0].getServiceCapabilitiesResponse[0].capabilities[0].$;
			cb.call(this, err, err ? null : this.serviceCapabilities.analytics, xml);
		}.bind(this));
	};

	Cam.prototype.getSupportedAnalyticsModules = function() {
		// TODO: implement me
	};
  
	Cam.prototype.getSupportedAnalyticsMetadata = function() {
		// TODO: implement me
	};

	Cam.prototype.modifyAnalyticsModules = function() {
		// TODO: implement me
	};

	Cam.prototype.createAnalyticsRules = function() {
		// TODO: implement me
	};

	Cam.prototype.deleteAnalyticsRules = function() {
		// TODO: implement me
	};

	Cam.prototype.getAnalyticsRuleOptions = function() {
		// TODO: implement me
	};

	Cam.prototype.getAnalyticsRules = function() {
		// TODO: implement me
	};

	Cam.prototype.getSupportedAnalyticsRules = function() {
		// TODO: implement me
	};

	Cam.prototype.modifyAnalyticsRules = function() {
		// TODO: implement me
	};
};