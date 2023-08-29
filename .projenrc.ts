import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  typescriptVersion: '4.9.x',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-ec2-instance-running-scheduler',
  description: 'AWS EC2 Instance Running Scheduler',
  keywords: ['aws', 'cdk', 'aws-cdk', 'auto', 'running', 'scheduler', 'ec2', 'instance'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-ec2-instance-running-scheduler.git',
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarer.aws-ec2-instance-running-scheduler',
    module: 'gammarer.aws_ec2_instance_running_scheduler',
  },
  publishToMaven: {
    mavenGroupId: 'com.gammarer',
    javaPackage: 'com.gammarer.cdk.aws.ec2_instance_running_scheduler',
    mavenArtifactId: 'aws-ec2-instance-running-scheduler',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
});
project.synth();
