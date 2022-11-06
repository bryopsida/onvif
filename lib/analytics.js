const namespace = 'http://www.onvif.org/ver20/analytics/wsdl';

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

	Cam.prototype.getAnalyticsModuleOptions = function(cb, options) {
		// TODO: implement me
		const token = options != null && options.configurationToken ? options.configurationToken : this.defaultProfile.videoSourceConfiguration.$.token;
		const type = options != null && options.type ? options.type : null;
		const typeElement = type == null ? '' : `<Type>${type}</Type>`;
		
		this._request({
			service: 'analytics'
			, body: this._envelopeHeader() +
			`<GetAnalyticsModuleOptions xmlns="${namespace}">
				<ConfigurationToken>${token}</ConfigurationToken>
				${typeElement}
			 </GetAnalyticsModuleOptions>` +
			this._envelopeFooter()
		}, function(err, res, xml) {
			cb.call(this, err, err ? null : res, xml);
		}.bind(this));
	};

	Cam.prototype.getAnalyticsModules = function(cb, options) {
		const token = options != null && options.configurationToken ? options.configurationToken : this.defaultProfile.videoSourceConfiguration.$.token;
		this._request({
			service: 'analytics'
			, body: this._envelopeHeader() +
			`<GetAnalyticsModules xmlns="${namespace}">
				<ConfigurationToken>${token}</ConfigurationToken>
			 </GetAnalyticsModules>` +
			this._envelopeFooter()
		}, function(err, res, xml) {
			if (!err) {
				const source = this.activeSources.find((s) => s.sourceToken === token);
				source.analyticModules = res[0].getAnalyticsModulesResponse;
			}
			cb.call(this, err, err ? null : this.activeSources, xml);
		}.bind(this));
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
  
	Cam.prototype.getSupportedAnalyticsMetadata = function(cb) {
		this._request({
			service: 'analytics'
			, body: this._envelopeHeader() +
			`<GetSupportedMetadata xmlns="${namespace}" />` +
			this._envelopeFooter()
		}, function(err, res, xml) {
			cb.call(this, err, err ? null : res, xml);
		}.bind(this));
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

	Cam.prototype.getAnalyticsRules = function(cb, options) {
		const token = options != null && options.configurationToken ? options.configurationToken : this.defaultProfile.videoSourceConfiguration.$.token;
		this._request({
			service: 'analytics'
			, body: this._envelopeHeader() +
			`<GetRules xmlns="${namespace}">
				<ConfigurationToken>${token}</ConfigurationToken>
			 </GetRules>` +
			this._envelopeFooter()
		}, function(err, res, xml) {
			cb.call(this, err, err ? null : res, xml);
		}.bind(this));
	};

	Cam.prototype.getSupportedAnalyticsRules = function(cb, options) {
		const token = options != null && options.configurationToken ? options.configurationToken : this.defaultProfile.videoSourceConfiguration.$.token;
		this._request({
			service: 'analytics'
			, body: this._envelopeHeader() +
			`<GetSupportedRules xmlns="${namespace}">
				<ConfigurationToken>${token}</ConfigurationToken>
			 </GetSupportedRules>` +
			this._envelopeFooter()
		}, function(err, res, xml) {
			cb.call(this, err, err ? null : res, xml);
		}.bind(this));	
	};

	Cam.prototype.modifyAnalyticsRules = function() {
		// TODO: implement me
	};
};