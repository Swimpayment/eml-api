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
import {ConfirmPayeeBindingModel} from '../model/ConfirmPayeeBindingModel';
import {ConfirmPayeeViewModelValidResponsePackage} from '../model/ConfirmPayeeViewModelValidResponsePackage';
import {DeletePayeeBindingModel} from '../model/DeletePayeeBindingModel';
import {DeletePayeeViewModelValidResponsePackage} from '../model/DeletePayeeViewModelValidResponsePackage';
import {GetPayeeBindingModel} from '../model/GetPayeeBindingModel';
import {GetPayeeViewModelValidResponsePackage} from '../model/GetPayeeViewModelValidResponsePackage';
import {InvalidResponsePackage} from '../model/InvalidResponsePackage';
import {ResendOTPPayeeBindingModel} from '../model/ResendOTPPayeeBindingModel';
import {ResendOTPPayeeViewModelValidResponsePackage} from '../model/ResendOTPPayeeViewModelValidResponsePackage';
import {UpdatePayeeBindingModel} from '../model/UpdatePayeeBindingModel';
import {UpdatePayeeViewModelValidResponsePackage} from '../model/UpdatePayeeViewModelValidResponsePackage';

/**
* Payee service.
* @module api/PayeeApi
* @version 2.0
*/
export class PayeeApi {

    /**
    * Constructs a new PayeeApi. 
    * @alias module:api/PayeeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiPayeeIdConfirmPost operation.
     * @callback moduleapi/PayeeApi~apiPayeeIdConfirmPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfirmPayeeViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirms Payee details
     * This endpoint will confirm the payee details linked to the cardholder id.       Sample request:                    POST /api/Payee/400000000000/Confirm      {          \&quot;payeeId\&quot;: \&quot;A84E1FE8-1234-1234-1234-DA7699183FA9\&quot;,          \&quot;kba\&quot;: \&quot;13966BB92642BCF01B68EF61B5E6681F94B6992A5FB97576E4875293B921678A\&quot;,          \&quot;otp\&quot;: \&quot;74BFBD5635A5886CD57644DB38E2F882\&quot;      }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfirmPayeeBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/PayeeApi~apiPayeeIdConfirmPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiPayeeIdConfirmPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiPayeeIdConfirmPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiPayeeIdConfirmPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiPayeeIdConfirmPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiPayeeIdConfirmPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiPayeeIdConfirmPost");
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
      let returnType = ConfirmPayeeViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/Payee/{Id}/Confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiPayeeIdDelete operation.
     * @callback moduleapi/PayeeApi~apiPayeeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeletePayeeViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes Payee
     * This endpoint will delete the payee.       Sample request:                    Delete /api/Payee      {          \&quot;payeeid\&quot;: \&quot;63ec1888-1234-1234-1234-f0cc30604b11\&quot;                }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/DeletePayeeBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/PayeeApi~apiPayeeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiPayeeIdDelete(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiPayeeIdDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiPayeeIdDelete");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiPayeeIdDelete");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiPayeeIdDelete");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiPayeeIdDelete");
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
      let returnType = DeletePayeeViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/Payee/{Id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiPayeeIdGet operation.
     * @callback moduleapi/PayeeApi~apiPayeeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetPayeeViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirms Payee details
     * This endpoint will get the payee details, if the payee id is not empty, or else it will retreive all payees, linked to the cardholder id.       Sample request 1:                    GET /api/Payee/400000000000    Sample request 2:        GET /api/Payee/400000000000      {          \&quot;payeeid\&quot;: \&quot;63ec1888-1234-1234-1234-f0cc30604b11\&quot;           }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/GetPayeeBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/PayeeApi~apiPayeeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiPayeeIdGet(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiPayeeIdGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiPayeeIdGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiPayeeIdGet");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiPayeeIdGet");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiPayeeIdGet");
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
      let contentTypes = ['application/json-patch+json', 'application/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = GetPayeeViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/Payee/{Id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiPayeeIdPut operation.
     * @callback moduleapi/PayeeApi~apiPayeeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdatePayeeViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates Payee details
     * This endpoint will save the payee details and linked to the cardholder id.       Sample request:                    PUT /api/Payee      {          \&quot;Name\&quot;: \&quot;WLT00002\&quot;,          \&quot;Surname\&quot;: \&quot;WLT00052\&quot;      }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdatePayeeBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/PayeeApi~apiPayeeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiPayeeIdPut(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiPayeeIdPut");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiPayeeIdPut");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiPayeeIdPut");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiPayeeIdPut");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiPayeeIdPut");
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
      let returnType = UpdatePayeeViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/Payee/{Id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiPayeeIdResendOTPPost operation.
     * @callback moduleapi/PayeeApi~apiPayeeIdResendOTPPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResendOTPPayeeViewModelValidResponsePackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend confirmation OTP
     * This endpoint will resend the confirmation OTP code.    Sample request:                    POST /api/Payee/400000000000/ResendOTP      {          \&quot;payeeId\&quot;: \&quot;63ec1888-1234-1234-1234-f0cc30604b11\&quot;      }                Possible error to be thrown:    1. \&quot;Error Code not defined.\&quot;  2. \&quot;Payee not supplied.\&quot;  3. \&quot;Payee not found.\&quot;  4. \&quot;Cardholder not found.\&quot;  5. \&quot;Unsupported currency.\&quot;  6. \&quot;Payee already exists.\&quot;  7. \&quot;Currency is empty.\&quot;  8. \&quot;Failed to send SMS.\&quot;  9. \&quot;Payee validation failed.\&quot;  10. \&quot;Payee already confirmed.\&quot;  11. \&quot;Payee confirmation failed.\&quot;  12. \&quot;Failed to mark Payee as inactive.\&quot;  13. \&quot;Confirmation request is null.\&quot;  14. \&quot;Reconfirm Payee request is null.\&quot;  15. \&quot;New cardholder not found.\&quot;  16. \&quot;Failed to transfer Payees.\&quot;  17. \&quot;Payee not confirmed.\&quot;  18. \&quot;Payees already transferred.\&quot;  19. \&quot;No OTP details found.\&quot;  20. \&quot;No Payees found for cardholder.\&quot;  21. \&quot;unexpected general exception.\&quot;
     * @param {String} id Cardholder id.
     * @param {String} apiVersion 
     * @param {String} authorization Access token
     * @param {String} fMessageId Unique identifier
     * @param {String} fOrigin Origin of request
     * @param {Object} opts Optional parameters
     * @param {module:model/ResendOTPPayeeBindingModel} opts.body Request body, see details under the &#x27;Model&#x27; tab
     * @param {module:api/PayeeApi~apiPayeeIdResendOTPPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiPayeeIdResendOTPPost(id, apiVersion, authorization, fMessageId, fOrigin, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiPayeeIdResendOTPPost");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling apiPayeeIdResendOTPPost");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiPayeeIdResendOTPPost");
      }
      // verify the required parameter 'fMessageId' is set
      if (fMessageId === undefined || fMessageId === null) {
        throw new Error("Missing the required parameter 'fMessageId' when calling apiPayeeIdResendOTPPost");
      }
      // verify the required parameter 'fOrigin' is set
      if (fOrigin === undefined || fOrigin === null) {
        throw new Error("Missing the required parameter 'fOrigin' when calling apiPayeeIdResendOTPPost");
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
      let returnType = ResendOTPPayeeViewModelValidResponsePackage;

      return this.apiClient.callApi(
        '/api/Payee/{Id}/ResendOTP', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}