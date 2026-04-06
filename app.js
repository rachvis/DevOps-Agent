const integrations = [
  {
    capability: 'Serverless compute',
    ibm: 'IBM Cloud Code Engine',
    behavior: 'Executes automation handlers, deployment hooks, and event-driven remediation tasks.'
  },
  {
    capability: 'CI/CD orchestration',
    ibm: 'IBM Cloud Continuous Delivery (Tekton Pipelines)',
    behavior: 'Builds, tests, signs, and promotes releases through policy-gated environments.'
  },
  {
    capability: 'Source control and work items',
    ibm: 'Git Repos and Issue Tracking',
    behavior: 'Tracks agent-authored pull requests, linked issues, and release notes.'
  },
  {
    capability: 'Container platform',
    ibm: 'IBM Kubernetes Service / Red Hat OpenShift on IBM Cloud',
    behavior: 'Runs microservices and supports progressive release patterns across clusters.'
  },
  {
    capability: 'Metrics and logs',
    ibm: 'IBM Cloud Monitoring + Log Analysis',
    behavior: 'Streams runtime telemetry into incident correlation and health scoring.'
  },
  {
    capability: 'Application observability',
    ibm: 'IBM Instana Observability',
    behavior: 'Provides end-to-end tracing context for root-cause analysis and optimization plans.'
  },
  {
    capability: 'Identity and access',
    ibm: 'IBM Cloud IAM',
    behavior: 'Enforces least-privilege roles, change approvals, and execution boundaries.'
  },
  {
    capability: 'Secrets and certificates',
    ibm: 'IBM Cloud Secrets Manager',
    behavior: 'Delivers rotated secrets to pipelines and runtime workloads securely.'
  },
  {
    capability: 'Infrastructure automation',
    ibm: 'IBM Cloud Schematics (Terraform)',
    behavior: 'Generates governed infrastructure plans with drift detection and rollback paths.'
  },
  {
    capability: 'Artifact and backup storage',
    ibm: 'IBM Cloud Object Storage',
    behavior: 'Stores build artifacts, deployment bundles, diagnostic data, and audit snapshots.'
  },
  {
    capability: 'Eventing and notifications',
    ibm: 'IBM Event Notifications / Event Streams',
    behavior: 'Coordinates asynchronous approvals, deployment events, and incident fan-out.'
  }
];

const tbody = document.getElementById('mapping-body');

integrations.forEach((entry) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${entry.capability}</td>
    <td><strong>${entry.ibm}</strong></td>
    <td>${entry.behavior}</td>
  `;
  tbody.appendChild(row);
});
