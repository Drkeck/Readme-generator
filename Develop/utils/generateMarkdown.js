// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}
  ![license](http://img.shields.io/badge/license-${data.liscense}-blue.svg)

  ${data.description}


  ## table of contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Contact](#contact)


  ## Installation
    
  ${data.installation}


  ## Usage 

  ${data.usage}


  ## License


  This application is covered under [${data.liscense}](.LICENSE.txt)


  ## Credits

  ${data.credits}


  ## contribute

  ${data.contributing}


  ## tests

  ${data.tests}


  ## get in contact
  Contact [${data.github}](https://www.github.com/${data.github}) if you have any questions or concerns
  
  or you can contact us by [Email](${data.email})
`;
}

module.exports = generateMarkdown;
