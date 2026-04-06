const mappings = [
  {
    aws: 'AWS Lambda',
    ibm: 'IBM Cloud Code Engine',
    usage: 'Runs serverless API handlers, background jobs, and event-driven remediation actions.'
  },
  {
    aws: 'AWS CodePipeline / CodeBuild',
    ibm: 'IBM Cloud Continuous Delivery (Tekton Pipelines)',
    usage: 'Builds, tests, signs artifacts, and promotes releases through policy gates.'
  },
  {
    aws: 'AWS CodeCommit',
    ibm: 'Git Repos and Issue Tracking',
    usage: 'Stores source and agent-generated pull requests with linked work items.'
  },
  {
    aws: 'Amazon ECS / EKS',
    ibm: 'IBM Kubernetes Service / Red Hat OpenShift on IBM Cloud',
    usage: 'Deploys containerized microservices with progressive rollout strategies.'
  },
  {
    aws: 'Amazon CloudWatch',
    ibm: 'IBM Cloud Monitoring + Log Analysis',
    usage: 'Feeds real-time health metrics and logs into agent diagnostics.'
  },
  {
    aws: 'AWS X-Ray',
    ibm: 'IBM Instana Observability',
    usage: 'Provides distributed tracing context for root-cause and optimization suggestions.'
  },
  {
    aws: 'AWS IAM',
    ibm: 'IBM Cloud IAM',
    usage: 'Controls least-privilege execution and approval pathways for autonomous actions.'
  },
  {
    aws: 'AWS Secrets Manager',
    ibm: 'IBM Cloud Secrets Manager',
    usage: 'Supplies rotated secrets and certificates to runtime and pipeline tasks.'
  },
  {
    aws: 'AWS CloudFormation / CDK',
    ibm: 'IBM Cloud Schematics (Terraform)',
    usage: 'Creates governed infrastructure change plans that the agent can propose or apply.'
  },
  {
    aws: 'Amazon S3',
    ibm: 'IBM Cloud Object Storage',
    usage: 'Holds artifacts, model prompts, logs, and deployment backups.'
  },
  {
    aws: 'Amazon SNS / SQS',
    ibm: 'IBM Event Notifications / Event Streams',
    usage: 'Drives asynchronous event routing, approvals, and incident fan-out.'
  }
];

const tbody = document.getElementById('mapping-body');

mappings.forEach((entry) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${entry.aws}</td>
    <td><strong>${entry.ibm}</strong></td>
    <td>${entry.usage}</td>
  `;
  tbody.appendChild(row);
});
