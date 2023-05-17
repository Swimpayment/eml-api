/*
 * Finac API
 * <b>Version Notes:- <br/>• All amounts fields in requests and responses have been changed from decimal to int64(cents). This means that 10.00 in version 1, is 1000 in version 2.<br/>• ThreeDS endpoints have been added to this version. These will replace the KBA endpoints from version 1.</br>• AccountId endpoint has changed HTTP verb from GET to POST, furthermore additional cardholder details need to be provided as part of the HTTP body.</b>
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {AddRegistrationRuleBindingModel} from '../model/AddRegistrationRuleBindingModel';
import {AddRegistrationRuleViewModelValidResponsePackage} from '../model/AddRegistrationRuleViewModelValidResponsePackage';
import {DeleteRegistrationRuleViewModelValidResponsePackage} from '../model/DeleteRegistrationRuleViewModelValidResponsePackage';
import {GetRegistrationRulesViewModelValidResponsePackage} from '../model/GetRegistrationRulesViewModelValidResponsePackage';
import {InvalidResponsePackage} from '../model/InvalidResponsePackage';

/**
* RegistrationRule service.
* @module api/RegistrationRuleApi
* @version 2.0
*/
export class RegistrationRuleApi {

    /**
    * Constructs a new RegistrationRuleApi. 
    * @alias module:api/RegistrationRuleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiRegistrationRuleGet operation.
     * @callback moduleapi/RegistrationRuleApi~apiRegistrationRuleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRegistrationRulesViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Registration Rules
     * Retrieves all registration rules
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNo 
     * @param {Number} opts.pageSize 
     * @param {Boolean} opts.includeArchived 
     * @param {module:api/RegistrationRuleApi~apiRegistrationRuleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiRegistrationRuleGet(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiRegistrationRuleGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiRegistrationRuleGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiRegistrationRuleGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiRegistrationRuleGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'PageNo': opts['pageNo'],'PageSize': opts['pageSize'],'IncludeArchived': opts['includeArchived']
      };
      let headerParams = {
        'api-version': apiVersion,'Authorization': authorization,'F-Message-Id': fMessageId,'F-Origin': fOrigin
      };
      let formParams = {
        
      };

      let authNames = ['jwt_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetRegistrationRulesViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/RegistrationRule', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiRegistrationRulePost operation.
     * @callback moduleapi/RegistrationRuleApi~apiRegistrationRulePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddRegistrationRuleViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Registration Rule
     * Add new registration rule
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/AddRegistrationRuleBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/RegistrationRuleApi~apiRegistrationRulePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiRegistrationRulePost(apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiRegistrationRulePost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiRegistrationRulePost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiRegistrationRulePost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiRegistrationRulePost");
      }

      let pathParams = {
        
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
      let returnType = AddRegistrationRuleViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/RegistrationRule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiRegistrationRuleUserRegistrationRuleIdDelete operation.
     * @callback moduleapi/RegistrationRuleApi~apiRegistrationRuleUserRegistrationRuleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteRegistrationRuleViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Registration Rule
     * Delete registration rule
     * @param {String} userRegistrationRuleId 
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.cSRId 
     * @param {module:api/RegistrationRuleApi~apiRegistrationRuleUserRegistrationRuleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiRegistrationRuleUserRegistrationRuleIdDelete(userRegistrationRuleId, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userRegistrationRuleId' is set
      if (userRegistrationRuleId === undefined || userRegistrationRuleId === null) {
        throw new Error("Missing the required parameter 'userRegistrationRuleId' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiRegistrationRuleUserRegistrationRuleIdDelete");
      }

      let pathParams = {
        'UserRegistrationRuleId': userRegistrationRuleId
      };
      let queryParams = {
        'CSRId': opts['cSRId']
      };
      let headerParams = {
        'api-version': apiVersion,'Authorization': authorization,'F-Message-Id': fMessageId,'F-Origin': fOrigin
      };
      let formParams = {
        
      };

      let authNames = ['jwt_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteRegistrationRuleViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/RegistrationRule/{UserRegistrationRuleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}