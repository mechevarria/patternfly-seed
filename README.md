# patternfly-seed 
Patternfly Angular Seed project.  This project provides the infrastructure for development, livereload, code validation and production optimizations for deployment.

1. [Run Local](#local)
2. [Run on OpenShift](#openshift)

Referenced projects:

[PatternFly](http://www.patternfly.org/)

[Angular PatternFly](http://www.patternfly.org/angular-patternfly)

[OpenShift Container Platform](https://www.openshift.com/container-platform/index.html)

![cli.png](screenshot.png)

## Run Local<a name="local"></a>

### Install
This command will download all the dependencies into a local *node_modules* folder in the project root.

~~~bash
npm install
~~~

## Run Dev

~~~bash
npm run dev
~~~

This task will [eslint](http://eslint.org/) your Javascript and also serve a local site on **localhost:8181**.  In addition it will watch and live reload changes to your application

You can edit the proxy options in `gulpfile.js` to call backend services.  Not configuring a backend will result in [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) errors when making external calls.

## Run Production

To do a production build that **eslints, concats, minifies and uglifies** Javascript and CSS, and then serves the site, run

~~~bash
npm run start
~~~

The generated site and assets will be in the **dist** folder.  To just do a production build and not server do

~~~bash
npm run build
~~~  

## Running on OpenShift<a name="openshift"></a>
Requires an accessible [OpenShift Container Platform](https://www.openshift.com/container-platform/index.html) install

For local development you can use [MiniShift](https://docs.openshift.org/latest/minishift/getting-started/installing.html)

### Create the New Application

Select `Add to Project -> Catalog -> JavaScript -> Node.js`.  Make sure the version is **6**
* Name **patternfly-seed**
* Git Repository URL **https://github.com/mechevarria/patternfly-seed**
* Click create

The default build will run a `npm install` command and then `npm run start`.  To run in development mode change the environment variable **NPM_RUN** to **dev**
