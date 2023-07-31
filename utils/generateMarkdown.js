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
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;