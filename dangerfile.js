import { danger, message, warn, fail } from "danger";

import jest from "danger-plugin-jest";
import { codeCoverage } from "danger-plugin-code-coverage";

jest();
codeCoverage([
  {
    title: "# Coverage",
    ignoreCoveragePattern: [
      "dist",
      "test",
      "ignore",
      ".spec.",
      ".json",
      "config",
      "yml",
      "yaml",
      "dangerfile",
      "eslintrc",
    ],
    coverageFilesPath: "coverage/coverage-final.json",
  },
]);

// // Add a CHANGELOG entry for app changes
// const hasChangelog = danger.git.modified_files.includes("changelog.md");
// const isTrivial = (danger.github.pr.body + danger.github.pr.title).includes(
//   "#trivial"
// );
// if (!hasChangelog && !isTrivial) {
//   fail("Please add a changelog entry for your changes.");
// }

// const updateReadme = danger.git.modified_files.includes("README.md");
// const hasText =  (danger.github.pr.body).includes("Update Readme File again!");

// if( !updateReadme && !hasText ){
// fail("please add a updated readme file.");
// }
