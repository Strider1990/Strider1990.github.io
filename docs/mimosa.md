# Mimosa

## Introduction

### Role Played

1. System Architect
2. Infrastructure and CI/CD
3. Full Stack Engineer

## Design Considerations

### Priorities

1. Scalability
2. Cost
3. Ease of Use

### Infrastructure

Our first priority was to keep scalability high and costs low, especially in the early phases of the project without compromising too much on scalability and ease of use. As such, after narrowing down we have the following choices at a high level:

#### Version Control

**Platforms Considered**

1. Gitlab
2. Github
3. Bitbucket

**Choice**

Offerings across the three are relatively similar, with minor differences. Due to familiarity, our team decided to use Gitlab.

#### Deployment

**Platforms Considered**

1. AWS
2. GCP
3. Azure

**Services Considered**

1. Managed Containers
2. VMs
3. Managed Kubernetes services

**Choice**

We chose Managed Kubernetes services first, this allows us the ability to horizontally scale our services, as well as ensure our application deployment is relatively platform agnostic.

#### Management



### Services

### Frontend