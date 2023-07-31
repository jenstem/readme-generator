// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return `![${license}](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else if (license === "Apache") {
        return `![${license}](https://img.shields.io/badge/license-${license}-green.svg)`;
    } else if (license === "NONE") {
        return ` `;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `${renderLicenseBadge(data.license)}
  # ${data.title}
  ##
  ## Description:
  ${data.description}
  ##
  ## Table of Contents
  + [Installation instructions](#instructions)
  + [Usage information](#usage)
  + [License](#license)
  + [Contribution guidelines](#contribution)
  + [Tests](#test)
  + [Questions](#contact)
  ##
  ## Instructions:
  ${data.instructions}
  ##
  ## Usage:
  ${data.usage}
  ##
  ## License
  ${data.license}
  ##
  <a id='contribution'></a>
  ## Contribution guidelines
  ${data.contribution}
  ##
  ## Test:
  ${data.test}
  ##
  <a id='contact'></a>
  ## Questions & Contact Information
  My GitHub Link: [${data.username}](https://github.com/${data.username})  <br>
  For questions regarding my Read Me Generator, please email me at ${data.email}

  `;
  }

module.exports = generateMarkdown;