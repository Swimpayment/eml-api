/*
 * Finac API
 * <b>Version Notes:- <br/>• All amounts fields in requests and responses have been changed from decimal to int64(cents). This means that 10.00 in version 1, is 1000 in version 2.<br/>• ThreeDS endpoints have been added to this version. These will replace the KBA endpoints from version 1.</br>• AccountId endpoint has changed HTTP verb from GET to POST, furthermore additional cardholder details need to be provided as part of the HTTP body.</b>
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.43
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {EnrollmentDetailsThreeDSViewModelValidResponsePackage} from '../model/EnrollmentDetailsThreeDSViewModelValidResponsePackage';
import {InvalidResponsePackage} from '../model/InvalidResponsePackage';
import {UpdateSecurityDetailsThreeDSBindingModel} from '../model/UpdateSecurityDetailsThreeDSBindingModel';
import {UpdateSecurityDetailsThreeDSViewModelValidResponsePackage} from '../model/UpdateSecurityDetailsThreeDSViewModelValidResponsePackage';
import {ValidateSecurityAnswerThreeDSBindingModel} from '../model/ValidateSecurityAnswerThreeDSBindingModel';
import {ValidateSecurityAnswerThreeDSViewModelValidResponsePackage} from '../model/ValidateSecurityAnswerThreeDSViewModelValidResponsePackage';

/**
* ThreeDS service.
* @module api/ThreeDSApi
* @version 2.0
*/
export class ThreeDSApi {

    /**
    * Constructs a new ThreeDSApi. 
    * @alias module:api/ThreeDSApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiThreeDSIdGet operation.
     * @callback moduleapi/ThreeDSApi~apiThreeDSIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnrollmentDetailsThreeDSViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get enrollment details
     * Retrieves the enrollment details of the cardholder from our 3DS provider.    Sample request:            GET /api/ThreeDS/400000000000
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {module:api/ThreeDSApi~apiThreeDSIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiThreeDSIdGet(id, apiVersion, authorization, fMessageId, fOrigin, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiThreeDSIdGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiThreeDSIdGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiThreeDSIdGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiThreeDSIdGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiThreeDSIdGet");
      }

      let pathParams = {
        'Id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'api-version': apiVersion,'Authorization': authorization,'F-Message-Id': fMessageId,'F-Origin': fOrigin
      };
      let formParams = {
        
      };

      let authNames = ['jwt_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnrollmentDetailsThreeDSViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/ThreeDS/{Id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiThreeDSIdSecurityDetailsPatch operation.
     * @callback moduleapi/ThreeDSApi~apiThreeDSIdSecurityDetailsPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateSecurityDetailsThreeDSViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update 3DS security details
     * This endpoints offers to create or update security details for 3DS enrollment. The security answer needs to be encrypted.    The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    Security answer is always required while security question is optional. If security question is not provided, the flow will check the current enrollment  details and if no security question is found, the default value from our configurations per bin/distributor code will be assigned.    Sample request:            PATCH /api/ThreeDS/400000000000/SecurityDetails      {          \&quot;securityQuestion\&quot;: \&quot;Favourite Football Team\&quot;,          \&quot;securityAnswer\&quot;: \&quot;F4FE2C36F2C4082FC5B9AC3FCB3634B2\&quot;,      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateSecurityDetailsThreeDSBindingModel} opts.body 
     * @param {module:api/ThreeDSApi~apiThreeDSIdSecurityDetailsPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiThreeDSIdSecurityDetailsPatch(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiThreeDSIdSecurityDetailsPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiThreeDSIdSecurityDetailsPatch");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiThreeDSIdSecurityDetailsPatch");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiThreeDSIdSecurityDetailsPatch");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiThreeDSIdSecurityDetailsPatch");
      }

      let pathParams = {
        'Id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'api-version': apiVersion,'Authorization': authorization,'F-Message-Id': fMessageId,'F-Origin': fOrigin
      };
      let formParams = {
        
      };

      let authNames = ['jwt_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UpdateSecurityDetailsThreeDSViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/ThreeDS/{Id}/SecurityDetails', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiThreeDSIdValidatePost operation.
     * @callback moduleapi/ThreeDSApi~apiThreeDSIdValidatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateSecurityAnswerThreeDSViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Security Answer
     * Validates security answer for a given cardholder id. The security answer needs to be encrypted.    The encryption algorithm used is AES.  The cipher mode used is ECB.  No IV is required.    Sample request:            POST /api/ThreeDS/400000000000/Validate      {          \&quot;securityAnswer\&quot;: \&quot;F4FE2C36F2C4082FC5B9AC3FCB3634B2\&quot;      }
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ValidateSecurityAnswerThreeDSBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/ThreeDSApi~apiThreeDSIdValidatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiThreeDSIdValidatePost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiThreeDSIdValidatePost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiThreeDSIdValidatePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiThreeDSIdValidatePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiThreeDSIdValidatePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiThreeDSIdValidatePost");
      }

      let pathParams = {
        'Id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'api-version': apiVersion,'Authorization': authorization,'F-Message-Id': fMessageId,'F-Origin': fOrigin
      };
      let formParams = {
        
      };

      let authNames = ['jwt_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ValidateSecurityAnswerThreeDSViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/ThreeDS/{Id}/Validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}