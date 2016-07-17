# Setup

**One Rocket Road** is built primarily in Angular 2 using TypeScript, and functions as a single page
application; with dependencies managed by NPM. The backend server uses Laravel running PHP 7, 
with a MySQL database as a store --- the aim of the backend server is to function only as an API, 
as much development should be exportedto the front end where possible. Composer manages the 
dependencies the backend requires. 

## Tooling & Environment

To run a local development copy of One Rocket Road, any environment capable of supporting PHP
execution will do. A common choice is to use VirtualBox and Vagrant as a virtual machine to host
an instance of the app. We will use these tools as an example.

On the frontend, One Rocket Road makes heavy use of build tools to speed development. Access to a 
TypeScript transpiler will be required, as well as the ability to bundle packages via Webpack.

### Setting up the server

To begin, download VirtualBox and Vagrant.

### Frontend development flow
 
Frontend development tooling can be automated through an IDE (such as WebStorm), or can simply be 
run through the command line.