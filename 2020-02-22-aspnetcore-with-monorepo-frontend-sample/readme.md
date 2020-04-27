Sample ASP.NET Core 3.1 web application with monorepo front in dedicated folder.
================================================================================

Frontend is monorepo with two `create-react-app`-based SPA which are using shared `components` project.
`components` is typescript library of shared jsx components.

Backend contains ASP.NET Core web applications.
Frontend parts will be copied to `wwwroot` folder of backend applications on publish with `dotnet publish`.

See the [blog post](https://codeofclimber.ru/2020/publishing-aspnetcore-app-web-application-with-frontend-monorepo-static-assets/#importing-styles-in-components-package) for the details.

License
-------

This package is distributed under conditions of [MIT license](LICENSE).
