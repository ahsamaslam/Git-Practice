module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'jira-ticket-id': [2, 'always'],
    'body-max-line-length': [2, 'always', 100], // Set max body length to 100 characters
  },
  plugins: [
    {
      rules: {
        'jira-ticket-id': ({ header }) => {
          const jiraTicketIdPattern = /[A-Z]+-\d+/;
          return [
            jiraTicketIdPattern.test(header),
            `Commit message must include a JIRA ticket ID (e.g., "ABC-123"). Your message: "${header}"`,
          ];
        },
      },
    },
  ],
};