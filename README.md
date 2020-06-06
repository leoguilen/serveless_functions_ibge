<h1 align="center">
    IBGE Serveless Functions
</h1>



<div>
    <h4 align="center">
    This project is published in <img height="50" 			src="https://res.cloudinary.com/leoguilen/image/upload/v1591468991/Img_Readme/netlify_cdqt0n.png"><br/>
    URL Base: https://ibgefunctions.netlify.app/.netlify
	</h4>
    <h5 align="center">
        <li><a href="https://ibgefunctions.netlify.app/.netlify/functions/estados" >/functions/estados</a></li>
        <li><a href="https://ibgefunctions.netlify.app/.netlify/functions/cidades?uf=SP">/functions/cidades?uf=SP</a></li>
    </h5>
</div>



[![Netlify Status](https://api.netlify.com/api/v1/badges/539be309-cc88-467f-8344-d740c5faae6f/deploy-status)](https://app.netlify.com/sites/ibgefunctions/deploys)

<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/leoguilen/serveless_functions_ibge.svg">	

<a href="https://github.com/leoguilen/serveless_functions_ibge/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leoguilen/serveless_functions_ibge.svg"> </a>



## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

- ### **Dev Mode**

```bash
# Clone this repository
$ git clone https://github.com/leoguilen/serveless_functions_ibge.git

# Install dependencies
$ npm install

# Run the app
$ npm start
```

You can test in browser using url http://localhost:9000. Routes to functions: 

##### **/functions/estados** - *Return all states of brazil* 

```json
// http://localhost:9000/estados

[
  {...},
  {
    "id": 35,
    "sigla": "SP",
    "nome": "São Paulo",
    "regiao": {
      "id": 3,
      "sigla": "SE",
      "nome": "Sudeste"
    }
 }
]
```

**/functions/cidades?uf={uf do estado}** ***- Return all cities in specific state***

```json
// http://localhost:9000/cidades?uf=SP

[
  {...},
  {
    "nome": "Adamantina"
  },
]
```

---

Made with ♥ by Leonardo Guilen :wave: [Get in touch!](https://www.linkedin.com/in/leonardo-guilen/)

[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[vc]: https://code.visualstudio.com/