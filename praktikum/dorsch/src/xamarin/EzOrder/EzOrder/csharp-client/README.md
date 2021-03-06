# IO.Swagger - the C# library for the EzOrder Backend

API Description for EzOrder Rest-Backend

This C# SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- SDK version: 1.0.0
- Build package: io.swagger.codegen.languages.CSharpClientCodegen

<a name="frameworks-supported"></a>
## Frameworks supported
- .NET 4.0 or later
- Windows Phone 7.1 (Mango)

<a name="dependencies"></a>
## Dependencies
- [RestSharp](https://www.nuget.org/packages/RestSharp) - 105.1.0 or later
- [Json.NET](https://www.nuget.org/packages/Newtonsoft.Json/) - 7.0.0 or later
- [JsonSubTypes](https://www.nuget.org/packages/JsonSubTypes/) - 1.2.0 or later

The DLLs included in the package may not be the latest version. We recommend using [NuGet](https://docs.nuget.org/consume/installing-nuget) to obtain the latest version of the packages:
```
Install-Package RestSharp
Install-Package Newtonsoft.Json
Install-Package JsonSubTypes
```

NOTE: RestSharp versions greater than 105.1.0 have a bug which causes file uploads to fail. See [RestSharp#742](https://github.com/restsharp/RestSharp/issues/742)

<a name="installation"></a>
## Installation
Run the following command to generate the DLL
- [Mac/Linux] `/bin/sh build.sh`
- [Windows] `build.bat`

Then include the DLL (under the `bin` folder) in the C# project, and use the namespaces:
```csharp
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;
```
<a name="packaging"></a>
## Packaging

A `.nuspec` is included with the project. You can follow the Nuget quickstart to [create](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#create-the-package) and [publish](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#publish-the-package) packages.

This `.nuspec` uses placeholders from the `.csproj`, so build the `.csproj` directly:

```
nuget pack -Build -OutputDirectory out IO.Swagger.csproj
```

Then, publish to a [local feed](https://docs.microsoft.com/en-us/nuget/hosting-packages/local-feeds) or [other host](https://docs.microsoft.com/en-us/nuget/hosting-packages/overview) and consume the new package via Nuget as usual.

<a name="getting-started"></a>
## Getting Started

```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class Example
    {
        public void main()
        {

            var apiInstance = new CategoryApi();
            var body = new Category(); // Category | category object that needs to be added

            try
            {
                // Add a new category
                apiInstance.AddCategory(body);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CategoryApi.AddCategory: " + e.Message );
            }

        }
    }
}
```

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://192.168.178.44:3000/api/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CategoryApi* | [**AddCategory**](docs/CategoryApi.md#addcategory) | **POST** /category | Add a new category
*CategoryApi* | [**DeleteCategory**](docs/CategoryApi.md#deletecategory) | **DELETE** /category/{catID} | Deletes a category
*CategoryApi* | [**GetCategories**](docs/CategoryApi.md#getcategories) | **GET** /category | Get all categories
*CategoryApi* | [**GetCategoryById**](docs/CategoryApi.md#getcategorybyid) | **GET** /category/{catID} | Find category by ID
*CategoryApi* | [**UpdateCategory**](docs/CategoryApi.md#updatecategory) | **PUT** /category | Update an existing category
*CategoryApi* | [**UpdateCategoryWithForm**](docs/CategoryApi.md#updatecategorywithform) | **POST** /category/{catID} | Updates a category with form data
*OrderingApi* | [**DeleteOrder**](docs/OrderingApi.md#deleteorder) | **DELETE** /ordering/{orderId} | Delete purchase order by ID
*OrderingApi* | [**GetOrderById**](docs/OrderingApi.md#getorderbyid) | **GET** /ordering/{orderId} | Find purchase order by ID
*OrderingApi* | [**GetOrders**](docs/OrderingApi.md#getorders) | **GET** /ordering | Get all orders
*OrderingApi* | [**PlaceOrder**](docs/OrderingApi.md#placeorder) | **POST** /ordering | Place an order
*PositionApi* | [**DeletePosition**](docs/PositionApi.md#deleteposition) | **DELETE** /position/{positionID} | Deletes a position
*PositionApi* | [**GetPositionById**](docs/PositionApi.md#getpositionbyid) | **GET** /position/{positionID} | Find position by ID
*PositionApi* | [**GetPositions**](docs/PositionApi.md#getpositions) | **GET** /position | Get all positions
*PositionApi* | [**PlacePosition**](docs/PositionApi.md#placeposition) | **POST** /position | Place an position
*PositionApi* | [**UpdatePositionWithForm**](docs/PositionApi.md#updatepositionwithform) | **POST** /position/{positionID} | Updates a position with form data
*ProductApi* | [**Add**](docs/ProductApi.md#add) | **POST** /product | Add a new product
*ProductApi* | [**DeleteProduct**](docs/ProductApi.md#deleteproduct) | **DELETE** /product/{productID} | Deletes a product
*ProductApi* | [**GetProductById**](docs/ProductApi.md#getproductbyid) | **GET** /product/{productID} | Find product by ID
*ProductApi* | [**GetProducts**](docs/ProductApi.md#getproducts) | **GET** /product | Get all products
*ProductApi* | [**UpdateProduct**](docs/ProductApi.md#updateproduct) | **PUT** /product | Update an existing product
*ProductApi* | [**UpdateProductWithForm**](docs/ProductApi.md#updateproductwithform) | **POST** /product/{productID} | Updates a product with form data
*UserApi* | [**CreateUser**](docs/UserApi.md#createuser) | **POST** /user | Create user
*UserApi* | [**DeleteUser**](docs/UserApi.md#deleteuser) | **DELETE** /user/{userid} | Delete user
*UserApi* | [**GetUserByName**](docs/UserApi.md#getuserbyname) | **GET** /user/{userid} | Get user by user id
*UserApi* | [**GetUsers**](docs/UserApi.md#getusers) | **GET** /user | Get all users
*UserApi* | [**UpdateUser**](docs/UserApi.md#updateuser) | **PUT** /user/{userid} | Updated user


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.Category](docs/Category.md)
 - [Model.Ordering](docs/Ordering.md)
 - [Model.Position](docs/Position.md)
 - [Model.Product](docs/Product.md)
 - [Model.User](docs/User.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
