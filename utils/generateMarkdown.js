// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ## Table of Contents

- ## [description](#description)
- ## [installation](#installation)
- ## [usage](#usage)
- ## [contribution](#contribution)
- ## [instructions](#instructions)
- ## [license](#license)
- ## [email](#email)


## description 
${data.description}

## installation
${data.installation}

## usage
${data.usage}

## contribution
${data.contribution}

## instructions
${data.instructions}

## License 
${renderLicenseBadge(data.license)}

## username
${data.username}

## email
${data.email}
`;
}

module.exports = generateMarkdown;
