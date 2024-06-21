// critical_issues.js

const criticalIssues = [
  {
    "ruleId": "critical-issue-1",
    "level": "critical",
    "message": "Critical issue 1",
    "locations": [
      {
        "physicalLocation": {
          "artifactLocation": {
            "uri": "file:///path/to/file.js"
          },
          "region": {
            "startLine": 1,
            "startColumn": 1,
            "endLine": 1,
            "endColumn": 10
          }
        }
      }
    ]
  },
  {
    "ruleId": "critical-issue-2",
    "level": "critical",
    "message": "Critical issue 2",
    "locations": [
      {
        "physicalLocation": {
          "artifactLocation": {
            "uri": "file:///path/to/file.js"
          },
          "region": {
            "startLine": 2,
            "startColumn": 1,
            "endLine": 2,
            "endColumn": 10
          }
        }
      }
    ]
  }
];

console.log("Critical issues found:");
criticalIssues.forEach(issue => {
  console.log(`  - ${issue.message} (${issue.ruleId})`);
});
