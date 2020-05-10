// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

  ${data.description}


  ## table of contents
  
  * [Installation]()
  * [Usage]()
  * [Credits]()
  * [Liscense]()
  * [Tests]()


  ## Installation
    
  ${data.installation}


  ## Usage 

  ${data.usage}


  ## License

  ${data.liscense}


  ## Credits

  ${data.contributing}


  ## tests

  ${data.tests}


  ## get in contact
  Contact [${data.github}](https://www.github.com/${data.github}) if you have any questions or concerns
  
  or you can contact us by [Email](${data.email})
`;
}

module.exports = generateMarkdown;
