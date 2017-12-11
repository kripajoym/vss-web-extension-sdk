// Type definitions for Microsoft Visual Studio Services v127.20171208.1643
// Project: https://www.visualstudio.com/integrate/extensions/overview
// Definitions by: Microsoft <vsointegration@microsoft.com>

/// <reference types='knockout' />
/// <reference types='jquery' />
/// <reference types='jqueryui' />
/// <reference types='q' />
/// <reference types='requirejs' />
/// <reference types='react' />
/// <reference types='mousetrap' />
/// <reference path='vss.d.ts' />
declare module "TFS/Build/Contracts" {
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import TFS_DistributedTask_Common_Contracts = require("TFS/DistributedTaskCommon/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
/**
 * Represents a queue for running builds.
 */
export interface AgentPoolQueue {
    _links: any;
    /**
     * The ID of the queue.
     */
    id: number;
    /**
     * The name of the queue.
     */
    name: string;
    /**
     * The pool used by this queue.
     */
    pool: TaskAgentPoolReference;
    /**
     * The full http link to the resource.
     */
    url: string;
}
/**
 * Represents a reference to an agent queue.
 */
export interface AgentPoolQueueReference extends ResourceReference {
    /**
     * The ID of the queue.
     */
    id: number;
}
/**
 * Describes how a phase should run against an agent queue.
 */
export interface AgentPoolQueueTarget extends PhaseTarget {
    /**
     * Enables scripts and other processes launched while executing phase to access the OAuth token
     */
    allowScriptsAuthAccessOption: boolean;
    demands: any[];
    /**
     * The execution options.
     */
    executionOptions: AgentTargetExecutionOptions;
    /**
     * The queue.
     */
    queue: AgentPoolQueue;
}
export enum AgentStatus {
    /**
     * Indicates that the build agent cannot be contacted.
     */
    Unavailable = 0,
    /**
     * Indicates that the build agent is currently available.
     */
    Available = 1,
    /**
     * Indicates that the build agent has taken itself offline.
     */
    Offline = 2,
}
/**
 * Additional options for running phases against an agent queue.
 */
export interface AgentTargetExecutionOptions {
    /**
     * Indicates the type of execution options.
     */
    type: number;
}
export interface ArtifactResource {
    _links: any;
    /**
     * Type-specific data about the artifact.
     */
    data: string;
    /**
     * A link to download the resource.
     */
    downloadUrl: string;
    /**
     * Type-specific properties of the artifact.
     */
    properties: {
        [key: string]: string;
    };
    /**
     * The type of the resource: File container, version control folder, UNC path, etc.
     */
    type: string;
    /**
     * The full http link to the resource.
     */
    url: string;
}
export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
}
/**
 * Data representation of a build.
 */
export interface Build {
    _links: any;
    /**
     * The build number/name of the build.
     */
    buildNumber: string;
    /**
     * The build number revision.
     */
    buildNumberRevision: number;
    /**
     * The build controller. This is only set if the definition type is Xaml.
     */
    controller: BuildController;
    /**
     * The definition associated with the build.
     */
    definition: DefinitionReference;
    /**
     * Indicates whether the build has been deleted.
     */
    deleted: boolean;
    /**
     * The identity of the process or person that deleted the build.
     */
    deletedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The date the build was deleted.
     */
    deletedDate: Date;
    /**
     * The description of how the build was deleted.
     */
    deletedReason: string;
    /**
     * A list of demands that represents the agent capabilities required by this build.
     */
    demands: any[];
    /**
     * The time that the build was completed.
     */
    finishTime: Date;
    /**
     * The ID of the build.
     */
    id: number;
    /**
     * Indicates whether the build should be skipped by retention policies.
     */
    keepForever: boolean;
    /**
     * The identity representing the process or person that last changed the build.
     */
    lastChangedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The date the build was last changed.
     */
    lastChangedDate: Date;
    /**
     * Information about the build logs.
     */
    logs: BuildLogReference;
    /**
     * The orchestration plan for the build.
     */
    orchestrationPlan: TaskOrchestrationPlanReference;
    /**
     * The parameters for the build.
     */
    parameters: string;
    /**
     * Orchestration plans associated with the build (build, cleanup)
     */
    plans: TaskOrchestrationPlanReference[];
    /**
     * The build's priority.
     */
    priority: QueuePriority;
    /**
     * The team project.
     */
    project: TFS_Core_Contracts.TeamProjectReference;
    properties: any;
    /**
     * The quality of the xaml build (good, bad, etc.)
     */
    quality: string;
    /**
     * The queue. This is only set if the definition type is Build.
     */
    queue: AgentPoolQueue;
    /**
     * Additional options for queueing the build.
     */
    queueOptions: QueueOptions;
    /**
     * The current position of the build in the queue.
     */
    queuePosition: number;
    /**
     * The time that the build was queued.
     */
    queueTime: Date;
    /**
     * The reason that the build was created.
     */
    reason: BuildReason;
    /**
     * The repository.
     */
    repository: BuildRepository;
    /**
     * The identity that queued the build.
     */
    requestedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The identity on whose behalf the build was queued.
     */
    requestedFor: VSS_Common_Contracts.IdentityRef;
    /**
     * The build result.
     */
    result: BuildResult;
    /**
     * Indicates whether the build is retained by a release.
     */
    retainedByRelease: boolean;
    /**
     * The source branch.
     */
    sourceBranch: string;
    /**
     * The source version.
     */
    sourceVersion: string;
    /**
     * The time that the build was started.
     */
    startTime: Date;
    /**
     * The status of the build.
     */
    status: BuildStatus;
    tags: string[];
    /**
     * Sourceprovider-specific information about what triggered the build
     */
    triggerInfo: {
        [key: string]: string;
    };
    /**
     * The URI of the build.
     */
    uri: string;
    /**
     * The REST URL of the build.
     */
    url: string;
    validationResults: BuildRequestValidationResult[];
}
export interface BuildAgent {
    buildDirectory: string;
    controller: XamlBuildControllerReference;
    createdDate: Date;
    description: string;
    enabled: boolean;
    id: number;
    messageQueueUrl: string;
    name: string;
    reservedForBuild: string;
    server: XamlBuildServerReference;
    status: AgentStatus;
    statusMessage: string;
    updatedDate: Date;
    uri: string;
    url: string;
}
export interface BuildAgentReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
/**
 * Represents an artifact produced by a build.
 */
export interface BuildArtifact {
    /**
     * The artifact ID.
     */
    id: number;
    /**
     * The name of the artifact.
     */
    name: string;
    /**
     * The actual resource.
     */
    resource: ArtifactResource;
}
export interface BuildArtifactAddedEvent extends BuildUpdatedEvent {
    artifact: BuildArtifact;
}
/**
 * Represents the desired scope of authorization for a build.
 */
export enum BuildAuthorizationScope {
    /**
     * The identity used should have build service account permissions scoped to the project collection. This is useful when resources for a single build are spread across multiple projects.
     */
    ProjectCollection = 1,
    /**
     * The identity used should have build service account permissions scoped to the project in which the build definition resides. This is useful for isolation of build jobs to a particular team project to avoid any unintentional escalation of privilege attacks during a build.
     */
    Project = 2,
}
/**
 * Represents a build badge.
 */
export interface BuildBadge {
    /**
     * The ID of the build represented by this badge.
     */
    buildId: number;
    /**
     * A link to the SVG resource.
     */
    imageUrl: string;
}
export interface BuildChangesCalculatedEvent extends BuildUpdatedEvent {
    changes: Change[];
}
export interface BuildCompletedEvent extends BuildUpdatedEvent {
    /**
     * errors associated with a build used for build notifications
     */
    buildErrors: BuildRequestValidationResult[];
    /**
     * warnings associated with a build used for build notifications
     */
    buildWarnings: BuildRequestValidationResult[];
    /**
     * Changes associated with a build used for build notifications
     */
    changes: Change[];
}
export interface BuildController extends XamlBuildControllerReference {
    _links: any;
    /**
     * The date the controller was created.
     */
    createdDate: Date;
    /**
     * The description of the controller.
     */
    description: string;
    /**
     * Indicates whether the controller is enabled.
     */
    enabled: boolean;
    /**
     * The status of the controller.
     */
    status: ControllerStatus;
    /**
     * The date the controller was last updated.
     */
    updatedDate: Date;
    /**
     * The controller's URI.
     */
    uri: string;
}
/**
 * Represents a build definition.
 */
export interface BuildDefinition extends BuildDefinitionReference {
    /**
     * Indicates whether badges are enabled for this definition.
     */
    badgeEnabled: boolean;
    /**
     * The build number format.
     */
    buildNumberFormat: string;
    /**
     * A save-time comment for the definition.
     */
    comment: string;
    demands: any[];
    /**
     * The description.
     */
    description: string;
    /**
     * The drop location for the definition.
     */
    dropLocation: string;
    /**
     * The job authorization scope for builds queued against this definition.
     */
    jobAuthorizationScope: BuildAuthorizationScope;
    /**
     * The job cancel timeout (in minutes) for builds cancelled by user for this definition.
     */
    jobCancelTimeoutInMinutes: number;
    /**
     * The job execution timeout (in minutes) for builds queued against this definition.
     */
    jobTimeoutInMinutes: number;
    options: BuildOption[];
    /**
     * The build process.
     */
    process: BuildProcess;
    /**
     * The process parameters for this definition.
     */
    processParameters: TFS_DistributedTask_Common_Contracts.ProcessParameters;
    properties: any;
    /**
     * The repository.
     */
    repository: BuildRepository;
    retentionRules: RetentionPolicy[];
    tags: string[];
    triggers: BuildTrigger[];
    variableGroups: VariableGroup[];
    variables: {
        [key: string]: BuildDefinitionVariable;
    };
}
/**
 * For back-compat with extensions that use the old Steps format instead of Process and Phases
 */
export interface BuildDefinition3_2 extends BuildDefinitionReference3_2 {
    /**
     * Indicates whether badges are enabled for this definition
     */
    badgeEnabled: boolean;
    build: BuildDefinitionStep[];
    /**
     * The build number format
     */
    buildNumberFormat: string;
    /**
     * The comment entered when saving the definition
     */
    comment: string;
    demands: any[];
    /**
     * The description
     */
    description: string;
    /**
     * The drop location for the definition
     */
    dropLocation: string;
    /**
     * The job authorization scope for builds which are queued against this definition
     */
    jobAuthorizationScope: BuildAuthorizationScope;
    /**
     * The job cancel timeout in minutes for builds which are cancelled by user for this definition
     */
    jobCancelTimeoutInMinutes: number;
    /**
     * The job execution timeout in minutes for builds which are queued against this definition
     */
    jobTimeoutInMinutes: number;
    latestBuild: Build;
    latestCompletedBuild: Build;
    options: BuildOption[];
    /**
     * Process Parameters
     */
    processParameters: TFS_DistributedTask_Common_Contracts.ProcessParameters;
    properties: any;
    /**
     * The repository
     */
    repository: BuildRepository;
    retentionRules: RetentionPolicy[];
    tags: string[];
    triggers: BuildTrigger[];
    variables: {
        [key: string]: BuildDefinitionVariable;
    };
}
export interface BuildDefinitionChangedEvent {
    changeType: AuditAction;
    definition: BuildDefinition;
}
export interface BuildDefinitionChangingEvent {
    changeType: AuditAction;
    newDefinition: BuildDefinition;
    originalDefinition: BuildDefinition;
}
/**
 * Represents a reference to a build definition.
 */
export interface BuildDefinitionReference extends DefinitionReference {
    _links: any;
    /**
     * The author of the definition.
     */
    authoredBy: VSS_Common_Contracts.IdentityRef;
    /**
     * A reference to the definition that this definition is a draft of, if this is a draft definition.
     */
    draftOf: DefinitionReference;
    /**
     * The list of drafts associated with this definition, if this is not a draft definition.
     */
    drafts: DefinitionReference[];
    latestBuild: Build;
    latestCompletedBuild: Build;
    metrics: BuildMetric[];
    /**
     * The quality of the definition document (draft, etc.)
     */
    quality: DefinitionQuality;
    /**
     * The default queue for builds run against this definition.
     */
    queue: AgentPoolQueue;
}
/**
 * For back-compat with extensions that use the old Steps format instead of Process and Phases
 */
export interface BuildDefinitionReference3_2 extends DefinitionReference {
    _links: any;
    /**
     * The author of the definition.
     */
    authoredBy: VSS_Common_Contracts.IdentityRef;
    /**
     * A reference to the definition that this definition is a draft of, if this is a draft definition.
     */
    draftOf: DefinitionReference;
    /**
     * The list of drafts associated with this definition, if this is not a draft definition.
     */
    drafts: DefinitionReference[];
    metrics: BuildMetric[];
    /**
     * The quality of the definition document (draft, etc.)
     */
    quality: DefinitionQuality;
    /**
     * The default queue for builds run against this definition.
     */
    queue: AgentPoolQueue;
}
/**
 * Represents a revision of a build definition.
 */
export interface BuildDefinitionRevision {
    /**
     * The identity of the person or process that changed the definition.
     */
    changedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The date and time that the definition was changed.
     */
    changedDate: Date;
    /**
     * The change type (add, edit, delete).
     */
    changeType: AuditAction;
    /**
     * The comment associated with the change.
     */
    comment: string;
    /**
     * A link to the definition at this revision.
     */
    definitionUrl: string;
    /**
     * The name of the definition.
     */
    name: string;
    /**
     * The revision number.
     */
    revision: number;
}
export interface BuildDefinitionSourceProvider {
    /**
     * Uri of the associated definition
     */
    definitionUri: string;
    /**
     * fields associated with this build definition
     */
    fields: {
        [key: string]: string;
    };
    /**
     * Id of this source provider
     */
    id: number;
    /**
     * The lst time this source provider was modified
     */
    lastModified: Date;
    /**
     * Name of the source provider
     */
    name: string;
    /**
     * Which trigger types are supported by this definition source provider
     */
    supportedTriggerTypes: DefinitionTriggerType;
}
/**
 * Represents a step in a build phase.
 */
export interface BuildDefinitionStep {
    /**
     * Indicates whether this step should run even if a previous step fails.
     */
    alwaysRun: boolean;
    /**
     * A condition that determines whether this step should run.
     */
    condition: string;
    /**
     * Indicates whether the phase should continue even if this step fails.
     */
    continueOnError: boolean;
    /**
     * The display name for this step.
     */
    displayName: string;
    /**
     * Indicates whether the step is enabled.
     */
    enabled: boolean;
    environment: {
        [key: string]: string;
    };
    inputs: {
        [key: string]: string;
    };
    /**
     * The reference name for this step.
     */
    refName: string;
    /**
     * The task associated with this step.
     */
    task: TaskDefinitionReference;
    /**
     * The time, in minutes, that this step is allowed to run.
     */
    timeoutInMinutes: number;
}
/**
 * Represents a template from which new build definitions can be created.
 */
export interface BuildDefinitionTemplate {
    /**
     * Indicates whether the template can be deleted.
     */
    canDelete: boolean;
    /**
     * The template category.
     */
    category: string;
    /**
     * A description of the template.
     */
    description: string;
    icons: {
        [key: string]: string;
    };
    /**
     * The ID of the task whose icon is used when showing this template in the UI.
     */
    iconTaskId: string;
    /**
     * The ID of the template.
     */
    id: string;
    /**
     * The name of the template.
     */
    name: string;
    /**
     * The actual template.
     */
    template: BuildDefinition;
}
/**
 * For back-compat with extensions that use the old Steps format instead of Process and Phases
 */
export interface BuildDefinitionTemplate3_2 {
    canDelete: boolean;
    category: string;
    description: string;
    icons: {
        [key: string]: string;
    };
    iconTaskId: string;
    id: string;
    name: string;
    template: BuildDefinition3_2;
}
/**
 * Represents a variable used by a build definition.
 */
export interface BuildDefinitionVariable {
    /**
     * Indicates whether the value can be set at queue time.
     */
    allowOverride: boolean;
    /**
     * Indicates whether the variable's value is a secret.
     */
    isSecret: boolean;
    /**
     * The value of the variable.
     */
    value: string;
}
export interface BuildDeletedEvent extends RealtimeBuildEvent {
    build: Build;
}
export interface BuildDeployment {
    deployment: BuildSummary;
    sourceBuild: XamlBuildReference;
}
export interface BuildDestroyedEvent extends RealtimeBuildEvent {
    build: Build;
}
/**
 * Represents a build log.
 */
export interface BuildLog extends BuildLogReference {
    /**
     * The date and time the log was created.
     */
    createdOn: Date;
    /**
     * The date and time the log was last changed.
     */
    lastChangedOn: Date;
    /**
     * The number of lines in the log.
     */
    lineCount: number;
}
/**
 * Represents a reference to a build log.
 */
export interface BuildLogReference {
    /**
     * The ID of the log.
     */
    id: number;
    /**
     * The type of the log location.
     */
    type: string;
    /**
     * A full link to the log resource.
     */
    url: string;
}
/**
 * Represents metadata about builds in the system.
 */
export interface BuildMetric {
    /**
     * The date for the scope.
     */
    date: Date;
    /**
     * The value.
     */
    intValue: number;
    /**
     * The name of the metric.
     */
    name: string;
    /**
     * The scope.
     */
    scope: string;
}
/**
 * Represents the application of an optional behavior to a build definition.
 */
export interface BuildOption {
    /**
     * A reference to the build option.
     */
    definition: BuildOptionDefinitionReference;
    /**
     * Indicates whether the behavior is enabled.
     */
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
}
/**
 * Represents an optional behavior that can be applied to a build definition.
 */
export interface BuildOptionDefinition extends BuildOptionDefinitionReference {
    /**
     * The description.
     */
    description: string;
    /**
     * The list of input groups defined for the build option.
     */
    groups: BuildOptionGroupDefinition[];
    /**
     * The list of inputs defined for the build option.
     */
    inputs: BuildOptionInputDefinition[];
    /**
     * The name of the build option.
     */
    name: string;
    /**
     * A value that indicates the relative order in which the behavior should be applied.
     */
    ordinal: number;
}
/**
 * Represents a reference to a build option definition.
 */
export interface BuildOptionDefinitionReference {
    /**
     * The ID of the referenced build option.
     */
    id: string;
}
/**
 * Represents a group of inputs for a build option.
 */
export interface BuildOptionGroupDefinition {
    /**
     * The name of the group to display in the UI.
     */
    displayName: string;
    /**
     * Indicates whether the group is initially displayed as expanded in the UI.
     */
    isExpanded: boolean;
    /**
     * The internal name of the group.
     */
    name: string;
}
/**
 * Represents an input for a build option.
 */
export interface BuildOptionInputDefinition {
    /**
     * The default value.
     */
    defaultValue: string;
    /**
     * The name of the input group that this input belongs to.
     */
    groupName: string;
    help: {
        [key: string]: string;
    };
    /**
     * The label for the input.
     */
    label: string;
    /**
     * The name of the input.
     */
    name: string;
    options: {
        [key: string]: string;
    };
    /**
     * Indicates whether the input is required to have a value.
     */
    required: boolean;
    /**
     * Indicates the type of the input value.
     */
    type: BuildOptionInputType;
    /**
     * The rule that is applied to determine whether the input is visible in the UI.
     */
    visibleRule: string;
}
export enum BuildOptionInputType {
    String = 0,
    Boolean = 1,
    StringList = 2,
    Radio = 3,
    PickList = 4,
    MultiLine = 5,
    BranchFilter = 6,
}
export enum BuildPhaseStatus {
    /**
     * The state is not known.
     */
    Unknown = 0,
    /**
     * The build phase completed unsuccessfully.
     */
    Failed = 1,
    /**
     * The build phase completed successfully.
     */
    Succeeded = 2,
}
export interface BuildPollingSummaryEvent {
}
/**
 * Represents a build process.
 */
export interface BuildProcess {
    /**
     * The type of the process.
     */
    type: number;
}
/**
 * Represents resources used by a build process.
 */
export interface BuildProcessResources {
    endpoints: ServiceEndpointReference[];
    files: SecureFileReference[];
    queues: AgentPoolQueueReference[];
}
export interface BuildProcessTemplate {
    description: string;
    fileExists: boolean;
    id: number;
    parameters: string;
    serverPath: string;
    supportedReasons: BuildReason;
    teamProject: string;
    templateType: ProcessTemplateType;
    url: string;
    version: string;
}
/**
 * Specifies the desired ordering of builds.
 */
export enum BuildQueryOrder {
    /**
     * Order by finish time ascending.
     */
    FinishTimeAscending = 2,
    /**
     * Order by finish time descending.
     */
    FinishTimeDescending = 3,
    /**
     * Order by finish time descending.
     */
    QueueTimeDescending = 4,
    /**
     * Order by finish time descending.
     */
    QueueTimeAscending = 5,
    /**
     * Order by finish time descending.
     */
    StartTimeDescending = 6,
    /**
     * Order by finish time descending.
     */
    StartTimeAscending = 7,
}
export interface BuildQueuedEvent extends BuildUpdatedEvent {
}
export enum BuildReason {
    /**
     * No reason. This value should not be used.
     */
    None = 0,
    /**
     * The build was started manually.
     */
    Manual = 1,
    /**
     * The build was started for the trigger TriggerType.ContinuousIntegration.
     */
    IndividualCI = 2,
    /**
     * The build was started for the trigger TriggerType.BatchedContinuousIntegration.
     */
    BatchedCI = 4,
    /**
     * The build was started for the trigger TriggerType.Schedule.
     */
    Schedule = 8,
    /**
     * The build was created by a user.
     */
    UserCreated = 32,
    /**
     * The build was started manually for private validation.
     */
    ValidateShelveset = 64,
    /**
     * The build was started for the trigger ContinuousIntegrationType.Gated.
     */
    CheckInShelveset = 128,
    /**
     * The build was started by a pull request. Added in resource version 3.
     */
    PullRequest = 256,
    /**
     * The build was triggered for retention policy purposes.
     */
    Triggered = 431,
    /**
     * All reasons.
     */
    All = 495,
}
/**
 * Represents a reference to a build.
 */
export interface BuildReference {
    _links: any;
    /**
     * The build number.
     */
    buildNumber: string;
    /**
     * Indicates whether the build has been deleted.
     */
    deleted: boolean;
    /**
     * The time that the build was completed.
     */
    finishTime: Date;
    /**
     * The ID of the build.
     */
    id: number;
    /**
     * The time that the build was queued.
     */
    queueTime: Date;
    /**
     * The identity on whose behalf the build was queued.
     */
    requestedFor: VSS_Common_Contracts.IdentityRef;
    /**
     * The build result.
     */
    result: BuildResult;
    /**
     * The time that the build was started.
     */
    startTime: Date;
    /**
     * The build status.
     */
    status: BuildStatus;
}
/**
 * Represents information about a build report.
 */
export interface BuildReportMetadata {
    /**
     * The Id of the build.
     */
    buildId: number;
    /**
     * The content of the report.
     */
    content: string;
    /**
     * The type of the report.
     */
    type: string;
}
/**
 * Represents a repository used by a build definition.
 */
export interface BuildRepository {
    /**
     * Indicates whether to checkout submodules.
     */
    checkoutSubmodules: boolean;
    /**
     * Indicates whether to clean the target folder when getting code from the repository.
     */
    clean: string;
    /**
     * The name of the default branch.
     */
    defaultBranch: string;
    /**
     * The ID of the repository.
     */
    id: string;
    /**
     * The friendly name of the repository.
     */
    name: string;
    properties: {
        [key: string]: string;
    };
    /**
     * The root folder.
     */
    rootFolder: string;
    /**
     * The type of the repository.
     */
    type: string;
    /**
     * The URL of the repository.
     */
    url: string;
}
/**
 * Represents the result of validating a build request.
 */
export interface BuildRequestValidationResult {
    /**
     * The message associated with the result.
     */
    message: string;
    /**
     * The result.
     */
    result: ValidationResult;
}
/**
 * Represents information about resources used by builds in the system.
 */
export interface BuildResourceUsage {
    /**
     * The number of build agents.
     */
    distributedTaskAgents: number;
    /**
     * The number of paid private agent slots.
     */
    paidPrivateAgentSlots: number;
    /**
     * The total usage.
     */
    totalUsage: number;
    /**
     * The number of XAML controllers.
     */
    xamlControllers: number;
}
/**
 * This is not a Flags enum because we don't want to set multiple statuses on a build. However, when adding values, please stick to powers of 2 as if it were a Flags enum This will ensure that things that key off multiple result types (like labelling sources) continue to work
 */
export enum BuildResult {
    /**
     * No result
     */
    None = 0,
    /**
     * The build completed successfully.
     */
    Succeeded = 2,
    /**
     * The build completed compilation successfully but had other errors.
     */
    PartiallySucceeded = 4,
    /**
     * The build completed unsuccessfully.
     */
    Failed = 8,
    /**
     * The build was canceled before starting.
     */
    Canceled = 32,
}
export interface BuildServer {
    agents: BuildAgentReference[];
    controller: XamlBuildControllerReference;
    id: number;
    isVirtual: boolean;
    messageQueueUrl: string;
    name: string;
    requireClientCertificates: boolean;
    status: ServiceHostStatus;
    statusChangedDate: Date;
    uri: string;
    url: string;
    version: number;
}
/**
 * Represents system-wide build settings.
 */
export interface BuildSettings {
    /**
     * The number of days to keep records of deleted builds.
     */
    daysToKeepDeletedBuildsBeforeDestroy: number;
    /**
     * The default retention policy.
     */
    defaultRetentionPolicy: RetentionPolicy;
    /**
     * The maximum retention policy.
     */
    maximumRetentionPolicy: RetentionPolicy;
}
export interface BuildStartedEvent extends BuildUpdatedEvent {
}
export enum BuildStatus {
    /**
     * No status.
     */
    None = 0,
    /**
     * The build is currently in progress.
     */
    InProgress = 1,
    /**
     * The build has completed.
     */
    Completed = 2,
    /**
     * The build is cancelling
     */
    Cancelling = 4,
    /**
     * The build is inactive in the queue.
     */
    Postponed = 8,
    /**
     * The build has not yet started.
     */
    NotStarted = 32,
    /**
     * All status.
     */
    All = 47,
}
export interface BuildSummary {
    build: XamlBuildReference;
    finishTime: Date;
    keepForever: boolean;
    quality: string;
    reason: BuildReason;
    requestedFor: VSS_Common_Contracts.IdentityRef;
    startTime: Date;
    status: BuildStatus;
}
/**
 * Represents a trigger for a buld definition.
 */
export interface BuildTrigger {
    /**
     * The type of the trigger.
     */
    triggerType: DefinitionTriggerType;
}
export interface BuildUpdatedEvent extends RealtimeBuildEvent {
    build: Build;
}
/**
 * Represents a workspace mapping.
 */
export interface BuildWorkspace {
    mappings: MappingDetails[];
}
/**
 * Represents a change associated with a build.
 */
export interface Change {
    /**
     * The author of the change.
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * The location of a user-friendly representation of the resource.
     */
    displayUri: string;
    /**
     * The identifier for the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset ID.
     */
    id: string;
    /**
     * The location of the full representation of the resource.
     */
    location: string;
    /**
     * The description of the change. This might be a commit message or changeset description.
     */
    message: string;
    /**
     * Indicates whether the message was truncated.
     */
    messageTruncated: boolean;
    /**
     * The person or process that pushed the change.
     */
    pusher: string;
    /**
     * The timestamp for the change.
     */
    timestamp: Date;
    /**
     * The type of change. "commit", "changeset", etc.
     */
    type: string;
}
export interface ConsoleLogEvent extends RealtimeBuildEvent {
    lines: string[];
    timelineId: string;
    timelineRecordId: string;
}
export interface ContinuousDeploymentDefinition {
    /**
     * The connected service associated with the continuous deployment
     */
    connectedService: TFS_Core_Contracts.WebApiConnectedServiceRef;
    /**
     * The definition associated with the continuous deployment
     */
    definition: XamlDefinitionReference;
    gitBranch: string;
    hostedServiceName: string;
    project: TFS_Core_Contracts.TeamProjectReference;
    repositoryId: string;
    storageAccountName: string;
    subscriptionId: string;
    website: string;
    webspace: string;
}
/**
 * Represents a continuous integration (CI) trigger.
 */
export interface ContinuousIntegrationTrigger extends BuildTrigger {
    /**
     * Indicates whether changes should be batched while another CI build is running.
     */
    batchChanges: boolean;
    branchFilters: string[];
    /**
     * The maximum number of simultaneous CI builds that will run per branch.
     */
    maxConcurrentBuildsPerBranch: number;
    pathFilters: string[];
    /**
     * The polling interval, in seconds.
     */
    pollingInterval: number;
    /**
     * The ID of the job used to poll an external repository.
     */
    pollingJobId: string;
}
export enum ControllerStatus {
    /**
     * Indicates that the build controller cannot be contacted.
     */
    Unavailable = 0,
    /**
     * Indicates that the build controller is currently available.
     */
    Available = 1,
    /**
     * Indicates that the build controller has taken itself offline.
     */
    Offline = 2,
}
export enum DefinitionQuality {
    Definition = 1,
    Draft = 2,
}
/**
 * Specifies the desired ordering of definitions.
 */
export enum DefinitionQueryOrder {
    /**
     * No order
     */
    None = 0,
    /**
     * Order by created on/last modified time ascending.
     */
    LastModifiedAscending = 1,
    /**
     * Order by created on/last modified time descending.
     */
    LastModifiedDescending = 2,
    /**
     * Order by definition name ascending.
     */
    DefinitionNameAscending = 3,
    /**
     * Order by definition name descending.
     */
    DefinitionNameDescending = 4,
}
export enum DefinitionQueueStatus {
    /**
     * When enabled the definition queue allows builds to be queued by users, the system will queue scheduled, gated and continuous integration builds, and the queued builds will be started by the system.
     */
    Enabled = 0,
    /**
     * When paused the definition queue allows builds to be queued by users and the system will queue scheduled, gated and continuous integration builds. Builds in the queue will not be started by the system.
     */
    Paused = 1,
    /**
     * When disabled the definition queue will not allow builds to be queued by users and the system will not queue scheduled, gated or continuous integration builds. Builds already in the queue will not be started by the system.
     */
    Disabled = 2,
}
/**
 * Represents a reference to a definition.
 */
export interface DefinitionReference {
    /**
     * The date the definition was created.
     */
    createdDate: Date;
    /**
     * The ID of the referenced definition.
     */
    id: number;
    /**
     * The name of the referenced definition.
     */
    name: string;
    /**
     * The folder path of the definition.
     */
    path: string;
    /**
     * A reference to the project.
     */
    project: TFS_Core_Contracts.TeamProjectReference;
    /**
     * A value that indicates whether builds can be queued against this definition.
     */
    queueStatus: DefinitionQueueStatus;
    /**
     * The definition revision number.
     */
    revision: number;
    /**
     * The type of the definition.
     */
    type: DefinitionType;
    /**
     * The definition's URI.
     */
    uri: string;
    /**
     * The REST URL of the definition.
     */
    url: string;
}
export enum DefinitionTriggerType {
    /**
     * Manual builds only.
     */
    None = 1,
    /**
     * A build should be started for each changeset.
     */
    ContinuousIntegration = 2,
    /**
     * A build should be started for multiple changesets at a time at a specified interval.
     */
    BatchedContinuousIntegration = 4,
    /**
     * A build should be started on a specified schedule whether or not changesets exist.
     */
    Schedule = 8,
    /**
     * A validation build should be started for each check-in.
     */
    GatedCheckIn = 16,
    /**
     * A validation build should be started for each batch of check-ins.
     */
    BatchedGatedCheckIn = 32,
    /**
     * A build should be triggered when a GitHub pull request is created or updated. Added in resource version 3
     */
    PullRequest = 64,
    /**
     * All types.
     */
    All = 127,
}
export enum DefinitionType {
    Xaml = 1,
    Build = 2,
}
export enum DeleteOptions {
    /**
     * No data should be deleted. This value should not be used.
     */
    None = 0,
    /**
     * The drop location should be deleted.
     */
    DropLocation = 1,
    /**
     * The test results should be deleted.
     */
    TestResults = 2,
    /**
     * The version control label should be deleted.
     */
    Label = 4,
    /**
     * The build should be deleted.
     */
    Details = 8,
    /**
     * Published symbols should be deleted.
     */
    Symbols = 16,
    /**
     * All data should be deleted.
     */
    All = 31,
}
/**
 * Represents a dependency.
 */
export interface Dependency {
    /**
     * The event. The dependency is satisfied when the referenced object emits this event.
     */
    event: string;
    /**
     * The scope. This names the object referenced by the dependency.
     */
    scope: string;
}
/**
 * Represents the data from the build information nodes for type "DeploymentInformation" for xaml builds
 */
export interface Deployment {
    type: string;
}
/**
 * Deployment information for type "Build"
 */
export interface DeploymentBuild extends Deployment {
    buildId: number;
}
/**
 * Deployment information for type "Deploy"
 */
export interface DeploymentDeploy extends Deployment {
    message: string;
}
/**
 * Deployment information for type "Test"
 */
export interface DeploymentTest extends Deployment {
    runId: number;
}
/**
 * Represents a build process supported by the build definition designer.
 */
export interface DesignerProcess extends BuildProcess {
    phases: Phase[];
}
/**
 * Represents a folder that contains build definitions.
 */
export interface Folder {
    /**
     * The process or person who created the folder.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The date the folder was created.
     */
    createdOn: Date;
    /**
     * The description.
     */
    description: string;
    /**
     * The process or person that last changed the folder.
     */
    lastChangedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The date the folder was last changed.
     */
    lastChangedDate: Date;
    /**
     * The full path.
     */
    path: string;
    /**
     * The project.
     */
    project: TFS_Core_Contracts.TeamProjectReference;
}
/**
 * Specifies the desired ordering of folders.
 */
export enum FolderQueryOrder {
    /**
     * No order
     */
    None = 0,
    /**
     * Order by folder name and path ascending.
     */
    FolderAscending = 1,
    /**
     * Order by folder name and path descending.
     */
    FolderDescending = 2,
}
/**
 * Represents the ability to build forks of the selected repository.
 */
export interface Forks {
    /**
     * Indicates whether a build should use secrets when building forks of the selected repository.
     */
    allowSecrets: boolean;
    /**
     * Indicates whether the trigger should queue builds for forks of the selected repository.
     */
    enabled: boolean;
}
/**
 * Represents a gated check-in trigger.
 */
export interface GatedCheckInTrigger extends BuildTrigger {
    pathFilters: string[];
    /**
     * Indicates whether CI triggers should run after the gated check-in succeeds.
     */
    runContinuousIntegration: boolean;
    /**
     * Indicates whether to take workspace mappings into account when determining whether a build should run.
     */
    useWorkspaceMappings: boolean;
}
export enum GetOption {
    /**
     * Use the latest changeset at the time the build is queued.
     */
    LatestOnQueue = 0,
    /**
     * Use the latest changeset at the time the build is started.
     */
    LatestOnBuild = 1,
    /**
     * A user-specified version has been supplied.
     */
    Custom = 2,
}
/**
 * Data representation of an information node associated with a build
 */
export interface InformationNode {
    /**
     * Fields of the information node
     */
    fields: {
        [key: string]: string;
    };
    /**
     * Process or person that last modified this node
     */
    lastModifiedBy: string;
    /**
     * Date this node was last modified
     */
    lastModifiedDate: Date;
    /**
     * Node Id of this information node
     */
    nodeId: number;
    /**
     * Id of parent node (xml tree)
     */
    parentId: number;
    /**
     * The type of the information node
     */
    type: string;
}
/**
 * Represents an issue (error, warning) associated with a build.
 */
export interface Issue {
    /**
     * The category.
     */
    category: string;
    data: {
        [key: string]: string;
    };
    /**
     * A description of the issue.
     */
    message: string;
    /**
     * The type (error, warning) of the issue.
     */
    type: IssueType;
}
export enum IssueType {
    Error = 1,
    Warning = 2,
}
/**
 * Represents an entry in a workspace mapping.
 */
export interface MappingDetails {
    /**
     * The local path.
     */
    localPath: string;
    /**
     * The mapping type.
     */
    mappingType: string;
    /**
     * The server path.
     */
    serverPath: string;
}
/**
 * Represents options for running a phase against multiple agents.
 */
export interface MultipleAgentExecutionOptions extends AgentTargetExecutionOptions {
    /**
     * Indicates whether failure on one agent should prevent the phase from running on other agents.
     */
    continueOnError: boolean;
    /**
     * The maximum number of agents to use simultaneously.
     */
    maxConcurrency: number;
}
/**
 * Represents a phase of a build definition.
 */
export interface Phase {
    /**
     * The condition that must be true for this phase to execute.
     */
    condition: string;
    dependencies: Dependency[];
    /**
     * The job authorization scope for builds queued against this definition.
     */
    jobAuthorizationScope: BuildAuthorizationScope;
    /**
     * The cancellation timeout, in minutes, for builds queued against this definition.
     */
    jobCancelTimeoutInMinutes: number;
    /**
     * The job execution timeout, in minutes, for builds queued against this definition.
     */
    jobTimeoutInMinutes: number;
    /**
     * The name of the phase.
     */
    name: string;
    steps: BuildDefinitionStep[];
    /**
     * The target (agent, server, etc.) for this phase.
     */
    target: PhaseTarget;
    variables: {
        [key: string]: BuildDefinitionVariable;
    };
}
/**
 * Represents the target of a phase.
 */
export interface PhaseTarget {
    /**
     * The type of the target.
     */
    type: number;
}
export enum ProcessTemplateType {
    /**
     * Indicates a custom template.
     */
    Custom = 0,
    /**
     * Indicates a default template.
     */
    Default = 1,
    /**
     * Indicates an upgrade template.
     */
    Upgrade = 2,
}
/**
 * Represents a pull request trigger.
 */
export interface PullRequestTrigger extends BuildTrigger {
    branchFilters: string[];
    forks: Forks;
}
export enum QueryDeletedOption {
    /**
     * Include only non-deleted builds.
     */
    ExcludeDeleted = 0,
    /**
     * Include deleted and non-deleted builds.
     */
    IncludeDeleted = 1,
    /**
     * Include only deleted builds.
     */
    OnlyDeleted = 2,
}
export enum QueueOptions {
    /**
     * No queue options
     */
    None = 0,
    /**
     * Create a plan Id for the build, do not run it
     */
    DoNotRun = 1,
}
export enum QueuePriority {
    /**
     * Low priority.
     */
    Low = 5,
    /**
     * Below normal priority.
     */
    BelowNormal = 4,
    /**
     * Normal priority.
     */
    Normal = 3,
    /**
     * Above normal priority.
     */
    AboveNormal = 2,
    /**
     * High priority.
     */
    High = 1,
}
export interface RealtimeBuildEvent {
    buildId: number;
}
export interface RecreateSubscriptionResult {
    eventType: string;
    repositoryType: string;
}
export enum RepositoryCleanOptions {
    Source = 0,
    SourceAndOutputDir = 1,
    /**
     * Re-create $(build.sourcesDirectory)
     */
    SourceDir = 2,
    /**
     * Re-create $(agnet.buildDirectory) which contains $(build.sourcesDirectory), $(build.binariesDirectory) and any folders that left from previous build.
     */
    AllBuildDir = 3,
}
/**
 * Represents a reference to a resource.
 */
export interface ResourceReference {
    /**
     * An alias to be used when referencing the resource.
     */
    alias: string;
}
/**
 * Represents a retention policy for a build definition.
 */
export interface RetentionPolicy {
    artifacts: string[];
    artifactTypesToDelete: string[];
    branches: string[];
    /**
     * The number of days to keep builds.
     */
    daysToKeep: number;
    /**
     * Indicates whether the build record itself should be deleted.
     */
    deleteBuildRecord: boolean;
    /**
     * Indicates whether to delete test results associated with the build.
     */
    deleteTestResults: boolean;
    /**
     * The minimum number of builds to keep.
     */
    minimumToKeep: number;
}
export interface Schedule {
    branchFilters: string[];
    /**
     * Days for a build (flags enum for days of the week)
     */
    daysToBuild: ScheduleDays;
    /**
     * The Job Id of the Scheduled job that will queue the scheduled build. Since a single trigger can have multiple schedules and we want a single job to process a single schedule (since each schedule has a list of branches to build), the schedule itself needs to define the Job Id. This value will be filled in when a definition is added or updated.  The UI does not provide it or use it.
     */
    scheduleJobId: string;
    /**
     * Flag to determine if this schedule should only build if the associated source has been changed.
     */
    scheduleOnlyWithChanges: boolean;
    /**
     * Local timezone hour to start
     */
    startHours: number;
    /**
     * Local timezone minute to start
     */
    startMinutes: number;
    /**
     * Time zone of the build schedule (String representation of the time zone ID)
     */
    timeZoneId: string;
}
export enum ScheduleDays {
    /**
     * Do not run.
     */
    None = 0,
    /**
     * Run on Monday.
     */
    Monday = 1,
    /**
     * Run on Tuesday.
     */
    Tuesday = 2,
    /**
     * Run on Wednesday.
     */
    Wednesday = 4,
    /**
     * Run on Thursday.
     */
    Thursday = 8,
    /**
     * Run on Friday.
     */
    Friday = 16,
    /**
     * Run on Saturday.
     */
    Saturday = 32,
    /**
     * Run on Sunday.
     */
    Sunday = 64,
    /**
     * Run on all days of the week.
     */
    All = 127,
}
/**
 * Represents a schedule trigger.
 */
export interface ScheduleTrigger extends BuildTrigger {
    schedules: Schedule[];
}
/**
 * Represents a reference to a secure file.
 */
export interface SecureFileReference extends ResourceReference {
    /**
     * The ID of the secure file.
     */
    id: string;
}
/**
 * Represents a phase target that runs on the server.
 */
export interface ServerTarget extends PhaseTarget {
    /**
     * The execution options.
     */
    executionOptions: ServerTargetExecutionOptions;
}
/**
 * Represents options for running a phase on the server.
 */
export interface ServerTargetExecutionOptions {
    /**
     * The type.
     */
    type: number;
}
/**
 * Represents a referenec to a service endpoint.
 */
export interface ServiceEndpointReference extends ResourceReference {
    /**
     * The ID of the service endpoint.
     */
    id: string;
}
export enum ServiceHostStatus {
    /**
     * The service host is currently connected and accepting commands.
     */
    Online = 1,
    /**
     * The service host is currently disconnected and not accepting commands.
     */
    Offline = 2,
}
export interface SourceProviderAttributes {
    /**
     * The name of the source provider.
     */
    name: string;
    /**
     * The capabilities supported by this source provider.
     */
    supportedCapabilities: {
        [key: string]: boolean;
    };
    /**
     * The types of triggers supported by this source provider.
     */
    supportedTriggers: SupportedTrigger[];
}
export enum SourceProviderAvailability {
    /**
     * The source provider is available in the hosted environment.
     */
    Hosted = 1,
    /**
     * The source provider is available in the on-premises environment.
     */
    OnPremises = 2,
    /**
     * The source provider is available in all environments.
     */
    All = 3,
}
/**
 * Represents a repository returned from a source provider.
 */
export interface SourceRepository {
    /**
     * The name of the default branch.
     */
    defaultBranch: string;
    /**
     * The full name of the repository.
     */
    fullName: string;
    /**
     * The ID of the repository.
     */
    id: string;
    /**
     * The friendly name of the repository.
     */
    name: string;
    properties: {
        [key: string]: string;
    };
    /**
     * The name of the source provider the repository is from.
     */
    sourceProviderName: string;
    /**
     * The URL of the repository.
     */
    url: string;
}
export interface SupportedTrigger {
    /**
     * The default interval to wait between polls (only relevant when NotificationType is Polling).
     */
    defaultPollingInterval: number;
    /**
     * How the trigger is notified of changes.
     */
    notificationType: string;
    /**
     * The capabilities supported by this trigger.
     */
    supportedCapabilities: {
        [key: string]: SupportLevel;
    };
    /**
     * The type of trigger.
     */
    type: DefinitionTriggerType;
}
export enum SupportLevel {
    /**
     * The functionality is not supported.
     */
    Unsupported = 0,
    /**
     * The functionality is supported.
     */
    Supported = 1,
    /**
     * The functionality is required.
     */
    Required = 2,
}
/**
 * Represents a Subversion mapping entry.
 */
export interface SvnMappingDetails {
    /**
     * The depth.
     */
    depth: number;
    /**
     * Indicates whether to ignore externals.
     */
    ignoreExternals: boolean;
    /**
     * The local path.
     */
    localPath: string;
    /**
     * The revision.
     */
    revision: string;
    /**
     * The server path.
     */
    serverPath: string;
}
/**
 * Represents a subversion workspace.
 */
export interface SvnWorkspace {
    mappings: SvnMappingDetails[];
}
export interface SyncBuildCompletedEvent extends BuildUpdatedEvent {
}
export interface SyncBuildStartedEvent extends BuildUpdatedEvent {
}
/**
 * Represents a reference to an agent pool.
 */
export interface TaskAgentPoolReference {
    /**
     * The pool ID.
     */
    id: number;
    /**
     * A value indicating whether or not this pool is managed by the service.
     */
    isHosted: boolean;
    /**
     * The pool name.
     */
    name: string;
}
/**
 * A reference to a task definition.
 */
export interface TaskDefinitionReference {
    /**
     * The type of task (task or task group).
     */
    definitionType: string;
    /**
     * The ID of the task.
     */
    id: string;
    /**
     * The version of the task.
     */
    versionSpec: string;
}
/**
 * Represents a reference to a plan group.
 */
export interface TaskOrchestrationPlanGroupReference {
    /**
     * The name of the plan group.
     */
    planGroup: string;
    /**
     * The project ID.
     */
    projectId: string;
}
export interface TaskOrchestrationPlanGroupsStartedEvent {
    planGroups: TaskOrchestrationPlanGroupReference[];
}
/**
 * Represents a reference to an orchestration plan.
 */
export interface TaskOrchestrationPlanReference {
    /**
     * The type of the plan.
     */
    orchestrationType: number;
    /**
     * The ID of the plan.
     */
    planId: string;
}
/**
 * Represents a reference to a task.
 */
export interface TaskReference {
    /**
     * The ID of the task definition.
     */
    id: string;
    /**
     * The name of the task definition.
     */
    name: string;
    /**
     * The version of the task definition.
     */
    version: string;
}
export enum TaskResult {
    Succeeded = 0,
    SucceededWithIssues = 1,
    Failed = 2,
    Canceled = 3,
    Skipped = 4,
    Abandoned = 5,
}
/**
 * Represents the timeline of a build.
 */
export interface Timeline extends TimelineReference {
    /**
     * The process or person that last changed the timeline.
     */
    lastChangedBy: string;
    /**
     * The time the timeline was last changed.
     */
    lastChangedOn: Date;
    records: TimelineRecord[];
}
/**
 * Represents an entry in a build's timeline.
 */
export interface TimelineRecord {
    _links: any;
    /**
     * The change ID.
     */
    changeId: number;
    /**
     * A string that indicates the current operation.
     */
    currentOperation: string;
    /**
     * A reference to a sub-timeline.
     */
    details: TimelineReference;
    /**
     * The number of errors produced by this operation.
     */
    errorCount: number;
    /**
     * The finish time.
     */
    finishTime: Date;
    /**
     * The ID of the record.
     */
    id: string;
    issues: Issue[];
    /**
     * The time the record was last modified.
     */
    lastModified: Date;
    /**
     * A reference to the log produced by this operation.
     */
    log: BuildLogReference;
    /**
     * The name.
     */
    name: string;
    /**
     * An ordinal value relative to other records.
     */
    order: number;
    /**
     * The ID of the record's parent.
     */
    parentId: string;
    /**
     * The current completion percentage.
     */
    percentComplete: number;
    /**
     * The result.
     */
    result: TaskResult;
    /**
     * The result code.
     */
    resultCode: string;
    /**
     * The start time.
     */
    startTime: Date;
    /**
     * The state of the record.
     */
    state: TimelineRecordState;
    /**
     * A reference to the task represented by this timeline record.
     */
    task: TaskReference;
    /**
     * The type of the record.
     */
    type: string;
    /**
     * The REST URL of the timeline record.
     */
    url: string;
    /**
     * The number of warnings produced by this operation.
     */
    warningCount: number;
    /**
     * The name of the agent running the operation.
     */
    workerName: string;
}
export enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}
export interface TimelineRecordsUpdatedEvent extends RealtimeBuildEvent {
    timelineRecords: TimelineRecord[];
}
/**
 * Represents a reference to a timeline.
 */
export interface TimelineReference {
    /**
     * The change ID.
     */
    changeId: number;
    /**
     * The ID of the timeline.
     */
    id: string;
    /**
     * The REST URL of the timeline.
     */
    url: string;
}
export enum ValidationResult {
    OK = 0,
    Warning = 1,
    Error = 2,
}
/**
 * Represents a variable group.
 */
export interface VariableGroup extends VariableGroupReference {
    /**
     * The description.
     */
    description: string;
    /**
     * The name of the variable group.
     */
    name: string;
    /**
     * The type of the variable group.
     */
    type: string;
    variables: {
        [key: string]: BuildDefinitionVariable;
    };
}
/**
 * Represents a reference to a variable group.
 */
export interface VariableGroupReference {
    /**
     * The ID of the variable group.
     */
    id: number;
}
/**
 * Represents options for running a phase based on values specified by a list of variables.
 */
export interface VariableMultipliersAgentExecutionOptions extends AgentTargetExecutionOptions {
    /**
     * Indicates whether failure on one agent should prevent the phase from running on other agents.
     */
    continueOnError: boolean;
    /**
     * The maximum number of agents to use in parallel.
     */
    maxConcurrency: number;
    multipliers: string[];
}
/**
 * Represents options for running a phase based on values specified by a list of variables.
 */
export interface VariableMultipliersServerExecutionOptions extends ServerTargetExecutionOptions {
    /**
     * Indicates whether failure of one job should prevent the phase from running in other jobs.
     */
    continueOnError: boolean;
    /**
     * The maximum number of server jobs to run in parallel.
     */
    maxConcurrency: number;
    multipliers: string[];
}
/**
 * Mapping for a workspace
 */
export interface WorkspaceMapping {
    /**
     * Uri of the associated definition
     */
    definitionUri: string;
    /**
     * Depth of this mapping
     */
    depth: number;
    /**
     * local location of the definition
     */
    localItem: string;
    /**
     * type of workspace mapping
     */
    mappingType: WorkspaceMappingType;
    /**
     * Server location of the definition
     */
    serverItem: string;
    /**
     * Id of the workspace
     */
    workspaceId: number;
}
export enum WorkspaceMappingType {
    /**
     * The path is mapped in the workspace.
     */
    Map = 0,
    /**
     * The path is cloaked in the workspace.
     */
    Cloak = 1,
}
export interface WorkspaceTemplate {
    /**
     * Uri of the associated definition
     */
    definitionUri: string;
    /**
     * The identity that last modified this template
     */
    lastModifiedBy: string;
    /**
     * The last time this template was modified
     */
    lastModifiedDate: Date;
    /**
     * List of workspace mappings
     */
    mappings: WorkspaceMapping[];
    /**
     * Id of the workspace for this template
     */
    workspaceId: number;
}
export interface XamlBuildControllerReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface XamlBuildDefinition extends DefinitionReference {
    _links: any;
    /**
     * Batch size of the definition
     */
    batchSize: number;
    buildArgs: string;
    /**
     * The continuous integration quiet period
     */
    continuousIntegrationQuietPeriod: number;
    /**
     * The build controller
     */
    controller: BuildController;
    /**
     * The date this definition was created
     */
    createdOn: Date;
    /**
     * Default drop location for builds from this definition
     */
    defaultDropLocation: string;
    /**
     * Description of the definition
     */
    description: string;
    /**
     * The last build on this definition
     */
    lastBuild: XamlBuildReference;
    /**
     * The repository
     */
    repository: BuildRepository;
    /**
     * The reasons supported by the template
     */
    supportedReasons: BuildReason;
    /**
     * How builds are triggered from this definition
     */
    triggerType: DefinitionTriggerType;
}
export interface XamlBuildReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface XamlBuildServerReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface XamlDefinitionReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
/**
 * Represents a YAML process.
 */
export interface YamlProcess extends BuildProcess {
    errors: string[];
    /**
     * The resources used by the build definition.
     */
    resources: BuildProcessResources;
    /**
     * The YAML filename.
     */
    yamlFilename: string;
}
export var TypeInfo: {
    AgentStatus: {
        enumValues: {
            "unavailable": number;
            "available": number;
            "offline": number;
        };
    };
    AuditAction: {
        enumValues: {
            "add": number;
            "update": number;
            "delete": number;
        };
    };
    Build: any;
    BuildAgent: any;
    BuildArtifactAddedEvent: any;
    BuildAuthorizationScope: {
        enumValues: {
            "projectCollection": number;
            "project": number;
        };
    };
    BuildChangesCalculatedEvent: any;
    BuildCompletedEvent: any;
    BuildController: any;
    BuildDefinition: any;
    BuildDefinition3_2: any;
    BuildDefinitionChangedEvent: any;
    BuildDefinitionChangingEvent: any;
    BuildDefinitionReference: any;
    BuildDefinitionReference3_2: any;
    BuildDefinitionRevision: any;
    BuildDefinitionSourceProvider: any;
    BuildDefinitionTemplate: any;
    BuildDefinitionTemplate3_2: any;
    BuildDeletedEvent: any;
    BuildDeployment: any;
    BuildDestroyedEvent: any;
    BuildLog: any;
    BuildMetric: any;
    BuildOptionDefinition: any;
    BuildOptionInputDefinition: any;
    BuildOptionInputType: {
        enumValues: {
            "string": number;
            "boolean": number;
            "stringList": number;
            "radio": number;
            "pickList": number;
            "multiLine": number;
            "branchFilter": number;
        };
    };
    BuildPhaseStatus: {
        enumValues: {
            "unknown": number;
            "failed": number;
            "succeeded": number;
        };
    };
    BuildProcessTemplate: any;
    BuildQueryOrder: {
        enumValues: {
            "finishTimeAscending": number;
            "finishTimeDescending": number;
            "queueTimeDescending": number;
            "queueTimeAscending": number;
            "startTimeDescending": number;
            "startTimeAscending": number;
        };
    };
    BuildQueuedEvent: any;
    BuildReason: {
        enumValues: {
            "none": number;
            "manual": number;
            "individualCI": number;
            "batchedCI": number;
            "schedule": number;
            "userCreated": number;
            "validateShelveset": number;
            "checkInShelveset": number;
            "pullRequest": number;
            "triggered": number;
            "all": number;
        };
    };
    BuildReference: any;
    BuildRequestValidationResult: any;
    BuildResult: {
        enumValues: {
            "none": number;
            "succeeded": number;
            "partiallySucceeded": number;
            "failed": number;
            "canceled": number;
        };
    };
    BuildServer: any;
    BuildStartedEvent: any;
    BuildStatus: {
        enumValues: {
            "none": number;
            "inProgress": number;
            "completed": number;
            "cancelling": number;
            "postponed": number;
            "notStarted": number;
            "all": number;
        };
    };
    BuildSummary: any;
    BuildTrigger: any;
    BuildUpdatedEvent: any;
    Change: any;
    ContinuousDeploymentDefinition: any;
    ContinuousIntegrationTrigger: any;
    ControllerStatus: {
        enumValues: {
            "unavailable": number;
            "available": number;
            "offline": number;
        };
    };
    DefinitionQuality: {
        enumValues: {
            "definition": number;
            "draft": number;
        };
    };
    DefinitionQueryOrder: {
        enumValues: {
            "none": number;
            "lastModifiedAscending": number;
            "lastModifiedDescending": number;
            "definitionNameAscending": number;
            "definitionNameDescending": number;
        };
    };
    DefinitionQueueStatus: {
        enumValues: {
            "enabled": number;
            "paused": number;
            "disabled": number;
        };
    };
    DefinitionReference: any;
    DefinitionTriggerType: {
        enumValues: {
            "none": number;
            "continuousIntegration": number;
            "batchedContinuousIntegration": number;
            "schedule": number;
            "gatedCheckIn": number;
            "batchedGatedCheckIn": number;
            "pullRequest": number;
            "all": number;
        };
    };
    DefinitionType: {
        enumValues: {
            "xaml": number;
            "build": number;
        };
    };
    DeleteOptions: {
        enumValues: {
            "none": number;
            "dropLocation": number;
            "testResults": number;
            "label": number;
            "details": number;
            "symbols": number;
            "all": number;
        };
    };
    DesignerProcess: any;
    Folder: any;
    FolderQueryOrder: {
        enumValues: {
            "none": number;
            "folderAscending": number;
            "folderDescending": number;
        };
    };
    GatedCheckInTrigger: any;
    GetOption: {
        enumValues: {
            "latestOnQueue": number;
            "latestOnBuild": number;
            "custom": number;
        };
    };
    InformationNode: any;
    Issue: any;
    IssueType: {
        enumValues: {
            "error": number;
            "warning": number;
        };
    };
    Phase: any;
    ProcessTemplateType: {
        enumValues: {
            "custom": number;
            "default": number;
            "upgrade": number;
        };
    };
    PullRequestTrigger: any;
    QueryDeletedOption: {
        enumValues: {
            "excludeDeleted": number;
            "includeDeleted": number;
            "onlyDeleted": number;
        };
    };
    QueueOptions: {
        enumValues: {
            "none": number;
            "doNotRun": number;
        };
    };
    QueuePriority: {
        enumValues: {
            "low": number;
            "belowNormal": number;
            "normal": number;
            "aboveNormal": number;
            "high": number;
        };
    };
    RepositoryCleanOptions: {
        enumValues: {
            "source": number;
            "sourceAndOutputDir": number;
            "sourceDir": number;
            "allBuildDir": number;
        };
    };
    Schedule: any;
    ScheduleDays: {
        enumValues: {
            "none": number;
            "monday": number;
            "tuesday": number;
            "wednesday": number;
            "thursday": number;
            "friday": number;
            "saturday": number;
            "sunday": number;
            "all": number;
        };
    };
    ScheduleTrigger: any;
    ServiceHostStatus: {
        enumValues: {
            "online": number;
            "offline": number;
        };
    };
    SourceProviderAttributes: any;
    SourceProviderAvailability: {
        enumValues: {
            "hosted": number;
            "onPremises": number;
            "all": number;
        };
    };
    SupportedTrigger: any;
    SupportLevel: {
        enumValues: {
            "unsupported": number;
            "supported": number;
            "required": number;
        };
    };
    SyncBuildCompletedEvent: any;
    SyncBuildStartedEvent: any;
    TaskResult: {
        enumValues: {
            "succeeded": number;
            "succeededWithIssues": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
            "abandoned": number;
        };
    };
    Timeline: any;
    TimelineRecord: any;
    TimelineRecordState: {
        enumValues: {
            "pending": number;
            "inProgress": number;
            "completed": number;
        };
    };
    TimelineRecordsUpdatedEvent: any;
    ValidationResult: {
        enumValues: {
            "oK": number;
            "warning": number;
            "error": number;
        };
    };
    WorkspaceMapping: any;
    WorkspaceMappingType: {
        enumValues: {
            "map": number;
            "cloak": number;
        };
    };
    WorkspaceTemplate: any;
    XamlBuildDefinition: any;
};
}
declare module "TFS/Build/ExtensionContracts" {
import Build_Contracts = require("TFS/Build/Contracts");
/**
* Interface defining the configuration that is shared between extension targeted at "ms.vss-build-web.build-results-view" and the host
*/
export interface IBuildResultsViewExtensionConfig {
    /**
    * Required if reacting to the current build.
    * More than one callbacks can be added, and all will be called.
    * It is important to have atleast one call back, since that's how an extension can get information about the current build.
    */
    onBuildChanged: (handler: (build: Build_Contracts.Build) => void) => void;
    /**
    * Optional, If needed, this callback will be called when this particular extension is selected/displayed
    */
    onViewDisplayed: (onDisplayedCallBack: () => void) => void;
    /**
    * Optional, for a given tab id, which can be fully qualified contribution id (publisher.extensionId.tabId) for tab or a well known tab id,
    * the corresponding tab is selected if the tab is visible.
    */
    selectTab: (fullyQualifiedTabId: string) => void;
    /**
    * Optional, controls section visibility, call this method to hide or show sections. fullyQualifiedSectionId is of the format - publisher.extensionId.sectionId
    */
    setSectionVisibility: (fullyQualifiedSectionId: string, value: boolean) => void;
}
/**
* Existing tab ids in build results view
*/
export var BuildResultsViewTabIds: {
    Summary: string;
    Console: string;
    Logs: string;
    Timeline: string;
    Artifacts: string;
    XamlLog: string;
    XamlDiagnostics: string;
};
/**
* Existing section ids in build results view's summary tab
*/
export var BuildResultsSummaryTabSectionIds: {
    BuildDetails: string;
    BuildIssues: string;
    AssociatedChangeset: string;
    DeploymentInformation: string;
    BuildTags: string;
    TestSummary: string;
    CodeCoverageSummary: string;
    AssociatedWorkItem: string;
    DiagnosticLogs: string;
};
}
declare module "TFS/Build/RestClient" {
import Contracts = require("TFS/Build/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected badgeApiVersion: string;
    protected buildbadgeApiVersion: string;
    protected controllersApiVersion: string;
    protected optionsApiVersion: string;
    protected resourceUsageApiVersion: string;
    protected revisionsApiVersion: string;
    protected settingsApiVersion: string;
    protected tagsApiVersion: string;
    protected tagsApiVersion_6e6114b2: string;
    protected timelineApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets a timeline for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} timelineId - The ID of the timeline. If not specified, uses the main timeline for the plan.
     * @param {number} changeId
     * @param {string} planId - The ID of the plan. If not specified, uses the primary plan for the build.
     * @return IPromise<Contracts.Timeline>
     */
    getBuildTimeline(project: string, buildId: number, timelineId?: string, changeId?: number, planId?: string): IPromise<Contracts.Timeline>;
    /**
     * Gets a list of all build and definition tags in the project.
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<string[]>
     */
    getTags(project: string): IPromise<string[]>;
    /**
     * Gets the tags for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @return IPromise<string[]>
     */
    getBuildTags(project: string, buildId: number): IPromise<string[]>;
    /**
     * Removes a tag from a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} tag - The tag to remove.
     * @return IPromise<string[]>
     */
    deleteBuildTag(project: string, buildId: number, tag: string): IPromise<string[]>;
    /**
     * Adds tags to a build.
     *
     * @param {string[]} tags - The tags to add.
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @return IPromise<string[]>
     */
    addBuildTags(tags: string[], project: string, buildId: number): IPromise<string[]>;
    /**
     * Adds a tag to a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} tag - The tag to add.
     * @return IPromise<string[]>
     */
    addBuildTag(project: string, buildId: number, tag: string): IPromise<string[]>;
    /**
     * Updates the build settings.
     *
     * @param {Contracts.BuildSettings} settings - The new settings.
     * @return IPromise<Contracts.BuildSettings>
     */
    updateBuildSettings(settings: Contracts.BuildSettings): IPromise<Contracts.BuildSettings>;
    /**
     * Gets the build settings.
     *
     * @return IPromise<Contracts.BuildSettings>
     */
    getBuildSettings(): IPromise<Contracts.BuildSettings>;
    /**
     * Gets all revisions of a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @return IPromise<Contracts.BuildDefinitionRevision[]>
     */
    getDefinitionRevisions(project: string, definitionId: number): IPromise<Contracts.BuildDefinitionRevision[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets information about build resources in the system.
     *
     * @return IPromise<Contracts.BuildResourceUsage>
     */
    getResourceUsage(): IPromise<Contracts.BuildResourceUsage>;
    /**
     * Gets all build definition options supported by the system.
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildOptionDefinition[]>
     */
    getBuildOptionDefinitions(project?: string): IPromise<Contracts.BuildOptionDefinition[]>;
    /**
     * Gets controller, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.BuildController[]>
     */
    getBuildControllers(name?: string): IPromise<Contracts.BuildController[]>;
    /**
     * Gets a controller
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.BuildController>
     */
    getBuildController(controllerId: number): IPromise<Contracts.BuildController>;
    /**
     * @exemptedapi
     * [Preview API] Gets a badge that indicates the status of the most recent build for the specified branch.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repoType - The repository type.
     * @param {string} repoId - The repository ID.
     * @param {string} branchName - The branch name.
     * @return IPromise<string>
     */
    getBuildBadgeData(project: string, repoType: string, repoId?: string, branchName?: string): IPromise<string>;
    /**
     * @exemptedapi
     * [Preview API] Gets a badge that indicates the status of the most recent build for the specified branch.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repoType - The repository type.
     * @param {string} repoId - The repository ID.
     * @param {string} branchName - The branch name.
     * @return IPromise<Contracts.BuildBadge>
     */
    getBuildBadge(project: string, repoType: string, repoId?: string, branchName?: string): IPromise<Contracts.BuildBadge>;
    /**
     * Gets a badge that indicates the status of the most recent build for a definition.
     *
     * @param {string} project - The project ID or name.
     * @param {number} definitionId - The ID of the definition.
     * @param {string} branchName - The name of the branch.
     * @return IPromise<string>
     */
    getBadge(project: string, definitionId: number, branchName?: string): IPromise<string>;
}
export class CommonMethods3To4_1 extends CommonMethods2To4_1 {
    protected artifactsApiVersion: string;
    protected buildsApiVersion: string;
    protected changesApiVersion: string;
    protected changesApiVersion_54572c7b: string;
    protected foldersApiVersion: string;
    protected logsApiVersion: string;
    protected reportApiVersion: string;
    protected workitemsApiVersion: string;
    protected workitemsApiVersion_5a21f5d2: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API] Gets all the work items between two builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId - The ID of the first build.
     * @param {number} toBuildId - The ID of the last build.
     * @param {number} top - The maximum number of work items to return.
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getWorkItemsBetweenBuilds(project: string, fromBuildId: number, toBuildId: number, top?: number): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work items associated with a build, filtered to specific commits.
     *
     * @param {string[]} commitIds - A comma-delimited list of commit IDs.
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {number} top - The maximum number of work items to return, or the number of commits to consider if no commit IDs are specified.
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work items associated with a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {number} top - The maximum number of work items to return.
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets a build report.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} type
     * @return IPromise<any>
     */
    getBuildReportHtmlContent(project: string, buildId: number, type?: string): IPromise<any>;
    /**
     * @exemptedapi
     * [Preview API] Gets a build report.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} type
     * @return IPromise<Contracts.BuildReportMetadata>
     */
    getBuildReport(project: string, buildId: number, type?: string): IPromise<Contracts.BuildReportMetadata>;
    /**
     * Gets the logs for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number): IPromise<ArrayBuffer>;
    /**
     * Gets the logs for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets an individual log file for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {number} logId - The ID of the log file.
     * @param {number} startLine - The start line.
     * @param {number} endLine - The end line.
     * @return IPromise<string[]>
     */
    getBuildLogLines(project: string, buildId: number, logId: number, startLine?: number, endLine?: number): IPromise<string[]>;
    /**
     * Gets an individual log file for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {number} logId - The ID of the log file.
     * @param {number} startLine - The start line.
     * @param {number} endLine - The end line.
     * @return IPromise<string>
     */
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number): IPromise<string>;
    /**
     * @exemptedapi
     * [Preview API] Updates an existing folder at given  existing path
     *
     * @param {Contracts.Folder} folder - The new version of the folder.
     * @param {string} project - Project ID or project name
     * @param {string} path - The full path to the folder.
     * @return IPromise<Contracts.Folder>
     */
    updateFolder(folder: Contracts.Folder, project: string, path: string): IPromise<Contracts.Folder>;
    /**
     * @exemptedapi
     * [Preview API] Gets a list of build definition folders.
     *
     * @param {string} project - Project ID or project name
     * @param {string} path - The path to start with.
     * @param {Contracts.FolderQueryOrder} queryOrder - The order in which folders should be returned.
     * @return IPromise<Contracts.Folder[]>
     */
    getFolders(project: string, path?: string, queryOrder?: Contracts.FolderQueryOrder): IPromise<Contracts.Folder[]>;
    /**
     * @exemptedapi
     * [Preview API] Deletes a definition folder. Definitions and their corresponding builds will also be deleted.
     *
     * @param {string} project - Project ID or project name
     * @param {string} path - The full path to the folder.
     * @return IPromise<void>
     */
    deleteFolder(project: string, path: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API] Creates a new folder.
     *
     * @param {Contracts.Folder} folder - The folder.
     * @param {string} project - Project ID or project name
     * @param {string} path - The full path of the folder.
     * @return IPromise<Contracts.Folder>
     */
    createFolder(folder: Contracts.Folder, project: string, path: string): IPromise<Contracts.Folder>;
    /**
     * @exemptedapi
     * [Preview API] Gets the changes made to the repository between two given builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId - The ID of the first build.
     * @param {number} toBuildId - The ID of the last build.
     * @param {number} top - The maximum number of changes to return.
     * @return IPromise<Contracts.Change[]>
     */
    getChangesBetweenBuilds(project: string, fromBuildId?: number, toBuildId?: number, top?: number): IPromise<Contracts.Change[]>;
    /**
     * Gets the changes associated with a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The build ID.
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return.
     * @param {boolean} includeSourceChange
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean): IPromise<Contracts.Change[]>;
    /**
     * Updates multiple builds.
     *
     * @param {Contracts.Build[]} builds - The builds to update.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Build[]>
     */
    updateBuilds(builds: Contracts.Build[], project?: string): IPromise<Contracts.Build[]>;
    /**
     * Updates a build.
     *
     * @param {Contracts.Build} build - The build.
     * @param {number} buildId - The ID of the build.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string): IPromise<Contracts.Build>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string): IPromise<Contracts.Build>;
    /**
     * Gets a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results.
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string): IPromise<Contracts.Build>;
    /**
     * Deletes a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string): IPromise<void>;
    /**
     * Gets all artifacts for a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Gets a specific artifact for a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} artifactName - The name of the artifact.
     * @param {string} project - Project ID or project name
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string): IPromise<ArrayBuffer>;
    /**
     * Gets a specific artifact for a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} artifactName - The name of the artifact.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string): IPromise<Contracts.BuildArtifact>;
    /**
     * Associates an artifact with a build.
     *
     * @param {Contracts.BuildArtifact} artifact - The artifact.
     * @param {number} buildId - The ID of the build.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    createArtifact(artifact: Contracts.BuildArtifact, buildId: number, project?: string): IPromise<Contracts.BuildArtifact>;
}
export class CommonMethods3_1To4_1 extends CommonMethods3To4_1 {
    protected metricsApiVersion: string;
    protected metricsApiVersion_7433fae7: string;
    protected tagsApiVersion_cb894432: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Gets the tags for a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {number} revision - The definition revision number. If not specified, uses the latest revision of the definition.
     * @return IPromise<string[]>
     */
    getDefinitionTags(project: string, definitionId: number, revision?: number): IPromise<string[]>;
    /**
     * [Preview API] Removes a tag from a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {string} tag - The tag to remove.
     * @return IPromise<string[]>
     */
    deleteDefinitionTag(project: string, definitionId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Adds multiple tags to a definition.
     *
     * @param {string[]} tags - The tags to add.
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @return IPromise<string[]>
     */
    addDefinitionTags(tags: string[], project: string, definitionId: number): IPromise<string[]>;
    /**
     * [Preview API] Adds a tag to a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {string} tag - The tag to add.
     * @return IPromise<string[]>
     */
    addDefinitionTag(project: string, definitionId: number, tag: string): IPromise<string[]>;
    /**
     * [Preview API] Gets build metrics for a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {Date} minMetricsTime - The date from which to calculate metrics.
     * @return IPromise<Contracts.BuildMetric[]>
     */
    getDefinitionMetrics(project: string, definitionId: number, minMetricsTime?: Date): IPromise<Contracts.BuildMetric[]>;
    /**
     * [Preview API] Gets build metrics for a project.
     *
     * @param {string} project - Project ID or project name
     * @param {string} metricAggregationType - The aggregation type to use (hourly, daily).
     * @param {Date} minMetricsTime - The date from which to calculate metrics.
     * @return IPromise<Contracts.BuildMetric[]>
     */
    getProjectMetrics(project: string, metricAggregationType?: string, minMetricsTime?: Date): IPromise<Contracts.BuildMetric[]>;
}
export class CommonMethods3_2To4_1 extends CommonMethods3_1To4_1 {
    protected propertiesApiVersion: string;
    protected propertiesApiVersion_0a6312e9: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Updates properties for a definition.
     *
     * @param {VSS_Common_Contracts.JsonPatchDocument} document - A json-patch document describing the properties to update.
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @return IPromise<any>
     */
    updateDefinitionProperties(document: VSS_Common_Contracts.JsonPatchDocument, project: string, definitionId: number): IPromise<any>;
    /**
     * [Preview API] Gets properties for a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {string[]} filter - A comma-delimited list of properties. If specified, filters to these specific properties.
     * @return IPromise<any>
     */
    getDefinitionProperties(project: string, definitionId: number, filter?: string[]): IPromise<any>;
    /**
     * [Preview API] Updates properties for a build.
     *
     * @param {VSS_Common_Contracts.JsonPatchDocument} document - A json-patch document describing the properties to update.
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @return IPromise<any>
     */
    updateBuildProperties(document: VSS_Common_Contracts.JsonPatchDocument, project: string, buildId: number): IPromise<any>;
    /**
     * [Preview API] Gets properties for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string[]} filter - A comma-delimited list of properties. If specified, filters to these specific properties.
     * @return IPromise<any>
     */
    getBuildProperties(project: string, buildId: number, filter?: string[]): IPromise<any>;
}
export class CommonMethods4To4_1 extends CommonMethods3_2To4_1 {
    protected definitionsApiVersion: string;
    protected templatesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Updates an existing build definition template.
     *
     * @param {Contracts.BuildDefinitionTemplate} template - The new version of the template.
     * @param {string} project - Project ID or project name
     * @param {string} templateId - The ID of the template.
     * @return IPromise<Contracts.BuildDefinitionTemplate>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate>;
    /**
     * [Preview API] Gets all definition templates.
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate[]>;
    /**
     * [Preview API] Gets a specific build definition template.
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - The ID of the requested template.
     * @return IPromise<Contracts.BuildDefinitionTemplate>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate>;
    /**
     * [Preview API] Deletes a build definition template.
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - The ID of the template.
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * [Preview API] Updates an existing definition.
     *
     * @param {Contracts.BuildDefinition} definition - The new version of the defintion.
     * @param {number} definitionId - The ID of the definition.
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @return IPromise<Contracts.BuildDefinition>
     */
    updateDefinition(definition: Contracts.BuildDefinition, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): IPromise<Contracts.BuildDefinition>;
    /**
     * [Preview API] Gets a list of definitions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} name - If specified, filters to definitions whose names match this pattern.
     * @param {string} repositoryId - A repository ID. If specified, filters to definitions that use this repository.
     * @param {string} repositoryType - If specified, filters to definitions that have a repository of this type.
     * @param {Contracts.DefinitionQueryOrder} queryOrder - Indicates the order in which definitions should be returned.
     * @param {number} top - The maximum number of definitions to return.
     * @param {string} continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of definitions.
     * @param {Date} minMetricsTime - If specified, indicates the date from which metrics should be included.
     * @param {number[]} definitionIds - A comma-delimited list that specifies the IDs of definitions to retrieve.
     * @param {string} path - If specified, filters to definitions under this folder.
     * @param {Date} builtAfter - If specified, filters to definitions that have builds after this date.
     * @param {Date} notBuiltAfter - If specified, filters to definitions that do not have builds after this date.
     * @param {boolean} includeAllProperties - Indicates whether the full definitions should be returned. By default, shallow representations of the definitions are returned.
     * @param {boolean} includeLatestBuilds - Indicates whether to return the latest and latest completed builds for this definition.
     * @param {string} taskIdFilter - If specified, filters to definitions that use the specified task.
     * @return IPromise<Contracts.BuildDefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number, continuationToken?: string, minMetricsTime?: Date, definitionIds?: number[], path?: string, builtAfter?: Date, notBuiltAfter?: Date, includeAllProperties?: boolean, includeLatestBuilds?: boolean, taskIdFilter?: string): IPromise<Contracts.BuildDefinitionReference[]>;
    /**
     * [Preview API] Gets a definition, optionally at a specific revision.
     *
     * @param {number} definitionId - The ID of the definition.
     * @param {string} project - Project ID or project name
     * @param {number} revision - The revision number to retrieve. If this is not specified, the latest version will be returned.
     * @param {Date} minMetricsTime - If specified, indicates the date from which metrics should be included.
     * @param {string[]} propertyFilters - A comma-delimited list of properties to include in the results.
     * @param {boolean} includeLatestBuilds
     * @return IPromise<Contracts.BuildDefinition>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, minMetricsTime?: Date, propertyFilters?: string[], includeLatestBuilds?: boolean): IPromise<Contracts.BuildDefinition>;
    /**
     * [Preview API] Deletes a definition and all associated builds.
     *
     * @param {number} definitionId - The ID of the definition.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * [Preview API] Creates a new definition.
     *
     * @param {Contracts.BuildDefinition} definition - The definition.
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition>
     */
    createDefinition(definition: Contracts.BuildDefinition, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition>;
}
/**
 * @exemptedapi
 */
export class BuildHttpClient4_1 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Gets a list of branches for the given source code repository.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do use service endpoints, e.g. TFVC or TFGit.
     * @param {string} repository - If specified, the vendor-specific identifier or the name of the repository to get branches. Can only be omitted for providers that do not support multiple repositories.
     * @return IPromise<string[]>
     */
    listBranches(project: string, providerName: string, serviceEndpointId?: string, repository?: string): IPromise<string[]>;
    /**
     * [Preview API] Gets a list of builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition IDs. If specified, filters to builds for these definitions.
     * @param {number[]} queues - A comma-delimited list of queue IDs. If specified, filters to builds that ran against these queues.
     * @param {string} buildNumber - If specified, filters to builds that match this build number. Append * to do a prefix search.
     * @param {Date} minTime - If specified, filters to builds that finished/started/queued after this date based on the queryOrder specified.
     * @param {Date} maxTime - If specified, filters to builds that finished/started/queued before this date based on the queryOrder specified.
     * @param {string} requestedFor - If specified, filters to builds requested for the specified user.
     * @param {Contracts.BuildReason} reasonFilter - If specified, filters to builds that match this reason.
     * @param {Contracts.BuildStatus} statusFilter - If specified, filters to builds that match this status.
     * @param {Contracts.BuildResult} resultFilter - If specified, filters to builds that match this result.
     * @param {string[]} tagFilters - A comma-delimited list of tags. If specified, filters to builds that have the specified tags.
     * @param {string[]} properties - A comma-delimited list of properties to retrieve.
     * @param {number} top - The maximum number of builds to return.
     * @param {string} continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of builds.
     * @param {number} maxBuildsPerDefinition - The maximum number of builds to return per definition.
     * @param {Contracts.QueryDeletedOption} deletedFilter - Indicates whether to exclude, include, or only return deleted builds.
     * @param {Contracts.BuildQueryOrder} queryOrder - The order in which builds should be returned.
     * @param {string} branchName - If specified, filters to builds that built branches that built this branch.
     * @param {number[]} buildIds - A comma-delimited list that specifies the IDs of builds to retrieve.
     * @param {string} repositoryId - If specified, filters to builds that built from this repository.
     * @param {string} repositoryType - If specified, filters to builds that built from repositories of this type.
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minTime?: Date, maxTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string, buildIds?: number[], repositoryId?: string, repositoryType?: string): IPromise<Contracts.Build[]>;
    /**
     * [Preview API] Gets a list of source code repositories.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do use service endpoints, e.g. TFVC or TFGit.
     * @return IPromise<Contracts.SourceRepository[]>
     */
    listRepositories(project: string, providerName: string, serviceEndpointId?: string): IPromise<Contracts.SourceRepository[]>;
    /**
     * [Preview API] Get a list of source providers and their capabilities.
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.SourceProviderAttributes[]>
     */
    listSourceProviders(project: string): IPromise<Contracts.SourceProviderAttributes[]>;
}
/**
 * @exemptedapi
 */
export class BuildHttpClient4 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Gets a list of builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition IDs. If specified, filters to builds for these definitions.
     * @param {number[]} queues - A comma-delimited list of queue IDs. If specified, filters to builds that ran against these queues.
     * @param {string} buildNumber - If specified, filters to builds that match this build number. Append * to do a prefix search.
     * @param {Date} minFinishTime - If specified, filters to builds that finished after this date.
     * @param {Date} maxFinishTime - If specified, filters to builds that finished before this date.
     * @param {string} requestedFor - If specified, filters to builds requested for the specified user.
     * @param {Contracts.BuildReason} reasonFilter - If specified, filters to builds that match this reason.
     * @param {Contracts.BuildStatus} statusFilter - If specified, filters to builds that match this status.
     * @param {Contracts.BuildResult} resultFilter - If specified, filters to builds that match this result.
     * @param {string[]} tagFilters - A comma-delimited list of tags. If specified, filters to builds that have the specified tags.
     * @param {string[]} properties - A comma-delimited list of properties to retrieve.
     * @param {number} top - The maximum number of builds to return.
     * @param {string} continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of builds.
     * @param {number} maxBuildsPerDefinition - The maximum number of builds to return per definition.
     * @param {Contracts.QueryDeletedOption} deletedFilter - Indicates whether to exclude, include, or only return deleted builds.
     * @param {Contracts.BuildQueryOrder} queryOrder - The order in which builds should be returned.
     * @param {string} branchName - If specified, filters to builds that built branches that built this branch.
     * @param {number[]} buildIds - A comma-delimited list that specifies the IDs of builds to retrieve.
     * @param {string} repositoryId - If specified, filters to builds that built from this repository.
     * @param {string} repositoryType - If specified, filters to builds that built from repositories of this type.
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string, buildIds?: number[], repositoryId?: string, repositoryType?: string): IPromise<Contracts.Build[]>;
}
export class BuildHttpClient3_2 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets a list of builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition IDs. If specified, filters to builds for these definitions.
     * @param {number[]} queues - A comma-delimited list of queue IDs. If specified, filters to builds that ran against these queues.
     * @param {string} buildNumber - If specified, filters to builds that match this build number. Append * to do a prefix search.
     * @param {Date} minFinishTime - If specified, filters to builds that finished after this date.
     * @param {Date} maxFinishTime - If specified, filters to builds that finished before this date.
     * @param {string} requestedFor - If specified, filters to builds requested for the specified user.
     * @param {Contracts.BuildReason} reasonFilter - If specified, filters to builds that match this reason.
     * @param {Contracts.BuildStatus} statusFilter - If specified, filters to builds that match this status.
     * @param {Contracts.BuildResult} resultFilter - If specified, filters to builds that match this result.
     * @param {string[]} tagFilters - A comma-delimited list of tags. If specified, filters to builds that have the specified tags.
     * @param {string[]} properties - A comma-delimited list of properties to retrieve.
     * @param {number} top - The maximum number of builds to return.
     * @param {string} continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of builds.
     * @param {number} maxBuildsPerDefinition - The maximum number of builds to return per definition.
     * @param {Contracts.QueryDeletedOption} deletedFilter - Indicates whether to exclude, include, or only return deleted builds.
     * @param {Contracts.BuildQueryOrder} queryOrder - The order in which builds should be returned.
     * @param {string} branchName - If specified, filters to builds that built branches that built this branch.
     * @param {number[]} buildIds - A comma-delimited list that specifies the IDs of builds to retrieve.
     * @param {string} repositoryId - If specified, filters to builds that built from this repository.
     * @param {string} repositoryType - If specified, filters to builds that built from repositories of this type.
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string, buildIds?: number[], repositoryId?: string, repositoryType?: string): IPromise<Contracts.Build[]>;
    /**
     * Creates a new definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    createDefinition(definition: Contracts.BuildDefinition3_2, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Deletes a definition and all associated builds
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {Date} minMetricsTime
     * @param {string[]} propertyFilters
     * @param {boolean} includeLatestBuilds
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, minMetricsTime?: Date, propertyFilters?: string[], includeLatestBuilds?: boolean): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @param {string} continuationToken
     * @param {Date} minMetricsTime
     * @param {number[]} definitionIds
     * @param {string} path
     * @param {Date} builtAfter
     * @param {Date} notBuiltAfter
     * @param {boolean} includeAllProperties
     * @param {boolean} includeLatestBuilds
     * @param {string} taskIdFilter
     * @return IPromise<Contracts.BuildDefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number, continuationToken?: string, minMetricsTime?: Date, definitionIds?: number[], path?: string, builtAfter?: Date, notBuiltAfter?: Date, includeAllProperties?: boolean, includeLatestBuilds?: boolean, taskIdFilter?: string): IPromise<Contracts.BuildDefinitionReference[]>;
    /**
     * Updates an existing definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    updateDefinition(definition: Contracts.BuildDefinition3_2, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the requested template.
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets definition templates
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate3_2[]>;
    /**
     * Saves a definition template
     *
     * @param {Contracts.BuildDefinitionTemplate3_2} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate3_2, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
}
export class BuildHttpClient3_1 extends CommonMethods3_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets a list of builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition IDs. If specified, filters to builds for these definitions.
     * @param {number[]} queues - A comma-delimited list of queue IDs. If specified, filters to builds that ran against these queues.
     * @param {string} buildNumber - If specified, filters to builds that match this build number. Append * to do a prefix search.
     * @param {Date} minFinishTime - If specified, filters to builds that finished after this date.
     * @param {Date} maxFinishTime - If specified, filters to builds that finished before this date.
     * @param {string} requestedFor - If specified, filters to builds requested for the specified user.
     * @param {Contracts.BuildReason} reasonFilter - If specified, filters to builds that match this reason.
     * @param {Contracts.BuildStatus} statusFilter - If specified, filters to builds that match this status.
     * @param {Contracts.BuildResult} resultFilter - If specified, filters to builds that match this result.
     * @param {string[]} tagFilters - A comma-delimited list of tags. If specified, filters to builds that have the specified tags.
     * @param {string[]} properties - A comma-delimited list of properties to retrieve.
     * @param {number} top - The maximum number of builds to return.
     * @param {string} continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of builds.
     * @param {number} maxBuildsPerDefinition - The maximum number of builds to return per definition.
     * @param {Contracts.QueryDeletedOption} deletedFilter - Indicates whether to exclude, include, or only return deleted builds.
     * @param {Contracts.BuildQueryOrder} queryOrder - The order in which builds should be returned.
     * @param {string} branchName - If specified, filters to builds that built branches that built this branch.
     * @param {number[]} buildIds - A comma-delimited list that specifies the IDs of builds to retrieve.
     * @param {string} repositoryId - If specified, filters to builds that built from this repository.
     * @param {string} repositoryType - If specified, filters to builds that built from repositories of this type.
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string, buildIds?: number[], repositoryId?: string, repositoryType?: string): IPromise<Contracts.Build[]>;
    /**
     * Creates a new definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    createDefinition(definition: Contracts.BuildDefinition3_2, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Deletes a definition and all associated builds
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {Date} minMetricsTime
     * @param {string[]} propertyFilters
     * @param {boolean} includeLatestBuilds
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, minMetricsTime?: Date, propertyFilters?: string[], includeLatestBuilds?: boolean): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @param {string} continuationToken
     * @param {Date} minMetricsTime
     * @param {number[]} definitionIds
     * @param {string} path
     * @param {Date} builtAfter
     * @param {Date} notBuiltAfter
     * @param {boolean} includeAllProperties
     * @param {boolean} includeLatestBuilds
     * @param {string} taskIdFilter
     * @return IPromise<Contracts.BuildDefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number, continuationToken?: string, minMetricsTime?: Date, definitionIds?: number[], path?: string, builtAfter?: Date, notBuiltAfter?: Date, includeAllProperties?: boolean, includeLatestBuilds?: boolean, taskIdFilter?: string): IPromise<Contracts.BuildDefinitionReference[]>;
    /**
     * Updates an existing definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    updateDefinition(definition: Contracts.BuildDefinition3_2, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the requested template.
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets definition templates
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate3_2[]>;
    /**
     * Saves a definition template
     *
     * @param {Contracts.BuildDefinitionTemplate3_2} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate3_2, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
}
export class BuildHttpClient3 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Gets a list of builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition IDs. If specified, filters to builds for these definitions.
     * @param {number[]} queues - A comma-delimited list of queue IDs. If specified, filters to builds that ran against these queues.
     * @param {string} buildNumber - If specified, filters to builds that match this build number. Append * to do a prefix search.
     * @param {Date} minFinishTime - If specified, filters to builds that finished after this date.
     * @param {Date} maxFinishTime - If specified, filters to builds that finished before this date.
     * @param {string} requestedFor - If specified, filters to builds requested for the specified user.
     * @param {Contracts.BuildReason} reasonFilter - If specified, filters to builds that match this reason.
     * @param {Contracts.BuildStatus} statusFilter - If specified, filters to builds that match this status.
     * @param {Contracts.BuildResult} resultFilter - If specified, filters to builds that match this result.
     * @param {string[]} tagFilters - A comma-delimited list of tags. If specified, filters to builds that have the specified tags.
     * @param {string[]} properties - A comma-delimited list of properties to retrieve.
     * @param {number} top - The maximum number of builds to return.
     * @param {string} continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of builds.
     * @param {number} maxBuildsPerDefinition - The maximum number of builds to return per definition.
     * @param {Contracts.QueryDeletedOption} deletedFilter - Indicates whether to exclude, include, or only return deleted builds.
     * @param {Contracts.BuildQueryOrder} queryOrder - The order in which builds should be returned.
     * @param {string} branchName - If specified, filters to builds that built branches that built this branch.
     * @param {number[]} buildIds - A comma-delimited list that specifies the IDs of builds to retrieve.
     * @param {string} repositoryId - If specified, filters to builds that built from this repository.
     * @param {string} repositoryType - If specified, filters to builds that built from repositories of this type.
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string, buildIds?: number[], repositoryId?: string, repositoryType?: string): IPromise<Contracts.Build[]>;
    /**
     * Creates a new definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    createDefinition(definition: Contracts.BuildDefinition3_2, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Deletes a definition and all associated builds
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {Date} minMetricsTime
     * @param {string[]} propertyFilters
     * @param {boolean} includeLatestBuilds
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, minMetricsTime?: Date, propertyFilters?: string[], includeLatestBuilds?: boolean): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @param {string} continuationToken
     * @param {Date} minMetricsTime
     * @param {number[]} definitionIds
     * @param {string} path
     * @param {Date} builtAfter
     * @param {Date} notBuiltAfter
     * @param {boolean} includeAllProperties
     * @param {boolean} includeLatestBuilds
     * @param {string} taskIdFilter
     * @return IPromise<Contracts.BuildDefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number, continuationToken?: string, minMetricsTime?: Date, definitionIds?: number[], path?: string, builtAfter?: Date, notBuiltAfter?: Date, includeAllProperties?: boolean, includeLatestBuilds?: boolean, taskIdFilter?: string): IPromise<Contracts.BuildDefinitionReference[]>;
    /**
     * Updates an existing definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    updateDefinition(definition: Contracts.BuildDefinition3_2, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * @exemptedapi
     * [Preview API] Gets build metrics for a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {Date} minMetricsTime - The date from which to calculate metrics.
     * @return IPromise<Contracts.BuildMetric[]>
     */
    getDefinitionMetrics(project: string, definitionId: number, minMetricsTime?: Date): IPromise<Contracts.BuildMetric[]>;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the requested template.
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets definition templates
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate3_2[]>;
    /**
     * Saves a definition template
     *
     * @param {Contracts.BuildDefinitionTemplate3_2} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate3_2, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
}
export class BuildHttpClient2_3 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Associates an artifact with a build
     *
     * @param {Contracts.BuildArtifact} artifact
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    createArtifact(artifact: Contracts.BuildArtifact, buildId: number, project?: string): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<void>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {Contracts.QueryDeletedOption} deletedFilter
     * @param {Contracts.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], type?: Contracts.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string): IPromise<Contracts.Build[]>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean, type?: Contracts.DefinitionType): IPromise<Contracts.Change[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets the changes associated between given builds
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of changes to return
     * @return IPromise<Contracts.Change[]>
     */
    getChangesBetweenBuilds(project: string, fromBuildId?: number, toBuildId?: number, top?: number): IPromise<Contracts.Change[]>;
    /**
     * Creates a new definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    createDefinition(definition: Contracts.BuildDefinition3_2, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Deletes a definition and all associated builds
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.DefinitionReference>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[], type?: Contracts.DefinitionType): IPromise<Contracts.DefinitionReference>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DefinitionType} type
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @return IPromise<Contracts.DefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, type?: Contracts.DefinitionType, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number): IPromise<Contracts.DefinitionReference[]>;
    /**
     * Updates an existing definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    updateDefinition(definition: Contracts.BuildDefinition3_2, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<string[]>
     */
    getBuildLogJson(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<string[]>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<string>
     */
    getBuildLogStream(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<string>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Creates a build queue
     *
     * @param {Contracts.AgentPoolQueue} queue
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    createQueue(queue: Contracts.AgentPoolQueue): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @return IPromise<void>
     */
    deleteQueue(id: number): IPromise<void>;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    getAgentPoolQueue(controllerId: number): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.AgentPoolQueue[]>
     */
    getQueues(name?: string): IPromise<Contracts.AgentPoolQueue[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildReportMetadata>
     */
    getBuildReport(project: string, buildId: number, type?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildReportMetadata>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<any>
     */
    getBuildReportHtmlContent(project: string, buildId: number, type?: string, definitionType?: Contracts.DefinitionType): IPromise<any>;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the requested template.
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets definition templates
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate3_2[]>;
    /**
     * Saves a definition template
     *
     * @param {Contracts.BuildDefinitionTemplate3_2} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate3_2, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets all the work item ids inbetween fromBuildId to toBuildId
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of workitems to return
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getWorkItemsBetweenBuilds(project: string, fromBuildId: number, toBuildId: number, top?: number): IPromise<VSS_Common_Contracts.ResourceRef[]>;
}
export class BuildHttpClient2_2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Associates an artifact with a build
     *
     * @param {Contracts.BuildArtifact} artifact
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    createArtifact(artifact: Contracts.BuildArtifact, buildId: number, project?: string): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<void>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {Contracts.QueryDeletedOption} deletedFilter
     * @param {Contracts.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], type?: Contracts.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string): IPromise<Contracts.Build[]>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean, type?: Contracts.DefinitionType): IPromise<Contracts.Change[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets the changes associated between given builds
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of changes to return
     * @return IPromise<Contracts.Change[]>
     */
    getChangesBetweenBuilds(project: string, fromBuildId?: number, toBuildId?: number, top?: number): IPromise<Contracts.Change[]>;
    /**
     * Creates a new definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    createDefinition(definition: Contracts.BuildDefinition3_2, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Deletes a definition and all associated builds
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.DefinitionReference>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[], type?: Contracts.DefinitionType): IPromise<Contracts.DefinitionReference>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DefinitionType} type
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @return IPromise<Contracts.DefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, type?: Contracts.DefinitionType, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number): IPromise<Contracts.DefinitionReference[]>;
    /**
     * Updates an existing definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    updateDefinition(definition: Contracts.BuildDefinition3_2, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Gets the deployment information associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.Deployment[]>
     */
    getBuildDeployments(project: string, buildId: number): IPromise<Contracts.Deployment[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Creates a build queue
     *
     * @param {Contracts.AgentPoolQueue} queue
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    createQueue(queue: Contracts.AgentPoolQueue): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @return IPromise<void>
     */
    deleteQueue(id: number): IPromise<void>;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    getAgentPoolQueue(controllerId: number): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.AgentPoolQueue[]>
     */
    getQueues(name?: string): IPromise<Contracts.AgentPoolQueue[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildReportMetadata>
     */
    getBuildReport(project: string, buildId: number, type?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildReportMetadata>;
    /**
     * @exemptedapi
     * [Preview API] Gets report for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<any>
     */
    getBuildReportHtmlContent(project: string, buildId: number, type?: string, definitionType?: Contracts.DefinitionType): IPromise<any>;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the requested template.
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets definition templates
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate3_2[]>;
    /**
     * Saves a definition template
     *
     * @param {Contracts.BuildDefinitionTemplate3_2} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate3_2, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets all the work item ids inbetween fromBuildId to toBuildId
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of workitems to return
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getWorkItemsBetweenBuilds(project: string, fromBuildId: number, toBuildId: number, top?: number): IPromise<VSS_Common_Contracts.ResourceRef[]>;
}
export class BuildHttpClient2_1 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Associates an artifact with a build
     *
     * @param {Contracts.BuildArtifact} artifact
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    createArtifact(artifact: Contracts.BuildArtifact, buildId: number, project?: string): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<void>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {Contracts.QueryDeletedOption} deletedFilter
     * @param {Contracts.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], type?: Contracts.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string): IPromise<Contracts.Build[]>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean, type?: Contracts.DefinitionType): IPromise<Contracts.Change[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets the changes associated between given builds
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of changes to return
     * @return IPromise<Contracts.Change[]>
     */
    getChangesBetweenBuilds(project: string, fromBuildId?: number, toBuildId?: number, top?: number): IPromise<Contracts.Change[]>;
    /**
     * Creates a new definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    createDefinition(definition: Contracts.BuildDefinition3_2, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Deletes a definition and all associated builds
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.DefinitionReference>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[], type?: Contracts.DefinitionType): IPromise<Contracts.DefinitionReference>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DefinitionType} type
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @return IPromise<Contracts.DefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, type?: Contracts.DefinitionType, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number): IPromise<Contracts.DefinitionReference[]>;
    /**
     * Updates an existing definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    updateDefinition(definition: Contracts.BuildDefinition3_2, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Gets the deployment information associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.Deployment[]>
     */
    getBuildDeployments(project: string, buildId: number): IPromise<Contracts.Deployment[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Creates a build queue
     *
     * @param {Contracts.AgentPoolQueue} queue
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    createQueue(queue: Contracts.AgentPoolQueue): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @return IPromise<void>
     */
    deleteQueue(id: number): IPromise<void>;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    getAgentPoolQueue(controllerId: number): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.AgentPoolQueue[]>
     */
    getQueues(name?: string): IPromise<Contracts.AgentPoolQueue[]>;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the requested template.
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets definition templates
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate3_2[]>;
    /**
     * Saves a definition template
     *
     * @param {Contracts.BuildDefinitionTemplate3_2} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate3_2, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets all the work item ids inbetween fromBuildId to toBuildId
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of workitems to return
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getWorkItemsBetweenBuilds(project: string, fromBuildId: number, toBuildId: number, top?: number): IPromise<VSS_Common_Contracts.ResourceRef[]>;
}
export class BuildHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Associates an artifact with a build
     *
     * @param {Contracts.BuildArtifact} artifact
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    createArtifact(artifact: Contracts.BuildArtifact, buildId: number, project?: string): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<ArrayBuffer>
     */
    getArtifactContentZip(buildId: number, artifactName: string, project?: string, definitionType?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} definitionType
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string, definitionType?: Contracts.DefinitionType): IPromise<Contracts.BuildArtifact[]>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<void>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {Contracts.QueryDeletedOption} deletedFilter
     * @param {Contracts.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], type?: Contracts.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: Contracts.QueryDeletedOption, queryOrder?: Contracts.BuildQueryOrder, branchName?: string): IPromise<Contracts.Build[]>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string, type?: Contracts.DefinitionType): IPromise<Contracts.Build>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.Change[]>
     */
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean, type?: Contracts.DefinitionType): IPromise<Contracts.Change[]>;
    /**
     * Creates a new definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    createDefinition(definition: Contracts.BuildDefinition3_2, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Deletes a definition and all associated builds
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.DefinitionReference>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[], type?: Contracts.DefinitionType): IPromise<Contracts.DefinitionReference>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DefinitionType} type
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {Contracts.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @return IPromise<Contracts.DefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, type?: Contracts.DefinitionType, repositoryId?: string, repositoryType?: string, queryOrder?: Contracts.DefinitionQueryOrder, top?: number): IPromise<Contracts.DefinitionReference[]>;
    /**
     * Updates an existing definition
     *
     * @param {Contracts.BuildDefinition3_2} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @return IPromise<Contracts.BuildDefinition3_2>
     */
    updateDefinition(definition: Contracts.BuildDefinition3_2, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): IPromise<Contracts.BuildDefinition3_2>;
    /**
     * Gets the deployment information associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.Deployment[]>
     */
    getBuildDeployments(project: string, buildId: number): IPromise<Contracts.Deployment[]>;
    /**
     * Gets a log
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<Contracts.BuildLog[]>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.DefinitionType} type
     * @return IPromise<ArrayBuffer>
     */
    getBuildLogsZip(project: string, buildId: number, type?: Contracts.DefinitionType): IPromise<ArrayBuffer>;
    /**
     * Creates a build queue
     *
     * @param {Contracts.AgentPoolQueue} queue
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    createQueue(queue: Contracts.AgentPoolQueue): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @return IPromise<void>
     */
    deleteQueue(id: number): IPromise<void>;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    getAgentPoolQueue(controllerId: number): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.AgentPoolQueue[]>
     */
    getQueues(name?: string): IPromise<Contracts.AgentPoolQueue[]>;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the requested template.
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets definition templates
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate3_2[]>;
    /**
     * Saves a definition template
     *
     * @param {Contracts.BuildDefinitionTemplate3_2} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate3_2>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate3_2, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate3_2>;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param {Contracts.DefinitionType} type
     * @return IPromise<VSS_Common_Contracts.ResourceRef[]>
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number, type?: Contracts.DefinitionType): IPromise<VSS_Common_Contracts.ResourceRef[]>;
}
export class BuildHttpClient extends BuildHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return BuildHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): BuildHttpClient4;
}
declare module "TFS/Core/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_Identities_Contracts = require("VSS/Identities/Contracts");
export enum ConnectedServiceKind {
    /**
     * Custom or unknown service
     */
    Custom = 0,
    /**
     * Azure Subscription
     */
    AzureSubscription = 1,
    /**
     * Chef Connection
     */
    Chef = 2,
    /**
     * Generic Connection
     */
    Generic = 3,
}
export interface IdentityData {
    identityIds: string[];
}
export interface Process extends ProcessReference {
    _links: any;
    description: string;
    id: string;
    isDefault: boolean;
    type: ProcessType;
}
export interface ProcessReference {
    name: string;
    url: string;
}
export enum ProcessType {
    System = 0,
    Custom = 1,
    Inherited = 2,
}
export enum ProjectChangeType {
    Modified = 0,
    Deleted = 1,
    Added = 2,
}
/**
 * Contains information of the project
 */
export interface ProjectInfo {
    abbreviation: string;
    description: string;
    id: string;
    lastUpdateTime: Date;
    name: string;
    properties: ProjectProperty[];
    /**
     * Current revision of the project
     */
    revision: number;
    state: any;
    uri: string;
    version: number;
    visibility: ProjectVisibility;
}
export interface ProjectMessage {
    project: ProjectInfo;
    projectChangeType: ProjectChangeType;
    shouldInvalidateSystemStore: boolean;
}
export interface ProjectProperty {
    name: string;
    value: any;
}
export enum ProjectVisibility {
    Unchanged = -1,
    Private = 0,
    Organization = 1,
    Public = 2,
}
export interface Proxy {
    authorization: ProxyAuthorization;
    /**
     * This is a description string
     */
    description: string;
    /**
     * The friendly name of the server
     */
    friendlyName: string;
    globalDefault: boolean;
    /**
     * This is a string representation of the site that the proxy server is located in (e.g. "NA-WA-RED")
     */
    site: string;
    siteDefault: boolean;
    /**
     * The URL of the proxy server
     */
    url: string;
}
export interface ProxyAuthorization {
    /**
     * Gets or sets the endpoint used to obtain access tokens from the configured token service.
     */
    authorizationUrl: string;
    /**
     * Gets or sets the client identifier for this proxy.
     */
    clientId: string;
    /**
     * Gets or sets the user identity to authorize for on-prem.
     */
    identity: VSS_Identities_Contracts.IdentityDescriptor;
    /**
     * Gets or sets the public key used to verify the identity of this proxy. Only specify on hosted.
     */
    publicKey: VSS_Common_Contracts.PublicKey;
}
export enum SourceControlTypes {
    Tfvc = 1,
    Git = 2,
}
/**
 * The Team Context for an operation.
 */
export interface TeamContext {
    /**
     * The team project Id or name.  Ignored if ProjectId is set.
     */
    project: string;
    /**
     * The Team Project ID.  Required if Project is not set.
     */
    projectId: string;
    /**
     * The Team Id or name.  Ignored if TeamId is set.
     */
    team: string;
    /**
     * The Team Id
     */
    teamId: string;
}
/**
 * Represents a Team Project object.
 */
export interface TeamProject extends TeamProjectReference {
    /**
     * The links to other objects related to this object.
     */
    _links: any;
    /**
     * Set of capabilities this project has (such as process template & version control).
     */
    capabilities: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     * The shallow ref to the default team.
     */
    defaultTeam: WebApiTeamRef;
}
/**
 * Data contract for a TeamProjectCollection.
 */
export interface TeamProjectCollection extends TeamProjectCollectionReference {
    /**
     * The links to other objects related to this object.
     */
    _links: any;
    /**
     * Project collection description.
     */
    description: string;
    /**
     * Project collection state.
     */
    state: string;
}
/**
 * Reference object for a TeamProjectCollection.
 */
export interface TeamProjectCollectionReference {
    /**
     * Collection Id.
     */
    id: string;
    /**
     * Collection Name.
     */
    name: string;
    /**
     * Collection REST Url.
     */
    url: string;
}
/**
 * Represents a shallow reference to a TeamProject.
 */
export interface TeamProjectReference {
    /**
     * Project abbreviation.
     */
    abbreviation: string;
    /**
     * The project's description (if any).
     */
    description: string;
    /**
     * Project identifier.
     */
    id: string;
    /**
     * Project name.
     */
    name: string;
    /**
     * Project revision.
     */
    revision: number;
    /**
     * Project state.
     */
    state: any;
    /**
     * Url to the full version of the object.
     */
    url: string;
    /**
     * Project visibility.
     */
    visibility: ProjectVisibility;
}
/**
 * A data transfer object that stores the metadata associated with the creation of temporary data.
 */
export interface TemporaryDataCreatedDTO extends TemporaryDataDTO {
    expirationDate: Date;
    id: string;
    url: string;
}
/**
 * A data transfer object that stores the metadata associated with the temporary data.
 */
export interface TemporaryDataDTO {
    expirationSeconds: number;
    origin: string;
    value: any;
}
export interface WebApiConnectedService extends WebApiConnectedServiceRef {
    /**
     * The user who did the OAuth authentication to created this service
     */
    authenticatedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Extra description on the service.
     */
    description: string;
    /**
     * Friendly Name of service connection
     */
    friendlyName: string;
    /**
     * Id/Name of the connection service. For Ex: Subscription Id for Azure Connection
     */
    id: string;
    /**
     * The kind of service.
     */
    kind: string;
    /**
     * The project associated with this service
     */
    project: TeamProjectReference;
    /**
     * Optional uri to connect directly to the service such as https://windows.azure.com
     */
    serviceUri: string;
}
export interface WebApiConnectedServiceDetails extends WebApiConnectedServiceRef {
    /**
     * Meta data for service connection
     */
    connectedServiceMetaData: WebApiConnectedService;
    /**
     * Credential info
     */
    credentialsXml: string;
    /**
     * Optional uri to connect directly to the service such as https://windows.azure.com
     */
    endPoint: string;
}
export interface WebApiConnectedServiceRef {
    id: string;
    url: string;
}
/**
 * The representation of data needed to create a tag definition which is sent across the wire.
 */
export interface WebApiCreateTagRequestData {
    /**
     * Name of the tag definition that will be created.
     */
    name: string;
}
export interface WebApiProject extends TeamProjectReference {
    /**
     * Set of capabilities this project has
     */
    capabilities: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     * Reference to collection which contains this project
     */
    collection: WebApiProjectCollectionRef;
    /**
     * Default team for this project
     */
    defaultTeam: WebApiTeamRef;
}
export interface WebApiProjectCollection extends WebApiProjectCollectionRef {
    /**
     * Project collection description
     */
    description: string;
    /**
     * Project collection state
     */
    state: string;
}
export interface WebApiProjectCollectionRef {
    /**
     * Collection Tfs Url (Host Url)
     */
    collectionUrl: string;
    /**
     * Collection Guid
     */
    id: string;
    /**
     * Collection Name
     */
    name: string;
    /**
     * Collection REST Url
     */
    url: string;
}
/**
 * The representation of a tag definition which is sent across the wire.
 */
export interface WebApiTagDefinition {
    /**
     * Whether or not the tag definition is active.
     */
    active: boolean;
    /**
     * ID of the tag definition.
     */
    id: string;
    /**
     * The name of the tag definition.
     */
    name: string;
    /**
     * Resource URL for the Tag Definition.
     */
    url: string;
}
export interface WebApiTeam extends WebApiTeamRef {
    /**
     * Team description
     */
    description: string;
    /**
     * Identity REST API Url to this team
     */
    identityUrl: string;
}
export interface WebApiTeamRef {
    /**
     * Team (Identity) Guid. A Team Foundation ID.
     */
    id: string;
    /**
     * Team name
     */
    name: string;
    /**
     * Team REST API Url
     */
    url: string;
}
export var TypeInfo: {
    ConnectedServiceKind: {
        enumValues: {
            "custom": number;
            "azureSubscription": number;
            "chef": number;
            "generic": number;
        };
    };
    Process: any;
    ProcessType: {
        enumValues: {
            "system": number;
            "custom": number;
            "inherited": number;
        };
    };
    ProjectChangeType: {
        enumValues: {
            "modified": number;
            "deleted": number;
            "added": number;
        };
    };
    ProjectInfo: any;
    ProjectMessage: any;
    ProjectVisibility: {
        enumValues: {
            "unchanged": number;
            "private": number;
            "organization": number;
            "public": number;
        };
    };
    SourceControlTypes: {
        enumValues: {
            "tfvc": number;
            "git": number;
        };
    };
    TeamProject: any;
    TeamProjectReference: any;
    TemporaryDataCreatedDTO: any;
    WebApiConnectedService: any;
    WebApiConnectedServiceDetails: any;
    WebApiProject: any;
};
}
declare module "TFS/Core/RestClient" {
import Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_Operations_Contracts = require("VSS/Operations/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected connectedServicesApiVersion: string;
    protected identityMruApiVersion: string;
    protected processesApiVersion: string;
    protected projectCollectionsApiVersion: string;
    protected projectsApiVersion: string;
    protected proxiesApiVersion: string;
    protected teamsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Update a team's name and/or description.
     *
     * @param {Contracts.WebApiTeam} teamData
     * @param {string} projectId - The name or ID (GUID) of the team project containing the team to update.
     * @param {string} teamId - The name of ID of the team to update.
     * @return IPromise<Contracts.WebApiTeam>
     */
    updateTeam(teamData: Contracts.WebApiTeam, projectId: string, teamId: string): IPromise<Contracts.WebApiTeam>;
    /**
     * Get a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project containing the team.
     * @param {string} teamId - The name or ID (GUID) of the team.
     * @return IPromise<Contracts.WebApiTeam>
     */
    getTeam(projectId: string, teamId: string): IPromise<Contracts.WebApiTeam>;
    /**
     * Delete a team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project containing the team to delete.
     * @param {string} teamId - The name of ID of the team to delete.
     * @return IPromise<void>
     */
    deleteTeam(projectId: string, teamId: string): IPromise<void>;
    /**
     * Create a team in a team project.
     *
     * @param {Contracts.WebApiTeam} team - The team data used to create the team.
     * @param {string} projectId - The name or ID (GUID) of the team project in which to create the team.
     * @return IPromise<Contracts.WebApiTeam>
     */
    createTeam(team: Contracts.WebApiTeam, projectId: string): IPromise<Contracts.WebApiTeam>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} proxyUrl
     * @return IPromise<Contracts.Proxy[]>
     */
    getProxies(proxyUrl?: string): IPromise<Contracts.Proxy[]>;
    /**
     * Update an existing project's name, abbreviation, or description.
     *
     * @param {Contracts.TeamProject} projectUpdate - The updates for the project.
     * @param {string} projectId - The project id of the project to update.
     * @return IPromise<VSS_Operations_Contracts.OperationReference>
     */
    updateProject(projectUpdate: Contracts.TeamProject, projectId: string): IPromise<VSS_Operations_Contracts.OperationReference>;
    /**
     * Queue a project deletion.
     *
     * @param {string} projectId - The project id of the project to delete.
     * @return IPromise<VSS_Operations_Contracts.OperationReference>
     */
    queueDeleteProject(projectId: string): IPromise<VSS_Operations_Contracts.OperationReference>;
    /**
     * Queue a project creation.
     *
     * @param {Contracts.TeamProject} projectToCreate - The project to create.
     * @return IPromise<VSS_Operations_Contracts.OperationReference>
     */
    queueCreateProject(projectToCreate: Contracts.TeamProject): IPromise<VSS_Operations_Contracts.OperationReference>;
    /**
     * Get project references with the specified state
     *
     * @param {any} stateFilter - Filter on team projects in a specific team project state (default: WellFormed).
     * @param {number} top
     * @param {number} skip
     * @param {string} continuationToken
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjects(stateFilter?: any, top?: number, skip?: number, continuationToken?: string): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get project with the specified id or name, optionally including capabilities.
     *
     * @param {string} projectId
     * @param {boolean} includeCapabilities - Include capabilities (such as source control) in the team project result (default: false).
     * @param {boolean} includeHistory - Search within renamed projects (that had such name in the past).
     * @return IPromise<Contracts.TeamProject>
     */
    getProject(projectId: string, includeCapabilities?: boolean, includeHistory?: boolean): IPromise<Contracts.TeamProject>;
    /**
     * Get project collection references for this application.
     *
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.TeamProjectCollectionReference[]>
     */
    getProjectCollections(top?: number, skip?: number): IPromise<Contracts.TeamProjectCollectionReference[]>;
    /**
     * Get project collection with the specified id or name.
     *
     * @param {string} collectionId
     * @return IPromise<Contracts.TeamProjectCollection>
     */
    getProjectCollection(collectionId: string): IPromise<Contracts.TeamProjectCollection>;
    /**
     * Get a list of processes.
     *
     * @return IPromise<Contracts.Process[]>
     */
    getProcesses(): IPromise<Contracts.Process[]>;
    /**
     * Get a process by ID.
     *
     * @param {string} processId - ID for a process.
     * @return IPromise<Contracts.Process>
     */
    getProcessById(processId: string): IPromise<Contracts.Process>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} projectId
     * @param {Contracts.ConnectedServiceKind} kind
     * @return IPromise<Contracts.WebApiConnectedService[]>
     */
    getConnectedServices(projectId: string, kind?: Contracts.ConnectedServiceKind): IPromise<Contracts.WebApiConnectedService[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} projectId
     * @param {string} name
     * @return IPromise<Contracts.WebApiConnectedServiceDetails>
     */
    getConnectedServiceDetails(projectId: string, name: string): IPromise<Contracts.WebApiConnectedServiceDetails>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.WebApiConnectedServiceDetails} connectedServiceCreationData
     * @param {string} projectId
     * @return IPromise<Contracts.WebApiConnectedService>
     */
    createConnectedService(connectedServiceCreationData: Contracts.WebApiConnectedServiceDetails, projectId: string): IPromise<Contracts.WebApiConnectedService>;
}
export class CommonMethods3_1To4_1 extends CommonMethods2To4_1 {
    protected proxiesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} proxyUrl
     * @param {string} site
     * @return IPromise<void>
     */
    deleteProxy(proxyUrl: string, site?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Proxy} proxy
     * @return IPromise<Contracts.Proxy>
     */
    createOrUpdateProxy(proxy: Contracts.Proxy): IPromise<Contracts.Proxy>;
}
export class CommonMethods3_2To4_1 extends CommonMethods3_1To4_1 {
    protected propertiesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Create, update, and delete team project properties.
     *
     * @param {string} projectId - The team project ID.
     * @param {VSS_Common_Contracts.JsonPatchDocument} patchDocument - A JSON Patch document that represents an array of property operations. See RFC 6902 for more details on JSON Patch. The accepted operation verbs are Add and Remove, where Add is used for both creating and updating properties. The path consists of a forward slash and a property name.
     * @return IPromise<void>
     */
    setProjectProperties(projectId: string, patchDocument: VSS_Common_Contracts.JsonPatchDocument): IPromise<void>;
    /**
     * [Preview API] Get a collection of team project properties.
     *
     * @param {string} projectId - The team project ID.
     * @param {string[]} keys - A comma-delimited string of team project property names. Wildcard characters ("?" and "*") are supported. If no key is specified, all properties will be returned.
     * @return IPromise<Contracts.ProjectProperty[]>
     */
    getProjectProperties(projectId: string, keys?: string[]): IPromise<Contracts.ProjectProperty[]>;
}
export class CommonMethods4To4_1 extends CommonMethods3_2To4_1 {
    protected projectHistoryApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {number} minRevision
     * @return IPromise<Contracts.ProjectInfo[]>
     */
    getProjectHistoryEntries(minRevision?: number): IPromise<Contracts.ProjectInfo[]>;
}
/**
 * @exemptedapi
 */
export class CoreHttpClient4_1 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get a list of members for a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.TeamMember[]>
     */
    getTeamMembersWithExtendedProperties(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.TeamMember[]>;
    /**
     * [Preview API] Get a list of all teams.
     *
     * @param {boolean} mine - If true return all the teams requesting user is member, otherwise return all the teams user has read access
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getAllTeams(mine?: boolean, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
    /**
     * [Preview API] Get a list of teams.
     *
     * @param {string} projectId
     * @param {boolean} mine - If true return all the teams requesting user is member, otherwise return all the teams user has read access
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, mine?: boolean, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
}
/**
 * @exemptedapi
 */
export class CoreHttpClient4 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get a list of members for a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * [Preview API] Get a list of teams.
     *
     * @param {string} projectId
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
}
export class CoreHttpClient3_2 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get a list of members for a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} minRevision
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjectHistory(minRevision?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get a list of teams.
     *
     * @param {string} projectId
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
}
export class CoreHttpClient3_1 extends CommonMethods3_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get a list of members for a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} minRevision
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjectHistory(minRevision?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get a list of teams.
     *
     * @param {string} projectId
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
}
export class CoreHttpClient3 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get a list of members for a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} minRevision
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjectHistory(minRevision?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get a list of teams.
     *
     * @param {string} projectId
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
}
export class CoreHttpClient2_3 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get a list of members for a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} minRevision
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjectHistory(minRevision?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get a list of teams.
     *
     * @param {string} projectId
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
}
export class CoreHttpClient2_2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get a list of members for a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} minRevision
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjectHistory(minRevision?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get a list of teams.
     *
     * @param {string} projectId
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
}
export class CoreHttpClient2_1 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get a list of members for a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} minRevision
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjectHistory(minRevision?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get a list of teams.
     *
     * @param {string} projectId
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
}
export class CoreHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get a list of members for a specific team.
     *
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} minRevision
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjectHistory(minRevision?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get a list of teams.
     *
     * @param {string} projectId
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @return IPromise<Contracts.WebApiTeam[]>
     */
    getTeams(projectId: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam[]>;
}
export class CoreHttpClient extends CoreHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return CoreHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): CoreHttpClient4;
}
declare module "TFS/Dashboards/Contracts" {
/**
 * Model of a Dashboard.
 */
export interface Dashboard {
    _links: any;
    /**
     * Description of the dashboard.
     */
    description: string;
    /**
     * Server defined version tracking value, used for edit collision detection.
     */
    eTag: string;
    /**
     * ID of the Dashboard. Provided by service at creation time.
     */
    id: string;
    /**
     * Name of the Dashboard.
     */
    name: string;
    /**
     * ID of the Owner for a dashboard. For any legacy dashboards, this would be the unique identifier for the team associated with the dashboard.
     */
    ownerId: string;
    /**
     * Position of the dashboard, within a dashboard group. If unset at creation time, position is decided by the service.
     */
    position: number;
    /**
     * Interval for client to automatically refresh the dashboard. Expressed in minutes.
     */
    refreshInterval: number;
    url: string;
    /**
     * The set of Widgets on the dashboard.
     */
    widgets: Widget[];
}
/**
 * Describes a list of dashboards associated to an owner. Currently, teams own dashboard groups.
 */
export interface DashboardGroup {
    _links: any;
    /**
     * A list of Dashboards held by the Dashboard Group
     */
    dashboardEntries: DashboardGroupEntry[];
    /**
     * Deprecated: The old permission model describing the level of permissions for the current team. Pre-M125.
     */
    permission: GroupMemberPermission;
    /**
     * A permissions bit mask describing the security permissions of the current team for dashboards. When this permission is the value None, use GroupMemberPermission. Permissions are evaluated based on the presence of a value other than None, else the GroupMemberPermission will be saved.
     */
    teamDashboardPermission: TeamDashboardPermission;
    url: string;
}
/**
 * Dashboard group entry, wraping around Dashboard (needed?)
 */
export interface DashboardGroupEntry extends Dashboard {
}
/**
 * Response from RestAPI when saving and editing DashboardGroupEntry
 */
export interface DashboardGroupEntryResponse extends DashboardGroupEntry {
}
export interface DashboardResponse extends DashboardGroupEntry {
}
/**
 * identifies the scope of dashboard storage and permissions.
 */
export enum DashboardScope {
    Collection_User = 0,
    Project_Team = 1,
}
export enum GroupMemberPermission {
    None = 0,
    Edit = 1,
    Manage = 2,
    ManagePermissions = 3,
}
/**
 * Lightbox configuration
 */
export interface LightboxOptions {
    /**
     * Height of desired lightbox, in pixels
     */
    height: number;
    /**
     * True to allow lightbox resizing, false to disallow lightbox resizing, defaults to false.
     */
    resizable: boolean;
    /**
     * Width of desired lightbox, in pixels
     */
    width: number;
}
/**
 * versioning for an artifact as described at: http://semver.org/, of the form major.minor.patch.
 */
export interface SemanticVersion {
    /**
     * Major version when you make incompatible API changes
     */
    major: number;
    /**
     * Minor version when you add functionality in a backwards-compatible manner
     */
    minor: number;
    /**
     * Patch version when you make backwards-compatible bug fixes
     */
    patch: number;
}
export enum TeamDashboardPermission {
    None = 0,
    Read = 1,
    Create = 2,
    Edit = 4,
    Delete = 8,
    ManagePermissions = 16,
}
/**
 * Widget data
 */
export interface Widget {
    _links: any;
    /**
     * Refers to the allowed sizes for the widget. This gets populated when user wants to configure the widget
     */
    allowedSizes: WidgetSize[];
    /**
     * Refers to unique identifier of a feature artifact. Used for pinning+unpinning a specific artifact.
     */
    artifactId: string;
    configurationContributionId: string;
    configurationContributionRelativeId: string;
    contentUri: string;
    /**
     * The id of the underlying contribution defining the supplied Widget Configuration.
     */
    contributionId: string;
    /**
     * Optional partial dashboard content, to support exchanging dashboard-level version ETag for widget-level APIs
     */
    dashboard: Dashboard;
    eTag: string;
    id: string;
    isEnabled: boolean;
    isNameConfigurable: boolean;
    lightboxOptions: LightboxOptions;
    loadingImageUrl: string;
    name: string;
    position: WidgetPosition;
    settings: string;
    settingsVersion: SemanticVersion;
    size: WidgetSize;
    typeId: string;
    url: string;
}
/**
 * Contribution based information describing Dashboard Widgets.
 */
export interface WidgetMetadata {
    /**
     * Sizes supported by the Widget.
     */
    allowedSizes: WidgetSize[];
    /**
     * Opt-in boolean that indicates if the widget requires the Analytics Service to function. Widgets requiring the analytics service are hidden from the catalog if the Analytics Service is not available.
     */
    analyticsServiceRequired: boolean;
    /**
     * Resource for an icon in the widget catalog.
     */
    catalogIconUrl: string;
    /**
     * Opt-in URL string pointing at widget information. Defaults to extension marketplace URL if omitted
     */
    catalogInfoUrl: string;
    /**
     * The id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionId: string;
    /**
     * The relative id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionRelativeId: string;
    /**
     * Indicates if the widget requires configuration before being added to dashboard.
     */
    configurationRequired: boolean;
    /**
     * Uri for the widget content to be loaded from .
     */
    contentUri: string;
    /**
     * The id of the underlying contribution defining the supplied Widget.
     */
    contributionId: string;
    /**
     * Optional default settings to be copied into widget settings.
     */
    defaultSettings: string;
    /**
     * Summary information describing the widget.
     */
    description: string;
    /**
     * Widgets can be disabled by the app store.  We'll need to gracefully handle for: - persistence (Allow) - Requests (Tag as disabled, and provide context)
     */
    isEnabled: boolean;
    /**
     * Opt-out boolean that indicates if the widget supports widget name/title configuration. Widgets ignoring the name should set it to false in the manifest.
     */
    isNameConfigurable: boolean;
    /**
     * Opt-out boolean indicating if the widget is hidden from the catalog. Commonly, this is used to allow developers to disable creation of a deprecated widget. A widget must have a functional default state, or have a configuration experience, in order to be visible from the catalog.
     */
    isVisibleFromCatalog: boolean;
    /**
     * Opt-in properties for customizing widget presentation in a "lightbox" dialog.
     */
    lightboxOptions: LightboxOptions;
    /**
     * Resource for a loading placeholder image on dashboard
     */
    loadingImageUrl: string;
    /**
     * User facing name of the widget type. Each widget must use a unique value here.
     */
    name: string;
    /**
     * Publisher Name of this kind of widget.
     */
    publisherName: string;
    /**
     * Data contract required for the widget to function and to work in its container.
     */
    supportedScopes: WidgetScope[];
    /**
     * Contribution target IDs
     */
    targets: string[];
    /**
     * Deprecated: locally unique developer-facing id of this kind of widget. ContributionId provides a globally unique identifier for widget types.
     */
    typeId: string;
}
export interface WidgetMetadataResponse {
    uri: string;
    widgetMetadata: WidgetMetadata;
}
export interface WidgetPosition {
    column: number;
    row: number;
}
/**
 * Response from RestAPI when saving and editing Widget
 */
export interface WidgetResponse extends Widget {
}
/**
 * data contract required for the widget to function in a webaccess area or page.
 */
export enum WidgetScope {
    Collection_User = 0,
    Project_Team = 1,
}
export interface WidgetSize {
    /**
     * The Width of the widget, expressed in dashboard grid columns.
     */
    columnSpan: number;
    /**
     * The height of the widget, expressed in dashboard grid rows.
     */
    rowSpan: number;
}
/**
 * Wrapper class to support HTTP header generation using CreateResponse, ClientHeaderParameter and ClientResponseType in WidgetV2Controller
 */
export interface WidgetsVersionedList {
    eTag: string[];
    widgets: Widget[];
}
export interface WidgetTypesResponse {
    _links: any;
    uri: string;
    widgetTypes: WidgetMetadata[];
}
export var TypeInfo: {
    DashboardGroup: any;
    DashboardScope: {
        enumValues: {
            "collection_User": number;
            "project_Team": number;
        };
    };
    GroupMemberPermission: {
        enumValues: {
            "none": number;
            "edit": number;
            "manage": number;
            "managePermissions": number;
        };
    };
    TeamDashboardPermission: {
        enumValues: {
            "none": number;
            "read": number;
            "create": number;
            "edit": number;
            "delete": number;
            "managePermissions": number;
        };
    };
    WidgetMetadata: any;
    WidgetMetadataResponse: any;
    WidgetScope: {
        enumValues: {
            "collection_User": number;
            "project_Team": number;
        };
    };
    WidgetTypesResponse: any;
};
}
declare module "TFS/Dashboards/Events" {
export class Events {
    /**
     * Generic event emitted when the view of the Dashboard changes.
     * Current actions that emit this event:
     *   - Dashboard auto-refresh
     */
    static OnViewChange: string;
}
}
declare module "TFS/Dashboards/RestClient" {
import Contracts = require("TFS/Dashboards/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    protected widgetTypesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get all available widget metadata in alphabetical order.
     *
     * @param {Contracts.WidgetScope} scope
     * @return IPromise<Contracts.WidgetTypesResponse>
     */
    getWidgetTypes(scope: Contracts.WidgetScope): IPromise<Contracts.WidgetTypesResponse>;
    /**
     * [Preview API] Get the widget metadata satisfying the specified contribution ID.
     *
     * @param {string} contributionId - The ID of Contribution for the Widget
     * @return IPromise<Contracts.WidgetMetadataResponse>
     */
    getWidgetMetadata(contributionId: string): IPromise<Contracts.WidgetMetadataResponse>;
}
export class CommonMethods3To4_1 extends CommonMethods2To4_1 {
    protected dashboardsApiVersion: string;
    protected widgetsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Update the supplied widgets on the dashboard using supplied state. State of existing Widgets not passed in the widget list is preserved.
     *
     * @param {Contracts.Widget[]} widgets - The set of widget states to update on the dashboard.
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the Dashboard to modify.
     * @param {String} eTag - Dashboard Widgets Version
     * @return IPromise<Contracts.WidgetsVersionedList>
     */
    updateWidgets(widgets: Contracts.Widget[], teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, eTag?: String): IPromise<Contracts.WidgetsVersionedList>;
    /**
     * [Preview API] Perform a partial update of the specified widget.
     *
     * @param {Contracts.Widget} widget - Description of the widget changes to apply. All non-null fields will be replaced.
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard containing the widget.
     * @param {string} widgetId - ID of the widget to update.
     * @return IPromise<Contracts.Widget>
     */
    updateWidget(widget: Contracts.Widget, teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, widgetId: string): IPromise<Contracts.Widget>;
    /**
     * [Preview API] Replace the widgets on specified dashboard with the supplied widgets.
     *
     * @param {Contracts.Widget[]} widgets - Revised state of widgets to store for the dashboard.
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the Dashboard to modify.
     * @param {String} eTag - Dashboard Widgets Version
     * @return IPromise<Contracts.WidgetsVersionedList>
     */
    replaceWidgets(widgets: Contracts.Widget[], teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, eTag?: String): IPromise<Contracts.WidgetsVersionedList>;
    /**
     * [Preview API] Override the  state of the specified widget.
     *
     * @param {Contracts.Widget} widget - State to be written for the widget.
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard containing the widget.
     * @param {string} widgetId - ID of the widget to update.
     * @return IPromise<Contracts.Widget>
     */
    replaceWidget(widget: Contracts.Widget, teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, widgetId: string): IPromise<Contracts.Widget>;
    /**
     * [Preview API] Get widgets contained on the specified dashboard.
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard to read.
     * @param {String} eTag - Dashboard Widgets Version
     * @return IPromise<Contracts.WidgetsVersionedList>
     */
    getWidgets(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, eTag?: String): IPromise<Contracts.WidgetsVersionedList>;
    /**
     * [Preview API] Get the current state of the specified widget.
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard containing the widget.
     * @param {string} widgetId - ID of the widget to read.
     * @return IPromise<Contracts.Widget>
     */
    getWidget(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, widgetId: string): IPromise<Contracts.Widget>;
    /**
     * [Preview API] Delete the specified widget.
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard containing the widget.
     * @param {string} widgetId - ID of the widget to update.
     * @return IPromise<Contracts.Dashboard>
     */
    deleteWidget(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string, widgetId: string): IPromise<Contracts.Dashboard>;
    /**
     * [Preview API] Create a widget on the specified dashboard.
     *
     * @param {Contracts.Widget} widget - State of the widget to add
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of dashboard the widget will be added to.
     * @return IPromise<Contracts.Widget>
     */
    createWidget(widget: Contracts.Widget, teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string): IPromise<Contracts.Widget>;
    /**
     * [Preview API] Update the name and position of dashboards in the supplied group, and remove omitted dashboards. Does not modify dashboard content.
     *
     * @param {Contracts.DashboardGroup} group
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.DashboardGroup>
     */
    replaceDashboards(group: Contracts.DashboardGroup, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API] Replace configuration for the specified dashboard.
     *
     * @param {Contracts.Dashboard} dashboard - The Configuration of the dashboard to replace.
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard to replace.
     * @return IPromise<Contracts.Dashboard>
     */
    replaceDashboard(dashboard: Contracts.Dashboard, teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string): IPromise<Contracts.Dashboard>;
    /**
     * [Preview API] Get a list of dashboards.
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.DashboardGroup>
     */
    getDashboards(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API] Get a dashboard by its ID.
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     * @return IPromise<Contracts.Dashboard>
     */
    getDashboard(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string): IPromise<Contracts.Dashboard>;
    /**
     * [Preview API] Delete a dashboard given its ID. This also deletes the widgets associated with this dashboard.
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard to delete.
     * @return IPromise<void>
     */
    deleteDashboard(teamContext: TFS_Core_Contracts.TeamContext, dashboardId: string): IPromise<void>;
    /**
     * [Preview API] Create the supplied dashboard.
     *
     * @param {Contracts.Dashboard} dashboard - The initial state of the dashboard
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.Dashboard>
     */
    createDashboard(dashboard: Contracts.Dashboard, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.Dashboard>;
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient4_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient4 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient3_2 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient3_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient3 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient2_3 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient2_2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroupEntry} entry
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroupEntryResponse>
     */
    createDashboard(entry: Contracts.DashboardGroupEntry, groupId: string, project?: string): IPromise<Contracts.DashboardGroupEntryResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDashboard(groupId: string, dashboardId: string, project?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    getDashboard(groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Dashboard} dashboard
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    replaceDashboard(dashboard: Contracts.Dashboard, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API] Get the Dashboard Group, the list of dashboards held under this group.
     *
     * @param {string} groupId - ID of the dashboard group. e.g. the Team Identifier.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    getDashboardGroup(groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API] Override the Dashboard group with the supplied state.
     *
     * @param {Contracts.DashboardGroup} group - The new state of the dashboard group.
     * @param {string} groupId - ID of the dashboard group being updated.  e.g. the Team Identifier.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    replaceDashboardGroup(group: Contracts.DashboardGroup, groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    createWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    getWidget(groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    updateWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient2_1 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroupEntry} entry
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroupEntryResponse>
     */
    createDashboard(entry: Contracts.DashboardGroupEntry, groupId: string, project?: string): IPromise<Contracts.DashboardGroupEntryResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDashboard(groupId: string, dashboardId: string, project?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    getDashboard(groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Dashboard} dashboard
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    replaceDashboard(dashboard: Contracts.Dashboard, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API] Get the Dashboard Group, the list of dashboards held under this group.
     *
     * @param {string} groupId - ID of the dashboard group. e.g. the Team Identifier.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    getDashboardGroup(groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API] Override the Dashboard group with the supplied state.
     *
     * @param {Contracts.DashboardGroup} group - The new state of the dashboard group.
     * @param {string} groupId - ID of the dashboard group being updated.  e.g. the Team Identifier.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    replaceDashboardGroup(group: Contracts.DashboardGroup, groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    createWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    getWidget(groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    updateWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
}
/**
 * @exemptedapi
 */
export class DashboardHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.DashboardGroupEntry} entry
     * @param {string} groupId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroupEntryResponse>
     */
    createDashboard(entry: Contracts.DashboardGroupEntry, groupId: string, project?: string): IPromise<Contracts.DashboardGroupEntryResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDashboard(groupId: string, dashboardId: string, project?: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    getDashboard(groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Dashboard} dashboard
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardResponse>
     */
    replaceDashboard(dashboard: Contracts.Dashboard, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.DashboardResponse>;
    /**
     * [Preview API] Get the Dashboard Group, the list of dashboards held under this group.
     *
     * @param {string} groupId - ID of the dashboard group. e.g. the Team Identifier.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    getDashboardGroup(groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API] Override the Dashboard group with the supplied state.
     *
     * @param {Contracts.DashboardGroup} group - The new state of the dashboard group.
     * @param {string} groupId - ID of the dashboard group being updated.  e.g. the Team Identifier.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DashboardGroup>
     */
    replaceDashboardGroup(group: Contracts.DashboardGroup, groupId: string, project?: string): IPromise<Contracts.DashboardGroup>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    createWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    getWidget(groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
    /**
     * [Preview API]
     *
     * @param {Contracts.Widget} widget
     * @param {string} groupId
     * @param {string} dashboardId
     * @param {string} widgetId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WidgetResponse>
     */
    updateWidget(widget: Contracts.Widget, groupId: string, dashboardId: string, widgetId: string, project?: string): IPromise<Contracts.WidgetResponse>;
}
export class DashboardHttpClient extends DashboardHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return DashboardHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): DashboardHttpClient4;
}
declare module "TFS/Dashboards/Services" {
/**
* This file is a reference to host services that will be provided by the Dashboards
* framework and used by the widgets.
*/
/**
* Initial set of options passed to a widget.
*/
export interface WidgetOptions {
    /**
    * service reference provided by the widget host.
    */
    widgetService: IPromise<IWidgetHostService>;
}
/**
* a service that manages widget host requests for action.
*/
export interface IWidgetHostService {
    /**
    * request the host to open the configuration experience for the widget.
    * If the widget doesnt have configuration experience this is a no-op
    */
    showConfiguration: () => void;
    /**
    * Requst the host to supply id of Widget, if available.
    * Provides means for widget authors to track and understand usage/performance of at context of individual of widgets.
    * Identification should not be relied upon to be present for all widgets. In particular, new unsaved widgets in preview mode do not have an identity yet.
    */
    getWidgetId: () => IPromise<string>;
}
export module WidgetHostService {
    /**
   *  Get an instance of the widget host service
   *
   *  @param configuration Optional configuration to scope the service to.
   */
    function getService(configuration?: WidgetOptions): IPromise<IWidgetHostService>;
}
}
declare module "TFS/Dashboards/WidgetContracts" {
import TFS_Dashboards_Contracts = require("TFS/Dashboards/Contracts");
/**
* settings of the widget that encapsulate their serialized data and version support.
*/
export interface CustomSettings {
    /**
    * the settings data serialized as a string.
    */
    data: string;
    /**
     * (Optional) version for the settings represented as a semantic version object.
     * If none is available, the version defaults to {major:1, minor:0, patch:0} or "1.0.0"
     */
    version?: TFS_Dashboards_Contracts.SemanticVersion;
}
/**
 * A description of widget state, satisfying requirements for rendering a widget (Does not contain grid centric information, or contribution metadata).
 */
export interface WidgetSettings {
    /**
     * size of the widget (in case of configuration, this maps to the size sub section in the general section of the configuration panel)
     */
    size: TFS_Dashboards_Contracts.WidgetSize;
    /**
     * name of the widget (in case of configuration, this maps to the name sub section in the general section of the configuration panel)
     */
    name: string;
    /**
     * settings of the widget
     */
    customSettings: CustomSettings;
    /**
     * Lightbox options
     */
    lightboxOptions?: TFS_Dashboards_Contracts.LightboxOptions;
}
/**
* contract to represent an error used by the framework (and will potentially will be made available to widget authors)
*/
export interface ErrorMessage {
    /**
    * message representing the error.
    */
    message: string;
    /**
    * indicates whether its a rich text or not (that it can have renderable html content).
    */
    isRichText: boolean;
    /**
    * indicates whether this message can be displayed to the user or not. If not a general platform message is shown.
    */
    isUserVisible: boolean;
}
/**
 * Used to differentiate between widget status helpers
 */
export enum WidgetStatusType {
    /**
     * The widget loaded successfully
     */
    Success = 0,
    /**
     * The widget failed to load
     */
    Failure = 1,
    /**
     * The widget needs to be configured
     */
    Unconfigured = 2,
}
/**
 * The object encapsulating the result for an IWidget/IConfigurableWidget method call. This object is created using the WidgetStatusHelper library.
 */
export interface WidgetStatus {
    /**
    * the rendered state of the widget serialized to a string.
    */
    state?: string;
    /**
     * Used to determine which widget status helper was called
     */
    statusType?: WidgetStatusType;
}
/**
 * All widgets implement this interface
 */
export interface IWidget {
    /** widgets use the settings provided along with the any cached data they may have to paint an interactive state. No network calls should be made by the widget.
     *  @param {WidgetSettings} settings of the widget as available when the widget render is called by the host.
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     *          when this calls are completed and the experience is done loading.
     */
    preload: (widgetSettings: WidgetSettings) => IPromise<WidgetStatus>;
    /**
     *  Widgets use the settings provided as well as server side calls to complete their rendering experience.
     *  In the future, widgets are expected to provide a loading experience while the calls are being waited to be completed.
     *  Until then, the widget host will provide the loading experience
     *  @param {WidgetSettings} settings of the widget as available when the widget render is called by the host.
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     *          when this calls are completed and the experience is done loading.
     */
    load: (widgetSettings: WidgetSettings) => IPromise<WidgetStatus>;
    /**
    * Widgets manage any operations that are not necessary for initial load but are required for the full widget experience.
    */
    onDashboardLoaded?: () => void;
    /**
    * The framework calls this method to determine if the widget should be disabled for users with stakeholder license
    * @param {WidgetSettings} settings of the widget as available when the widget render is called by the host.
    * @returns A boolean wrapped in a promise that determines if the widget should be disabled for users with stakeholder license
    */
    disableWidgetForStakeholders?: (widgetSettings: WidgetSettings) => IPromise<boolean>;
    /**
     *  Run widget in lightboxed mode
     *  @param {WidgetSettings} settings of the widget as available when the widget render is called by the host.
     *  @param {LightboxSize} size of the lightbox
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     *          when this calls are completed and the experience is done loading.
     */
    lightbox?: (widgetSettings: WidgetSettings, lightboxSize: Size) => IPromise<WidgetStatus>;
    /**
    *  Listen to message from host
    * @param {string} type of event
    * @param {eventArgs} arguments associated with the event.
    */
    listen?: <T>(event: string, eventArgs: EventArgs<T>) => void;
}
/**
 * Configurable widgets implement this interface
 */
export interface IConfigurableWidget extends IWidget {
    /**
     *  When the configuration view is changed, the widget is expected to update its view.
     *  @param {WidgetSettings} the latest widget settings as available from the configuration view for the widget.
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     */
    reload: (newWidgetSettings: WidgetSettings) => IPromise<WidgetStatus>;
}
/**
 * Widget authors implement this interface for their configuration.
 */
export interface IWidgetConfiguration {
    /**
     *  Called by the host to setup the widget configuration, which uses the settings shared with the widget to complete its rendering experience.
     *  @param {WidgetSettings} settings of the widget as shared with the configuration.
     *  @param {IWidgetConfigurationContext} widgetConfigurationContext provided by the host of the widget configuration to allow for communication.
     *  @returns object wrapped in a promise that encapsulates the success of this operation.
     *           If load fails, returns error message via WidgetStatusHelper.Failure(errorMessage).
     */
    load: (widgetSettings: WidgetSettings, widgetConfigurationContext: IWidgetConfigurationContext) => IPromise<WidgetStatus>;
    /**
     * Called by the host when the user clicks on the Save button.
     * Widget author is expected to run validations if needed.
     * If ready to save, then use WidgetHelpers.WidgetConfigurationSave.Valid() to return the serialized custom settings of the widget from the configuraton.
     * If custom settings are not valid and so not ready to save, then  use WidgetHelpers.WidgetConfigurationSave.Invalid() to notify the host to stop save.
     * @returns object of type SaveStatus wrapped in a promise.
     */
    onSave: () => IPromise<SaveStatus>;
    /**
     * (Optional) Called by the host when the configuration is ready to be saved (when the user clicks the save button on the configuration panel)
     */
    onSaveComplete?: () => void;
    /**
    *  Listen to message from host
    * @param {string} type of event
    * @param {eventArgs} arguments associated with the event.
    */
    listen?: <T>(event: string, eventArgs: EventArgs<T>) => void;
}
/**
* The result of a notification being made by a widget configuration.
*/
export interface NotifyResult {
    /**
    * Gets a response from the subscriber of the notification, if they provide one as part of the schema for the event.
    * @returns A promise with the data representing the return payload serialized as a string.
    */
    getResponse(): IPromise<string>;
}
/**
* Arguments associated with an event being passed by a widget or configurations.
*/
export interface EventArgs<T> {
    /**
    * Data relevant to the event.
    */
    data: T;
}
/**
 * Interface for the object passed to the widget configuration to communicate with its host.
 */
export interface IWidgetConfigurationContext {
    /**
    * The widget configuration calls this method when it wants to notify any of the WidgetEvents to the host
    * @param {string} type of event
    * @param {eventArgs} arguments associated with the event.
    * @returns a promise with the result of the notification. If arguments are malformed, the promise will be rejected. If multiple notifications are made for the same event
    * only the promise for the latest notification is resolved and the rest are treated as stale. The subscriber of the notification can send back information in a serialized form.
    */
    notify: <T>(event: string, eventArgs: EventArgs<T>) => IPromise<NotifyResult>;
}
/**
* Interface for the object passed to the host when user clicks on the Save button in the configuration pane
*/
export interface SaveStatus {
    /**
    * The custom settings to save
    */
    customSettings?: CustomSettings;
    /**
    * Indicates validity of the customSettings. If false, then user will be shown a generic error message and settings will not be saved.
    */
    isValid: boolean;
}
/**
 * Size of lightbox to draw widget in
 */
export interface Size {
    /**
     * width in pixels
     */
    width: number;
    /**
     * height in pixels
     */
    height: number;
}
}
declare module "TFS/Dashboards/WidgetHelpers" {
import TFS_Dashboards_WidgetContracts = require("TFS/Dashboards/WidgetContracts");
/**
 * Loads widget styles for the author into the iframe.
 * @returns a promise for when the styles are done loading into the frame.
 */
export function IncludeWidgetStyles(): IPromise<any>;
/**
 * Loads widget configuration styles for the author into the iframe.
 * @returns a promise for when the styles are done loading into the frame.
 */
export function IncludeWidgetConfigurationStyles(): IPromise<any>;
export class WidgetStatusHelper {
    /**
     * method to encapsulate a successful result for a widget loading operation (load, reload, openLightbox etc)
     * @param state any state information to be passed to the initiator of the loading call.
     * @param title title for the lightbox of a widget when available.
     * @returns promise encapsulating the status of the widget loading operations.
     */
    static Success(state?: string): IPromise<TFS_Dashboards_WidgetContracts.WidgetStatus>;
    /**
     * method to encapsulate a failed result for a widget loading operation (load, reload, openLightbox etc)
     * @param message message to display as part within the widget error experience.
     * @param isUserVisible indicates whether the message should be displayed to the user or a generic error message displayed. Defaults to true.
     * @param isRichText indicates whether the message is an html that can be rendered as a rich experience. Defaults to false. Only trusted extensions are
     * allowed to set this to true. For any 3rd party widgets passing this value as true, it will be ignored.
     * @returns promise encapsulating the status of the widget loading operations.
     */
    static Failure(message: string, isUserVisible?: boolean, isRichText?: boolean): IPromise<TFS_Dashboards_WidgetContracts.WidgetStatus>;
    /**
     * method to encapsulate a result for a widget loading operation that results in the widget being in an unconfigured state.
     * @returns promise encapsulating the status of the widget loading operations.
     */
    static Unconfigured(): IPromise<TFS_Dashboards_WidgetContracts.WidgetStatus>;
}
export class WidgetConfigurationSave {
    /**
     * method to encapsulate a valid state that is returned by the widget configuration
     * @param customSettings settings from the widget configuration to be returned as part of this state.
     * @returns promise encapsulating the state being returned.
     */
    static Valid(customSettings: TFS_Dashboards_WidgetContracts.CustomSettings): IPromise<TFS_Dashboards_WidgetContracts.SaveStatus>;
    /**
     * method to encapsulate an invalid state that is returned by the widget configuration
     * @returns promise encapsulating the state being returned.
     */
    static Invalid(): IPromise<TFS_Dashboards_WidgetContracts.SaveStatus>;
}
export class WidgetEvent {
    /**
    * Configuration has changed. When this event is notified, the preview is updated and Save button is enabled.
    */
    static ConfigurationChange: string;
    /**
    * Lightbox finished resizing. When this event is notified, the lightbox is done resizing.
    */
    static LightboxResized: string;
    static LightboxOptions: string;
    /**
    * Widget configuration general settings changed
    */
    static GeneralSettingsChanged: string;
    static Args<T>(payload: T): TFS_Dashboards_WidgetContracts.EventArgs<T>;
}
export class WidgetSizeConverter {
    /**
    * Cell width of the grid that is used to draw the widgets, this includes the border around the widget (i.e. this is the size of the div, border included)
    */
    private static CellWidth;
    /**
    * Cell height of the grid that is used to draw the widgets, this includes the border around the widget (i.e. this is the size of the div, border included)
    */
    private static CellHeight;
    /**
    * Cell gutter width between the cells that is used to draw the widget, this excludes the border around the widget (i.e. this is distance between widgets)
    */
    private static CellMarginWidth;
    /**
    * Cell gutter height between the cells that is used to draw the widget, this excludes the border around the widget  (i.e. this is distance between widgets)
    */
    private static CellMarginHeight;
    /**
    * Calculates a dimension in pixels, given widget cell size and grid dimensions
    * @returns size in pixels
    */
    private static CalculatePixelSize(cellCount, gridCellSize, gridMarginSize);
    /**
    * @returns width in pixels for 1x1 widget
    */
    static GetWidgetWidth(): number;
    /**
    * @returns height in pixels for 1x1 widget
    */
    static GetWidgetHeight(): number;
    /**
    * @returns width in pixels for widget gutter
    */
    static GetWidgetMarginWidth(): number;
    /**
    *  @returns height in pixels for widget gutter
    */
    static GetWidgetMarginHeight(): number;
    /**
    * Converts widget column span into pixels
    * @returns width in pixels
    */
    static ColumnsToPixelWidth(columnSpan: number): number;
    /**
    * Converts widget row span into pixels
    * @returns height in pixels
    */
    static RowsToPixelHeight(rowSpan: number): number;
}
}
declare module "TFS/DistributedTaskCommon/Contracts" {
/**
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 *
 * See following wiki page for instructions on how to regenerate:
 *   https://vsowiki.com/index.php?title=Rest_Client_Generation
 *
 * Configuration file:
 *   DistributedTask\Shared\Common\Contracts\ClientGeneratorConfigs\genclient.json
 */
export interface AuthorizationHeader {
    name: string;
    value: string;
}
export interface DataSourceBindingBase {
    dataSourceName: string;
    endpointId: string;
    endpointUrl: string;
    headers: AuthorizationHeader[];
    parameters: {
        [key: string]: string;
    };
    resultSelector: string;
    resultTemplate: string;
    target: string;
}
export interface ProcessParameters {
    dataSourceBindings: DataSourceBindingBase[];
    inputs: TaskInputDefinitionBase[];
    sourceDefinitions: TaskSourceDefinitionBase[];
}
export interface TaskInputDefinitionBase {
    aliases: string[];
    defaultValue: string;
    groupName: string;
    helpMarkDown: string;
    label: string;
    name: string;
    options: {
        [key: string]: string;
    };
    properties: {
        [key: string]: string;
    };
    required: boolean;
    type: string;
    validation: TaskInputValidation;
    visibleRule: string;
}
export interface TaskInputValidation {
    /**
     * Conditional expression
     */
    expression: string;
    /**
     * Message explaining how user can correct if validation fails
     */
    message: string;
}
export interface TaskSourceDefinitionBase {
    authKey: string;
    endpoint: string;
    keySelector: string;
    selector: string;
    target: string;
}
}
declare module "TFS/DistributedTask/Contracts" {
import TFS_DistributedTask_Common_Contracts = require("TFS/DistributedTaskCommon/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_FormInput_Contracts = require("VSS/Common/Contracts/FormInput");
export enum AadLoginPromptOption {
    /**
     * Do not provide a prompt option
     */
    NoOption = 0,
    /**
     * Force the user to login again.
     */
    Login = 1,
    /**
     * Force the user to select which account they are logging in with instead of automatically picking the user up from the session state. NOTE: This does not work for switching bewtween the variants of a dual-homed user.
     */
    SelectAccount = 2,
    /**
     * Force the user to login again. <remarks> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login. </remarks>
     */
    FreshLogin = 3,
    /**
     * Force the user to login again with mfa. <remarks> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login, if MFA is required. </remarks>
     */
    FreshLoginWithMfa = 4,
}
export interface AadOauthTokenRequest {
    refresh: boolean;
    resource: string;
    tenantId: string;
    token: string;
}
export interface AadOauthTokenResult {
    accessToken: string;
    refreshTokenCache: string;
}
export interface AgentChangeEvent {
    agent: TaskAgent;
    eventType: string;
    pool: TaskAgentPoolReference;
    poolId: number;
    timeStamp: Date;
}
export interface AgentJobRequestMessage extends JobRequestMessage {
    lockedUntil: Date;
    lockToken: string;
    requestId: number;
    tasks: TaskInstance[];
}
export interface AgentMigrationMessage {
    accessToken: string;
}
export interface AgentPoolEvent {
    eventType: string;
    pool: TaskAgentPool;
}
export interface AgentQueueEvent {
    eventType: string;
    queue: TaskAgentQueue;
}
export interface AgentQueuesEvent {
    eventType: string;
    queues: TaskAgentQueue[];
}
export interface AgentRefreshMessage {
    agentId: number;
    targetVersion: string;
    timeout: any;
}
export interface AgentRequestEvent {
    eventType: string;
    planId: string;
    poolId: number;
    reservedAgentId: number;
    result: TaskResult;
    timeStamp: Date;
}
export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
    Undelete = 4,
}
export interface AuthenticationSchemeReference {
    inputs: {
        [key: string]: string;
    };
    type: string;
}
export interface AuthorizationHeader {
    name: string;
    value: string;
}
export interface AzureKeyVaultPermission extends AzureResourcePermission {
    vault: string;
}
export interface AzureKeyVaultVariableGroupProviderData extends VariableGroupProviderData {
    lastRefreshedOn: Date;
    serviceEndpointId: string;
    vault: string;
}
export interface AzureKeyVaultVariableValue extends VariableValue {
    contentType: string;
    enabled: boolean;
    expires: Date;
}
export interface AzurePermission {
    provisioned: boolean;
    resourceProvider: string;
}
export interface AzureResourcePermission extends AzurePermission {
    resourceGroup: string;
}
export interface AzureRoleAssignmentPermission extends AzurePermission {
    roleAssignmentId: string;
}
export interface AzureSpnOperationStatus {
    state: string;
    statusMessage: string;
}
export interface AzureSubscription {
    displayName: string;
    subscriptionId: string;
    subscriptionTenantId: string;
    subscriptionTenantName: string;
}
export interface AzureSubscriptionQueryResult {
    errorMessage: string;
    value: AzureSubscription[];
}
export interface DataSource {
    authenticationScheme: AuthenticationSchemeReference;
    endpointUrl: string;
    headers: AuthorizationHeader[];
    name: string;
    resourceUrl: string;
    resultSelector: string;
}
export interface DataSourceBinding extends TFS_DistributedTask_Common_Contracts.DataSourceBindingBase {
}
export interface DataSourceDetails {
    dataSourceName: string;
    dataSourceUrl: string;
    headers: AuthorizationHeader[];
    parameters: {
        [key: string]: string;
    };
    resourceUrl: string;
    resultSelector: string;
}
export interface DependencyBinding {
    key: string;
    value: string;
}
export interface DependencyData {
    input: string;
    map: {
        key: string;
        value: {
            key: string;
            value: string;
        }[];
    }[];
}
export interface DependsOn {
    input: string;
    map: DependencyBinding[];
}
export interface DeploymentGroup extends DeploymentGroupReference {
    description: string;
    machineCount: number;
    machines: DeploymentMachine[];
    machineTags: string[];
}
export enum DeploymentGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export enum DeploymentGroupExpands {
    None = 0,
    Machines = 2,
    Tags = 4,
}
export interface DeploymentGroupMetrics {
    columnsHeader: MetricsColumnsHeader;
    deploymentGroup: DeploymentGroupReference;
    rows: MetricsRow[];
}
export interface DeploymentGroupReference {
    id: number;
    name: string;
    pool: TaskAgentPoolReference;
    project: ProjectReference;
}
export interface DeploymentMachine {
    agent: TaskAgent;
    id: number;
    tags: string[];
}
export enum DeploymentMachineExpands {
    None = 0,
    Capabilities = 2,
    AssignedRequest = 4,
}
export interface DeploymentMachineGroup extends DeploymentMachineGroupReference {
    machines: DeploymentMachine[];
    size: number;
}
export interface DeploymentMachineGroupReference {
    id: number;
    name: string;
    pool: TaskAgentPoolReference;
    project: ProjectReference;
}
export interface DeploymentMachinesChangeEvent {
    machineGroupReference: DeploymentGroupReference;
    machines: DeploymentMachine[];
}
export interface DeploymentPoolSummary {
    deploymentGroups: DeploymentGroupReference[];
    offlineAgentsCount: number;
    onlineAgentsCount: number;
    pool: TaskAgentPoolReference;
}
export enum DeploymentPoolSummaryExpands {
    None = 0,
    DeploymentGroups = 2,
}
export enum DeploymentTargetExpands {
    None = 0,
    Capabilities = 2,
    AssignedRequest = 4,
    LastCompletedRequest = 8,
}
export interface DiagnosticLogMetadata {
    agentId: number;
    agentName: string;
    fileName: string;
    phaseName: string;
    phaseResult: string;
    poolId: number;
}
export interface EndpointAuthorization {
    parameters: {
        [key: string]: string;
    };
    scheme: string;
}
export interface EndpointUrl {
    dependsOn: DependsOn;
    displayName: string;
    helpText: string;
    isVisible: string;
    value: string;
}
export interface EventsConfig {
}
export interface ExpressionValidationItem extends ValidationItem {
}
export interface HelpLink {
    text: string;
    url: string;
}
export interface InputBindingContext {
    /**
     * Value of the input
     */
    value: string;
}
export interface InputValidationItem extends ValidationItem {
    /**
     * Provides binding context for the expression to evaluate
     */
    context: InputBindingContext;
}
export interface InputValidationRequest {
    inputs: {
        [key: string]: ValidationItem;
    };
}
export interface Issue {
    category: string;
    data: {
        [key: string]: string;
    };
    message: string;
    type: IssueType;
}
export enum IssueType {
    Error = 1,
    Warning = 2,
}
export interface JobAssignedEvent extends JobEvent {
    request: TaskAgentJobRequest;
}
export interface JobCancelMessage {
    jobId: string;
    timeout: any;
}
export interface JobCompletedEvent extends JobEvent {
    requestId: number;
    result: TaskResult;
}
/**
 * Represents the context of variables and vectors for a job request.
 */
export interface JobEnvironment {
    endpoints: ServiceEndpoint[];
    mask: MaskHint[];
    options: {
        [key: string]: JobOption;
    };
    secureFiles: SecureFile[];
    /**
     * Gets or sets the endpoint used for communicating back to the calling service.
     */
    systemConnection: ServiceEndpoint;
    variables: {
        [key: string]: string;
    };
}
export interface JobEvent {
    jobId: string;
    name: string;
}
export interface JobEventConfig {
    timeout: string;
}
export interface JobEventsConfig extends EventsConfig {
    jobAssigned: JobEventConfig;
    jobCompleted: JobEventConfig;
    jobStarted: JobEventConfig;
}
/**
 * Represents an option that may affect the way an agent runs the job.
 */
export interface JobOption {
    data: {
        [key: string]: string;
    };
    /**
     * Gets the id of the option.
     */
    id: string;
}
export interface JobRequestMessage {
    environment: JobEnvironment;
    jobId: string;
    jobName: string;
    jobRefName: string;
    messageType: string;
    plan: TaskOrchestrationPlanReference;
    timeline: TimelineReference;
}
export interface JobStartedEvent extends JobEvent {
}
export enum MachineGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface MaskHint {
    type: MaskType;
    value: string;
}
export enum MaskType {
    Variable = 1,
    Regex = 2,
}
export interface MetricsColumnMetaData {
    columnName: string;
    columnValueType: string;
}
export interface MetricsColumnsHeader {
    dimensions: MetricsColumnMetaData[];
    metrics: MetricsColumnMetaData[];
}
export interface MetricsRow {
    dimensions: string[];
    metrics: string[];
}
/**
 * Represents a downloadable package.
 */
export interface PackageMetadata {
    /**
     * The date the package was created
     */
    createdOn: Date;
    /**
     * A direct link to download the package.
     */
    downloadUrl: string;
    /**
     * The UI uses this to display instructions, i.e. "unzip MyAgent.zip"
     */
    filename: string;
    /**
     * MD5 hash as a base64 string
     */
    hashValue: string;
    /**
     * A link to documentation
     */
    infoUrl: string;
    /**
     * The platform (win7, linux, etc.)
     */
    platform: string;
    /**
     * The type of package (e.g. "agent")
     */
    type: string;
    /**
     * The package version.
     */
    version: PackageVersion;
}
export interface PackageVersion {
    major: number;
    minor: number;
    patch: number;
}
export interface PlanEnvironment {
    mask: MaskHint[];
    options: {
        [key: string]: JobOption;
    };
    variables: {
        [key: string]: string;
    };
}
export enum PlanGroupStatus {
    Running = 1,
    Queued = 2,
    All = 3,
}
export enum PlanGroupStatusFilter {
    Running = 1,
    Queued = 2,
    All = 3,
}
export interface ProjectReference {
    id: string;
    name: string;
}
export interface PublishTaskGroupMetadata {
    comment: string;
    parentDefinitionRevision: number;
    preview: boolean;
    taskGroupId: string;
    taskGroupRevision: number;
}
export interface ResourceUsage {
    runningPlanGroups: TaskOrchestrationPlanGroup[];
    totalCount: number;
    usedCount: number;
}
export interface ResultTransformationDetails {
    resultTemplate: string;
}
export interface SecureFile {
    createdBy: VSS_Common_Contracts.IdentityRef;
    createdOn: Date;
    id: string;
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    modifiedOn: Date;
    name: string;
    properties: {
        [key: string]: string;
    };
    ticket: string;
}
export enum SecureFileActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface SendJobResponse {
    events: JobEventsConfig;
    variables: {
        [key: string]: string;
    };
}
export interface ServerExecutionDefinition {
    events: EventsConfig;
    handlerName: string;
}
export interface ServerTaskRequestMessage extends JobRequestMessage {
    taskDefinition: TaskDefinition;
    taskInstance: TaskInstance;
}
/**
 * Represents an endpoint which may be used by an orchestration job.
 */
export interface ServiceEndpoint {
    administratorsGroup: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets the authorization data for talking to the endpoint.
     */
    authorization: EndpointAuthorization;
    /**
     * The Gets or sets Identity reference for the user who created the Service endpoint
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    data: {
        [key: string]: string;
    };
    /**
     * Gets or Sets description of endpoint
     */
    description: string;
    groupScopeId: string;
    /**
     * Gets or sets the identifier of this endpoint.
     */
    id: string;
    /**
     * EndPoint state indictor
     */
    isReady: boolean;
    /**
     * Gets or sets the friendly name of the endpoint.
     */
    name: string;
    /**
     * Error message during creation/deletion of endpoint
     */
    operationStatus: any;
    readersGroup: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets the type of the endpoint.
     */
    type: string;
    /**
     * Gets or sets the url of the endpoint.
     */
    url: string;
}
export interface ServiceEndpointAuthenticationScheme {
    authorizationHeaders: AuthorizationHeader[];
    displayName: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    scheme: string;
}
export interface ServiceEndpointDetails {
    authorization: EndpointAuthorization;
    data: {
        [key: string]: string;
    };
    type: string;
    url: string;
}
export interface ServiceEndpointExecutionData {
    definition: TaskOrchestrationOwner;
    finishTime: Date;
    id: number;
    owner: TaskOrchestrationOwner;
    planType: string;
    result: TaskResult;
    startTime: Date;
}
export interface ServiceEndpointExecutionRecord {
    data: ServiceEndpointExecutionData;
    endpointId: string;
}
export interface ServiceEndpointExecutionRecordsInput {
    data: ServiceEndpointExecutionData;
    endpointIds: string[];
}
export interface ServiceEndpointRequest {
    dataSourceDetails: DataSourceDetails;
    resultTransformationDetails: ResultTransformationDetails;
    serviceEndpointDetails: ServiceEndpointDetails;
}
export interface ServiceEndpointRequestResult {
    errorMessage: string;
    result: any;
    statusCode: string;
}
export interface ServiceEndpointType {
    authenticationSchemes: ServiceEndpointAuthenticationScheme[];
    dataSources: DataSource[];
    dependencyData: DependencyData[];
    description: string;
    displayName: string;
    endpointUrl: EndpointUrl;
    helpLink: HelpLink;
    helpMarkDown: string;
    iconUrl: string;
    inputDescriptors: VSS_FormInput_Contracts.InputDescriptor[];
    name: string;
    trustedHosts: string[];
    uiContributionId: string;
}
export interface TaskAgent extends TaskAgentReference {
    /**
     * Gets the request which is currently assigned to this agent.
     */
    assignedRequest: TaskAgentJobRequest;
    /**
     * Gets or sets the authorization information for this agent.
     */
    authorization: TaskAgentAuthorization;
    /**
     * Gets the date on which this agent was created.
     */
    createdOn: Date;
    /**
     * Gets the last request which was completed by this agent.
     */
    lastCompletedRequest: TaskAgentJobRequest;
    /**
     * Gets or sets the maximum job parallelism allowed on this host.
     */
    maxParallelism: number;
    /**
     * Gets the pending update for this agent.
     */
    pendingUpdate: TaskAgentUpdate;
    properties: any;
    /**
     * Gets the date on which the last connectivity status change occurred.
     */
    statusChangedOn: Date;
    systemCapabilities: {
        [key: string]: string;
    };
    userCapabilities: {
        [key: string]: string;
    };
}
/**
 * Provides data necessary for authorizing the agent using OAuth 2.0 authentication flows.
 */
export interface TaskAgentAuthorization {
    /**
     * Gets or sets the endpoint used to obtain access tokens from the configured token service.
     */
    authorizationUrl: string;
    /**
     * Gets or sets the client identifier for this agent.
     */
    clientId: string;
    /**
     * Gets or sets the public key used to verify the identity of this agent.
     */
    publicKey: TaskAgentPublicKey;
}
export interface TaskAgentDelaySource {
    delays: any[];
    taskAgent: TaskAgentReference;
}
export interface TaskAgentJobRequest {
    agentDelays: TaskAgentDelaySource[];
    assignTime: Date;
    data: {
        [key: string]: string;
    };
    definition: TaskOrchestrationOwner;
    demands: any[];
    expectedDuration: any;
    finishTime: Date;
    hostId: string;
    jobId: string;
    jobName: string;
    lockedUntil: Date;
    matchedAgents: TaskAgentReference[];
    owner: TaskOrchestrationOwner;
    planGroup: string;
    planId: string;
    planType: string;
    poolId: number;
    queueId: number;
    queueTime: Date;
    receiveTime: Date;
    requestId: number;
    reservedAgent: TaskAgentReference;
    result: TaskResult;
    scopeId: string;
    serviceOwner: string;
}
export enum TaskAgentJobResultFilter {
    Failed = 1,
    Passed = 2,
    NeverDeployed = 4,
    All = 7,
}
export interface TaskAgentManualUpdate extends TaskAgentUpdateReason {
}
/**
 * Provides a contract for receiving messages from the task orchestrator.
 */
export interface TaskAgentMessage {
    /**
     * Gets or sets the body of the message. If the <c>IV</c> property is provided the body will need to be decrypted using the <c>TaskAgentSession.EncryptionKey</c> value in addition to the <c>IV</c>.
     */
    body: string;
    /**
     * Gets or sets the intialization vector used to encrypt this message.
     */
    iV: number[];
    /**
     * Gets or sets the message identifier.
     */
    messageId: number;
    /**
     * Gets or sets the message type, describing the data contract found in <c>TaskAgentMessage.Body</c>.
     */
    messageType: string;
}
export interface TaskAgentMinAgentVersionRequiredUpdate extends TaskAgentUpdateReason {
    jobDefinition: TaskOrchestrationOwner;
    jobOwner: TaskOrchestrationOwner;
    minAgentVersion: any;
}
export interface TaskAgentPool extends TaskAgentPoolReference {
    /**
     * Gets or sets a value indicating whether or not a queue should be automatically provisioned for each project collection or not.
     */
    autoProvision: boolean;
    /**
     * Gets the identity who created this pool. The creator of the pool is automatically added into the administrators group for the pool on creation.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets the date/time of the pool creation.
     */
    createdOn: Date;
    properties: any;
}
export enum TaskAgentPoolActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface TaskAgentPoolMaintenanceDefinition {
    /**
     * Enable maintenance
     */
    enabled: boolean;
    /**
     * Id
     */
    id: number;
    /**
     * Maintenance job timeout per agent
     */
    jobTimeoutInMinutes: number;
    /**
     * Max percentage of agents within a pool running maintenance job at given time
     */
    maxConcurrentAgentsPercentage: number;
    options: TaskAgentPoolMaintenanceOptions;
    /**
     * Pool reference for the maintenance definition
     */
    pool: TaskAgentPoolReference;
    retentionPolicy: TaskAgentPoolMaintenanceRetentionPolicy;
    scheduleSetting: TaskAgentPoolMaintenanceSchedule;
}
export interface TaskAgentPoolMaintenanceJob {
    /**
     * The maintenance definition for the maintenance job
     */
    definitionId: number;
    /**
     * The total error counts during the maintenance job
     */
    errorCount: number;
    /**
     * Time that the maintenance job was completed
     */
    finishTime: Date;
    /**
     * Id of the maintenance job
     */
    jobId: number;
    /**
     * The log download url for the maintenance job
     */
    logsDownloadUrl: string;
    /**
     * Orchestration/Plan Id for the maintenance job
     */
    orchestrationId: string;
    /**
     * Pool reference for the maintenance job
     */
    pool: TaskAgentPoolReference;
    /**
     * Time that the maintenance job was queued
     */
    queueTime: Date;
    /**
     * The identity that queued the maintenance job
     */
    requestedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The maintenance job result
     */
    result: TaskAgentPoolMaintenanceJobResult;
    /**
     * Time that the maintenance job was started
     */
    startTime: Date;
    /**
     * Status of the maintenance job
     */
    status: TaskAgentPoolMaintenanceJobStatus;
    targetAgents: TaskAgentPoolMaintenanceJobTargetAgent[];
    /**
     * The total warning counts during the maintenance job
     */
    warningCount: number;
}
export enum TaskAgentPoolMaintenanceJobResult {
    Succeeded = 1,
    Failed = 2,
    Canceled = 4,
}
export enum TaskAgentPoolMaintenanceJobStatus {
    InProgress = 1,
    Completed = 2,
    Cancelling = 4,
    Queued = 8,
}
export interface TaskAgentPoolMaintenanceJobTargetAgent {
    agent: TaskAgentReference;
    jobId: number;
    result: TaskAgentPoolMaintenanceJobResult;
    status: TaskAgentPoolMaintenanceJobStatus;
}
export interface TaskAgentPoolMaintenanceOptions {
    /**
     * time to consider a System.DefaultWorkingDirectory is stale
     */
    workingDirectoryExpirationInDays: number;
}
export interface TaskAgentPoolMaintenanceRetentionPolicy {
    /**
     * Number of records to keep for maintenance job executed with this definition.
     */
    numberOfHistoryRecordsToKeep: number;
}
export interface TaskAgentPoolMaintenanceSchedule {
    /**
     * Days for a build (flags enum for days of the week)
     */
    daysToBuild: TaskAgentPoolMaintenanceScheduleDays;
    /**
     * The Job Id of the Scheduled job that will queue the pool maintenance job.
     */
    scheduleJobId: string;
    /**
     * Local timezone hour to start
     */
    startHours: number;
    /**
     * Local timezone minute to start
     */
    startMinutes: number;
    /**
     * Time zone of the build schedule (string representation of the time zone id)
     */
    timeZoneId: string;
}
export enum TaskAgentPoolMaintenanceScheduleDays {
    /**
     * Do not run.
     */
    None = 0,
    /**
     * Run on Monday.
     */
    Monday = 1,
    /**
     * Run on Tuesday.
     */
    Tuesday = 2,
    /**
     * Run on Wednesday.
     */
    Wednesday = 4,
    /**
     * Run on Thursday.
     */
    Thursday = 8,
    /**
     * Run on Friday.
     */
    Friday = 16,
    /**
     * Run on Saturday.
     */
    Saturday = 32,
    /**
     * Run on Sunday.
     */
    Sunday = 64,
    /**
     * Run on all days of the week.
     */
    All = 127,
}
export interface TaskAgentPoolReference {
    id: number;
    /**
     * Gets or sets a value indicating whether or not this pool is managed by the service.
     */
    isHosted: boolean;
    name: string;
    /**
     * Gets or sets the type of the pool
     */
    poolType: TaskAgentPoolType;
    scope: string;
    /**
     * Gets the current size of the pool.
     */
    size: number;
}
export interface TaskAgentPoolSummary {
    columnsHeader: MetricsColumnsHeader;
    deploymentGroups: DeploymentGroupReference[];
    pool: TaskAgentPoolReference;
    queues: TaskAgentQueue[];
    rows: MetricsRow[];
}
export enum TaskAgentPoolType {
    Automation = 1,
    Deployment = 2,
}
/**
 * Represents the public key portion of an RSA asymmetric key.
 */
export interface TaskAgentPublicKey {
    /**
     * Gets or sets the exponent for the public key.
     */
    exponent: number[];
    /**
     * Gets or sets the modulus for the public key.
     */
    modulus: number[];
}
export interface TaskAgentQueue {
    /**
     * Id of the queue
     */
    id: number;
    /**
     * Name of the queue
     */
    name: string;
    /**
     * Pool reference for this queue
     */
    pool: TaskAgentPoolReference;
    /**
     * Project Id
     */
    projectId: string;
}
export enum TaskAgentQueueActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface TaskAgentReference {
    _links: any;
    /**
     * Gets or sets a value indicating whether or not this agent should be enabled for job execution.
     */
    enabled: boolean;
    /**
     * Gets the identifier of the agent.
     */
    id: number;
    /**
     * Gets the name of the agent.
     */
    name: string;
    /**
     * Gets the OS of the agent.
     */
    oSDescription: string;
    /**
     * Gets the current connectivity status of the agent.
     */
    status: TaskAgentStatus;
    /**
     * Gets the version of the agent.
     */
    version: string;
}
/**
 * Represents a session for performing message exchanges from an agent.
 */
export interface TaskAgentSession {
    /**
     * Gets or sets the agent which is the target of the session.
     */
    agent: TaskAgentReference;
    /**
     * Gets the key used to encrypt message traffic for this session.
     */
    encryptionKey: TaskAgentSessionKey;
    /**
     * Gets or sets the owner name of this session. Generally this will be the machine of origination.
     */
    ownerName: string;
    /**
     * Gets the unique identifier for this session.
     */
    sessionId: string;
    systemCapabilities: {
        [key: string]: string;
    };
}
/**
 * Represents a symmetric key used for message-level encryption for communication sent to an agent.
 */
export interface TaskAgentSessionKey {
    /**
     * Gets or sets a value indicating whether or not the key value is encrypted. If this value is true, the Value property should be decrypted using the <c>RSA</c> key exchanged with the server during registration.
     */
    encrypted: boolean;
    /**
     * Gets or sets the symmetric key value.
     */
    value: number[];
}
export enum TaskAgentStatus {
    Offline = 1,
    Online = 2,
}
export enum TaskAgentStatusFilter {
    Offline = 1,
    Online = 2,
    All = 3,
}
export interface TaskAgentUpdate {
    /**
     * The current state of this agent update
     */
    currentState: string;
    /**
     * The reason of this agent update
     */
    reason: TaskAgentUpdateReason;
    /**
     * The identity that request the agent update
     */
    requestedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets the date on which this agent update was requested.
     */
    requestTime: Date;
    /**
     * Gets or sets the source agent version of the agent update
     */
    sourceVersion: PackageVersion;
    /**
     * Gets or sets the target agent version of the agent update
     */
    targetVersion: PackageVersion;
}
export interface TaskAgentUpdateReason {
    code: TaskAgentUpdateReasonType;
}
export enum TaskAgentUpdateReasonType {
    Manual = 1,
    MinAgentVersionRequired = 2,
}
export interface TaskAssignedEvent extends TaskEvent {
}
export interface TaskAttachment {
    _links: any;
    createdOn: Date;
    lastChangedBy: string;
    lastChangedOn: Date;
    name: string;
    recordId: string;
    timelineId: string;
    type: string;
}
export interface TaskChangeEvent {
}
export interface TaskCompletedEvent extends TaskEvent {
    result: TaskResult;
}
export interface TaskDefinition {
    agentExecution: TaskExecution;
    author: string;
    category: string;
    contentsUploaded: boolean;
    contributionIdentifier: string;
    contributionVersion: string;
    dataSourceBindings: DataSourceBinding[];
    definitionType: string;
    demands: any[];
    deprecated: boolean;
    description: string;
    disabled: boolean;
    execution: {
        [key: string]: any;
    };
    friendlyName: string;
    groups: TaskGroupDefinition[];
    helpMarkDown: string;
    hostType: string;
    iconUrl: string;
    id: string;
    inputs: TaskInputDefinition[];
    instanceNameFormat: string;
    minimumAgentVersion: string;
    name: string;
    outputVariables: TaskOutputVariable[];
    packageLocation: string;
    packageType: string;
    preview: boolean;
    releaseNotes: string;
    runsOn: string[];
    satisfies: string[];
    serverOwned: boolean;
    sourceDefinitions: TaskSourceDefinition[];
    sourceLocation: string;
    version: TaskVersion;
    visibility: string[];
}
export interface TaskDefinitionEndpoint {
    /**
     * An ID that identifies a service connection to be used for authenticating endpoint requests.
     */
    connectionId: string;
    /**
     * An Json based keyselector to filter response returned by fetching the endpoint <c>Url</c>.A Json based keyselector must be prefixed with "jsonpath:". KeySelector can be used to specify the filter to get the keys for the values specified with Selector. <example> The following keyselector defines an Json for extracting nodes named 'ServiceName'. <code> endpoint.KeySelector = "jsonpath://ServiceName"; </code></example>
     */
    keySelector: string;
    /**
     * The scope as understood by Connected Services. Essentialy, a project-id for now.
     */
    scope: string;
    /**
     * An XPath/Json based selector to filter response returned by fetching the endpoint <c>Url</c>. An XPath based selector must be prefixed with the string "xpath:". A Json based selector must be prefixed with "jsonpath:". <example> The following selector defines an XPath for extracting nodes named 'ServiceName'. <code> endpoint.Selector = "xpath://ServiceName"; </code></example>
     */
    selector: string;
    /**
     * TaskId that this endpoint belongs to.
     */
    taskId: string;
    /**
     * URL to GET.
     */
    url: string;
}
export interface TaskDefinitionReference {
    /**
     * Gets or sets the definition type. Values can be 'task' or 'metaTask'.
     */
    definitionType: string;
    /**
     * Gets or sets the unique identifier of task.
     */
    id: string;
    /**
     * Gets or sets the version specification of task.
     */
    versionSpec: string;
}
export enum TaskDefinitionStatus {
    Preinstalled = 1,
    ReceivedInstallOrUpdate = 2,
    Installed = 3,
    ReceivedUninstall = 4,
    Uninstalled = 5,
    RequestedUpdate = 6,
    Updated = 7,
    AlreadyUpToDate = 8,
    InlineUpdateReceived = 9,
}
export interface TaskEvent extends JobEvent {
    taskId: string;
}
export interface TaskExecution {
    /**
     * The utility task to run.  Specifying this means that this task definition is simply a meta task to call another task. This is useful for tasks that call utility tasks like powershell and commandline
     */
    execTask: TaskReference;
    /**
     * If a task is going to run code, then this provides the type/script etc... information by platform. For example, it might look like. net45: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } net20: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } java: { jar: "powershelltask.tasks.automation.teamfoundation.microsoft.com", } node: { script: "powershellhost.js", }
     */
    platformInstructions: {
        [key: string]: {
            [key: string]: string;
        };
    };
}
export interface TaskGroup extends TaskDefinition {
    /**
     * Gets or sets comment.
     */
    comment: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets date on which it got created.
     */
    createdOn: Date;
    /**
     * Gets or sets as 'true' to indicate as deleted, 'false' otherwise.
     */
    deleted: boolean;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Gets or sets date on which it got modified.
     */
    modifiedOn: Date;
    /**
     * Gets or sets the owner.
     */
    owner: string;
    /**
     * Gets or sets parent task group Id. This is used while creating a draft task group.
     */
    parentDefinitionId: string;
    /**
     * Gets or sets revision.
     */
    revision: number;
    /**
     * Gets or sets the tasks.
     */
    tasks: TaskGroupStep[];
}
export interface TaskGroupCreateParameter {
    /**
     * Sets author name of the task group.
     */
    author: string;
    /**
     * Sets category of the task group.
     */
    category: string;
    /**
     * Sets description of the task group.
     */
    description: string;
    /**
     * Sets friendly name of the task group.
     */
    friendlyName: string;
    /**
     * Sets url icon of the task group.
     */
    iconUrl: string;
    /**
     * Sets input for the task group.
     */
    inputs: TaskInputDefinition[];
    /**
     * Sets display name of the task group.
     */
    instanceNameFormat: string;
    /**
     * Sets name of the task group.
     */
    name: string;
    /**
     * Sets parent task group Id. This is used while creating a draft task group.
     */
    parentDefinitionId: string;
    /**
     * Sets RunsOn of the task group. Value can be 'Agent', 'Server' or 'DeploymentGroup'.
     */
    runsOn: string[];
    /**
     * Sets tasks for the task group.
     */
    tasks: TaskGroupStep[];
    /**
     * Sets version of the task group.
     */
    version: TaskVersion;
}
export interface TaskGroupDefinition {
    displayName: string;
    isExpanded: boolean;
    name: string;
    tags: string[];
    visibleRule: string;
}
export enum TaskGroupExpands {
    None = 0,
    Tasks = 2,
}
export interface TaskGroupRevision {
    changedBy: VSS_Common_Contracts.IdentityRef;
    changedDate: Date;
    changeType: AuditAction;
    comment: string;
    fileId: number;
    revision: number;
    taskGroupId: string;
}
export interface TaskGroupStep {
    /**
     * Gets or sets as 'true' to run the task always, 'false' otherwise.
     */
    alwaysRun: boolean;
    /**
     * Gets or sets condition for the task.
     */
    condition: string;
    /**
     * Gets or sets as 'true' to continue on error, 'false' otherwise.
     */
    continueOnError: boolean;
    /**
     * Gets or sets the display name.
     */
    displayName: string;
    /**
     * Gets or sets as task is enabled or not.
     */
    enabled: boolean;
    /**
     * Gets or sets dictionary of inputs.
     */
    inputs: {
        [key: string]: string;
    };
    /**
     * Gets or sets the reference of the task.
     */
    task: TaskDefinitionReference;
    /**
     * Gets or sets the maximum time, in minutes, that a task is allowed to execute on agent before being cancelled by server. A zero value indicates an infinite timeout.
     */
    timeoutInMinutes: number;
}
export interface TaskGroupUpdateParameter {
    /**
     * Sets author name of the task group.
     */
    author: string;
    /**
     * Sets category of the task group.
     */
    category: string;
    /**
     * Sets comment of the task group.
     */
    comment: string;
    /**
     * Sets description of the task group.
     */
    description: string;
    /**
     * Sets friendly name of the task group.
     */
    friendlyName: string;
    /**
     * Sets url icon of the task group.
     */
    iconUrl: string;
    /**
     * Sets the unique identifier of this field.
     */
    id: string;
    /**
     * Sets input for the task group.
     */
    inputs: TaskInputDefinition[];
    /**
     * Sets display name of the task group.
     */
    instanceNameFormat: string;
    /**
     * Sets name of the task group.
     */
    name: string;
    /**
     * Gets or sets parent task group Id. This is used while creating a draft task group.
     */
    parentDefinitionId: string;
    /**
     * Sets revision of the task group.
     */
    revision: number;
    /**
     * Sets RunsOn of the task group. Value can be 'Agent', 'Server' or 'DeploymentGroup'.
     */
    runsOn: string[];
    /**
     * Sets tasks for the task group.
     */
    tasks: TaskGroupStep[];
    /**
     * Sets version of the task group.
     */
    version: TaskVersion;
}
export interface TaskHubLicenseDetails {
    enterpriseUsersCount: number;
    freeHostedLicenseCount: number;
    freeLicenseCount: number;
    hasLicenseCountEverUpdated: boolean;
    hostedAgentMinutesFreeCount: number;
    hostedAgentMinutesUsedCount: number;
    msdnUsersCount: number;
    purchasedHostedLicenseCount: number;
    purchasedLicenseCount: number;
    totalLicenseCount: number;
}
export interface TaskInputDefinition extends TFS_DistributedTask_Common_Contracts.TaskInputDefinitionBase {
}
export interface TaskInstance extends TaskReference {
    alwaysRun: boolean;
    condition: string;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    environment: {
        [key: string]: string;
    };
    instanceId: string;
    refName: string;
    timeoutInMinutes: number;
}
export interface TaskLog extends TaskLogReference {
    createdOn: Date;
    indexLocation: string;
    lastChangedOn: Date;
    lineCount: number;
    path: string;
}
export interface TaskLogReference {
    id: number;
    location: string;
}
export interface TaskOrchestrationContainer extends TaskOrchestrationItem {
    children: TaskOrchestrationItem[];
    continueOnError: boolean;
    data: {
        [key: string]: string;
    };
    maxConcurrency: number;
    parallel: boolean;
    rollback: TaskOrchestrationContainer;
}
export interface TaskOrchestrationItem {
    itemType: TaskOrchestrationItemType;
}
export enum TaskOrchestrationItemType {
    Container = 0,
    Job = 1,
}
export interface TaskOrchestrationJob extends TaskOrchestrationItem {
    demands: any[];
    executeAs: VSS_Common_Contracts.IdentityRef;
    executionMode: string;
    executionTimeout: any;
    instanceId: string;
    name: string;
    refName: string;
    tasks: TaskInstance[];
    variables: {
        [key: string]: string;
    };
}
export interface TaskOrchestrationOwner {
    _links: any;
    id: number;
    name: string;
}
export interface TaskOrchestrationPlan extends TaskOrchestrationPlanReference {
    environment: PlanEnvironment;
    finishTime: Date;
    implementation: TaskOrchestrationContainer;
    requestedById: string;
    requestedForId: string;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TaskOrchestrationPlanState;
    timeline: TimelineReference;
}
export interface TaskOrchestrationPlanGroup {
    planGroup: string;
    project: ProjectReference;
    runningRequests: TaskAgentJobRequest[];
}
export interface TaskOrchestrationPlanGroupsQueueMetrics {
    count: number;
    status: PlanGroupStatus;
}
export interface TaskOrchestrationPlanReference {
    artifactLocation: string;
    artifactUri: string;
    definition: TaskOrchestrationOwner;
    owner: TaskOrchestrationOwner;
    planGroup: string;
    planId: string;
    planType: string;
    scopeIdentifier: string;
    version: number;
}
export enum TaskOrchestrationPlanState {
    InProgress = 1,
    Queued = 2,
    Completed = 4,
}
export interface TaskOrchestrationQueuedPlan {
    assignTime: Date;
    definition: TaskOrchestrationOwner;
    owner: TaskOrchestrationOwner;
    planGroup: string;
    planId: string;
    poolId: number;
    queuePosition: number;
    queueTime: Date;
    scopeIdentifier: string;
}
export interface TaskOrchestrationQueuedPlanGroup {
    definition: TaskOrchestrationOwner;
    owner: TaskOrchestrationOwner;
    planGroup: string;
    plans: TaskOrchestrationQueuedPlan[];
    project: ProjectReference;
    queuePosition: number;
}
export interface TaskOutputVariable {
    description: string;
    name: string;
}
export interface TaskPackageMetadata {
    /**
     * Gets the name of the package.
     */
    type: string;
    /**
     * Gets the url of the package.
     */
    url: string;
    /**
     * Gets the version of the package.
     */
    version: string;
}
export interface TaskReference {
    id: string;
    inputs: {
        [key: string]: string;
    };
    name: string;
    version: string;
}
export enum TaskResult {
    Succeeded = 0,
    SucceededWithIssues = 1,
    Failed = 2,
    Canceled = 3,
    Skipped = 4,
    Abandoned = 5,
}
export interface TaskSourceDefinition extends TFS_DistributedTask_Common_Contracts.TaskSourceDefinitionBase {
}
export interface TaskStartedEvent extends TaskEvent {
}
export interface TaskVersion {
    isTest: boolean;
    major: number;
    minor: number;
    patch: number;
}
export interface Timeline extends TimelineReference {
    lastChangedBy: string;
    lastChangedOn: Date;
    records: TimelineRecord[];
}
export interface TimelineRecord {
    changeId: number;
    currentOperation: string;
    details: TimelineReference;
    errorCount: number;
    finishTime: Date;
    id: string;
    issues: Issue[];
    lastModified: Date;
    location: string;
    log: TaskLogReference;
    name: string;
    order: number;
    parentId: string;
    percentComplete: number;
    refName: string;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TimelineRecordState;
    task: TaskReference;
    type: string;
    variables: {
        [key: string]: VariableValue;
    };
    warningCount: number;
    workerName: string;
}
export enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}
export interface TimelineReference {
    changeId: number;
    id: string;
    location: string;
}
export interface ValidationItem {
    /**
     * Tells whether the current input is valid or not
     */
    isValid: boolean;
    /**
     * Reason for input validation failure
     */
    reason: string;
    /**
     * Type of validation item
     */
    type: string;
    /**
     * Value to validate. The conditional expression to validate for the input for "expression" type Eg:eq(variables['Build.SourceBranch'], 'refs/heads/master');eq(value, 'refs/heads/master')
     */
    value: string;
}
export interface VariableGroup {
    createdBy: VSS_Common_Contracts.IdentityRef;
    createdOn: Date;
    description: string;
    id: number;
    modifiedBy: VSS_Common_Contracts.IdentityRef;
    modifiedOn: Date;
    name: string;
    providerData: VariableGroupProviderData;
    type: string;
    variables: {
        [key: string]: VariableValue;
    };
}
export enum VariableGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface VariableGroupProviderData {
}
export interface VariableValue {
    isSecret: boolean;
    value: string;
}
export var TypeInfo: {
    AadLoginPromptOption: {
        enumValues: {
            "noOption": number;
            "login": number;
            "selectAccount": number;
            "freshLogin": number;
            "freshLoginWithMfa": number;
        };
    };
    AgentChangeEvent: any;
    AgentJobRequestMessage: any;
    AgentPoolEvent: any;
    AgentQueueEvent: any;
    AgentQueuesEvent: any;
    AgentRequestEvent: any;
    AuditAction: {
        enumValues: {
            "add": number;
            "update": number;
            "delete": number;
            "undelete": number;
        };
    };
    AzureKeyVaultVariableGroupProviderData: any;
    AzureKeyVaultVariableValue: any;
    DeploymentGroup: any;
    DeploymentGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    DeploymentGroupExpands: {
        enumValues: {
            "none": number;
            "machines": number;
            "tags": number;
        };
    };
    DeploymentGroupMetrics: any;
    DeploymentGroupReference: any;
    DeploymentMachine: any;
    DeploymentMachineExpands: {
        enumValues: {
            "none": number;
            "capabilities": number;
            "assignedRequest": number;
        };
    };
    DeploymentMachineGroup: any;
    DeploymentMachineGroupReference: any;
    DeploymentMachinesChangeEvent: any;
    DeploymentPoolSummary: any;
    DeploymentPoolSummaryExpands: {
        enumValues: {
            "none": number;
            "deploymentGroups": number;
        };
    };
    DeploymentTargetExpands: {
        enumValues: {
            "none": number;
            "capabilities": number;
            "assignedRequest": number;
            "lastCompletedRequest": number;
        };
    };
    Issue: any;
    IssueType: {
        enumValues: {
            "error": number;
            "warning": number;
        };
    };
    JobAssignedEvent: any;
    JobCompletedEvent: any;
    JobEnvironment: any;
    JobRequestMessage: any;
    MachineGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    MaskHint: any;
    MaskType: {
        enumValues: {
            "variable": number;
            "regex": number;
        };
    };
    PackageMetadata: any;
    PlanEnvironment: any;
    PlanGroupStatus: {
        enumValues: {
            "running": number;
            "queued": number;
            "all": number;
        };
    };
    PlanGroupStatusFilter: {
        enumValues: {
            "running": number;
            "queued": number;
            "all": number;
        };
    };
    ResourceUsage: any;
    SecureFile: any;
    SecureFileActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    ServerTaskRequestMessage: any;
    ServiceEndpointAuthenticationScheme: any;
    ServiceEndpointExecutionData: any;
    ServiceEndpointExecutionRecord: any;
    ServiceEndpointExecutionRecordsInput: any;
    ServiceEndpointRequestResult: any;
    ServiceEndpointType: any;
    TaskAgent: any;
    TaskAgentDelaySource: any;
    TaskAgentJobRequest: any;
    TaskAgentJobResultFilter: {
        enumValues: {
            "failed": number;
            "passed": number;
            "neverDeployed": number;
            "all": number;
        };
    };
    TaskAgentManualUpdate: any;
    TaskAgentMinAgentVersionRequiredUpdate: any;
    TaskAgentPool: any;
    TaskAgentPoolActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    TaskAgentPoolMaintenanceDefinition: any;
    TaskAgentPoolMaintenanceJob: any;
    TaskAgentPoolMaintenanceJobResult: {
        enumValues: {
            "succeeded": number;
            "failed": number;
            "canceled": number;
        };
    };
    TaskAgentPoolMaintenanceJobStatus: {
        enumValues: {
            "inProgress": number;
            "completed": number;
            "cancelling": number;
            "queued": number;
        };
    };
    TaskAgentPoolMaintenanceJobTargetAgent: any;
    TaskAgentPoolMaintenanceSchedule: any;
    TaskAgentPoolMaintenanceScheduleDays: {
        enumValues: {
            "none": number;
            "monday": number;
            "tuesday": number;
            "wednesday": number;
            "thursday": number;
            "friday": number;
            "saturday": number;
            "sunday": number;
            "all": number;
        };
    };
    TaskAgentPoolReference: any;
    TaskAgentPoolSummary: any;
    TaskAgentPoolType: {
        enumValues: {
            "automation": number;
            "deployment": number;
        };
    };
    TaskAgentQueue: any;
    TaskAgentQueueActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    TaskAgentReference: any;
    TaskAgentSession: any;
    TaskAgentStatus: {
        enumValues: {
            "offline": number;
            "online": number;
        };
    };
    TaskAgentStatusFilter: {
        enumValues: {
            "offline": number;
            "online": number;
            "all": number;
        };
    };
    TaskAgentUpdate: any;
    TaskAgentUpdateReason: any;
    TaskAgentUpdateReasonType: {
        enumValues: {
            "manual": number;
            "minAgentVersionRequired": number;
        };
    };
    TaskAttachment: any;
    TaskCompletedEvent: any;
    TaskDefinitionStatus: {
        enumValues: {
            "preinstalled": number;
            "receivedInstallOrUpdate": number;
            "installed": number;
            "receivedUninstall": number;
            "uninstalled": number;
            "requestedUpdate": number;
            "updated": number;
            "alreadyUpToDate": number;
            "inlineUpdateReceived": number;
        };
    };
    TaskGroup: any;
    TaskGroupExpands: {
        enumValues: {
            "none": number;
            "tasks": number;
        };
    };
    TaskGroupRevision: any;
    TaskLog: any;
    TaskOrchestrationContainer: any;
    TaskOrchestrationItem: any;
    TaskOrchestrationItemType: {
        enumValues: {
            "container": number;
            "job": number;
        };
    };
    TaskOrchestrationJob: any;
    TaskOrchestrationPlan: any;
    TaskOrchestrationPlanGroup: any;
    TaskOrchestrationPlanGroupsQueueMetrics: any;
    TaskOrchestrationPlanState: {
        enumValues: {
            "inProgress": number;
            "queued": number;
            "completed": number;
        };
    };
    TaskOrchestrationQueuedPlan: any;
    TaskOrchestrationQueuedPlanGroup: any;
    TaskResult: {
        enumValues: {
            "succeeded": number;
            "succeededWithIssues": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
            "abandoned": number;
        };
    };
    Timeline: any;
    TimelineRecord: any;
    TimelineRecordState: {
        enumValues: {
            "pending": number;
            "inProgress": number;
            "completed": number;
        };
    };
    VariableGroup: any;
    VariableGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
};
}
declare module "TFS/DistributedTask/ServiceEndpoint/ExtensionContracts" {
/**
* Interface defining the configuration that is shared between extension targeted at "ms.vss-endpoint.endpoint-ui-catalog" and the host.
*/
export interface IServiceEndpointUiExtensionConfig {
    /**
    * It tells contribution whether configuration is for create or update service endpoint.
    */
    action: "create" | "update";
    /**
    * Required only if action is update.
    * It will be used by contribution to use/ render saved endpoints details.
    */
    serviceEndpointUiExtensionDetails: ServiceEndpointUiExtensionDetails;
    /**
    * If false, host will not call getEndpointDetails.
    * This is a mechanism for contribution to validate the endpoint details entered and show any specific error in case the inputs are not valid.
    */
    validateEndpointDetailsFuncImpl: (validateEndpointDetailsFunc: () => IPromise<boolean>) => void;
    /**
    * Function which will be implemented by contribution to get endpoint details from contribution to host.
    */
    getEndpointDetailsFuncImpl: (getEndpointDetailsFunc: () => IPromise<ServiceEndpointUiExtensionDetails>) => void;
}
export interface ServiceEndpointUiExtensionDetails {
    type: string;
    name: string;
    url: string;
    data: {
        [key: string]: string;
    };
    authorization: {
        scheme: string;
        parameters: {
            [key: string]: string;
        };
    };
}
}
declare module "TFS/DistributedTask/TaskAgentRestClient" {
import Contracts = require("TFS/DistributedTask/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    protected agentsApiVersion: string;
    protected azurermsubscriptionsApiVersion: string;
    protected endpointApiVersion: string;
    protected jobrequestsApiVersion: string;
    protected messagesApiVersion: string;
    protected poolsApiVersion: string;
    protected queuesApiVersion: string;
    protected serviceendpointtypesApiVersion: string;
    protected sessionsApiVersion: string;
    protected usercapabilitiesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {{ [key: string] : string; }} userCapabilities
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<Contracts.TaskAgent>
     */
    updateAgentUserCapabilities(userCapabilities: {
        [key: string]: string;
    }, poolId: number, agentId: number): IPromise<Contracts.TaskAgent>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} type
     * @param {string} scheme
     * @return IPromise<Contracts.ServiceEndpointType[]>
     */
    getServiceEndpointTypes(type?: string, scheme?: string): IPromise<Contracts.ServiceEndpointType[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string[]} queueNames
     * @param {string} project - Project ID or project name
     * @param {Contracts.TaskAgentQueueActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentQueue[]>
     */
    getAgentQueuesByNames(queueNames: string[], project?: string, actionFilter?: Contracts.TaskAgentQueueActionFilter): IPromise<Contracts.TaskAgentQueue[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number[]} queueIds
     * @param {string} project - Project ID or project name
     * @param {Contracts.TaskAgentQueueActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentQueue[]>
     */
    getAgentQueuesByIds(queueIds: number[], project?: string, actionFilter?: Contracts.TaskAgentQueueActionFilter): IPromise<Contracts.TaskAgentQueue[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} queueName
     * @param {Contracts.TaskAgentQueueActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentQueue[]>
     */
    getAgentQueues(project?: string, queueName?: string, actionFilter?: Contracts.TaskAgentQueueActionFilter): IPromise<Contracts.TaskAgentQueue[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} queueId
     * @param {string} project - Project ID or project name
     * @param {Contracts.TaskAgentQueueActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentQueue>
     */
    getAgentQueue(queueId: number, project?: string, actionFilter?: Contracts.TaskAgentQueueActionFilter): IPromise<Contracts.TaskAgentQueue>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {number} queueId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteAgentQueue(queueId: number, project?: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    createTeamProject(project?: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TaskAgentQueue} queue
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskAgentQueue>
     */
    addAgentQueue(queue: Contracts.TaskAgentQueue, project?: string): IPromise<Contracts.TaskAgentQueue>;
    /**
     * @param {Contracts.TaskAgentPool} pool
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentPool>
     */
    updateAgentPool(pool: Contracts.TaskAgentPool, poolId: number): IPromise<Contracts.TaskAgentPool>;
    /**
     * @param {string} poolName
     * @param {string[]} properties
     * @param {Contracts.TaskAgentPoolType} poolType
     * @param {Contracts.TaskAgentPoolActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentPool[]>
     */
    getAgentPools(poolName?: string, properties?: string[], poolType?: Contracts.TaskAgentPoolType, actionFilter?: Contracts.TaskAgentPoolActionFilter): IPromise<Contracts.TaskAgentPool[]>;
    /**
     * @param {number} poolId
     * @param {string[]} properties
     * @param {Contracts.TaskAgentPoolActionFilter} actionFilter
     * @return IPromise<Contracts.TaskAgentPool>
     */
    getAgentPool(poolId: number, properties?: string[], actionFilter?: Contracts.TaskAgentPoolActionFilter): IPromise<Contracts.TaskAgentPool>;
    /**
     * @param {number} poolId
     * @return IPromise<void>
     */
    deleteAgentPool(poolId: number): IPromise<void>;
    /**
     * @param {Contracts.TaskAgentPool} pool
     * @return IPromise<Contracts.TaskAgentPool>
     */
    addAgentPool(pool: Contracts.TaskAgentPool): IPromise<Contracts.TaskAgentPool>;
    /**
     * @param {Contracts.TaskAgentMessage} message
     * @param {number} poolId
     * @param {number} requestId
     * @return IPromise<void>
     */
    sendMessage(message: Contracts.TaskAgentMessage, poolId: number, requestId: number): IPromise<void>;
    /**
     * @param {number} poolId
     * @return IPromise<void>
     */
    refreshAgents(poolId: number): IPromise<void>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<void>
     */
    refreshAgent(poolId: number, agentId: number): IPromise<void>;
    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @param {number} lastMessageId
     * @return IPromise<Contracts.TaskAgentMessage>
     */
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): IPromise<Contracts.TaskAgentMessage>;
    /**
     * @param {number} poolId
     * @param {number} messageId
     * @param {string} sessionId
     * @return IPromise<void>
     */
    deleteMessage(poolId: number, messageId: number, sessionId: string): IPromise<void>;
    /**
     * @param {Contracts.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    updateAgentRequest(request: Contracts.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * @param {Contracts.TaskAgentJobRequest} request
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    queueAgentRequestByPool(request: Contracts.TaskAgentJobRequest, poolId: number): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * @param {number} poolId
     * @param {string} planId
     * @param {string} jobId
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForPlan(poolId: number, planId: string, jobId?: string): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * @param {number} poolId
     * @param {number[]} agentIds
     * @param {number} completedRequestCount
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForAgents(poolId: number, agentIds?: number[], completedRequestCount?: number): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {number} completedRequestCount
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForAgent(poolId: number, agentId: number, completedRequestCount?: number): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * @param {number} poolId
     * @param {number} requestId
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    getAgentRequest(poolId: number, requestId: number): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @param {Contracts.TaskResult} result
     * @return IPromise<void>
     */
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string, result?: Contracts.TaskResult): IPromise<void>;
    /**
     * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
     * @return IPromise<string[]>
     */
    queryEndpoint(endpoint: Contracts.TaskDefinitionEndpoint): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API] Returns list of azure subscriptions
     *
     * @return IPromise<Contracts.AzureSubscriptionQueryResult>
     */
    getAzureSubscriptions(): IPromise<Contracts.AzureSubscriptionQueryResult>;
    /**
     * @param {Contracts.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<Contracts.TaskAgent>
     */
    updateAgent(agent: Contracts.TaskAgent, poolId: number, agentId: number): IPromise<Contracts.TaskAgent>;
    /**
     * @param {Contracts.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<Contracts.TaskAgent>
     */
    replaceAgent(agent: Contracts.TaskAgent, poolId: number, agentId: number): IPromise<Contracts.TaskAgent>;
    /**
     * @param {number} poolId
     * @param {string} agentName
     * @param {boolean} includeCapabilities
     * @param {boolean} includeAssignedRequest
     * @param {string[]} propertyFilters
     * @param {string[]} demands
     * @return IPromise<Contracts.TaskAgent[]>
     */
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[], demands?: string[]): IPromise<Contracts.TaskAgent[]>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {boolean} includeCapabilities
     * @param {boolean} includeAssignedRequest
     * @param {string[]} propertyFilters
     * @return IPromise<Contracts.TaskAgent>
     */
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[]): IPromise<Contracts.TaskAgent>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<void>
     */
    deleteAgent(poolId: number, agentId: number): IPromise<void>;
    /**
     * @param {Contracts.TaskAgent} agent
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgent>
     */
    addAgent(agent: Contracts.TaskAgent, poolId: number): IPromise<Contracts.TaskAgent>;
}
export class CommonMethods2_1To4_1 extends CommonMethods2To4_1 {
    protected tasksApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {string} taskId
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @return IPromise<Contracts.TaskDefinition[]>
     */
    getTaskDefinitions(taskId?: string, visibility?: string[], scopeLocal?: boolean): IPromise<Contracts.TaskDefinition[]>;
    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @return IPromise<Contracts.TaskDefinition>
     */
    getTaskDefinition(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): IPromise<Contracts.TaskDefinition>;
    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @return IPromise<ArrayBuffer>
     */
    getTaskContentZip(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): IPromise<ArrayBuffer>;
    /**
     * @param {string} taskId
     * @return IPromise<void>
     */
    deleteTaskDefinition(taskId: string): IPromise<void>;
}
export class CommonMethods3To4_1 extends CommonMethods2_1To4_1 {
    protected hublicenseApiVersion: string;
    protected packagesApiVersion: string;
    protected serviceendpointproxyApiVersion: string;
    protected serviceendpointsApiVersion: string;
    protected taskgroupsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API] Get a list of task groups.
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group.
     * @param {boolean} expanded - 'true' to recursively expand task groups. Default is 'false'.
     * @param {string} taskIdFilter - Guid of the taskId to filter.
     * @param {boolean} deleted - 'true'to include deleted task groups. Default is 'false'.
     * @return IPromise<Contracts.TaskGroup[]>
     */
    getTaskGroups(project: string, taskGroupId?: string, expanded?: boolean, taskIdFilter?: string, deleted?: boolean): IPromise<Contracts.TaskGroup[]>;
    /**
     * @exemptedapi
     * [Preview API] Delete a task group.
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group to be deleted.
     * @param {string} comment - Comments to delete.
     * @return IPromise<void>
     */
    deleteTaskGroup(project: string, taskGroupId: string, comment?: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API] Create a task group.
     *
     * @param {Contracts.TaskGroupCreateParameter} taskGroup - Task group object to create.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskGroup>
     */
    addTaskGroup(taskGroup: Contracts.TaskGroupCreateParameter, project: string): IPromise<Contracts.TaskGroup>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @param {string} operation
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, project: string, endpointId: string, operation?: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(project: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(project: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(project: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, project: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} project - Project ID or project name
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, project: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, project: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * @param {string} packageType
     * @param {string} platform
     * @param {number} top
     * @return IPromise<Contracts.PackageMetadata[]>
     */
    getPackages(packageType: string, platform?: string, top?: number): IPromise<Contracts.PackageMetadata[]>;
    /**
     * @param {string} packageType
     * @param {string} platform
     * @param {string} version
     * @return IPromise<Contracts.PackageMetadata>
     */
    getPackage(packageType: string, platform: string, version: string): IPromise<Contracts.PackageMetadata>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TaskHubLicenseDetails} taskHubLicenseDetails
     * @param {string} hubName
     * @return IPromise<Contracts.TaskHubLicenseDetails>
     */
    updateTaskHubLicenseDetails(taskHubLicenseDetails: Contracts.TaskHubLicenseDetails, hubName: string): IPromise<Contracts.TaskHubLicenseDetails>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} hubName
     * @param {boolean} includeEnterpriseUsersCount
     * @param {boolean} includeHostedAgentMinutesCount
     * @return IPromise<Contracts.TaskHubLicenseDetails>
     */
    getTaskHubLicenseDetails(hubName: string, includeEnterpriseUsersCount?: boolean, includeHostedAgentMinutesCount?: boolean): IPromise<Contracts.TaskHubLicenseDetails>;
}
export class CommonMethods3_1To4_1 extends CommonMethods3To4_1 {
    protected machinegroupaccesstokenApiVersion: string;
    protected machinegroupsApiVersion: string;
    protected machinesApiVersion: string;
    protected revisionsApiVersion: string;
    protected taskgroupsApiVersion: string;
    protected variablegroupsApiVersion: string;
    protected vstsaadoauthApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @return IPromise<string>
     */
    getVstsAadTenantId(): IPromise<string>;
    /**
     * [Preview API]
     *
     * @param {string} tenantId
     * @param {string} redirectUri
     * @param {Contracts.AadLoginPromptOption} promptOption
     * @param {string} completeCallbackPayload
     * @return IPromise<string>
     */
    createAadOAuthRequest(tenantId: string, redirectUri: string, promptOption?: Contracts.AadLoginPromptOption, completeCallbackPayload?: string): IPromise<string>;
    /**
     * [Preview API]
     *
     * @param {Contracts.AadOauthTokenRequest} authenticationRequest
     * @return IPromise<Contracts.AadOauthTokenResult>
     */
    acquireAccessToken(authenticationRequest: Contracts.AadOauthTokenRequest): IPromise<Contracts.AadOauthTokenResult>;
    /**
     * [Preview API]
     *
     * @param {Contracts.VariableGroup} group
     * @param {string} project - Project ID or project name
     * @param {number} groupId
     * @return IPromise<Contracts.VariableGroup>
     */
    updateVariableGroup(group: Contracts.VariableGroup, project: string, groupId: number): IPromise<Contracts.VariableGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} groupIds
     * @return IPromise<Contracts.VariableGroup[]>
     */
    getVariableGroupsById(project: string, groupIds: number[]): IPromise<Contracts.VariableGroup[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} groupName
     * @param {Contracts.VariableGroupActionFilter} actionFilter
     * @return IPromise<Contracts.VariableGroup[]>
     */
    getVariableGroups(project: string, groupName?: string, actionFilter?: Contracts.VariableGroupActionFilter): IPromise<Contracts.VariableGroup[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} groupId
     * @return IPromise<Contracts.VariableGroup>
     */
    getVariableGroup(project: string, groupId: number): IPromise<Contracts.VariableGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} groupId
     * @return IPromise<void>
     */
    deleteVariableGroup(project: string, groupId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.VariableGroup} group
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.VariableGroup>
     */
    addVariableGroup(group: Contracts.VariableGroup, project: string): IPromise<Contracts.VariableGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @param {number} revision
     * @return IPromise<string>
     */
    getTaskGroupRevision(project: string, taskGroupId: string, revision: number): IPromise<string>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @return IPromise<Contracts.TaskGroupRevision[]>
     */
    getTaskGroupHistory(project: string, taskGroupId: string): IPromise<Contracts.TaskGroupRevision[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine[]} deploymentMachines
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @return IPromise<Contracts.DeploymentMachine[]>
     */
    updateDeploymentMachineGroupMachines(deploymentMachines: Contracts.DeploymentMachine[], project: string, machineGroupId: number): IPromise<Contracts.DeploymentMachine[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @param {string[]} tagFilters
     * @return IPromise<Contracts.DeploymentMachine[]>
     */
    getDeploymentMachineGroupMachines(project: string, machineGroupId: number, tagFilters?: string[]): IPromise<Contracts.DeploymentMachine[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachineGroup} machineGroup
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @return IPromise<Contracts.DeploymentMachineGroup>
     */
    updateDeploymentMachineGroup(machineGroup: Contracts.DeploymentMachineGroup, project: string, machineGroupId: number): IPromise<Contracts.DeploymentMachineGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} machineGroupName
     * @param {Contracts.MachineGroupActionFilter} actionFilter
     * @return IPromise<Contracts.DeploymentMachineGroup[]>
     */
    getDeploymentMachineGroups(project: string, machineGroupName?: string, actionFilter?: Contracts.MachineGroupActionFilter): IPromise<Contracts.DeploymentMachineGroup[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @param {Contracts.MachineGroupActionFilter} actionFilter
     * @return IPromise<Contracts.DeploymentMachineGroup>
     */
    getDeploymentMachineGroup(project: string, machineGroupId: number, actionFilter?: Contracts.MachineGroupActionFilter): IPromise<Contracts.DeploymentMachineGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @return IPromise<void>
     */
    deleteDeploymentMachineGroup(project: string, machineGroupId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachineGroup} machineGroup
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DeploymentMachineGroup>
     */
    addDeploymentMachineGroup(machineGroup: Contracts.DeploymentMachineGroup, project: string): IPromise<Contracts.DeploymentMachineGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @return IPromise<string>
     */
    generateDeploymentMachineGroupAccessToken(project: string, machineGroupId: number): IPromise<string>;
}
export class CommonMethods3_2To4_1 extends CommonMethods3_1To4_1 {
    protected deploymentgroupaccesstokenApiVersion: string;
    protected deploymentgroupsApiVersion: string;
    protected deploymentmachinejobrequestsApiVersion: string;
    protected deploymentmachinemessagesApiVersion: string;
    protected executionhistoryApiVersion: string;
    protected executionhistoryApiVersion_3ad71e20: string;
    protected inputvalidationApiVersion: string;
    protected machinesApiVersion_6f6d406f: string;
    protected maintenancedefinitionsApiVersion: string;
    protected maintenancejobsApiVersion: string;
    protected securefilesApiVersion: string;
    protected serviceendpointsApiVersion: string;
    protected updatesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {number} poolId
     * @param {number} agentId
     * @param {string} currentState
     * @return IPromise<Contracts.TaskAgent>
     */
    updateAgentUpdateState(poolId: number, agentId: number, currentState: string): IPromise<Contracts.TaskAgent>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint[]} endpoints
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    updateServiceEndpoints(endpoints: Contracts.ServiceEndpoint[], project: string): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} endpointNames
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpointsByNames(project: string, endpointNames: string[], type?: string, authSchemes?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * [Preview API] Upload a secure file, include the file stream in the request body
     *
     * @param {any} content - Content to upload
     * @param {string} project - Project ID or project name
     * @param {string} name - Name of the file to upload
     * @return IPromise<Contracts.SecureFile>
     */
    uploadSecureFile(content: any, project: string, name: string): IPromise<Contracts.SecureFile>;
    /**
     * [Preview API] Update properties and/or names of a set of secure files. Files are identified by their IDs. Properties provided override the existing one entirely, i.e. do not merge.
     *
     * @param {Contracts.SecureFile[]} secureFiles - A list of secure file objects. Only three field must be populated Id, Name, and Properties. The rest of fields in the object are ignored.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.SecureFile[]>
     */
    updateSecureFiles(secureFiles: Contracts.SecureFile[], project: string): IPromise<Contracts.SecureFile[]>;
    /**
     * [Preview API] Update the name or properties of an existing secure file
     *
     * @param {Contracts.SecureFile} secureFile - The secure file with updated name and/or properties
     * @param {string} project - Project ID or project name
     * @param {string} secureFileId - The unique secure file Id
     * @return IPromise<Contracts.SecureFile>
     */
    updateSecureFile(secureFile: Contracts.SecureFile, project: string, secureFileId: string): IPromise<Contracts.SecureFile>;
    /**
     * [Preview API] Query secure files using a name pattern and a condition on file properties.
     *
     * @param {string} condition - The main condition syntax is described [here](https://go.microsoft.com/fwlink/?linkid=842996). Use the *property('property-name')* function to access the value of the specified property of a secure file. It returns null if the property is not set. E.g. ``` and( eq( property('devices'), '2' ), in( property('provisioning profile type'), 'ad hoc', 'development' ) ) ```
     * @param {string} project - Project ID or project name
     * @param {string} namePattern - Name of the secure file to match. Can include wildcards to match multiple files.
     * @return IPromise<Contracts.SecureFile[]>
     */
    querySecureFilesByProperties(condition: string, project: string, namePattern?: string): IPromise<Contracts.SecureFile[]>;
    /**
     * [Preview API] Get secure files
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} secureFileNames - A list of secure file Ids
     * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param {Contracts.SecureFileActionFilter} actionFilter
     * @return IPromise<Contracts.SecureFile[]>
     */
    getSecureFilesByNames(project: string, secureFileNames: string[], includeDownloadTickets?: boolean, actionFilter?: Contracts.SecureFileActionFilter): IPromise<Contracts.SecureFile[]>;
    /**
     * [Preview API] Get secure files
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} secureFileIds - A list of secure file Ids
     * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param {Contracts.SecureFileActionFilter} actionFilter
     * @return IPromise<Contracts.SecureFile[]>
     */
    getSecureFilesByIds(project: string, secureFileIds: string[], includeDownloadTickets?: boolean, actionFilter?: Contracts.SecureFileActionFilter): IPromise<Contracts.SecureFile[]>;
    /**
     * [Preview API] Get secure files
     *
     * @param {string} project - Project ID or project name
     * @param {string} namePattern - Name of the secure file to match. Can include wildcards to match multiple files.
     * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param {Contracts.SecureFileActionFilter} actionFilter - Filter by secure file permissions for View, Manage or Use action. Defaults to View.
     * @return IPromise<Contracts.SecureFile[]>
     */
    getSecureFiles(project: string, namePattern?: string, includeDownloadTickets?: boolean, actionFilter?: Contracts.SecureFileActionFilter): IPromise<Contracts.SecureFile[]>;
    /**
     * [Preview API] Get a secure file
     *
     * @param {string} project - Project ID or project name
     * @param {string} secureFileId - The unique secure file Id
     * @param {boolean} includeDownloadTicket - If includeDownloadTicket is true and the caller has permissions, a download ticket is included in the response.
     * @param {Contracts.SecureFileActionFilter} actionFilter
     * @return IPromise<Contracts.SecureFile>
     */
    getSecureFile(project: string, secureFileId: string, includeDownloadTicket?: boolean, actionFilter?: Contracts.SecureFileActionFilter): IPromise<Contracts.SecureFile>;
    /**
     * [Preview API] Download a secure file by Id
     *
     * @param {string} project - Project ID or project name
     * @param {string} secureFileId - The unique secure file Id
     * @param {string} ticket - A valid download ticket
     * @param {boolean} download - If download is true, the file is sent as attachement in the response body. If download is false, the response body contains the file stream.
     * @return IPromise<ArrayBuffer>
     */
    downloadSecureFile(project: string, secureFileId: string, ticket: string, download?: boolean): IPromise<ArrayBuffer>;
    /**
     * [Preview API] Delete a secure file
     *
     * @param {string} project - Project ID or project name
     * @param {string} secureFileId - The unique secure file Id
     * @return IPromise<void>
     */
    deleteSecureFile(project: string, secureFileId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.TaskAgentPoolMaintenanceJob} job
     * @param {number} poolId
     * @param {number} jobId
     * @return IPromise<Contracts.TaskAgentPoolMaintenanceJob>
     */
    updateAgentPoolMaintenanceJob(job: Contracts.TaskAgentPoolMaintenanceJob, poolId: number, jobId: number): IPromise<Contracts.TaskAgentPoolMaintenanceJob>;
    /**
     * [Preview API]
     *
     * @param {Contracts.TaskAgentPoolMaintenanceJob} job
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentPoolMaintenanceJob>
     */
    queueAgentPoolMaintenanceJob(job: Contracts.TaskAgentPoolMaintenanceJob, poolId: number): IPromise<Contracts.TaskAgentPoolMaintenanceJob>;
    /**
     * [Preview API]
     *
     * @param {number} poolId
     * @param {number} definitionId
     * @return IPromise<Contracts.TaskAgentPoolMaintenanceJob[]>
     */
    getAgentPoolMaintenanceJobs(poolId: number, definitionId?: number): IPromise<Contracts.TaskAgentPoolMaintenanceJob[]>;
    /**
     * [Preview API]
     *
     * @param {number} poolId
     * @param {number} jobId
     * @return IPromise<ArrayBuffer>
     */
    getAgentPoolMaintenanceJobLogs(poolId: number, jobId: number): IPromise<ArrayBuffer>;
    /**
     * [Preview API]
     *
     * @param {number} poolId
     * @param {number} jobId
     * @return IPromise<Contracts.TaskAgentPoolMaintenanceJob>
     */
    getAgentPoolMaintenanceJob(poolId: number, jobId: number): IPromise<Contracts.TaskAgentPoolMaintenanceJob>;
    /**
     * [Preview API]
     *
     * @param {number} poolId
     * @param {number} jobId
     * @return IPromise<void>
     */
    deleteAgentPoolMaintenanceJob(poolId: number, jobId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.TaskAgentPoolMaintenanceDefinition} definition
     * @param {number} poolId
     * @param {number} definitionId
     * @return IPromise<Contracts.TaskAgentPoolMaintenanceDefinition>
     */
    updateAgentPoolMaintenanceDefinition(definition: Contracts.TaskAgentPoolMaintenanceDefinition, poolId: number, definitionId: number): IPromise<Contracts.TaskAgentPoolMaintenanceDefinition>;
    /**
     * [Preview API]
     *
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentPoolMaintenanceDefinition[]>
     */
    getAgentPoolMaintenanceDefinitions(poolId: number): IPromise<Contracts.TaskAgentPoolMaintenanceDefinition[]>;
    /**
     * [Preview API]
     *
     * @param {number} poolId
     * @param {number} definitionId
     * @return IPromise<Contracts.TaskAgentPoolMaintenanceDefinition>
     */
    getAgentPoolMaintenanceDefinition(poolId: number, definitionId: number): IPromise<Contracts.TaskAgentPoolMaintenanceDefinition>;
    /**
     * [Preview API]
     *
     * @param {number} poolId
     * @param {number} definitionId
     * @return IPromise<void>
     */
    deleteAgentPoolMaintenanceDefinition(poolId: number, definitionId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.TaskAgentPoolMaintenanceDefinition} definition
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentPoolMaintenanceDefinition>
     */
    createAgentPoolMaintenanceDefinition(definition: Contracts.TaskAgentPoolMaintenanceDefinition, poolId: number): IPromise<Contracts.TaskAgentPoolMaintenanceDefinition>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine[]} machines
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @return IPromise<Contracts.DeploymentMachine[]>
     */
    updateDeploymentMachines(machines: Contracts.DeploymentMachine[], project: string, deploymentGroupId: number): IPromise<Contracts.DeploymentMachine[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     * @return IPromise<Contracts.DeploymentMachine>
     */
    updateDeploymentMachine(machine: Contracts.DeploymentMachine, project: string, deploymentGroupId: number, machineId: number): IPromise<Contracts.DeploymentMachine>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     * @return IPromise<Contracts.DeploymentMachine>
     */
    replaceDeploymentMachine(machine: Contracts.DeploymentMachine, project: string, deploymentGroupId: number, machineId: number): IPromise<Contracts.DeploymentMachine>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {string[]} tags
     * @param {string} name
     * @param {Contracts.DeploymentMachineExpands} expand
     * @return IPromise<Contracts.DeploymentMachine[]>
     */
    getDeploymentMachines(project: string, deploymentGroupId: number, tags?: string[], name?: string, expand?: Contracts.DeploymentMachineExpands): IPromise<Contracts.DeploymentMachine[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     * @param {Contracts.DeploymentMachineExpands} expand
     * @return IPromise<Contracts.DeploymentMachine>
     */
    getDeploymentMachine(project: string, deploymentGroupId: number, machineId: number, expand?: Contracts.DeploymentMachineExpands): IPromise<Contracts.DeploymentMachine>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     * @return IPromise<void>
     */
    deleteDeploymentMachine(project: string, deploymentGroupId: number, machineId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @return IPromise<Contracts.DeploymentMachine>
     */
    addDeploymentMachine(machine: Contracts.DeploymentMachine, project: string, deploymentGroupId: number): IPromise<Contracts.DeploymentMachine>;
    /**
     * [Preview API]
     *
     * @param {Contracts.InputValidationRequest} inputValidationRequest
     * @return IPromise<Contracts.InputValidationRequest>
     */
    validateInputs(inputValidationRequest: Contracts.InputValidationRequest): IPromise<Contracts.InputValidationRequest>;
    /**
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointExecutionRecordsInput} input
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ServiceEndpointExecutionRecord[]>
     */
    addServiceEndpointExecutionRecords(input: Contracts.ServiceEndpointExecutionRecordsInput, project: string): IPromise<Contracts.ServiceEndpointExecutionRecord[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @param {number} top
     * @return IPromise<Contracts.ServiceEndpointExecutionRecord[]>
     */
    getServiceEndpointExecutionRecords(project: string, endpointId: string, top?: number): IPromise<Contracts.ServiceEndpointExecutionRecord[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @return IPromise<void>
     */
    refreshDeploymentMachines(project: string, deploymentGroupId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number[]} machineIds
     * @param {number} completedRequestCount
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForDeploymentMachines(project: string, deploymentGroupId: number, machineIds?: number[], completedRequestCount?: number): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     * @param {number} completedRequestCount
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForDeploymentMachine(project: string, deploymentGroupId: number, machineId: number, completedRequestCount?: number): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentGroup} deploymentGroup
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @return IPromise<Contracts.DeploymentGroup>
     */
    updateDeploymentGroup(deploymentGroup: Contracts.DeploymentGroup, project: string, deploymentGroupId: number): IPromise<Contracts.DeploymentGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DeploymentGroupActionFilter} actionFilter
     * @param {Contracts.DeploymentGroupExpands} expand
     * @param {string} continuationToken
     * @param {number} top
     * @param {number[]} ids
     * @return IPromise<Contracts.DeploymentGroup[]>
     */
    getDeploymentGroups(project: string, name?: string, actionFilter?: Contracts.DeploymentGroupActionFilter, expand?: Contracts.DeploymentGroupExpands, continuationToken?: string, top?: number, ids?: number[]): IPromise<Contracts.DeploymentGroup[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {Contracts.DeploymentGroupActionFilter} actionFilter
     * @param {Contracts.DeploymentGroupExpands} expand
     * @return IPromise<Contracts.DeploymentGroup>
     */
    getDeploymentGroup(project: string, deploymentGroupId: number, actionFilter?: Contracts.DeploymentGroupActionFilter, expand?: Contracts.DeploymentGroupExpands): IPromise<Contracts.DeploymentGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @return IPromise<void>
     */
    deleteDeploymentGroup(project: string, deploymentGroupId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentGroup} deploymentGroup
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.DeploymentGroup>
     */
    addDeploymentGroup(deploymentGroup: Contracts.DeploymentGroup, project: string): IPromise<Contracts.DeploymentGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @return IPromise<string>
     */
    generateDeploymentGroupAccessToken(project: string, deploymentGroupId: number): IPromise<string>;
}
export class CommonMethods4To4_1 extends CommonMethods3_2To4_1 {
    protected deploymentgroupsmetricsApiVersion: string;
    protected taskgroupsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.TaskGroup} taskGroup
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskGroup[]>
     */
    undeleteTaskGroup(taskGroup: Contracts.TaskGroup, project: string): IPromise<Contracts.TaskGroup[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.PublishTaskGroupMetadata} taskGroupMetadata
     * @param {string} project - Project ID or project name
     * @param {string} parentTaskGroupId
     * @return IPromise<Contracts.TaskGroup[]>
     */
    publishTaskGroup(taskGroupMetadata: Contracts.PublishTaskGroupMetadata, project: string, parentTaskGroupId: string): IPromise<Contracts.TaskGroup[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.TaskGroup} taskGroup
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @param {boolean} disablePriorVersions
     * @return IPromise<Contracts.TaskGroup[]>
     */
    publishPreviewTaskGroup(taskGroup: Contracts.TaskGroup, project: string, taskGroupId: string, disablePriorVersions?: boolean): IPromise<Contracts.TaskGroup[]>;
    /**
     * [Obsolete - This REST API is deprecated and will be removed in a future release. Use GetTasGroupAsync(project, searchText = null, expand = null, artifactType = null, artifactSourceId = null, top = null, continuationToken = null, queryOrder = null, path = null, isExactNameMatch = null, tagFilter = null, propertyFilters = null, definitionIdFilter = null, userState = null, cancellationToken = default(CancellationToken)) instead.] Get task group.
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group.
     * @param {string} versionSpec - version specification of the task group. examples: 1, 1.*, 1.*-test.
     * @param {boolean} expanded - 'true' to expand tasks in task group. Default is 'false'.
     * @param {Contracts.TaskGroupExpands} expand
     * @return IPromise<Contracts.TaskGroup>
     */
    getTaskGroup(project: string, taskGroupId: string, versionSpec: string, expanded?: boolean, expand?: Contracts.TaskGroupExpands): IPromise<Contracts.TaskGroup>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} deploymentGroupName
     * @param {string} continuationToken
     * @param {number} top
     * @return IPromise<Contracts.DeploymentGroupMetrics[]>
     */
    getDeploymentGroupsMetrics(project: string, deploymentGroupName?: string, continuationToken?: string, top?: number): IPromise<Contracts.DeploymentGroupMetrics[]>;
}
/**
 * @exemptedapi
 */
export class TaskAgentHttpClient4_1 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {Contracts.TaskAgentJobRequest} request
     * @param {number} queueId
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    queueAgentRequest(request: Contracts.TaskAgentJobRequest, queueId: number): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * [Preview API]
     *
     * @param {number} poolId
     * @return IPromise<string>
     */
    generateDeploymentPoolAccessToken(poolId: number): IPromise<string>;
    /**
     * [Preview API] Get the deployment pools summary.
     *
     * @param {string} poolName - Get summary of deployment pools with name containing poolName.
     * @param {Contracts.DeploymentPoolSummaryExpands} expands - Populate Deployment groups references if set to DeploymentGroups. Default is **None**
     * @return IPromise<Contracts.DeploymentPoolSummary[]>
     */
    getDeploymentPoolsSummary(poolName?: string, expands?: Contracts.DeploymentPoolSummaryExpands): IPromise<Contracts.DeploymentPoolSummary[]>;
    /**
     * [Preview API] Get agent requests for a deployment target.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - Id of the deployment group to which target belongs.
     * @param {number} targetId - Id of the deployment target to get.
     * @param {number} completedRequestCount - Maximum count of completed requests to get.
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForDeploymentTarget(project: string, deploymentGroupId: number, targetId: number, completedRequestCount?: number): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * [Preview API] Get agent requests for deployment targets.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - Id of the deployment group to which targets belongs.
     * @param {number[]} targetIds - Ids of the deployment target to get.
     * @param {number} completedRequestCount - Maximum count of completed requests to get.
     * @return IPromise<Contracts.TaskAgentJobRequest[]>
     */
    getAgentRequestsForDeploymentTargets(project: string, deploymentGroupId: number, targetIds?: number[], completedRequestCount?: number): IPromise<Contracts.TaskAgentJobRequest[]>;
    /**
     * [Preview API] Upgrade the Deployment Targets for a Deployment Group
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - Id of the Deployment Group
     * @return IPromise<void>
     */
    refreshDeploymentTargets(project: string, deploymentGroupId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} resourceType
     * @param {boolean} poolIsHosted
     * @param {boolean} includeRunningPlanGroups
     * @param {number} maxPlanGroupsCount
     * @return IPromise<Contracts.ResourceUsage>
     */
    getResourceUsage(resourceType?: string, poolIsHosted?: boolean, includeRunningPlanGroups?: boolean, maxPlanGroupsCount?: number): IPromise<Contracts.ResourceUsage>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @return IPromise<Contracts.DeploymentMachine>
     */
    addDeploymentTarget(machine: Contracts.DeploymentMachine, project: string, deploymentGroupId: number): IPromise<Contracts.DeploymentMachine>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} targetId
     * @return IPromise<void>
     */
    deleteDeploymentTarget(project: string, deploymentGroupId: number, targetId: number): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} targetId
     * @param {Contracts.DeploymentTargetExpands} expand
     * @return IPromise<Contracts.DeploymentMachine>
     */
    getDeploymentTarget(project: string, deploymentGroupId: number, targetId: number, expand?: Contracts.DeploymentTargetExpands): IPromise<Contracts.DeploymentMachine>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {string[]} tags
     * @param {string} name
     * @param {boolean} partialNameMatch
     * @param {Contracts.DeploymentTargetExpands} expand
     * @param {Contracts.TaskAgentStatusFilter} agentStatus
     * @param {Contracts.TaskAgentJobResultFilter} agentJobResult
     * @param {string} continuationToken
     * @param {number} top
     * @return IPromise<Contracts.DeploymentMachine[]>
     */
    getDeploymentTargets(project: string, deploymentGroupId: number, tags?: string[], name?: string, partialNameMatch?: boolean, expand?: Contracts.DeploymentTargetExpands, agentStatus?: Contracts.TaskAgentStatusFilter, agentJobResult?: Contracts.TaskAgentJobResultFilter, continuationToken?: string, top?: number): IPromise<Contracts.DeploymentMachine[]>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} targetId
     * @return IPromise<Contracts.DeploymentMachine>
     */
    replaceDeploymentTarget(machine: Contracts.DeploymentMachine, project: string, deploymentGroupId: number, targetId: number): IPromise<Contracts.DeploymentMachine>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} targetId
     * @return IPromise<Contracts.DeploymentMachine>
     */
    updateDeploymentTarget(machine: Contracts.DeploymentMachine, project: string, deploymentGroupId: number, targetId: number): IPromise<Contracts.DeploymentMachine>;
    /**
     * [Preview API]
     *
     * @param {Contracts.DeploymentMachine[]} machines
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @return IPromise<Contracts.DeploymentMachine[]>
     */
    updateDeploymentTargets(machines: Contracts.DeploymentMachine[], project: string, deploymentGroupId: number): IPromise<Contracts.DeploymentMachine[]>;
    /**
     * [Preview API] Update a task group.
     *
     * @param {Contracts.TaskGroupUpdateParameter} taskGroup - Task group to update.
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group to update.
     * @return IPromise<Contracts.TaskGroup>
     */
    updateTaskGroup(taskGroup: Contracts.TaskGroupUpdateParameter, project: string, taskGroupId?: string): IPromise<Contracts.TaskGroup>;
}
/**
 * @exemptedapi
 */
export class TaskAgentHttpClient4 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Obsolete - Use UpdateTaskGroup(Guid taskGroupId, [FromBody] TaskGroupUpdateParameter taskGroup) instead] Update a task group.
     *
     * @param {Contracts.TaskGroupUpdateParameter} taskGroup - Task group to update.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskGroup>
     */
    updateTaskGroup(taskGroup: Contracts.TaskGroupUpdateParameter, project: string): IPromise<Contracts.TaskGroup>;
}
/**
 * @exemptedapi
 */
export class TaskAgentHttpClient3_2 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Obsolete - Use UpdateTaskGroup(Guid taskGroupId, [FromBody] TaskGroupUpdateParameter taskGroup) instead] Update a task group.
     *
     * @param {Contracts.TaskGroupUpdateParameter} taskGroup - Task group to update.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskGroup>
     */
    updateTaskGroup(taskGroup: Contracts.TaskGroupUpdateParameter, project: string): IPromise<Contracts.TaskGroup>;
}
/**
 * @exemptedapi
 */
export class TaskAgentHttpClient3_1 extends CommonMethods3_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Obsolete - Use UpdateTaskGroup(Guid taskGroupId, [FromBody] TaskGroupUpdateParameter taskGroup) instead] Update a task group.
     *
     * @param {Contracts.TaskGroupUpdateParameter} taskGroup - Task group to update.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskGroup>
     */
    updateTaskGroup(taskGroup: Contracts.TaskGroupUpdateParameter, project: string): IPromise<Contracts.TaskGroup>;
}
/**
 * @exemptedapi
 */
export class TaskAgentHttpClient3 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Obsolete - Use UpdateTaskGroup(Guid taskGroupId, [FromBody] TaskGroupUpdateParameter taskGroup) instead] Update a task group.
     *
     * @param {Contracts.TaskGroupUpdateParameter} taskGroup - Task group to update.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TaskGroup>
     */
    updateTaskGroup(taskGroup: Contracts.TaskGroupUpdateParameter, project: string): IPromise<Contracts.TaskGroup>;
}
export class TaskAgentHttpClient2_3 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<Contracts.TaskPackageMetadata>
     */
    getPackage(packageType: string): IPromise<Contracts.TaskPackageMetadata>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<ArrayBuffer>
     */
    getPackageZip(packageType: string): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, scopeIdentifier: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param {string} operation
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string, endpointId: string, operation?: string): IPromise<Contracts.ServiceEndpoint>;
}
export class TaskAgentHttpClient2_2 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<Contracts.TaskPackageMetadata>
     */
    getPackage(packageType: string): IPromise<Contracts.TaskPackageMetadata>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<ArrayBuffer>
     */
    getPackageZip(packageType: string): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, scopeIdentifier: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param {string} operation
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string, endpointId: string, operation?: string): IPromise<Contracts.ServiceEndpoint>;
}
export class TaskAgentHttpClient2_1 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<Contracts.TaskPackageMetadata>
     */
    getPackage(packageType: string): IPromise<Contracts.TaskPackageMetadata>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<ArrayBuffer>
     */
    getPackageZip(packageType: string): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, scopeIdentifier: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param {string} operation
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string, endpointId: string, operation?: string): IPromise<Contracts.ServiceEndpoint>;
}
export class TaskAgentHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<Contracts.TaskPackageMetadata>
     */
    getPackage(packageType: string): IPromise<Contracts.TaskPackageMetadata>;
    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     *
     * @param {string} packageType
     * @return IPromise<ArrayBuffer>
     */
    getPackageZip(packageType: string): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpointRequestResult>
     */
    executeServiceEndpointRequest(serviceEndpointRequest: Contracts.ServiceEndpointRequest, scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpointRequestResult>;
    /**
     * [Obsolete - Use ExecuteServiceEndpointRequest API Instead] Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<string[]>
     */
    queryServiceEndpoint(binding: Contracts.DataSourceBinding, scopeIdentifier: string): IPromise<string[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    createServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<void>
     */
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): IPromise<Contracts.ServiceEndpoint>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     * @return IPromise<Contracts.ServiceEndpoint[]>
     */
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): IPromise<Contracts.ServiceEndpoint[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param {string} operation
     * @return IPromise<Contracts.ServiceEndpoint>
     */
    updateServiceEndpoint(endpoint: Contracts.ServiceEndpoint, scopeIdentifier: string, endpointId: string, operation?: string): IPromise<Contracts.ServiceEndpoint>;
}
export class TaskAgentHttpClient extends TaskAgentHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TaskAgentHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TaskAgentHttpClient4;
}
declare module "TFS/DistributedTask/TaskRestClient" {
import TFS_DistributedTask_Contracts = require("TFS/DistributedTask/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    protected feedApiVersion: string;
    protected logsApiVersion: string;
    protected plansApiVersion: string;
    protected recordsApiVersion: string;
    protected timelinesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.Timeline[]>
     */
    getTimelines(scopeIdentifier: string, hubName: string, planId: string): IPromise<TFS_DistributedTask_Contracts.Timeline[]>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @param {boolean} includeRecords
     * @return IPromise<TFS_DistributedTask_Contracts.Timeline>
     */
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number, includeRecords?: boolean): IPromise<TFS_DistributedTask_Contracts.Timeline>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @return IPromise<void>
     */
    deleteTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string): IPromise<void>;
    /**
     * @param {TFS_DistributedTask_Contracts.Timeline} timeline
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.Timeline>
     */
    createTimeline(timeline: TFS_DistributedTask_Contracts.Timeline, scopeIdentifier: string, hubName: string, planId: string): IPromise<TFS_DistributedTask_Contracts.Timeline>;
    /**
     * @param {VSS_Common_Contracts.VssJsonCollectionWrapperV<TFS_DistributedTask_Contracts.TimelineRecord[]>} records
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @return IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>
     */
    updateRecords(records: VSS_Common_Contracts.VssJsonCollectionWrapperV<TFS_DistributedTask_Contracts.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string): IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @return IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>
     */
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number): IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskLog[]>
     */
    getLogs(scopeIdentifier: string, hubName: string, planId: string): IPromise<TFS_DistributedTask_Contracts.TaskLog[]>;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @return IPromise<string[]>
     */
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number, endLine?: number): IPromise<string[]>;
    /**
     * @param {TFS_DistributedTask_Contracts.TaskLog} log
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskLog>
     */
    createLog(log: TFS_DistributedTask_Contracts.TaskLog, scopeIdentifier: string, hubName: string, planId: string): IPromise<TFS_DistributedTask_Contracts.TaskLog>;
    /**
     * @param {string} content - Content to upload
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskLog>
     */
    appendLogContent(content: string, scopeIdentifier: string, hubName: string, planId: string, logId: number): IPromise<TFS_DistributedTask_Contracts.TaskLog>;
}
export class CommonMethods2_1To4_1 extends CommonMethods2To4_1 {
    protected attachmentsApiVersion: string;
    protected attachmentsApiVersion_eb55e5d6: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @return IPromise<TFS_DistributedTask_Contracts.TaskAttachment[]>
     */
    getAttachments(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string): IPromise<TFS_DistributedTask_Contracts.TaskAttachment[]>;
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentContent(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): IPromise<ArrayBuffer>;
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @return IPromise<TFS_DistributedTask_Contracts.TaskAttachment>
     */
    getAttachment(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): IPromise<TFS_DistributedTask_Contracts.TaskAttachment>;
    /**
     * [Preview API]
     *
     * @param {string} content - Content to upload
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @return IPromise<TFS_DistributedTask_Contracts.TaskAttachment>
     */
    createAttachment(content: string, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): IPromise<TFS_DistributedTask_Contracts.TaskAttachment>;
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} type
     * @return IPromise<TFS_DistributedTask_Contracts.TaskAttachment[]>
     */
    getPlanAttachments(scopeIdentifier: string, hubName: string, planId: string, type: string): IPromise<TFS_DistributedTask_Contracts.TaskAttachment[]>;
}
export class CommonMethods3_1To4_1 extends CommonMethods2_1To4_1 {
    protected plangroupsqueueApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {TFS_DistributedTask_Contracts.PlanGroupStatus} statusFilter
     * @param {number} count
     * @return IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationQueuedPlanGroup[]>
     */
    getQueuedPlanGroups(scopeIdentifier: string, hubName: string, statusFilter?: TFS_DistributedTask_Contracts.PlanGroupStatus, count?: number): IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationQueuedPlanGroup[]>;
}
export class CommonMethods3_2To4_1 extends CommonMethods3_1To4_1 {
    protected metricsApiVersion: string;
    protected plangroupsqueueApiVersion_65fd0708: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planGroup
     * @return IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationQueuedPlanGroup>
     */
    getQueuedPlanGroup(scopeIdentifier: string, hubName: string, planGroup: string): IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationQueuedPlanGroup>;
    /**
     * [Preview API]
     *
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @return IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationPlanGroupsQueueMetrics[]>
     */
    getPlanGroupsQueueMetrics(scopeIdentifier: string, hubName: string): IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationPlanGroupsQueueMetrics[]>;
}
/**
 * @exemptedapi
 */
export class TaskHttpClient4_1 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient4 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient3_2 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient3_1 extends CommonMethods3_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient3 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient2_3 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient2_2 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient2_1 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TaskHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class TaskHttpClient extends TaskHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TaskHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TaskHttpClient4;
}
declare module "TFS/ProjectAnalysis/Contracts" {
export enum AggregationType {
    Hourly = 0,
    Daily = 1,
}
export interface AnalyzerDescriptor {
    description: string;
    id: string;
    majorVersion: number;
    minorVersion: number;
    name: string;
    patchVersion: number;
}
export interface CodeChangeTrendItem {
    time: Date;
    value: number;
}
export interface LanguageStatistics {
    bytes: number;
    files: number;
    filesPercentage: number;
    languagePercentage: number;
    name: string;
}
export interface ProjectActivityMetrics {
    authorsCount: number;
    codeChangesCount: number;
    codeChangesTrend: CodeChangeTrendItem[];
    projectId: string;
    pullRequestsCompletedCount: number;
    pullRequestsCreatedCount: number;
}
export interface ProjectLanguageAnalytics {
    id: string;
    languageBreakdown: LanguageStatistics[];
    repositoryLanguageAnalytics: RepositoryLanguageAnalytics[];
    resultPhase: ResultPhase;
    url: string;
}
export interface RepositoryActivityMetrics {
    codeChangesCount: number;
    codeChangesTrend: CodeChangeTrendItem[];
    repositoryId: string;
}
export interface RepositoryLanguageAnalytics {
    id: string;
    languageBreakdown: LanguageStatistics[];
    name: string;
    resultPhase: ResultPhase;
    updatedTime: Date;
}
export enum ResultPhase {
    Preliminary = 0,
    Full = 1,
}
export var TypeInfo: {
    AggregationType: {
        enumValues: {
            "hourly": number;
            "daily": number;
        };
    };
    CodeChangeTrendItem: any;
    ProjectActivityMetrics: any;
    ProjectLanguageAnalytics: any;
    RepositoryActivityMetrics: any;
    RepositoryLanguageAnalytics: any;
    ResultPhase: {
        enumValues: {
            "preliminary": number;
            "full": number;
        };
    };
};
}
declare module "TFS/ProjectAnalysis/RestClient" {
import Contracts = require("TFS/ProjectAnalysis/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods4To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected languagemetricsApiVersion: string;
    protected projectactivitymetricsApiVersion: string;
    protected repositoryactivitymetricsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {Date} fromDate
     * @param {Contracts.AggregationType} aggregationType
     * @return IPromise<Contracts.RepositoryActivityMetrics>
     */
    getRepositoryActivityMetrics(project: string, repositoryId: string, fromDate: Date, aggregationType: Contracts.AggregationType): IPromise<Contracts.RepositoryActivityMetrics>;
    /**
     * [Preview API] Retrieves git activity metrics for repositories matching a specified criteria.
     *
     * @param {string} project - Project ID or project name
     * @param {Date} fromDate - Date from which, the trends are to be fetched.
     * @param {Contracts.AggregationType} aggregationType - Bucket size on which, trends are to be aggregated.
     * @param {number} skip - The number of repositories to ignore.
     * @param {number} top - The number of repositories for which activity metrics are to be retrieved.
     * @return IPromise<Contracts.RepositoryActivityMetrics[]>
     */
    getGitRepositoriesActivityMetrics(project: string, fromDate: Date, aggregationType: Contracts.AggregationType, skip: number, top: number): IPromise<Contracts.RepositoryActivityMetrics[]>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Date} fromDate
     * @param {Contracts.AggregationType} aggregationType
     * @return IPromise<Contracts.ProjectActivityMetrics>
     */
    getProjectActivityMetrics(project: string, fromDate: Date, aggregationType: Contracts.AggregationType): IPromise<Contracts.ProjectActivityMetrics>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ProjectLanguageAnalytics>
     */
    getProjectLanguageAnalytics(project: string): IPromise<Contracts.ProjectLanguageAnalytics>;
}
/**
 * @exemptedapi
 */
export class ProjectAnalysisHttpClient4_1 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class ProjectAnalysisHttpClient4 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class ProjectAnalysisHttpClient extends ProjectAnalysisHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return ProjectAnalysisHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): ProjectAnalysisHttpClient4;
}
declare module "TFS/TestImpact/Contracts" {
export enum BuildType {
    TestImpactOff = 0,
    BaseLine = 1,
    TestImpactOn = 2,
}
/**
 * Represents a code change in a build.
 */
export interface CodeChange {
    /**
     * Gets or sets the name of the assembly containing the change.
     */
    assemblyName: string;
    /**
     * Gets or sets the signature of the code that changed.
     */
    codeSignature: string;
    /**
     * Gets or sets the file name containing the code change.
     */
    fileName: string;
    /**
     * Gets or sets the name of the code that changed.
     */
    name: string;
    /**
     * Gets or sets the signature type of the code that changed.
     */
    signatureType: SignatureType;
}
/**
 * Represents a definition run information.
 */
export interface DefinitionRunInfo {
    /**
     * Gets or sets the base line buildId
     */
    baseLineDefinitionRunId: number;
    /**
     * Gets or sets the current buildId/ReleaseId.
     */
    definitionRunId: number;
    /**
     * Gets or sets the name of the code that changed.
     */
    definitionType: DefinitionType;
}
/**
 * Type of definition build/release
 */
export enum DefinitionType {
    Build = 0,
    Release = 1,
}
export interface ImpactedTests {
    areAllTestsImpacted: boolean;
    tests: Test[];
}
/**
 * Type of the signature method/file/assembly
 */
export enum SignatureType {
    Method = 0,
    File = 1,
    Assembly = 2,
}
export interface Test {
    /**
     * Gets the automated test identifier.
     */
    automatedTestId: string;
    testCaseId: number;
    /**
     * Gets or sets the name of the test.
     */
    testName: string;
}
/**
 * Represents test impact data for a build.
 */
export interface TestImpactBuildData {
    codeChanges: CodeChange[];
    rebaseLimit: number;
}
/**
 * Options to include specific type of tests in test impact calculations
 */
export enum TestInclusionOptions {
    None = 0,
    Failed = 1,
}
/**
 * Represents a test result's code signature indexes.
 */
export interface TestResultSignatures {
    /**
     * Gets or sets the configuration identifier.
     */
    configurationId: number;
    /**
     * List of signatues associated with the test case
     */
    signatures: string[];
    /**
     * Type of the signature
     */
    signatureType: SignatureType;
    /**
     * Gets or sets the test result identifier.
     */
    testResultId: number;
}
export interface TestResultSignaturesInfo {
    /**
     * Gets or sets the current buildId/ReleaseId.
     */
    definitionRunId: number;
    /**
     * Gets or sets the type of the definition.
     */
    definitionType: DefinitionType;
    /**
     * Gets or sets the impact metadata for the tests.
     */
    testResultSignatures: TestResultSignatures[];
    /**
     * Gets or sets the run id.
     */
    testRunId: number;
}
export var TypeInfo: {
    BuildType: {
        enumValues: {
            "testImpactOff": number;
            "baseLine": number;
            "testImpactOn": number;
        };
    };
    CodeChange: any;
    DefinitionRunInfo: any;
    DefinitionType: {
        enumValues: {
            "build": number;
            "release": number;
        };
    };
    SignatureType: {
        enumValues: {
            "method": number;
            "file": number;
            "assembly": number;
        };
    };
    TestImpactBuildData: any;
    TestInclusionOptions: {
        enumValues: {
            "none": number;
            "failed": number;
        };
    };
    TestResultSignatures: any;
    TestResultSignaturesInfo: any;
};
}
declare module "TFS/TestImpact/RestClient" {
import Contracts = require("TFS/TestImpact/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected changeApiVersion: string;
    protected impactApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionRunInfo} definitionRunInfo
     * @param {number} currentTestRunId
     * @param {Contracts.TestInclusionOptions} typesToInclude
     * @return IPromise<Contracts.ImpactedTests>
     */
    queryImpactedTests(project: string, definitionRunInfo: Contracts.DefinitionRunInfo, currentTestRunId: number, typesToInclude?: Contracts.TestInclusionOptions): IPromise<Contracts.ImpactedTests>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.BuildType>
     */
    queryBuildType(project: string, buildId: number): IPromise<Contracts.BuildType>;
    /**
     * [Preview API]
     *
     * @param {Contracts.TestResultSignaturesInfo} results
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestResultSignaturesInfo>
     */
    publishCodeSignatures(results: Contracts.TestResultSignaturesInfo, project: string): IPromise<Contracts.TestResultSignaturesInfo>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionRunInfo} definitionRunInfo
     * @return IPromise<Contracts.TestImpactBuildData>
     */
    queryCodeChanges(project: string, definitionRunInfo: Contracts.DefinitionRunInfo): IPromise<Contracts.TestImpactBuildData>;
    /**
     * [Preview API]
     *
     * @param {Contracts.TestImpactBuildData} testImapctBuildData
     * @param {string} project - Project ID or project name
     * @param {Contracts.DefinitionRunInfo} definitionRunInfo
     * @return IPromise<Contracts.TestImpactBuildData>
     */
    publishTestImpactBuildData(testImapctBuildData: Contracts.TestImpactBuildData, project: string, definitionRunInfo: Contracts.DefinitionRunInfo): IPromise<Contracts.TestImpactBuildData>;
}
/**
 * @exemptedapi
 */
export class TestHttpClient4_1 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient4 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient3_2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient3_1 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient3 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient2_3 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient2_2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient2_1 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TestHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class TestHttpClient extends TestHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TestHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TestHttpClient4;
}
declare module "TFS/TestManagement/Contracts" {
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AggregatedDataForResultTrend {
    /**
     * This is tests execution duration.
     */
    duration: any;
    resultsByOutcome: {
        [key: number]: AggregatedResultsByOutcome;
    };
    testResultsContext: TestResultsContext;
    totalTests: number;
}
export interface AggregatedResultsAnalysis {
    duration: any;
    notReportedResultsByOutcome: {
        [key: number]: AggregatedResultsByOutcome;
    };
    previousContext: TestResultsContext;
    resultsByOutcome: {
        [key: number]: AggregatedResultsByOutcome;
    };
    resultsDifference: AggregatedResultsDifference;
    totalTests: number;
}
export interface AggregatedResultsByOutcome {
    count: number;
    duration: any;
    groupByField: string;
    groupByValue: any;
    outcome: TestOutcome;
    rerunResultCount: number;
}
export interface AggregatedResultsDifference {
    increaseInDuration: any;
    increaseInFailures: number;
    increaseInOtherTests: number;
    increaseInPassedTests: number;
    increaseInTotalTests: number;
}
/**
 * The types of test attachments.
 */
export enum AttachmentType {
    GeneralAttachment = 0,
    AfnStrip = 1,
    BugFilingData = 2,
    CodeCoverage = 3,
    IntermediateCollectorData = 4,
    RunConfig = 5,
    TestImpactDetails = 6,
    TmiTestRunDeploymentFiles = 7,
    TmiTestRunReverseDeploymentFiles = 8,
    TmiTestResultDetail = 9,
    TmiTestRunSummary = 10,
    ConsoleLog = 11,
}
export interface BatchResponse {
    error: string;
    responses: Response[];
    status: string;
}
export interface BuildConfiguration {
    branchName: string;
    buildDefinitionId: number;
    flavor: string;
    id: number;
    number: string;
    platform: string;
    project: ShallowReference;
    repositoryId: number;
    sourceVersion: string;
    uri: string;
}
export interface BuildCoverage {
    codeCoverageFileUrl: string;
    configuration: BuildConfiguration;
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
}
export interface BuildReference {
    branchName: string;
    buildSystem: string;
    definitionId: number;
    id: number;
    number: string;
    repositoryId: string;
    uri: string;
}
export interface CloneOperationInformation {
    cloneStatistics: CloneStatistics;
    /**
     * If the operation is complete, the DateTime of completion. If operation is not complete, this is DateTime.MaxValue
     */
    completionDate: Date;
    /**
     * DateTime when the operation was started
     */
    creationDate: Date;
    /**
     * Shallow reference of the destination
     */
    destinationObject: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationPlan: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationProject: ShallowReference;
    /**
     * If the operation has Failed, Message contains the reason for failure. Null otherwise.
     */
    message: string;
    /**
     * The ID of the operation
     */
    opId: number;
    /**
     * The type of the object generated as a result of the Clone operation
     */
    resultObjectType: ResultObjectType;
    /**
     * Shallow reference of the source
     */
    sourceObject: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourcePlan: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourceProject: ShallowReference;
    /**
     * Current state of the operation. When State reaches Suceeded or Failed, the operation is complete
     */
    state: CloneOperationState;
    /**
     * Url for geting the clone information
     */
    url: string;
}
export enum CloneOperationState {
    Failed = 2,
    InProgress = 1,
    Queued = 0,
    Succeeded = 3,
}
export interface CloneOptions {
    /**
     * If set to true requirements will be cloned
     */
    cloneRequirements: boolean;
    /**
     * copy all suites from a source plan
     */
    copyAllSuites: boolean;
    /**
     * copy ancestor hieracrchy
     */
    copyAncestorHierarchy: boolean;
    /**
     * Name of the workitem type of the clone
     */
    destinationWorkItemType: string;
    /**
     * Key value pairs where the key value is overridden by the value.
     */
    overrideParameters: {
        [key: string]: string;
    };
    /**
     * Comment on the link that will link the new clone  test case to the original Set null for no comment
     */
    relatedLinkComment: string;
}
export interface CloneStatistics {
    /**
     * Number of Requirments cloned so far.
     */
    clonedRequirementsCount: number;
    /**
     * Number of shared steps cloned so far.
     */
    clonedSharedStepsCount: number;
    /**
     * Number of test cases cloned so far
     */
    clonedTestCasesCount: number;
    /**
     * Total number of requirements to be cloned
     */
    totalRequirementsCount: number;
    /**
     * Total number of test cases to be cloned
     */
    totalTestCasesCount: number;
}
/**
 * Represents the build configuration (platform, flavor) and coverage data for the build
 */
export interface CodeCoverageData {
    /**
     * Flavor of build for which data is retrieved/published
     */
    buildFlavor: string;
    /**
     * Platform of build for which data is retrieved/published
     */
    buildPlatform: string;
    /**
     * List of coverage data for the build
     */
    coverageStats: CodeCoverageStatistics[];
}
/**
 * Represents the code coverage statistics for a particular coverage label (modules, statements, blocks, etc.)
 */
export interface CodeCoverageStatistics {
    /**
     * Covered units
     */
    covered: number;
    /**
     * Delta of coverage
     */
    delta: number;
    /**
     * Is delta valid
     */
    isDeltaAvailable: boolean;
    /**
     * Label of coverage data ("Blocks", "Statements", "Modules", etc.)
     */
    label: string;
    /**
     * Position of label
     */
    position: number;
    /**
     * Total units
     */
    total: number;
}
/**
 * Represents the code coverage summary results Used to publish or retrieve code coverage summary against a build
 */
export interface CodeCoverageSummary {
    /**
     * Uri of build for which data is retrieved/published
     */
    build: ShallowReference;
    /**
     * List of coverage data and details for the build
     */
    coverageData: CodeCoverageData[];
    /**
     * Uri of build against which difference in coverage is computed
     */
    deltaBuild: ShallowReference;
}
/**
 * Used to choose which coverage data is returned by a QueryXXXCoverage() call.
 */
export enum CoverageQueryFlags {
    /**
     * If set, the Coverage.Modules property will be populated.
     */
    Modules = 1,
    /**
     * If set, the ModuleCoverage.Functions properties will be populated.
     */
    Functions = 2,
    /**
     * If set, the ModuleCoverage.CoverageData field will be populated.
     */
    BlockData = 4,
}
export interface CoverageStatistics {
    blocksCovered: number;
    blocksNotCovered: number;
    linesCovered: number;
    linesNotCovered: number;
    linesPartiallyCovered: number;
}
export interface CustomTestField {
    fieldName: string;
    value: any;
}
export interface CustomTestFieldDefinition {
    fieldId: number;
    fieldName: string;
    fieldType: CustomTestFieldType;
    scope: CustomTestFieldScope;
}
export enum CustomTestFieldScope {
    None = 0,
    TestRun = 1,
    TestResult = 2,
    System = 4,
    All = 7,
}
export enum CustomTestFieldType {
    Bit = 2,
    DateTime = 4,
    Int = 8,
    Float = 6,
    String = 12,
    Guid = 14,
}
/**
 * This is a temporary class to provide the details for the test run environment.
 */
export interface DtlEnvironmentDetails {
    csmContent: string;
    csmParameters: string;
    subscriptionName: string;
}
export interface FailingSince {
    build: BuildReference;
    date: Date;
    release: ReleaseReference;
}
export interface FieldDetailsForTestResults {
    /**
     * Group by field name
     */
    fieldName: string;
    /**
     * Group by field values
     */
    groupsForField: any[];
}
export interface FunctionCoverage {
    class: string;
    name: string;
    namespace: string;
    sourceFile: string;
    statistics: CoverageStatistics;
}
export interface LastResultDetails {
    dateCompleted: Date;
    duration: number;
    runBy: VSS_Common_Contracts.IdentityRef;
}
export interface LinkedWorkItemsQuery {
    automatedTestNames: string[];
    planId: number;
    pointIds: number[];
    suiteIds: number[];
    testCaseIds: number[];
    workItemCategory: string;
}
export interface LinkedWorkItemsQueryResult {
    automatedTestName: string;
    planId: number;
    pointId: number;
    suiteId: number;
    testCaseId: number;
    workItems: WorkItemReference[];
}
export interface ModuleCoverage {
    blockCount: number;
    blockData: number[];
    functions: FunctionCoverage[];
    name: string;
    signature: string;
    signatureAge: number;
    statistics: CoverageStatistics;
}
export interface NameValuePair {
    name: string;
    value: string;
}
export interface PlanUpdateModel {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    buildDefinition: ShallowReference;
    configurationIds: number[];
    description: string;
    endDate: string;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    releaseEnvironmentDefinition: ReleaseEnvironmentDefinitionReference;
    startDate: string;
    state: string;
    status: string;
}
export interface PointAssignment {
    configuration: ShallowReference;
    tester: VSS_Common_Contracts.IdentityRef;
}
export interface PointsFilter {
    configurationNames: string[];
    testcaseIds: number[];
    testers: VSS_Common_Contracts.IdentityRef[];
}
export interface PointUpdateModel {
    outcome: string;
    resetToActive: boolean;
    tester: VSS_Common_Contracts.IdentityRef;
}
export interface PointWorkItemProperty {
    workItem: {
        key: string;
        value: any;
    };
}
export interface PropertyBag {
    /**
     * Generic store for test session data
     */
    bag: {
        [key: string]: string;
    };
}
export interface QueryModel {
    query: string;
}
export interface ReleaseEnvironmentDefinitionReference {
    definitionId: number;
    environmentDefinitionId: number;
}
export interface ReleaseReference {
    definitionId: number;
    environmentDefinitionId: number;
    environmentDefinitionName: string;
    environmentId: number;
    environmentName: string;
    id: number;
    name: string;
}
export interface Response {
    error: string;
    id: string;
    status: string;
    url: string;
}
export enum ResultDetails {
    None = 0,
    Iterations = 1,
    WorkItems = 2,
}
/**
 * The top level entity that is being cloned as part of a Clone operation
 */
export enum ResultObjectType {
    TestSuite = 0,
    TestPlan = 1,
}
export interface ResultRetentionSettings {
    automatedResultsRetentionDuration: number;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    manualResultsRetentionDuration: number;
}
export interface ResultsFilter {
    automatedTestName: string;
    branch: string;
    groupBy: string;
    maxCompleteDate: Date;
    resultsCount: number;
    testCaseReferenceIds: number[];
    testResultsContext: TestResultsContext;
    trendDays: number;
}
export interface ResultUpdateRequestModel {
    actionResultDeletes: TestActionResultModel[];
    actionResults: TestActionResultModel[];
    parameterDeletes: TestResultParameterModel[];
    parameters: TestResultParameterModel[];
    testCaseResult: TestCaseResultUpdateModel;
}
export interface ResultUpdateResponseModel {
    revision: number;
}
export interface RunCreateModel {
    automated: boolean;
    build: ShallowReference;
    buildDropLocation: string;
    buildFlavor: string;
    buildPlatform: string;
    comment: string;
    completeDate: string;
    configurationIds: number[];
    controller: string;
    customTestFields: CustomTestField[];
    dtlAutEnvironment: ShallowReference;
    dtlTestEnvironment: ShallowReference;
    dueDate: string;
    environmentDetails: DtlEnvironmentDetails;
    errorMessage: string;
    filter: RunFilter;
    iteration: string;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    plan: ShallowReference;
    pointIds: number[];
    releaseEnvironmentUri: string;
    releaseUri: string;
    runTimeout: any;
    sourceWorkflow: string;
    startDate: string;
    state: string;
    testConfigurationsMapping: string;
    testEnvironmentId: string;
    testSettings: ShallowReference;
    type: string;
}
/**
 * This class is used to provide the filters used for discovery
 */
export interface RunFilter {
    /**
     * filter for the test case sources (test containers)
     */
    sourceFilter: string;
    /**
     * filter for the test cases
     */
    testCaseFilter: string;
}
export interface RunStatistic {
    count: number;
    outcome: string;
    resolutionState: TestResolutionState;
    state: string;
}
export interface RunUpdateModel {
    build: ShallowReference;
    buildDropLocation: string;
    buildFlavor: string;
    buildPlatform: string;
    comment: string;
    completedDate: string;
    controller: string;
    deleteInProgressResults: boolean;
    dtlAutEnvironment: ShallowReference;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentDetails: DtlEnvironmentDetails;
    dueDate: string;
    errorMessage: string;
    iteration: string;
    logEntries: TestMessageLogDetails[];
    name: string;
    releaseEnvironmentUri: string;
    releaseUri: string;
    sourceWorkflow: string;
    startedDate: string;
    state: string;
    substate: TestRunSubstate;
    testEnvironmentId: string;
    testSettings: ShallowReference;
}
/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface ShallowReference {
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface SharedStepModel {
    id: number;
    revision: number;
}
export interface SuiteCreateModel {
    name: string;
    queryString: string;
    requirementIds: number[];
    suiteType: string;
}
export interface SuiteEntry {
    /**
     * Id of child suite in a suite
     */
    childSuiteId: number;
    /**
     * Sequence number for the test case or child suite in the suite
     */
    sequenceNumber: number;
    /**
     * Id for the suite
     */
    suiteId: number;
    /**
     * Id of a test case in a suite
     */
    testCaseId: number;
}
export interface SuiteEntryUpdateModel {
    /**
     * Id of child suite in a suite
     */
    childSuiteId: number;
    /**
     * Updated sequence number for the test case or child suite in the suite
     */
    sequenceNumber: number;
    /**
     * Id of a test case in a suite
     */
    testCaseId: number;
}
export interface SuiteTestCase {
    pointAssignments: PointAssignment[];
    testCase: WorkItemReference;
}
export interface SuiteUpdateModel {
    defaultConfigurations: ShallowReference[];
    defaultTesters: ShallowReference[];
    inheritDefaultConfigurations: boolean;
    name: string;
    parent: ShallowReference;
    queryString: string;
}
export interface TestActionResultModel extends TestResultModelBase {
    actionPath: string;
    iterationId: number;
    sharedStepModel: SharedStepModel;
    /**
     * This is step Id of test case. For shared step, it is step Id of shared step in test case workitem; step Id in shared step. Example: TestCase workitem has two steps: 1) Normal step with Id = 1 2) Shared Step with Id = 2. Inside shared step: a) Normal Step with Id = 1 Value for StepIdentifier for First step: "1" Second step: "2;1"
     */
    stepIdentifier: string;
    url: string;
}
export interface TestAttachment {
    attachmentType: AttachmentType;
    comment: string;
    createdDate: Date;
    fileName: string;
    id: number;
    url: string;
}
export interface TestAttachmentReference {
    id: number;
    url: string;
}
export interface TestAttachmentRequestModel {
    attachmentType: string;
    comment: string;
    fileName: string;
    stream: string;
}
export interface TestCaseResult {
    afnStripId: number;
    area: ShallowReference;
    associatedBugs: ShallowReference[];
    automatedTestId: string;
    automatedTestName: string;
    automatedTestStorage: string;
    automatedTestType: string;
    automatedTestTypeId: string;
    build: ShallowReference;
    buildReference: BuildReference;
    comment: string;
    completedDate: Date;
    computerName: string;
    configuration: ShallowReference;
    createdDate: Date;
    customFields: CustomTestField[];
    durationInMs: number;
    errorMessage: string;
    failingSince: FailingSince;
    failureType: string;
    id: number;
    iterationDetails: TestIterationDetailsModel[];
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    owner: VSS_Common_Contracts.IdentityRef;
    priority: number;
    project: ShallowReference;
    release: ShallowReference;
    releaseReference: ReleaseReference;
    resetCount: number;
    resolutionState: string;
    resolutionStateId: number;
    revision: number;
    runBy: VSS_Common_Contracts.IdentityRef;
    stackTrace: string;
    startedDate: Date;
    state: string;
    testCase: ShallowReference;
    testCaseReferenceId: number;
    testCaseTitle: string;
    testPlan: ShallowReference;
    testPoint: ShallowReference;
    testRun: ShallowReference;
    testSuite: ShallowReference;
    url: string;
}
export interface TestCaseResultAttachmentModel {
    id: number;
    iterationId: number;
    name: string;
    size: number;
    url: string;
}
export interface TestCaseResultIdentifier {
    testResultId: number;
    testRunId: number;
}
export interface TestCaseResultUpdateModel {
    associatedWorkItems: number[];
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    customFields: CustomTestField[];
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSS_Common_Contracts.IdentityRef;
    resolutionState: string;
    runBy: VSS_Common_Contracts.IdentityRef;
    stackTrace: string;
    startedDate: string;
    state: string;
    testCasePriority: string;
    testResult: ShallowReference;
}
export interface TestConfiguration {
    /**
     * Area of the configuration
     */
    area: ShallowReference;
    /**
     * Description of the configuration
     */
    description: string;
    /**
     * Id of the configuration
     */
    id: number;
    /**
     * Is the configuration a default for the test plans
     */
    isDefault: boolean;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Last Updated Data
     */
    lastUpdatedDate: Date;
    /**
     * Name of the configuration
     */
    name: string;
    /**
     * Project to which the configuration belongs
     */
    project: ShallowReference;
    /**
     * Revision of the the configuration
     */
    revision: number;
    /**
     * State of the configuration
     */
    state: TestConfigurationState;
    /**
     * Url of Configuration Resource
     */
    url: string;
    /**
     * Dictionary of Test Variable, Selected Value
     */
    values: NameValuePair[];
}
/**
 * Represents the state of an ITestConfiguration object.
 */
export enum TestConfigurationState {
    /**
     * The configuration can be used for new test runs.
     */
    Active = 1,
    /**
     * The configuration has been retired and should not be used for new test runs.
     */
    Inactive = 2,
}
export interface TestEnvironment {
    environmentId: string;
    environmentName: string;
}
export interface TestFailureDetails {
    count: number;
    testResults: TestCaseResultIdentifier[];
}
export interface TestFailuresAnalysis {
    existingFailures: TestFailureDetails;
    fixedTests: TestFailureDetails;
    newFailures: TestFailureDetails;
    previousContext: TestResultsContext;
}
export interface TestIterationDetailsModel {
    actionResults: TestActionResultModel[];
    attachments: TestCaseResultAttachmentModel[];
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    id: number;
    outcome: string;
    parameters: TestResultParameterModel[];
    startedDate: Date;
    url: string;
}
/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface TestMessageLogDetails {
    /**
     * Date when the resource is created
     */
    dateCreated: Date;
    /**
     * Id of the resource
     */
    entryId: number;
    /**
     * Message of the resource
     */
    message: string;
}
export interface TestMethod {
    container: string;
    name: string;
}
/**
 * Class representing a reference to an operation.
 */
export interface TestOperationReference {
    id: string;
    status: string;
    url: string;
}
export enum TestOutcome {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * Test has not been completed, or the test type does not report pass/failure.
     */
    None = 1,
    /**
     * Test was executed w/o any issues.
     */
    Passed = 2,
    /**
     * Test was executed, but there were issues. Issues may involve exceptions or failed assertions.
     */
    Failed = 3,
    /**
     * Test has completed, but we can't say if it passed or failed. May be used for aborted tests...
     */
    Inconclusive = 4,
    /**
     * The test timed out
     */
    Timeout = 5,
    /**
     * Test was aborted. This was not caused by a user gesture, but rather by a framework decision.
     */
    Aborted = 6,
    /**
     * Test had it chance for been executed but was not, as ITestElement.IsRunnable == false.
     */
    Blocked = 7,
    /**
     * Test was not executed. This was caused by a user gesture - e.g. user hit stop button.
     */
    NotExecuted = 8,
    /**
     * To be used by Run level results. This is not a failure.
     */
    Warning = 9,
    /**
     * There was a system error while we were trying to execute a test.
     */
    Error = 10,
    /**
     * Test is Not Applicable for execution.
     */
    NotApplicable = 11,
    /**
     * Test is paused.
     */
    Paused = 12,
    /**
     * Test is currently executing. Added this for TCM charts
     */
    InProgress = 13,
    /**
     * Test is not impacted. Added fot TIA.
     */
    NotImpacted = 14,
    MaxValue = 14,
}
export interface TestPlan {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    buildDefinition: ShallowReference;
    clientUrl: string;
    description: string;
    endDate: Date;
    id: number;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    previousBuild: ShallowReference;
    project: ShallowReference;
    releaseEnvironmentDefinition: ReleaseEnvironmentDefinitionReference;
    revision: number;
    rootSuite: ShallowReference;
    startDate: Date;
    state: string;
    updatedBy: VSS_Common_Contracts.IdentityRef;
    updatedDate: Date;
    url: string;
}
export interface TestPlanCloneRequest {
    destinationTestPlan: TestPlan;
    options: CloneOptions;
    suiteIds: number[];
}
export interface TestPlanHubData {
    selectedSuiteId: number;
    testPlan: TestPlan;
    testPoints: TestPoint[];
    testSuites: TestSuite[];
    totalTestPoints: number;
}
export interface TestPlansWithSelection {
    lastSelectedPlan: number;
    lastSelectedSuite: number;
    plans: TestPlan[];
}
export interface TestPoint {
    assignedTo: VSS_Common_Contracts.IdentityRef;
    automated: boolean;
    comment: string;
    configuration: ShallowReference;
    failureType: string;
    id: number;
    lastResolutionStateId: number;
    lastResult: ShallowReference;
    lastResultDetails: LastResultDetails;
    lastResultState: string;
    lastRunBuildNumber: string;
    lastTestRun: ShallowReference;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    revision: number;
    state: string;
    suite: ShallowReference;
    testCase: WorkItemReference;
    testPlan: ShallowReference;
    url: string;
    workItemProperties: any[];
}
export interface TestPointsQuery {
    orderBy: string;
    points: TestPoint[];
    pointsFilter: PointsFilter;
    witFields: string[];
}
export interface TestResolutionState {
    id: number;
    name: string;
    project: ShallowReference;
}
export interface TestResultCreateModel {
    area: ShallowReference;
    associatedWorkItems: number[];
    automatedTestId: string;
    automatedTestName: string;
    automatedTestStorage: string;
    automatedTestType: string;
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    configuration: ShallowReference;
    customFields: CustomTestField[];
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSS_Common_Contracts.IdentityRef;
    resolutionState: string;
    runBy: VSS_Common_Contracts.IdentityRef;
    stackTrace: string;
    startedDate: string;
    state: string;
    testCase: ShallowReference;
    testCasePriority: string;
    testCaseTitle: string;
    testPoint: ShallowReference;
}
export interface TestResultDocument {
    operationReference: TestOperationReference;
    payload: TestResultPayload;
}
export interface TestResultHistory {
    groupByField: string;
    resultsForGroup: TestResultHistoryDetailsForGroup[];
}
export interface TestResultHistoryDetailsForGroup {
    groupByValue: any;
    latestResult: TestCaseResult;
}
export interface TestResultModelBase {
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    outcome: string;
    startedDate: Date;
}
export interface TestResultParameterModel {
    actionPath: string;
    iterationId: number;
    parameterName: string;
    /**
     * This is step Id of test case. For shared step, it is step Id of shared step in test case workitem; step Id in shared step. Example: TestCase workitem has two steps: 1) Normal step with Id = 1 2) Shared Step with Id = 2. Inside shared step: a) Normal Step with Id = 1 Value for StepIdentifier for First step: "1" Second step: "2;1"
     */
    stepIdentifier: string;
    url: string;
    value: string;
}
export interface TestResultPayload {
    comment: string;
    name: string;
    stream: string;
}
export interface TestResultsContext {
    build: BuildReference;
    contextType: TestResultsContextType;
    release: ReleaseReference;
}
export enum TestResultsContextType {
    Build = 1,
    Release = 2,
}
export interface TestResultsDetails {
    groupByField: string;
    resultsForGroup: TestResultsDetailsForGroup[];
}
export interface TestResultsDetailsForGroup {
    groupByValue: any;
    results: TestCaseResult[];
    resultsCountByOutcome: {
        [key: number]: AggregatedResultsByOutcome;
    };
}
export interface TestResultsGroupsForBuild {
    /**
     * BuildId for which groupby result is fetched.
     */
    buildId: number;
    /**
     * The group by results
     */
    fields: FieldDetailsForTestResults[];
}
export interface TestResultsGroupsForRelease {
    /**
     * The group by results
     */
    fields: FieldDetailsForTestResults[];
    /**
     * Release Environment Id for which groupby result is fetched.
     */
    releaseEnvId: number;
    /**
     * ReleaseId for which groupby result is fetched.
     */
    releaseId: number;
}
export interface TestResultsQuery {
    fields: string[];
    results: TestCaseResult[];
    resultsFilter: ResultsFilter;
}
export interface TestResultSummary {
    aggregatedResultsAnalysis: AggregatedResultsAnalysis;
    teamProject: TFS_Core_Contracts.TeamProjectReference;
    testFailures: TestFailuresAnalysis;
    testResultsContext: TestResultsContext;
}
export interface TestResultTrendFilter {
    branchNames: string[];
    buildCount: number;
    definitionIds: number[];
    envDefinitionIds: number[];
    maxCompleteDate: Date;
    publishContext: string;
    testRunTitles: string[];
    trendDays: number;
}
export interface TestRun {
    build: ShallowReference;
    buildConfiguration: BuildConfiguration;
    comment: string;
    completedDate: Date;
    controller: string;
    createdDate: Date;
    customFields: CustomTestField[];
    dropLocation: string;
    dtlAutEnvironment: ShallowReference;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentCreationDetails: DtlEnvironmentDetails;
    dueDate: Date;
    errorMessage: string;
    filter: RunFilter;
    id: number;
    incompleteTests: number;
    isAutomated: boolean;
    iteration: string;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    notApplicableTests: number;
    owner: VSS_Common_Contracts.IdentityRef;
    passedTests: number;
    phase: string;
    plan: ShallowReference;
    postProcessState: string;
    project: ShallowReference;
    release: ReleaseReference;
    releaseEnvironmentUri: string;
    releaseUri: string;
    revision: number;
    runStatistics: RunStatistic[];
    startedDate: Date;
    state: string;
    substate: TestRunSubstate;
    testEnvironment: TestEnvironment;
    testMessageLogId: number;
    testSettings: ShallowReference;
    totalTests: number;
    unanalyzedTests: number;
    url: string;
    webAccessUrl: string;
}
export interface TestRunCoverage {
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
    testRun: ShallowReference;
}
/**
 * The types of publish context for run.
 */
export enum TestRunPublishContext {
    /**
     * Run is published for Build Context.
     */
    Build = 1,
    /**
     * Run is published for Release Context.
     */
    Release = 2,
    /**
     * Run is published for any Context.
     */
    All = 3,
}
/**
 * The types of states for test run.
 */
export enum TestRunState {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * The run is still being created.  No tests have started yet.
     */
    NotStarted = 1,
    /**
     * Tests are running.
     */
    InProgress = 2,
    /**
     * All tests have completed or been skipped.
     */
    Completed = 3,
    /**
     * Run is stopped and remaing tests have been aborted
     */
    Aborted = 4,
    /**
     * Run is currently initializing This is a legacy state and should not be used any more
     */
    Waiting = 5,
    /**
     * Run requires investigation because of a test point failure This is a legacy state and should not be used any more
     */
    NeedsInvestigation = 6,
}
export interface TestRunStatistic {
    run: ShallowReference;
    runStatistics: RunStatistic[];
}
/**
 * The types of sub states for test run. It gives the user more info about the test run beyond the high level test run state
 */
export enum TestRunSubstate {
    None = 0,
    CreatingEnvironment = 1,
    RunningTests = 2,
    CanceledByUser = 3,
    AbortedBySystem = 4,
    TimedOut = 5,
    PendingAnalysis = 6,
    Analyzed = 7,
    CancellationInProgress = 8,
}
export interface TestSession {
    /**
     * Area path of the test session
     */
    area: ShallowReference;
    /**
     * Comments in the test session
     */
    comment: string;
    /**
     * Duration of the session
     */
    endDate: Date;
    /**
     * Id of the test session
     */
    id: number;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Last updated date
     */
    lastUpdatedDate: Date;
    /**
     * Owner of the test session
     */
    owner: VSS_Common_Contracts.IdentityRef;
    /**
     * Project to which the test session belongs
     */
    project: ShallowReference;
    /**
     * Generic store for test session data
     */
    propertyBag: PropertyBag;
    /**
     * Revision of the test session
     */
    revision: number;
    /**
     * Source of the test session
     */
    source: TestSessionSource;
    /**
     * Start date
     */
    startDate: Date;
    /**
     * State of the test session
     */
    state: TestSessionState;
    /**
     * Title of the test session
     */
    title: string;
    /**
     * Url of Test Session Resource
     */
    url: string;
}
export interface TestSessionExploredWorkItemReference extends TestSessionWorkItemReference {
    /**
     * Workitem references of workitems filed as a part of the current workitem exploration.
     */
    associatedWorkItems: TestSessionWorkItemReference[];
    /**
     * Time when exploration of workitem ended.
     */
    endTime: Date;
    /**
     * Time when explore of workitem was started.
     */
    startTime: Date;
}
/**
 * Represents the state of the test session.
 */
export enum TestSessionSource {
    /**
     * Source of test session uncertain as it is stale
     */
    Unknown = 0,
    /**
     * The session was created from Microsoft Test Manager exploratory desktop tool.
     */
    XTDesktop = 1,
    /**
     * The session was created from feedback client.
     */
    FeedbackDesktop = 2,
    /**
     * The session was created from browser extension.
     */
    XTWeb = 3,
    /**
     * The session was created from browser extension.
     */
    FeedbackWeb = 4,
    /**
     * The session was created from web access using Microsoft Test Manager exploratory desktop tool.
     */
    XTDesktop2 = 5,
    /**
     * To show sessions from all supported sources.
     */
    SessionInsightsForAll = 6,
}
/**
 * Represents the state of the test session.
 */
export enum TestSessionState {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * The session is still being created.
     */
    NotStarted = 1,
    /**
     * The session is running.
     */
    InProgress = 2,
    /**
     * The session has paused.
     */
    Paused = 3,
    /**
     * The session has completed.
     */
    Completed = 4,
    /**
     * This is required for Feedback session which are declined
     */
    Declined = 5,
}
export interface TestSessionWorkItemReference {
    /**
     * Id of the workitem
     */
    id: number;
    /**
     * Type of the workitem
     */
    type: string;
}
/**
 * Represents the test settings of the run. Used to create test settings and fetch test settings
 */
export interface TestSettings {
    /**
     * Area path required to create test settings
     */
    areaPath: string;
    /**
     * Description of the test settings. Used in create test settings.
     */
    description: string;
    /**
     * Indicates if the tests settings is public or private.Used in create test settings.
     */
    isPublic: boolean;
    /**
     * Xml string of machine roles. Used in create test settings.
     */
    machineRoles: string;
    /**
     * Test settings content.
     */
    testSettingsContent: string;
    /**
     * Test settings id.
     */
    testSettingsId: number;
    /**
     * Test settings name.
     */
    testSettingsName: string;
}
export interface TestSuite {
    areaUri: string;
    children: TestSuite[];
    defaultConfigurations: ShallowReference[];
    defaultTesters: ShallowReference[];
    id: number;
    inheritDefaultConfigurations: boolean;
    lastError: string;
    lastPopulatedDate: Date;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    parent: ShallowReference;
    plan: ShallowReference;
    project: ShallowReference;
    queryString: string;
    requirementId: number;
    revision: number;
    state: string;
    suites: ShallowReference[];
    suiteType: string;
    testCaseCount: number;
    testCasesUrl: string;
    text: string;
    url: string;
}
export interface TestSuiteCloneRequest {
    cloneOptions: CloneOptions;
    destinationSuiteId: number;
    destinationSuiteProjectName: string;
}
export interface TestSummaryForWorkItem {
    summary: AggregatedDataForResultTrend;
    workItem: WorkItemReference;
}
export interface TestToWorkItemLinks {
    test: TestMethod;
    workItems: WorkItemReference[];
}
export interface TestVariable {
    /**
     * Description of the test variable
     */
    description: string;
    /**
     * Id of the test variable
     */
    id: number;
    /**
     * Name of the test variable
     */
    name: string;
    /**
     * Project to which the test variable belongs
     */
    project: ShallowReference;
    /**
     * Revision
     */
    revision: number;
    /**
     * Url of the test variable
     */
    url: string;
    /**
     * List of allowed values
     */
    values: string[];
}
export interface WorkItemReference {
    id: string;
    name: string;
    type: string;
    url: string;
    webUrl: string;
}
export interface WorkItemToTestLinks {
    tests: TestMethod[];
    workItem: WorkItemReference;
}
export var TypeInfo: {
    AggregatedDataForResultTrend: any;
    AggregatedResultsAnalysis: any;
    AggregatedResultsByOutcome: any;
    AttachmentType: {
        enumValues: {
            "generalAttachment": number;
            "afnStrip": number;
            "bugFilingData": number;
            "codeCoverage": number;
            "intermediateCollectorData": number;
            "runConfig": number;
            "testImpactDetails": number;
            "tmiTestRunDeploymentFiles": number;
            "tmiTestRunReverseDeploymentFiles": number;
            "tmiTestResultDetail": number;
            "tmiTestRunSummary": number;
            "consoleLog": number;
        };
    };
    BatchResponse: any;
    CloneOperationInformation: any;
    CloneOperationState: {
        enumValues: {
            "failed": number;
            "inProgress": number;
            "queued": number;
            "succeeded": number;
        };
    };
    CoverageQueryFlags: {
        enumValues: {
            "modules": number;
            "functions": number;
            "blockData": number;
        };
    };
    CustomTestFieldDefinition: any;
    CustomTestFieldScope: {
        enumValues: {
            "none": number;
            "testRun": number;
            "testResult": number;
            "system": number;
            "all": number;
        };
    };
    CustomTestFieldType: {
        enumValues: {
            "bit": number;
            "dateTime": number;
            "int": number;
            "float": number;
            "string": number;
            "guid": number;
        };
    };
    FailingSince: any;
    LastResultDetails: any;
    Response: any;
    ResultDetails: {
        enumValues: {
            "none": number;
            "iterations": number;
            "workItems": number;
        };
    };
    ResultObjectType: {
        enumValues: {
            "testSuite": number;
            "testPlan": number;
        };
    };
    ResultRetentionSettings: any;
    ResultsFilter: any;
    ResultUpdateRequestModel: any;
    RunUpdateModel: any;
    TestActionResultModel: any;
    TestAttachment: any;
    TestCaseResult: any;
    TestConfiguration: any;
    TestConfigurationState: {
        enumValues: {
            "active": number;
            "inactive": number;
        };
    };
    TestFailuresAnalysis: any;
    TestIterationDetailsModel: any;
    TestMessageLogDetails: any;
    TestOutcome: {
        enumValues: {
            "unspecified": number;
            "none": number;
            "passed": number;
            "failed": number;
            "inconclusive": number;
            "timeout": number;
            "aborted": number;
            "blocked": number;
            "notExecuted": number;
            "warning": number;
            "error": number;
            "notApplicable": number;
            "paused": number;
            "inProgress": number;
            "notImpacted": number;
            "maxValue": number;
        };
    };
    TestPlan: any;
    TestPlanCloneRequest: any;
    TestPlanHubData: any;
    TestPlansWithSelection: any;
    TestPoint: any;
    TestPointsQuery: any;
    TestResultHistory: any;
    TestResultHistoryDetailsForGroup: any;
    TestResultModelBase: any;
    TestResultsContext: any;
    TestResultsContextType: {
        enumValues: {
            "build": number;
            "release": number;
        };
    };
    TestResultsDetails: any;
    TestResultsDetailsForGroup: any;
    TestResultsQuery: any;
    TestResultSummary: any;
    TestResultTrendFilter: any;
    TestRun: any;
    TestRunPublishContext: {
        enumValues: {
            "build": number;
            "release": number;
            "all": number;
        };
    };
    TestRunState: {
        enumValues: {
            "unspecified": number;
            "notStarted": number;
            "inProgress": number;
            "completed": number;
            "aborted": number;
            "waiting": number;
            "needsInvestigation": number;
        };
    };
    TestRunSubstate: {
        enumValues: {
            "none": number;
            "creatingEnvironment": number;
            "runningTests": number;
            "canceledByUser": number;
            "abortedBySystem": number;
            "timedOut": number;
            "pendingAnalysis": number;
            "analyzed": number;
            "cancellationInProgress": number;
        };
    };
    TestSession: any;
    TestSessionExploredWorkItemReference: any;
    TestSessionSource: {
        enumValues: {
            "unknown": number;
            "xTDesktop": number;
            "feedbackDesktop": number;
            "xTWeb": number;
            "feedbackWeb": number;
            "xTDesktop2": number;
            "sessionInsightsForAll": number;
        };
    };
    TestSessionState: {
        enumValues: {
            "unspecified": number;
            "notStarted": number;
            "inProgress": number;
            "paused": number;
            "completed": number;
            "declined": number;
        };
    };
    TestSuite: any;
    TestSummaryForWorkItem: any;
};
}
declare module "TFS/TestManagement/Helper/Utils" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
/**
 * Interface for test action which could be teststep or sharedstep
 */
export interface ITestAction extends IXmlStorage {
    id: number;
    owner: ITestActionOwner;
}
/**
 * Interface for test step
 */
export interface ITestStep extends ITestAction {
    /**
    * description for teststep
    */
    description: string;
    /**
    * steptype use class TestStepType which is having static members "ActionStep" or "ValidateStep"
    */
    stepType: string;
    /**
    * set title/action for test step
    */
    setTitle(title: string): void;
    /**
    * get test step title/action
    */
    getTitle(): string;
    /**
    * set expectedresult for test step
    */
    setExpectedResult(expectedResult: string): void;
    /**
    * get expectedresult for test step
    */
    getExpectedResult(): string;
    /**
    * create atatchment for test step
    * @param {string} url -- url of attachemnt
    * @param {string} name -- name for attachment
    */
    createAttachment(url: string, name?: string): ITestStepAttachment;
    /**
    * array of attachments for test step
    */
    attachments: Array<ITestStepAttachment>;
}
/**
 * Interface for test base
 */
export interface ITestBase {
    /**
    * create a test step
    */
    createTestStep(): ITestStep;
    /**
    * array of actions: which could be teststep or sharedstep
    */
    actions: Array<ITestAction>;
    /**
    * function to generate teststep xml for all actions
    */
    generateXmlFromActions(): string;
    /**
    * it will initalize actions array for given input
    * @param {string} test -- step xml string
    * @parma {ITestAttachmentLink[]} links -- generate this objects from all relations fetched in workitem object
    */
    loadActions(xmString: string, links: ITestAttachmentLink[]): void;
    /**
    * it will update json with new operations
    * 1st for teststep xml
    * remaining for add relation links based on all teststep attachments
    */
    saveActions(json: VSS_Common_Contracts.JsonPatchDocument): VSS_Common_Contracts.JsonPatchDocument;
}
/**
 * Interface for base helper class
 */
export interface ITestBaseHelper {
    /**
    * create an object of testbase, on which you can do following things
    * create test step
    * generate xml based on all test steps
    * update json patch document corresponsing to all actions and all teststep attachment
    * load actions array by passing requirement parameters
    */
    create(): ITestBase;
}
/**
 * Interface for TestActionOwner
 */
export interface ITestActionOwner extends ITestBase {
    /**
     * will generate next available Id for new action
     */
    getNextAvailableActionId(): number;
}
/**
 * Interface for XmlStorage
 */
export interface IXmlStorage {
    fromXml($stepsXmlDom: JQuery): void;
    toXml($stepsXmlDom: JQuery): void;
}
/**
 * Interface for test attachment
 */
export interface ITestAttachment {
    /**
    * comment on attachemnt
    */
    comment: string;
    /**
    * name of attachemnt
    */
    name: string;
    /**
    * url of attachment
    */
    url: string;
}
/**
 * Interface for test step attachment
 */
export interface ITestStepAttachment extends ITestAttachment {
}
/**
 * Interface for test attachment link, create this using workitem's relation object
 */
export interface ITestAttachmentLink {
    /**
    * relation
    */
    rel: string;
    /**
    * title
    */
    title: string;
    /**
    * url
    */
    url: string;
    /**
    * attribute eg: "comment" : [TestStep=1]
    */
    attributes: IDictionaryStringTo<any>;
}
/**
 * Supported test step type
 */
export class TestStepType {
    static Action: string;
    static Validate: string;
}
/**
 * Supported action type
 */
export class TestActionTypes {
    static Step: string;
    static SharedSteps: string;
}
/**
 * Test base helper class
 */
export class TestBaseHelper {
    /**
    * It will create a testbase object, which we could link as test case
    * using this object we can create teststeps and generate teststep xml
    * in end we can save alla actions into jsonpatchdocument object
    * finally we can maek a create/update worktiem call using that json
    */
    create(): ITestBase;
}
}
declare module "TFS/TestManagement/RestClient" {
import Contracts = require("TFS/TestManagement/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected actionResultsApiVersion: string;
    protected attachmentsApiVersion: string;
    protected attachmentsApiVersion_2bffebe9: string;
    protected bugsApiVersion: string;
    protected cloneOperationApiVersion: string;
    protected cloneOperationApiVersion_5b9d6320: string;
    protected cloneOperationApiVersion_edc3ef4b: string;
    protected codeCoverageApiVersion: string;
    protected codeCoverageApiVersion_77560e8a: string;
    protected configurationsApiVersion: string;
    protected extensionFieldsApiVersion: string;
    protected iterationsApiVersion: string;
    protected messageLogsApiVersion: string;
    protected parameterResultsApiVersion: string;
    protected plansApiVersion: string;
    protected pointsApiVersion: string;
    protected pointsApiVersion_3bcfd5c8: string;
    protected resultRetentionSettingsApiVersion: string;
    protected resultsApiVersion: string;
    protected runsApiVersion: string;
    protected runsApiVersion_0a42c424: string;
    protected sessionApiVersion: string;
    protected sharedParameterApiVersion: string;
    protected sharedStepApiVersion: string;
    protected suiteEntryApiVersion: string;
    protected suitesApiVersion: string;
    protected suitesApiVersion_7b7619a0: string;
    protected suitesApiVersion_a4a1ec1c: string;
    protected testSettingsApiVersion: string;
    protected variablesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestVariable} testVariable
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId
     * @return IPromise<Contracts.TestVariable>
     */
    updateTestVariable(testVariable: Contracts.TestVariable, project: string, testVariableId: number): IPromise<Contracts.TestVariable>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestVariable[]>
     */
    getTestVariables(project: string, skip?: number, top?: number): IPromise<Contracts.TestVariable[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId
     * @return IPromise<Contracts.TestVariable>
     */
    getTestVariableById(project: string, testVariableId: number): IPromise<Contracts.TestVariable>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId
     * @return IPromise<void>
     */
    deleteTestVariable(project: string, testVariableId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestVariable} testVariable
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestVariable>
     */
    createTestVariable(testVariable: Contracts.TestVariable, project: string): IPromise<Contracts.TestVariable>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @return IPromise<Contracts.TestSettings>
     */
    getTestSettingsById(project: string, testSettingsId: number): IPromise<Contracts.TestSettings>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @return IPromise<void>
     */
    deleteTestSettings(project: string, testSettingsId: number): IPromise<void>;
    /**
     * @param {Contracts.TestSettings} testSettings
     * @param {string} project - Project ID or project name
     * @return IPromise<number>
     */
    createTestSettings(testSettings: Contracts.TestSettings, project: string): IPromise<number>;
    /**
     * @param {number} testCaseId
     * @return IPromise<Contracts.TestSuite[]>
     */
    getSuitesByTestCaseId(testCaseId: number): IPromise<Contracts.TestSuite[]>;
    /**
     * @param {Contracts.SuiteUpdateModel} suiteUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<Contracts.TestSuite>
     */
    updateTestSuite(suiteUpdateModel: Contracts.SuiteUpdateModel, project: string, planId: number, suiteId: number): IPromise<Contracts.TestSuite>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {boolean} includeSuites
     * @param {number} skip
     * @param {number} top
     * @param {boolean} asTreeView
     * @return IPromise<Contracts.TestSuite[]>
     */
    getTestSuitesForPlan(project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number, asTreeView?: boolean): IPromise<Contracts.TestSuite[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {boolean} includeChildSuites
     * @return IPromise<Contracts.TestSuite>
     */
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites?: boolean): IPromise<Contracts.TestSuite>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<void>
     */
    deleteTestSuite(project: string, planId: number, suiteId: number): IPromise<void>;
    /**
     * @param {Contracts.SuiteCreateModel} testSuite
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<Contracts.TestSuite[]>
     */
    createTestSuite(testSuite: Contracts.SuiteCreateModel, project: string, planId: number, suiteId: number): IPromise<Contracts.TestSuite[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @return IPromise<void>
     */
    removeTestCasesFromSuiteUrl(project: string, planId: number, suiteId: number, testCaseIds: string): IPromise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<Contracts.SuiteTestCase[]>
     */
    getTestCases(project: string, planId: number, suiteId: number): IPromise<Contracts.SuiteTestCase[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} testCaseIds
     * @return IPromise<Contracts.SuiteTestCase>
     */
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number): IPromise<Contracts.SuiteTestCase>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @return IPromise<Contracts.SuiteTestCase[]>
     */
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string): IPromise<Contracts.SuiteTestCase[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.SuiteEntryUpdateModel[]} suiteEntries
     * @param {string} project - Project ID or project name
     * @param {number} suiteId
     * @return IPromise<Contracts.SuiteEntry[]>
     */
    reorderSuiteEntries(suiteEntries: Contracts.SuiteEntryUpdateModel[], project: string, suiteId: number): IPromise<Contracts.SuiteEntry[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} suiteId
     * @return IPromise<Contracts.SuiteEntry[]>
     */
    getSuiteEntries(project: string, suiteId: number): IPromise<Contracts.SuiteEntry[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} sharedStepId
     * @return IPromise<void>
     */
    deleteSharedStep(project: string, sharedStepId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} sharedParameterId
     * @return IPromise<void>
     */
    deleteSharedParameter(project: string, sharedParameterId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestSession} testSession
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TestSession>
     */
    updateTestSession(testSession: Contracts.TestSession, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TestSession>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {number} period
     * @param {boolean} allSessions
     * @param {boolean} includeAllProperties
     * @param {Contracts.TestSessionSource} source
     * @param {boolean} includeOnlyCompletedSessions
     * @return IPromise<Contracts.TestSession[]>
     */
    getTestSessions(teamContext: TFS_Core_Contracts.TeamContext, period?: number, allSessions?: boolean, includeAllProperties?: boolean, source?: Contracts.TestSessionSource, includeOnlyCompletedSessions?: boolean): IPromise<Contracts.TestSession[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestSession} testSession
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TestSession>
     */
    createTestSession(testSession: Contracts.TestSession, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TestSession>;
    /**
     * @param {Contracts.RunUpdateModel} runUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestRun>
     */
    updateTestRun(runUpdateModel: Contracts.RunUpdateModel, project: string, runId: number): IPromise<Contracts.TestRun>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} buildUri
     * @param {string} owner
     * @param {string} tmiRunId
     * @param {number} planId
     * @param {boolean} includeRunDetails
     * @param {boolean} automated
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestRun>
     */
    getTestRunById(project: string, runId: number): IPromise<Contracts.TestRun>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<void>
     */
    deleteTestRun(project: string, runId: number): IPromise<void>;
    /**
     * @param {Contracts.RunCreateModel} testRun
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestRun>
     */
    createTestRun(testRun: Contracts.RunCreateModel, project: string): IPromise<Contracts.TestRun>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestRunStatistic>
     */
    getTestRunStatistics(project: string, runId: number): IPromise<Contracts.TestRunStatistic>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestResultById(project: string, runId: number, testCaseResultId: number, detailsToInclude?: Contracts.ResultDetails): IPromise<Contracts.TestCaseResult>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ResultRetentionSettings} retentionSettings
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ResultRetentionSettings>
     */
    updateResultRetentionSettings(retentionSettings: Contracts.ResultRetentionSettings, project: string): IPromise<Contracts.ResultRetentionSettings>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ResultRetentionSettings>
     */
    getResultRetentionSettings(project: string): IPromise<Contracts.ResultRetentionSettings>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestPointsQuery} query
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestPointsQuery>
     */
    getPointsByQuery(query: Contracts.TestPointsQuery, project: string, skip?: number, top?: number): IPromise<Contracts.TestPointsQuery>;
    /**
     * @param {Contracts.PointUpdateModel} pointUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} pointIds
     * @return IPromise<Contracts.TestPoint[]>
     */
    updateTestPoints(pointUpdateModel: Contracts.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string): IPromise<Contracts.TestPoint[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} witFields
     * @param {string} configurationId
     * @param {string} testCaseId
     * @param {string} testPointIds
     * @param {boolean} includePointDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestPoint[]>
     */
    getPoints(project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestPoint[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} pointIds
     * @param {string} witFields
     * @return IPromise<Contracts.TestPoint>
     */
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields?: string): IPromise<Contracts.TestPoint>;
    /**
     * @param {Contracts.PlanUpdateModel} planUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<Contracts.TestPlan>
     */
    updateTestPlan(planUpdateModel: Contracts.PlanUpdateModel, project: string, planId: number): IPromise<Contracts.TestPlan>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} owner
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includePlanDetails
     * @param {boolean} filterActivePlans
     * @return IPromise<Contracts.TestPlan[]>
     */
    getPlans(project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean): IPromise<Contracts.TestPlan[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<Contracts.TestPlan>
     */
    getPlanById(project: string, planId: number): IPromise<Contracts.TestPlan>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<void>
     */
    deleteTestPlan(project: string, planId: number): IPromise<void>;
    /**
     * @param {Contracts.PlanUpdateModel} testPlan
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestPlan>
     */
    createTestPlan(testPlan: Contracts.PlanUpdateModel, project: string): IPromise<Contracts.TestPlan>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} paramName
     * @return IPromise<Contracts.TestResultParameterModel[]>
     */
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string): IPromise<Contracts.TestResultParameterModel[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestMessageLogDetails[]>
     */
    getTestRunLogs(project: string, runId: number): IPromise<Contracts.TestMessageLogDetails[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeActionResults
     * @return IPromise<Contracts.TestIterationDetailsModel[]>
     */
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean): IPromise<Contracts.TestIterationDetailsModel[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {boolean} includeActionResults
     * @return IPromise<Contracts.TestIterationDetailsModel>
     */
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean): IPromise<Contracts.TestIterationDetailsModel>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.CustomTestFieldScope} scopeFilter
     * @return IPromise<Contracts.CustomTestFieldDefinition[]>
     */
    queryCustomFields(project: string, scopeFilter: Contracts.CustomTestFieldScope): IPromise<Contracts.CustomTestFieldDefinition[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.CustomTestFieldDefinition[]} newFields
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.CustomTestFieldDefinition[]>
     */
    addCustomFields(newFields: Contracts.CustomTestFieldDefinition[], project: string): IPromise<Contracts.CustomTestFieldDefinition[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestConfiguration} testConfiguration
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId
     * @return IPromise<Contracts.TestConfiguration>
     */
    updateTestConfiguration(testConfiguration: Contracts.TestConfiguration, project: string, testConfigurationId: number): IPromise<Contracts.TestConfiguration>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {string} continuationToken
     * @param {boolean} includeAllProperties
     * @return IPromise<Contracts.TestConfiguration[]>
     */
    getTestConfigurations(project: string, skip?: number, top?: number, continuationToken?: string, includeAllProperties?: boolean): IPromise<Contracts.TestConfiguration[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId
     * @return IPromise<Contracts.TestConfiguration>
     */
    getTestConfigurationById(project: string, testConfigurationId: number): IPromise<Contracts.TestConfiguration>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId
     * @return IPromise<void>
     */
    deleteTestConfiguration(project: string, testConfigurationId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestConfiguration} testConfiguration
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestConfiguration>
     */
    createTestConfiguration(testConfiguration: Contracts.TestConfiguration, project: string): IPromise<Contracts.TestConfiguration>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} flags
     * @return IPromise<Contracts.TestRunCoverage[]>
     */
    getTestRunCodeCoverage(project: string, runId: number, flags: number): IPromise<Contracts.TestRunCoverage[]>;
    /**
     * @exemptedapi
     * [Preview API] http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
     *
     * @param {Contracts.CodeCoverageData} coverageData
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<void>
     */
    updateCodeCoverageSummary(coverageData: Contracts.CodeCoverageData, project: string, buildId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} deltaBuildId
     * @return IPromise<Contracts.CodeCoverageSummary>
     */
    getCodeCoverageSummary(project: string, buildId: number, deltaBuildId?: number): IPromise<Contracts.CodeCoverageSummary>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} flags
     * @return IPromise<Contracts.BuildCoverage[]>
     */
    getBuildCodeCoverage(project: string, buildId: number, flags: number): IPromise<Contracts.BuildCoverage[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestSuiteCloneRequest} cloneRequestBody
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} sourceSuiteId
     * @return IPromise<Contracts.CloneOperationInformation>
     */
    cloneTestSuite(cloneRequestBody: Contracts.TestSuiteCloneRequest, project: string, planId: number, sourceSuiteId: number): IPromise<Contracts.CloneOperationInformation>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestPlanCloneRequest} cloneRequestBody
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<Contracts.CloneOperationInformation>
     */
    cloneTestPlan(cloneRequestBody: Contracts.TestPlanCloneRequest, project: string, planId: number): IPromise<Contracts.CloneOperationInformation>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} cloneOperationId
     * @param {boolean} includeDetails
     * @return IPromise<Contracts.CloneOperationInformation>
     */
    getCloneInformation(project: string, cloneOperationId: number, includeDetails?: boolean): IPromise<Contracts.CloneOperationInformation>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @return IPromise<Contracts.WorkItemReference[]>
     */
    getBugsLinkedToTestResult(project: string, runId: number, testCaseResultId: number): IPromise<Contracts.WorkItemReference[]>;
    /**
     * @exemptedapi
     * [Preview API] Returns a test run attachment
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} attachmentId
     * @return IPromise<ArrayBuffer>
     */
    getTestRunAttachmentZip(project: string, runId: number, attachmentId: number): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API] Returns a test run attachment
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} attachmentId
     * @return IPromise<ArrayBuffer>
     */
    getTestRunAttachmentContent(project: string, runId: number, attachmentId: number): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestRunAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @exemptedapi
     * [Preview API] Returns a test result attachment
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @return IPromise<ArrayBuffer>
     */
    getTestResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API] Returns a test result attachment
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @return IPromise<ArrayBuffer>
     */
    getTestResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number): IPromise<ArrayBuffer>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @return IPromise<Contracts.TestActionResultModel[]>
     */
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): IPromise<Contracts.TestActionResultModel[]>;
}
export class CommonMethods3To4_1 extends CommonMethods2To4_1 {
    protected attachmentsApiVersion: string;
    protected attachmentsApiVersion_2bffebe9: string;
    protected historyApiVersion: string;
    protected linkedWorkItemsQueryApiVersion: string;
    protected resultDetailsByBuildApiVersion: string;
    protected resultDetailsByReleaseApiVersion: string;
    protected resultDocumentApiVersion: string;
    protected resultsApiVersion: string;
    protected resultsApiVersion_6711da49: string;
    protected resultSummaryByBuildApiVersion: string;
    protected resultSummaryByReleaseApiVersion: string;
    protected resultSummaryByRequirementApiVersion: string;
    protected resultTrendByBuildApiVersion: string;
    protected resultTrendByReleaseApiVersion: string;
    protected testCasesApiVersion: string;
    protected workItemsApiVersion: string;
    protected workItemsApiVersion_371b1655: string;
    protected workItemsApiVersion_7b0bdee3: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} workItemCategory
     * @param {string} automatedTestName
     * @param {number} testCaseId
     * @param {Date} maxCompleteDate
     * @param {number} days
     * @param {number} workItemCount
     * @return IPromise<Contracts.WorkItemReference[]>
     */
    queryTestResultWorkItems(project: string, workItemCategory: string, automatedTestName?: string, testCaseId?: number, maxCompleteDate?: Date, days?: number, workItemCount?: number): IPromise<Contracts.WorkItemReference[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} testName
     * @return IPromise<Contracts.TestToWorkItemLinks>
     */
    queryTestMethodLinkedWorkItems(project: string, testName: string): IPromise<Contracts.TestToWorkItemLinks>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {string} testName
     * @param {number} workItemId
     * @return IPromise<boolean>
     */
    deleteTestMethodToWorkItemLink(project: string, testName: string, workItemId: number): IPromise<boolean>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.WorkItemToTestLinks} workItemToTestLinks
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemToTestLinks>
     */
    addWorkItemToTestLinks(workItemToTestLinks: Contracts.WorkItemToTestLinks, project: string): IPromise<Contracts.WorkItemToTestLinks>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} testCaseId
     * @return IPromise<void>
     */
    deleteTestCase(project: string, testCaseId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestResultTrendFilter} filter
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.AggregatedDataForResultTrend[]>
     */
    queryResultTrendForRelease(filter: Contracts.TestResultTrendFilter, project: string): IPromise<Contracts.AggregatedDataForResultTrend[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestResultTrendFilter} filter
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.AggregatedDataForResultTrend[]>
     */
    queryResultTrendForBuild(filter: Contracts.TestResultTrendFilter, project: string): IPromise<Contracts.AggregatedDataForResultTrend[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestResultsContext} resultsContext
     * @param {string} project - Project ID or project name
     * @param {number[]} workItemIds
     * @return IPromise<Contracts.TestSummaryForWorkItem[]>
     */
    queryTestSummaryByRequirement(resultsContext: Contracts.TestResultsContext, project: string, workItemIds?: number[]): IPromise<Contracts.TestSummaryForWorkItem[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ReleaseReference[]} releases
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestResultSummary[]>
     */
    queryTestResultsSummaryForReleases(releases: Contracts.ReleaseReference[], project: string): IPromise<Contracts.TestResultSummary[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     * @param {string} publishContext
     * @param {boolean} includeFailureDetails
     * @param {Contracts.ReleaseReference} releaseToCompare
     * @return IPromise<Contracts.TestResultSummary>
     */
    queryTestResultsReportForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, includeFailureDetails?: boolean, releaseToCompare?: Contracts.ReleaseReference): IPromise<Contracts.TestResultSummary>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {boolean} includeFailureDetails
     * @param {Contracts.BuildReference} buildToCompare
     * @return IPromise<Contracts.TestResultSummary>
     */
    queryTestResultsReportForBuild(project: string, buildId: number, publishContext?: string, includeFailureDetails?: boolean, buildToCompare?: Contracts.BuildReference): IPromise<Contracts.TestResultSummary>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestResultsQuery} query
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestResultsQuery>
     */
    getTestResultsByQuery(query: Contracts.TestResultsQuery, project: string): IPromise<Contracts.TestResultsQuery>;
    /**
     * @param {Contracts.TestCaseResult[]} results
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(results: Contracts.TestCaseResult[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResult[]} results
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(results: Contracts.TestCaseResult[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestResultDocument} document
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestResultDocument>
     */
    publishTestResultDocument(document: Contracts.TestResultDocument, project: string, runId: number): IPromise<Contracts.TestResultDocument>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     * @param {string} publishContext
     * @param {string} groupBy
     * @param {string} filter
     * @param {string} orderby
     * @return IPromise<Contracts.TestResultsDetails>
     */
    getTestResultDetailsForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string): IPromise<Contracts.TestResultsDetails>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {string} groupBy
     * @param {string} filter
     * @param {string} orderby
     * @return IPromise<Contracts.TestResultsDetails>
     */
    getTestResultDetailsForBuild(project: string, buildId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string): IPromise<Contracts.TestResultsDetails>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.LinkedWorkItemsQuery} workItemQuery
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.LinkedWorkItemsQueryResult[]>
     */
    getLinkedWorkItemsByQuery(workItemQuery: Contracts.LinkedWorkItemsQuery, project: string): IPromise<Contracts.LinkedWorkItemsQueryResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.ResultsFilter} filter
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestResultHistory>
     */
    queryTestResultHistory(filter: Contracts.ResultsFilter, project: string): IPromise<Contracts.TestResultHistory>;
    /**
     * @exemptedapi
     * [Preview API] Returns attachment references for test run.
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestAttachment[]>
     */
    getTestRunAttachments(project: string, runId: number): IPromise<Contracts.TestAttachment[]>;
    /**
     * @exemptedapi
     * [Preview API] Returns attachment references for test result.
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @return IPromise<Contracts.TestAttachment[]>
     */
    getTestResultAttachments(project: string, runId: number, testCaseResultId: number): IPromise<Contracts.TestAttachment[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestIterationResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): IPromise<Contracts.TestAttachmentReference>;
}
/**
 * @exemptedapi
 */
export class TestHttpClient4_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {string[]} fields
     * @return IPromise<Contracts.TestResultsGroupsForBuild>
     */
    getResultGroupsByBuild(project: string, buildId: number, publishContext: string, fields?: string[]): IPromise<Contracts.TestResultsGroupsForBuild>;
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} publishContext
     * @param {number} releaseEnvId
     * @param {string[]} fields
     * @return IPromise<Contracts.TestResultsGroupsForRelease>
     */
    getResultGroupsByRelease(project: string, releaseId: number, publishContext: string, releaseEnvId?: number, fields?: string[]): IPromise<Contracts.TestResultsGroupsForRelease>;
    /**
     * [Preview API] Get Test Results for a run based on filters.
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test Run Id for which results need to be fetched.
     * @param {Contracts.ResultDetails} detailsToInclude - enum indicates details need to be fetched.
     * @param {number} skip - Number of results to skip from beginning.
     * @param {number} top - Number of results to return. Max is 1000 when detailsToInclude is None and 100 otherwise.
     * @param {Contracts.TestOutcome[]} outcomes - List of Testoutcome to filter results, comma seperated list of Testoutcome.
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number, outcomes?: Contracts.TestOutcome[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * [Preview API] Query Test Runs based on filters.
     *
     * @param {string} project - Project ID or project name
     * @param {Date} minLastUpdatedDate - Minimum Last Modified Date of run to be queried (Mandatory).
     * @param {Date} maxLastUpdatedDate - Maximum Last Modified Date of run to be queried (Mandatory, difference between min and max date can be atmost 7 days).
     * @param {Contracts.TestRunState} state - Current state of the Runs to be queried.
     * @param {number[]} planIds - Plan Ids of the Runs to be queried, comma seperated list of valid ids.
     * @param {boolean} isAutomated - Automation type of the Runs to be queried.
     * @param {Contracts.TestRunPublishContext} publishContext - PublishContext of the Runs to be queried.
     * @param {number[]} buildIds - Build Ids of the Runs to be queried, comma seperated list of valid ids.
     * @param {number[]} buildDefIds - Build Definition Ids of the Runs to be queried, comma seperated list of valid ids.
     * @param {string} branchName - Source Branch name of the Runs to be queried.
     * @param {number[]} releaseIds - Release Ids of the Runs to be queried, comma seperated list of valid ids.
     * @param {number[]} releaseDefIds - Release Definition Ids of the Runs to be queried, comma seperated list of valid ids.
     * @param {number[]} releaseEnvIds - Release Environment Ids of the Runs to be queried, comma seperated list of valid ids.
     * @param {number[]} releaseEnvDefIds - Release Environment Definition Ids of the Runs to be queried, comma seperated list of valid ids.
     * @param {string} runTitle - Run Title of the Runs to be queried.
     * @param {number} top - Number of runs to be queried. Limit is 100
     * @param {string} continuationToken - continuationToken received from previous batch or null for first batch.
     * @return IPromise<Contracts.TestRun[]>
     */
    queryTestRuns(project: string, minLastUpdatedDate: Date, maxLastUpdatedDate: Date, state?: Contracts.TestRunState, planIds?: number[], isAutomated?: boolean, publishContext?: Contracts.TestRunPublishContext, buildIds?: number[], buildDefIds?: number[], branchName?: string, releaseIds?: number[], releaseDefIds?: number[], releaseEnvIds?: number[], releaseEnvDefIds?: number[], runTitle?: string, top?: number, continuationToken?: string): IPromise<Contracts.TestRun[]>;
}
/**
 * @exemptedapi
 */
export class TestHttpClient4 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
}
export class TestHttpClient3_2 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
}
export class TestHttpClient3_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
}
export class TestHttpClient3 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
}
export class TestHttpClient2_3 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestIterationResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @param {Contracts.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(resultCreateModels: Contracts.TestResultCreateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    bulkUpdateTestResults(resultUpdateModel: Contracts.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param {boolean} includeAssociatedBugs
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, includeAssociatedBugs?: boolean): IPromise<Contracts.TestCaseResult>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(resultUpdateModels: Contracts.TestCaseResultUpdateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResultsByQuery(query: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRunsByQuery(query: Contracts.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
}
export class TestHttpClient2_2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestIterationResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @param {Contracts.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(resultCreateModels: Contracts.TestResultCreateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    bulkUpdateTestResults(resultUpdateModel: Contracts.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param {boolean} includeAssociatedBugs
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, includeAssociatedBugs?: boolean): IPromise<Contracts.TestCaseResult>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(resultUpdateModels: Contracts.TestCaseResultUpdateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResultsByQuery(query: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRunsByQuery(query: Contracts.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
}
export class TestHttpClient2_1 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestIterationResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @param {Contracts.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(resultCreateModels: Contracts.TestResultCreateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    bulkUpdateTestResults(resultUpdateModel: Contracts.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param {boolean} includeAssociatedBugs
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, includeAssociatedBugs?: boolean): IPromise<Contracts.TestCaseResult>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(resultUpdateModels: Contracts.TestCaseResultUpdateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResultsByQuery(query: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRunsByQuery(query: Contracts.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
}
export class TestHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestIterationResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @param {Contracts.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(resultCreateModels: Contracts.TestResultCreateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    bulkUpdateTestResults(resultUpdateModel: Contracts.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param {boolean} includeAssociatedBugs
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, includeAssociatedBugs?: boolean): IPromise<Contracts.TestCaseResult>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(resultUpdateModels: Contracts.TestCaseResultUpdateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResultsByQuery(query: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @exemptedapi
     * [Preview API]
     *
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRunsByQuery(query: Contracts.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
}
export class TestHttpClient extends TestHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TestHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TestHttpClient4;
}
declare module "TFS/VersionControl/Contracts" {
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AssociatedWorkItem {
    assignedTo: string;
    /**
     * Id of associated the work item.
     */
    id: number;
    state: string;
    title: string;
    /**
     * REST Url of the work item.
     */
    url: string;
    webUrl: string;
    workItemType: string;
}
export interface AsyncGitOperationNotification {
    operationId: number;
}
export interface AsyncRefOperationCommitLevelEventNotification extends AsyncGitOperationNotification {
    commitId: string;
}
export interface AsyncRefOperationCompletedNotification extends AsyncGitOperationNotification {
    newRefName: string;
}
export interface AsyncRefOperationConflictNotification extends AsyncRefOperationCommitLevelEventNotification {
}
export interface AsyncRefOperationGeneralFailureNotification extends AsyncGitOperationNotification {
}
export interface AsyncRefOperationProgressNotification extends AsyncRefOperationCommitLevelEventNotification {
    progress: number;
}
export interface AsyncRefOperationTimeoutNotification extends AsyncGitOperationNotification {
}
/**
 * Meta data for a file attached to an artifact.
 */
export interface Attachment {
    /**
     * Links to other related objects.
     */
    _links: any;
    /**
     * The person that uploaded this attachment.
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the server by using SHA1 hash function.
     */
    contentHash: string;
    /**
     * The time the attachment was uploaded.
     */
    createdDate: Date;
    /**
     * The description of the attachment.
     */
    description: string;
    /**
     * The display name of the attachment. Can't be null or empty.
     */
    displayName: string;
    /**
     * Id of the attachment.
     */
    id: number;
    /**
     * Extended properties.
     */
    properties: any;
    /**
     * The url to download the content of the attachment.
     */
    url: string;
}
/**
 * Real time event (SignalR) for an auto-complete update on a pull request
 */
export interface AutoCompleteUpdatedEvent extends RealTimePullRequestEvent {
}
/**
 * Real time event (SignalR) for a source/target branch update on a pull request
 */
export interface BranchUpdatedEvent extends RealTimePullRequestEvent {
    /**
     * If true, the source branch of the pull request was updated
     */
    isSourceUpdate: boolean;
}
export interface Change<T> {
    /**
     * The type of change that was made to the item.
     */
    changeType: VersionControlChangeType;
    /**
     * Current version.
     */
    item: T;
    /**
     * Content of the item after the change.
     */
    newContent: ItemContent;
    /**
     * Path of the item on the server.
     */
    sourceServerItem: string;
    /**
     * URL to retrieve the item.
     */
    url: string;
}
export interface ChangeCountDictionary {
}
export interface ChangeList<T> {
    allChangesIncluded: boolean;
    changeCounts: {
        [key: number]: number;
    };
    changes: Change<T>[];
    comment: string;
    commentTruncated: boolean;
    creationDate: Date;
    notes: CheckinNote[];
    owner: string;
    ownerDisplayName: string;
    ownerId: string;
    sortDate: Date;
    version: string;
}
/**
 * Criteria used in a search for change lists
 */
export interface ChangeListSearchCriteria {
    /**
     * If provided, a version descriptor to compare against base
     */
    compareVersion: string;
    /**
     * If true, don't include delete history entries
     */
    excludeDeletes: boolean;
    /**
     * Whether or not to follow renames for the given item being queried
     */
    followRenames: boolean;
    /**
     * If provided, only include history entries created after this date (string)
     */
    fromDate: string;
    /**
     * If provided, a version descriptor for the earliest change list to include
     */
    fromVersion: string;
    /**
     * Path of item to search under. If the itemPaths memebr is used then it will take precedence over this.
     */
    itemPath: string;
    /**
     * List of item paths to search under. If this member is used then itemPath will be ignored.
     */
    itemPaths: string[];
    /**
     * Version of the items to search
     */
    itemVersion: string;
    /**
     * Number of results to skip (used when clicking more...)
     */
    skip: number;
    /**
     * If provided, only include history entries created before this date (string)
     */
    toDate: string;
    /**
     * If provided, the maximum number of history entries to return
     */
    top: number;
    /**
     * If provided, a version descriptor for the latest change list to include
     */
    toVersion: string;
    /**
     * Alias or display name of user who made the changes
     */
    user: string;
}
export interface CheckinNote {
    name: string;
    value: string;
}
/**
 * Represents a comment which is one of potentially many in a comment thread.
 */
export interface Comment {
    /**
     * Links to other related objects.
     */
    _links: any;
    /**
     * The author of the comment.
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * The comment type at the time of creation.
     */
    commentType: CommentType;
    /**
     * The comment content.
     */
    content: string;
    /**
     * The comment ID. IDs start at 1 and are unique to a pull request.
     */
    id: number;
    /**
     * Whether or not this comment was soft-deleted.
     */
    isDeleted: boolean;
    /**
     * The date the comment's content was last updated.
     */
    lastContentUpdatedDate: Date;
    /**
     * The date the comment was last updated.
     */
    lastUpdatedDate: Date;
    /**
     * The ID of the parent comment. This is used for replies.
     */
    parentCommentId: number;
    /**
     * The date the comment was first published.
     */
    publishedDate: Date;
    /**
     * A list of the users who have liked this comment.
     */
    usersLiked: VSS_Common_Contracts.IdentityRef[];
}
/**
 * Comment iteration context is used to identify which diff was being viewed when the thread was created.
 */
export interface CommentIterationContext {
    /**
     * The iteration of the file on the left side of the diff when the thread was created. If this value is equal to SecondComparingIteration, then this version is the common commit between the source and target branches of the pull request.
     */
    firstComparingIteration: number;
    /**
     * The iteration of the file on the right side of the diff when the thread was created.
     */
    secondComparingIteration: number;
}
export interface CommentPosition {
    /**
     * The line number of a thread's position. Starts at 1.
     */
    line: number;
    /**
     * The character offset of a thread's position inside of a line. Starts at 0.
     */
    offset: number;
}
/**
 * Represents a comment thread of a pull request. A thread contains meta data about the file it was left on along with one or more comments (an initial comment and the subsequent replies).
 */
export interface CommentThread {
    /**
     * Links to other related objects.
     */
    _links: any;
    /**
     * A list of the comments.
     */
    comments: Comment[];
    /**
     * The comment thread id.
     */
    id: number;
    /**
     * Specify if the thread is deleted which happens when all comments are deleted.
     */
    isDeleted: boolean;
    /**
     * The time this thread was last updated.
     */
    lastUpdatedDate: Date;
    /**
     * Optional properties associated with the thread as a collection of key-value pairs.
     */
    properties: any;
    /**
     * The time this thread was published.
     */
    publishedDate: Date;
    /**
     * The status of the comment thread.
     */
    status: CommentThreadStatus;
    /**
     * Specify thread context such as position in left/right file.
     */
    threadContext: CommentThreadContext;
}
export interface CommentThreadContext {
    /**
     * File path relative to the root of the repository. It's up to the client to use any path format.
     */
    filePath: string;
    /**
     * Position of last character of the thread's span in left file.
     */
    leftFileEnd: CommentPosition;
    /**
     * Position of first character of the thread's span in left file.
     */
    leftFileStart: CommentPosition;
    /**
     * Position of last character of the thread's span in right file.
     */
    rightFileEnd: CommentPosition;
    /**
     * Position of first character of the thread's span in right file.
     */
    rightFileStart: CommentPosition;
}
/**
 * The status of a comment thread.
 */
export enum CommentThreadStatus {
    /**
     * The thread status is unknown.
     */
    Unknown = 0,
    /**
     * The thread status is active.
     */
    Active = 1,
    /**
     * The thread status is resolved as fixed.
     */
    Fixed = 2,
    /**
     * The thread status is resolved as won't fix.
     */
    WontFix = 3,
    /**
     * The thread status is closed.
     */
    Closed = 4,
    /**
     * The thread status is resolved as by design.
     */
    ByDesign = 5,
    /**
     * The thread status is pending.
     */
    Pending = 6,
}
/**
 * Comment tracking criteria is used to identify which iteration context the thread has been tracked to (if any) along with some detail about the original position and filename.
 */
export interface CommentTrackingCriteria {
    /**
     * The iteration of the file on the left side of the diff that the thread will be tracked to. Threads were tracked if this is greater than 0.
     */
    firstComparingIteration: number;
    /**
     * Original filepath the thread was created on before tracking. This will be different than the current thread filepath if the file in question was renamed in a later iteration.
     */
    origFilePath: string;
    /**
     * Original position of last character of the thread's span in left file.
     */
    origLeftFileEnd: CommentPosition;
    /**
     * Original position of first character of the thread's span in left file.
     */
    origLeftFileStart: CommentPosition;
    /**
     * Original position of last character of the thread's span in right file.
     */
    origRightFileEnd: CommentPosition;
    /**
     * Original position of first character of the thread's span in right file.
     */
    origRightFileStart: CommentPosition;
    /**
     * The iteration of the file on the right side of the diff that the thread will be tracked to. Threads were tracked if this is greater than 0.
     */
    secondComparingIteration: number;
}
/**
 * The type of a comment.
 */
export enum CommentType {
    /**
     * The comment type is not known.
     */
    Unknown = 0,
    /**
     * This is a regular user comment.
     */
    Text = 1,
    /**
     * The comment comes as a result of a code change.
     */
    CodeChange = 2,
    /**
     * The comment represents a system message.
     */
    System = 3,
}
/**
 * Real time event (SignalR) for a completion errors on a pull request
 */
export interface CompletionErrorsEvent extends RealTimePullRequestEvent {
    /**
     * The error message associated with the completion error
     */
    errorMessage: string;
}
/**
 * Real time event (SignalR) for a discussions update on a pull request
 */
export interface DiscussionsUpdatedEvent extends RealTimePullRequestEvent {
}
export interface FileContentMetadata {
    contentType: string;
    encoding: number;
    extension: string;
    fileName: string;
    isBinary: boolean;
    isImage: boolean;
    vsLink: string;
}
/**
 * A Git annotated tag.
 */
export interface GitAnnotatedTag {
    /**
     * The tagging Message
     */
    message: string;
    /**
     * The name of the annotated tag.
     */
    name: string;
    /**
     * The objectId (Sha1Id) of the tag.
     */
    objectId: string;
    /**
     * User info and date of tagging.
     */
    taggedBy: GitUserDate;
    /**
     * Tagged git object.
     */
    taggedObject: GitObject;
    url: string;
}
/**
 * Current status of the asynchronous operation.
 */
export enum GitAsyncOperationStatus {
    /**
     * The operation is waiting in a queue and has not yet started.
     */
    Queued = 1,
    /**
     * The operation is currently in progress.
     */
    InProgress = 2,
    /**
     * The operation has completed.
     */
    Completed = 3,
    /**
     * The operation has failed. Check for an error message.
     */
    Failed = 4,
    /**
     * The operation has been abandoned.
     */
    Abandoned = 5,
}
export interface GitAsyncRefOperation {
    _links: any;
    detailedStatus: GitAsyncRefOperationDetail;
    parameters: GitAsyncRefOperationParameters;
    status: GitAsyncOperationStatus;
    /**
     * A URL that can be used to make further requests for status about the operation
     */
    url: string;
}
/**
 * Information about the progress of a cherry pick or revert operation.
 */
export interface GitAsyncRefOperationDetail {
    /**
     * Indicates if there was a conflict generated when trying to cherry pick or revert the changes.
     */
    conflict: boolean;
    /**
     * The current commit from the list of commits that are being cherry picked or reverted.
     */
    currentCommitId: string;
    /**
     * Detailed information about why the cherry pick or revert failed to complete.
     */
    failureMessage: string;
    /**
     * A number between 0 and 1 indicating the percent complete of the operation.
     */
    progress: number;
    /**
     * Provides a status code that indicates the reason the cherry pick or revert failed.
     */
    status: GitAsyncRefOperationFailureStatus;
    /**
     * Indicates if the operation went beyond the maximum time allowed for a cherry pick or revert operation.
     */
    timedout: boolean;
}
export enum GitAsyncRefOperationFailureStatus {
    /**
     * No status
     */
    None = 0,
    /**
     * Indicates that the ref update request could not be completed because the ref name presented in the request was not valid.
     */
    InvalidRefName = 1,
    /**
     * The ref update could not be completed because, in case-insensitive mode, the ref name conflicts with an existing, differently-cased ref name.
     */
    RefNameConflict = 2,
    /**
     * The ref update request could not be completed because the user lacks the permission to create a branch
     */
    CreateBranchPermissionRequired = 3,
    /**
     * The ref update request could not be completed because the user lacks write permissions required to write this ref
     */
    WritePermissionRequired = 4,
    /**
     * Target branch was deleted after Git async operation started
     */
    TargetBranchDeleted = 5,
    /**
     * Git object is too large to materialize into memory
     */
    GitObjectTooLarge = 6,
    /**
     * Identity who authorized the operation was not found
     */
    OperationIndentityNotFound = 7,
    /**
     * Async operation was not found
     */
    AsyncOperationNotFound = 8,
    /**
     * Unexpected failure
     */
    Other = 9,
}
/**
 * Parameters that are provided in the request body when requesting to cherry pick or revert.
 */
export interface GitAsyncRefOperationParameters {
    /**
     * Proposed target branch name for the cherry pick or revert operation.
     */
    generatedRefName: string;
    /**
     * The target branch for the cherry pick or revert operation.
     */
    ontoRefName: string;
    /**
     * The git repository for the cherry pick or revert operation.
     */
    repository: GitRepository;
    /**
     * Details about the source of the cherry pick or revert operation (e.g. A pull request or a specific commit).
     */
    source: GitAsyncRefOperationSource;
}
/**
 * GitAsyncRefOperationSource specifies the pull request or list of commits to use when making a cherry pick and revert operation request. Only one should be provided.
 */
export interface GitAsyncRefOperationSource {
    /**
     * A list of commits to cherry pick or revert
     */
    commitList: GitCommitRef[];
    /**
     * Id of the pull request to cherry pick or revert
     */
    pullRequestId: number;
}
export interface GitBaseVersionDescriptor extends GitVersionDescriptor {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    baseVersion: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    baseVersionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    baseVersionType: GitVersionType;
}
export interface GitBlobRef {
    _links: any;
    /**
     * SHA1 hash of git object
     */
    objectId: string;
    /**
     * Size of blob content (in bytes)
     */
    size: number;
    url: string;
}
/**
 * Ahead and behind counts for a particular ref.
 */
export interface GitBranchStats {
    /**
     * Number of commits ahead.
     */
    aheadCount: number;
    /**
     * Number of commits behind.
     */
    behindCount: number;
    /**
     * Current commit.
     */
    commit: GitCommitRef;
    /**
     * True if this is the result for the base version.
     */
    isBaseVersion: boolean;
    /**
     * Name of the ref.
     */
    name: string;
}
export interface GitChange extends Change<GitItem> {
    /**
     * ID of the change within the group of changes.
     */
    changeId: number;
    /**
     * New Content template to be used when pushing new changes.
     */
    newContentTemplate: GitTemplate;
    /**
     * Original path of item if different from current path.
     */
    originalPath: string;
}
/**
 * This object is returned from Cherry Pick operations and provides the id and status of the operation
 */
export interface GitCherryPick extends GitAsyncRefOperation {
    cherryPickId: number;
}
export interface GitCommit extends GitCommitRef {
    push: GitPushRef;
    treeId: string;
}
export interface GitCommitChanges {
    changeCounts: ChangeCountDictionary;
    changes: GitChange[];
}
export interface GitCommitDiffs {
    aheadCount: number;
    allChangesIncluded: boolean;
    baseCommit: string;
    behindCount: number;
    changeCounts: {
        [key: number]: number;
    };
    changes: GitChange[];
    commonCommit: string;
    targetCommit: string;
}
/**
 * Provides properties that describe a Git commit and associated metadata.
 */
export interface GitCommitRef {
    /**
     * A collection of related REST reference links.
     */
    _links: any;
    /**
     * Author of the commit.
     */
    author: GitUserDate;
    /**
     * Counts of the types of changes (edits, deletes, etc.) included with the commit.
     */
    changeCounts: ChangeCountDictionary;
    /**
     * An enumeration of the changes included with the commit.
     */
    changes: GitChange[];
    /**
     * Comment or message of the commit.
     */
    comment: string;
    /**
     * Indicates if the comment is truncated from the full Git commit comment message.
     */
    commentTruncated: boolean;
    /**
     * ID (SHA-1) of the commit.
     */
    commitId: string;
    /**
     * Committer of the commit.
     */
    committer: GitUserDate;
    /**
     * An enumeration of the parent commit IDs for this commit.
     */
    parents: string[];
    /**
     * Remote URL path to the commit.
     */
    remoteUrl: string;
    /**
     * A list of status metadata from services and extensions that may associate additional information to the commit.
     */
    statuses: GitStatus[];
    /**
     * REST URL for this resource.
     */
    url: string;
    /**
     * A list of workitems associated with this commit.
     */
    workItems: VSS_Common_Contracts.ResourceRef[];
}
export interface GitCommitToCreate {
    baseRef: GitRef;
    comment: string;
    pathActions: GitPathAction[];
}
export interface GitConflict {
    _links: any;
    conflictId: number;
    conflictPath: string;
    conflictType: GitConflictType;
    mergeBaseCommit: GitCommitRef;
    mergeOrigin: GitMergeOriginRef;
    mergeSourceCommit: GitCommitRef;
    mergeTargetCommit: GitCommitRef;
    resolutionError: GitResolutionError;
    resolutionStatus: GitResolutionStatus;
    resolvedBy: VSS_Common_Contracts.IdentityRef;
    resolvedDate: Date;
    url: string;
}
/**
 * Data object for AddAdd conflict
 */
export interface GitConflictAddAdd extends GitConflict {
    resolution: GitResolutionMergeContent;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
}
/**
 * Data object for RenameAdd conflict
 */
export interface GitConflictAddRename extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPathConflict;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
    targetOriginalPath: string;
}
/**
 * Data object for EditDelete conflict
 */
export interface GitConflictDeleteEdit extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    targetBlob: GitBlobRef;
}
/**
 * Data object for RenameDelete conflict
 */
export interface GitConflictDeleteRename extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    targetBlob: GitBlobRef;
    targetNewPath: string;
}
/**
 * Data object for FileDirectory conflict
 */
export interface GitConflictDirectoryFile extends GitConflict {
    resolution: GitResolutionPathConflict;
    sourceTree: GitTreeRef;
    targetBlob: GitBlobRef;
}
/**
 * Data object for DeleteEdit conflict
 */
export interface GitConflictEditDelete extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    sourceBlob: GitBlobRef;
}
/**
 * Data object for EditEdit conflict
 */
export interface GitConflictEditEdit extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionMergeContent;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
}
/**
 * Data object for DirectoryFile conflict
 */
export interface GitConflictFileDirectory extends GitConflict {
    resolution: GitResolutionPathConflict;
    sourceBlob: GitBlobRef;
    targetTree: GitTreeRef;
}
/**
 * Data object for Rename1to2 conflict
 */
export interface GitConflictRename1to2 extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionRename1to2;
    sourceBlob: GitBlobRef;
    sourceNewPath: string;
    targetBlob: GitBlobRef;
    targetNewPath: string;
}
/**
 * Data object for Rename2to1 conflict
 */
export interface GitConflictRename2to1 extends GitConflict {
    resolution: GitResolutionPathConflict;
    sourceNewBlob: GitBlobRef;
    sourceOriginalBlob: GitBlobRef;
    sourceOriginalPath: string;
    targetNewBlob: GitBlobRef;
    targetOriginalBlob: GitBlobRef;
    targetOriginalPath: string;
}
/**
 * Data object for AddRename conflict
 */
export interface GitConflictRenameAdd extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPathConflict;
    sourceBlob: GitBlobRef;
    sourceOriginalPath: string;
    targetBlob: GitBlobRef;
}
/**
 * Data object for DeleteRename conflict
 */
export interface GitConflictRenameDelete extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    sourceBlob: GitBlobRef;
    sourceNewPath: string;
}
/**
 * Data object for RenameRename conflict
 */
export interface GitConflictRenameRename extends GitConflict {
    baseBlob: GitBlobRef;
    originalPath: string;
    resolution: GitResolutionMergeContent;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
}
/**
 * The type of a merge conflict.
 */
export enum GitConflictType {
    /**
     * No conflict
     */
    None = 0,
    /**
     * Added on source and target; content differs
     */
    AddAdd = 1,
    /**
     * Added on source and rename destination on target
     */
    AddRename = 2,
    /**
     * Deleted on source and edited on target
     */
    DeleteEdit = 3,
    /**
     * Deleted on source and renamed on target
     */
    DeleteRename = 4,
    /**
     * Path is a directory on source and a file on target
     */
    DirectoryFile = 5,
    /**
     * Children of directory which has DirectoryFile or FileDirectory conflict
     */
    DirectoryChild = 6,
    /**
     * Edited on source and deleted on target
     */
    EditDelete = 7,
    /**
     * Edited on source and target; content differs
     */
    EditEdit = 8,
    /**
     * Path is a file on source and a directory on target
     */
    FileDirectory = 9,
    /**
     * Same file renamed on both source and target; destination paths differ
     */
    Rename1to2 = 10,
    /**
     * Different files renamed to same destination path on both source and target
     */
    Rename2to1 = 11,
    /**
     * Rename destination on source and new file on target
     */
    RenameAdd = 12,
    /**
     * Renamed on source and deleted on target
     */
    RenameDelete = 13,
    /**
     * Rename destination on both source and target; content differs
     */
    RenameRename = 14,
}
export interface GitConflictUpdateResult {
    /**
     * Conflict ID that was provided by input
     */
    conflictId: number;
    /**
     * Reason for failing
     */
    customMessage: string;
    /**
     * New state of the conflict after updating
     */
    updatedConflict: GitConflict;
    /**
     * Status of the update on the server
     */
    updateStatus: GitConflictUpdateStatus;
}
/**
 * Represents the possible outcomes from a request to update a pull request conflict
 */
export enum GitConflictUpdateStatus {
    /**
     * Indicates that pull request conflict update request was completed successfully
     */
    Succeeded = 0,
    /**
     * Indicates that the update request did not fit the expected data contract
     */
    BadRequest = 1,
    /**
     * Indicates that the requested resolution was not valid
     */
    InvalidResolution = 2,
    /**
     * Indicates that the conflict in the update request was not a supported conflict type
     */
    UnsupportedConflictType = 3,
    /**
     * Indicates that the conflict could not be found
     */
    NotFound = 4,
}
export interface GitDeletedRepository {
    createdDate: Date;
    deletedBy: VSS_Common_Contracts.IdentityRef;
    deletedDate: Date;
    id: string;
    name: string;
    project: TFS_Core_Contracts.TeamProjectReference;
}
export interface GitFilePathsCollection {
    commitId: string;
    paths: string[];
    url: string;
}
/**
 * Status information about a requested fork operation.
 */
export interface GitForkOperationStatusDetail {
    /**
     * All valid steps for the forking process
     */
    allSteps: string[];
    /**
     * Index into AllSteps for the current step
     */
    currentStep: number;
    /**
     * Error message if the operation failed.
     */
    errorMessage: string;
}
/**
 * Information about a fork ref.
 */
export interface GitForkRef extends GitRef {
    /**
     * The repository ID of the fork.
     */
    repository: GitRepository;
}
/**
 * Request to sync data between two forks.
 */
export interface GitForkSyncRequest {
    /**
     * Collection of related links
     */
    _links: any;
    detailedStatus: GitForkOperationStatusDetail;
    /**
     * Unique identifier for the operation.
     */
    operationId: number;
    /**
     * Fully-qualified identifier for the source repository.
     */
    source: GlobalGitRepositoryKey;
    /**
     * If supplied, the set of ref mappings to use when performing a "sync" or create. If missing, all refs will be synchronized.
     */
    sourceToTargetRefs: SourceToTargetRef[];
    status: GitAsyncOperationStatus;
}
/**
 * Parameters for creating a fork request
 */
export interface GitForkSyncRequestParameters {
    /**
     * Fully-qualified identifier for the source repository.
     */
    source: GlobalGitRepositoryKey;
    /**
     * If supplied, the set of ref mappings to use when performing a "sync" or create. If missing, all refs will be synchronized.
     */
    sourceToTargetRefs: SourceToTargetRef[];
}
/**
 * Accepted types of version
 */
export enum GitHistoryMode {
    /**
     * The history mode used by `git log`. This is the default.
     */
    SimplifiedHistory = 0,
    /**
     * The history mode used by `git log --first-parent`
     */
    FirstParent = 1,
    /**
     * The history mode used by `git log --full-history`
     */
    FullHistory = 2,
    /**
     * The history mode used by `git log --full-history --simplify-merges`
     */
    FullHistorySimplifyMerges = 3,
}
export interface GitImportFailedEvent {
    sourceRepositoryName: string;
    targetRepository: GitRepository;
}
/**
 * Parameter for creating a git import request when source is Git version control
 */
export interface GitImportGitSource {
    /**
     * Tells if this is a sync request or not
     */
    overwrite: boolean;
    /**
     * Url for the source repo
     */
    url: string;
}
/**
 * A request to import data from a remote source control system.
 */
export interface GitImportRequest {
    /**
     * Links to related resources.
     */
    _links: any;
    /**
     * Detailed status of the import, including the current step and an error message, if applicable.
     */
    detailedStatus: GitImportStatusDetail;
    /**
     * The unique identifier for this import request.
     */
    importRequestId: number;
    /**
     * Parameters for creating the import request.
     */
    parameters: GitImportRequestParameters;
    /**
     * The target repository for this import.
     */
    repository: GitRepository;
    /**
     * Current status of the import.
     */
    status: GitAsyncOperationStatus;
    /**
     * A link back to this import request resource.
     */
    url: string;
}
/**
 * Parameters for creating an import request
 */
export interface GitImportRequestParameters {
    /**
     * Option to delete service endpoint when import is done
     */
    deleteServiceEndpointAfterImportIsDone: boolean;
    /**
     * Source for importing git repository
     */
    gitSource: GitImportGitSource;
    /**
     * Service Endpoint for connection to external endpoint
     */
    serviceEndpointId: string;
    /**
     * Source for importing tfvc repository
     */
    tfvcSource: GitImportTfvcSource;
}
/**
 * Additional status information about an import request.
 */
export interface GitImportStatusDetail {
    /**
     * All valid steps for the import process
     */
    allSteps: string[];
    /**
     * Index into AllSteps for the current step
     */
    currentStep: number;
    /**
     * Error message if the operation failed.
     */
    errorMessage: string;
}
export interface GitImportSucceededEvent {
    sourceRepositoryName: string;
    targetRepository: GitRepository;
}
/**
 * Parameter for creating a git import request when source is tfvc version control
 */
export interface GitImportTfvcSource {
    /**
     * Set true to import History, false otherwise
     */
    importHistory: boolean;
    /**
     * Get history for last n days (max allowed value is 180 days)
     */
    importHistoryDurationInDays: number;
    /**
     * Path which we want to import (this can be copied from Path Control in Explorer)
     */
    path: string;
}
export interface GitItem extends ItemModel {
    /**
     * SHA1 of commit item was fetched at
     */
    commitId: string;
    /**
     * Type of object (Commit, Tree, Blob, Tag, ...)
     */
    gitObjectType: GitObjectType;
    /**
     * Shallow ref to commit that last changed this item Only populated if latestProcessedChange is requested May not be accurate if latest change is not yet cached
     */
    latestProcessedChange: GitCommitRef;
    /**
     * Git object id
     */
    objectId: string;
    /**
     * Git object id
     */
    originalObjectId: string;
}
export interface GitItemDescriptor {
    /**
     * Path to item
     */
    path: string;
    /**
     * Specifies whether to include children (OneLevel), all descendants (Full), or None
     */
    recursionLevel: VersionControlRecursionType;
    /**
     * Version string (interpretation based on VersionType defined in subclass
     */
    version: string;
    /**
     * Version modifiers (e.g. previous)
     */
    versionOptions: GitVersionOptions;
    /**
     * How to interpret version (branch,tag,commit)
     */
    versionType: GitVersionType;
}
export interface GitItemRequestData {
    /**
     * Whether to include metadata for all items
     */
    includeContentMetadata: boolean;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Collection of items to fetch, including path, version, and recursion level
     */
    itemDescriptors: GitItemDescriptor[];
    /**
     * Whether to include shallow ref to commit that last changed each item
     */
    latestProcessedChange: boolean;
}
export interface GitLastChangeItem {
    /**
     * Gets or sets the commit Id this item was modified most recently for the provided version.
     */
    commitId: string;
    /**
     * Gets or sets the path of the item.
     */
    path: string;
}
export interface GitLastChangeTreeItems {
    /**
     * The list of commits referenced by Items, if they were requested.
     */
    commits: GitCommitRef[];
    /**
     * The last change of items.
     */
    items: GitLastChangeItem[];
    /**
     * The last explored time, in case the result is not comprehensive. Null otherwise.
     */
    lastExploredTime: Date;
}
export interface GitMergeOriginRef {
    pullRequestId: number;
}
/**
 * Git object identifier and type information.
 */
export interface GitObject {
    /**
     * Object Id (Sha1Id).
     */
    objectId: string;
    /**
     * Type of object (Commit, Tree, Blob, Tag)
     */
    objectType: GitObjectType;
}
export enum GitObjectType {
    Bad = 0,
    Commit = 1,
    Tree = 2,
    Blob = 3,
    Tag = 4,
    Ext2 = 5,
    OfsDelta = 6,
    RefDelta = 7,
}
export interface GitPathAction {
    action: GitPathActions;
    base64Content: string;
    path: string;
    rawTextContent: string;
    targetPath: string;
}
export enum GitPathActions {
    None = 0,
    Edit = 1,
    Delete = 2,
    Add = 3,
    Rename = 4,
}
export interface GitPathToItemsCollection {
    items: {
        [key: string]: GitItem[];
    };
}
/**
 * Represents all the data associated with a pull request.
 */
export interface GitPullRequest {
    /**
     * Links to other related objects.
     */
    _links: any;
    /**
     * A string which uniquely identifies this pull request. To generate an artifact ID for a pull request, use this template: ```vstfs:///Git/PullRequestId/{projectId}/{repositoryId}/{pullRequestId}```
     */
    artifactId: string;
    /**
     * If set, auto-complete is enabled for this pull request and this is the identity that enabled it.
     */
    autoCompleteSetBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The user who closed the pull request.
     */
    closedBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The date when the pull request was closed (completed, abandoned, or merged externally).
     */
    closedDate: Date;
    /**
     * The code review ID of the pull request. Used internally.
     */
    codeReviewId: number;
    /**
     * The commits contained in the pull request.
     */
    commits: GitCommitRef[];
    /**
     * Options which affect how the pull request will be merged when it is completed.
     */
    completionOptions: GitPullRequestCompletionOptions;
    /**
     * The most recent date at which the pull request entered the queue to be completed. Used internally.
     */
    completionQueueTime: Date;
    /**
     * The identity of the user who created the pull request.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * The date when the pull request was created.
     */
    creationDate: Date;
    /**
     * The description of the pull request.
     */
    description: string;
    /**
     * If this is a PR from a fork this will contain information about its source.
     */
    forkSource: GitForkRef;
    /**
     * The labels associated with the pull request.
     */
    labels: TFS_Core_Contracts.WebApiTagDefinition[];
    /**
     * The commit of the most recent pull request merge. If empty, the most recent merge is in progress or was unsuccessful.
     */
    lastMergeCommit: GitCommitRef;
    /**
     * The commit at the head of the source branch at the time of the last pull request merge.
     */
    lastMergeSourceCommit: GitCommitRef;
    /**
     * The commit at the head of the target branch at the time of the last pull request merge.
     */
    lastMergeTargetCommit: GitCommitRef;
    /**
     * If set, pull request merge failed for this reason.
     */
    mergeFailureMessage: string;
    /**
     * The type of failure (if any) of the pull request merge.
     */
    mergeFailureType: PullRequestMergeFailureType;
    /**
     * The ID of the job used to run the pull request merge. Used internally.
     */
    mergeId: string;
    /**
     * Options used when the pull request merge runs. These are separate from completion options since completion happens only once and a new merge will run every time the source branch of the pull request changes.
     */
    mergeOptions: GitPullRequestMergeOptions;
    /**
     * The current status of the pull request merge.
     */
    mergeStatus: PullRequestAsyncStatus;
    /**
     * The ID of the pull request.
     */
    pullRequestId: number;
    /**
     * Used internally.
     */
    remoteUrl: string;
    /**
     * The repository containing the target branch of the pull request.
     */
    repository: GitRepository;
    /**
     * A list of reviewers on the pull request along with the state of their votes.
     */
    reviewers: IdentityRefWithVote[];
    /**
     * The name of the source branch of the pull request.
     */
    sourceRefName: string;
    /**
     * The status of the pull request.
     */
    status: PullRequestStatus;
    /**
     * If true, this pull request supports multiple iterations. Iteration support means individual pushes to the source branch of the pull request can be reviewed and comments left in one iteration will be tracked across future iterations.
     */
    supportsIterations: boolean;
    /**
     * The name of the target branch of the pull request.
     */
    targetRefName: string;
    /**
     * The title of the pull request.
     */
    title: string;
    /**
     * Used internally.
     */
    url: string;
    /**
     * Any work item references associated with this pull request.
     */
    workItemRefs: VSS_Common_Contracts.ResourceRef[];
}
/**
 * Change made in a pull request.
 */
export interface GitPullRequestChange extends GitChange {
    /**
     * ID used to track files through multiple changes.
     */
    changeTrackingId: number;
}
/**
 * Represents a comment thread of a pull request. A thread contains meta data about the file it was left on (if any) along with one or more comments (an initial comment and the subsequent replies).
 */
export interface GitPullRequestCommentThread extends CommentThread {
    /**
     * Extended context information unique to pull requests
     */
    pullRequestThreadContext: GitPullRequestCommentThreadContext;
}
/**
 * Comment thread context contains details about what diffs were being viewed at the time of thread creation and whether or not the thread has been tracked from that original diff.
 */
export interface GitPullRequestCommentThreadContext {
    /**
     * Used to track a comment across iterations. This value can be found by looking at the iteration's changes list. Must be set for pull requests with iteration support. Otherwise, it's not required for 'legacy' pull requests.
     */
    changeTrackingId: number;
    /**
     * The iteration context being viewed when the thread was created.
     */
    iterationContext: CommentIterationContext;
    /**
     * The criteria used to track this thread. If this property is filled out when the thread is returned, then the thread has been tracked from its original location using the given criteria.
     */
    trackingCriteria: CommentTrackingCriteria;
}
/**
 * Preferences about how the pull request should be completed.
 */
export interface GitPullRequestCompletionOptions {
    /**
     * If true, policies will be explicitly bypassed while the pull request is completed.
     */
    bypassPolicy: boolean;
    /**
     * If policies are bypassed, this reason is stored as to why bypass was used.
     */
    bypassReason: string;
    /**
     * If true, the source branch of the pull request will be deleted after completion.
     */
    deleteSourceBranch: boolean;
    /**
     * If set, this will be used as the commit message of the merge commit.
     */
    mergeCommitMessage: string;
    /**
     * If true, the commits in the pull request will be squash-merged into the specified target branch on completion.
     */
    squashMerge: boolean;
    /**
     * If true, we will attempt to transition any work items linked to the pull request into the next logical state (i.e. Active -> Resolved)
     */
    transitionWorkItems: boolean;
    /**
     * If true, the current completion attempt was triggered via auto-complete. Used internally.
     */
    triggeredByAutoComplete: boolean;
}
/**
 * Provides properties that describe a Git pull request iteration. Iterations are created as a result of creating and pushing updates to a pull request.
 */
export interface GitPullRequestIteration {
    /**
     * A collection of related REST reference links.
     */
    _links: any;
    /**
     * Author of the pull request iteration.
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * Changes included with the pull request iteration.
     */
    changeList: GitPullRequestChange[];
    /**
     * The commits included with the pull request iteration.
     */
    commits: GitCommitRef[];
    /**
     * The first common Git commit of the source and target refs.
     */
    commonRefCommit: GitCommitRef;
    /**
     * The creation date of the pull request iteration.
     */
    createdDate: Date;
    /**
     * Description of the pull request iteration.
     */
    description: string;
    /**
     * Indicates if the Commits property contains a truncated list of commits in this pull request iteration.
     */
    hasMoreCommits: boolean;
    /**
     * ID of the pull request iteration. Iterations are created as a result of creating and pushing updates to a pull request.
     */
    id: number;
    /**
     * The Git push information associated with this pull request iteration.
     */
    push: GitPushRef;
    /**
     * The reason for which the pull request iteration was created.
     */
    reason: IterationReason;
    /**
     * The source Git commit of this iteration.
     */
    sourceRefCommit: GitCommitRef;
    /**
     * The target Git commit of this iteration.
     */
    targetRefCommit: GitCommitRef;
    /**
     * The updated date of the pull request iteration.
     */
    updatedDate: Date;
}
/**
 * Collection of changes made in a pull request.
 */
export interface GitPullRequestIterationChanges {
    /**
     * Changes made in the iteration.
     */
    changeEntries: GitPullRequestChange[];
    /**
     * Value to specify as skip to get the next page of changes.  This will be zero if there are no more changes.
     */
    nextSkip: number;
    /**
     * Value to specify as top to get the next page of changes.  This will be zero if there are no more changes.
     */
    nextTop: number;
}
/**
 * The options which are used when a pull request merge is created.
 */
export interface GitPullRequestMergeOptions {
    /**
     * If true, rename detection will not be performed during the merge.
     */
    disableRenames: boolean;
}
/**
 * A set of pull request queries and their results.
 */
export interface GitPullRequestQuery {
    /**
     * The queries to perform.
     */
    queries: GitPullRequestQueryInput[];
    /**
     * The results of the queries. This matches the QueryInputs list so Results[n] are the results of QueryInputs[n]. Each entry in the list is a dictionary of commit->pull requests.
     */
    results: {
        [key: string]: GitPullRequest[];
    }[];
}
/**
 * Pull request query input parameters.
 */
export interface GitPullRequestQueryInput {
    /**
     * The list of commit IDs to search for.
     */
    items: string[];
    /**
     * The type of query to perform.
     */
    type: GitPullRequestQueryType;
}
/**
 * Accepted types of pull request queries.
 */
export enum GitPullRequestQueryType {
    /**
     * No query type set.
     */
    NotSet = 0,
    /**
     * Search for pull requests that created the supplied merge commits.
     */
    LastMergeCommit = 1,
    /**
     * Search for pull requests that merged the suppliest commits.
     */
    Commit = 2,
}
export interface GitPullRequestReviewFileContentInfo {
    _links: any;
    /**
     * The file change path.
     */
    path: string;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the client by using SHA1 hash function. Ensure that uploaded file has same encoding as in source control.
     */
    sHA1Hash: string;
}
export enum GitPullRequestReviewFileType {
    ChangeEntry = 0,
    Attachment = 1,
}
/**
 * Pull requests can be searched for matching this criteria.
 */
export interface GitPullRequestSearchCriteria {
    /**
     * If set, search for pull requests that were created by this identity.
     */
    creatorId: string;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * If set, search for pull requests whose target branch is in this repository.
     */
    repositoryId: string;
    /**
     * If set, search for pull requests that have this identity as a reviewer.
     */
    reviewerId: string;
    /**
     * If set, search for pull requests from this branch.
     */
    sourceRefName: string;
    /**
     * If set, search for pull requests whose source branch is in this repository.
     */
    sourceRepositoryId: string;
    /**
     * If set, search for pull requests that are in this state.
     */
    status: PullRequestStatus;
    /**
     * If set, search for pull requests into this branch.
     */
    targetRefName: string;
}
/**
 * This class contains the metadata of a service/extension posting pull request status. Status can be associated with a pull request or an iteration.
 */
export interface GitPullRequestStatus extends GitStatus {
    /**
     * ID of the iteration to associate status with. Minimum value is 1.
     */
    iterationId: number;
    /**
     * Custom properties of the status.
     */
    properties: any;
}
export interface GitPush extends GitPushRef {
    commits: GitCommitRef[];
    refUpdates: GitRefUpdate[];
    repository: GitRepository;
}
export interface GitPushEventData {
    afterId: string;
    beforeId: string;
    branch: string;
    commits: GitCommit[];
    repository: GitRepository;
}
export interface GitPushRef {
    _links: any;
    date: Date;
    pushCorrelationId: string;
    pushedBy: VSS_Common_Contracts.IdentityRef;
    pushId: number;
    url: string;
}
export interface GitPushSearchCriteria {
    fromDate: Date;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    includeRefUpdates: boolean;
    pusherId: string;
    refName: string;
    toDate: Date;
}
export interface GitQueryBranchStatsCriteria {
    baseCommit: GitVersionDescriptor;
    targetCommits: GitVersionDescriptor[];
}
export interface GitQueryCommitsCriteria {
    /**
     * Number of entries to skip
     */
    $skip: number;
    /**
     * Maximum number of entries to retrieve
     */
    $top: number;
    /**
     * Alias or display name of the author
     */
    author: string;
    /**
     * If provided, the earliest commit in the graph to search
     */
    compareVersion: GitVersionDescriptor;
    /**
     * If true, don't include delete history entries
     */
    excludeDeletes: boolean;
    /**
     * If provided, a lower bound for filtering commits alphabetically
     */
    fromCommitId: string;
    /**
     * If provided, only include history entries created after this date (string)
     */
    fromDate: string;
    /**
     * What Git history mode should be used. This only applies to the search criteria when Ids = null.
     */
    historyMode: GitHistoryMode;
    /**
     * If provided, specifies the exact commit ids of the commits to fetch. May not be combined with other parameters.
     */
    ids: string[];
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Whether to include linked work items
     */
    includeWorkItems: boolean;
    /**
     * Path of item to search under
     */
    itemPath: string;
    /**
     * If provided, identifies the commit or branch to search
     */
    itemVersion: GitVersionDescriptor;
    /**
     * If provided, an upper bound for filtering commits alphabetically
     */
    toCommitId: string;
    /**
     * If provided, only include history entries created before this date (string)
     */
    toDate: string;
    /**
     * Alias or display name of the committer
     */
    user: string;
}
export interface GitQueryRefsCriteria {
    /**
     * List of commit Ids to be searched
     */
    commitIds: string[];
    /**
     * List of complete or partial names for refs to be searched
     */
    refNames: string[];
    /**
     * Type of search on refNames, if provided
     */
    searchType: GitRefSearchType;
}
export interface GitRef {
    _links: any;
    isLocked: boolean;
    isLockedBy: VSS_Common_Contracts.IdentityRef;
    name: string;
    objectId: string;
    peeledObjectId: string;
    statuses: GitStatus[];
    url: string;
}
export interface GitRefFavorite {
    _links: any;
    id: number;
    identityId: string;
    name: string;
    repositoryId: string;
    type: RefFavoriteType;
    url: string;
}
/**
 * Search type on ref name
 */
export enum GitRefSearchType {
    Exact = 0,
    StartsWith = 1,
    Contains = 2,
}
export interface GitRefUpdate {
    isLocked: boolean;
    name: string;
    newObjectId: string;
    oldObjectId: string;
    repositoryId: string;
}
/**
 * Enumerates the modes under which ref updates can be written to their repositories.
 */
export enum GitRefUpdateMode {
    /**
     * Indicates the Git protocol model where any refs that can be updated will be updated, but any failures will not prevent other updates from succeeding.
     */
    BestEffort = 0,
    /**
     * Indicates that all ref updates must succeed or none will succeed. All ref updates will be atomically written. If any failure is encountered, previously successful updates will be rolled back and the entire operation will fail.
     */
    AllOrNone = 1,
}
export interface GitRefUpdateResult {
    /**
     * Custom message for the result object For instance, Reason for failing.
     */
    customMessage: string;
    /**
     * Whether the ref is locked or not
     */
    isLocked: boolean;
    /**
     * Ref name
     */
    name: string;
    /**
     * New object ID
     */
    newObjectId: string;
    /**
     * Old object ID
     */
    oldObjectId: string;
    /**
     * Name of the plugin that rejected the updated.
     */
    rejectedBy: string;
    /**
     * Repository ID
     */
    repositoryId: string;
    /**
     * True if the ref update succeeded, false otherwise
     */
    success: boolean;
    /**
     * Status of the update from the TFS server.
     */
    updateStatus: GitRefUpdateStatus;
}
/**
 * Represents the possible outcomes from a request to update a ref in a repository.
 */
export enum GitRefUpdateStatus {
    /**
     * Indicates that the ref update request was completed successfully.
     */
    Succeeded = 0,
    /**
     * Indicates that the ref update request could not be completed because part of the graph would be disconnected by this change, and the caller does not have ForcePush permission on the repository.
     */
    ForcePushRequired = 1,
    /**
     * Indicates that the ref update request could not be completed because the old object ID presented in the request was not the object ID of the ref when the database attempted the update. The most likely scenario is that the caller lost a race to update the ref.
     */
    StaleOldObjectId = 2,
    /**
     * Indicates that the ref update request could not be completed because the ref name presented in the request was not valid.
     */
    InvalidRefName = 3,
    /**
     * The request was not processed
     */
    Unprocessed = 4,
    /**
     * The ref update request could not be completed because the new object ID for the ref could not be resolved to a commit object (potentially through any number of tags)
     */
    UnresolvableToCommit = 5,
    /**
     * The ref update request could not be completed because the user lacks write permissions required to write this ref
     */
    WritePermissionRequired = 6,
    /**
     * The ref update request could not be completed because the user lacks note creation permissions required to write this note
     */
    ManageNotePermissionRequired = 7,
    /**
     * The ref update request could not be completed because the user lacks the permission to create a branch
     */
    CreateBranchPermissionRequired = 8,
    /**
     * The ref update request could not be completed because the user lacks the permission to create a tag
     */
    CreateTagPermissionRequired = 9,
    /**
     * The ref update could not be completed because it was rejected by the plugin.
     */
    RejectedByPlugin = 10,
    /**
     * The ref update could not be completed because the ref is locked by another user.
     */
    Locked = 11,
    /**
     * The ref update could not be completed because, in case-insensitive mode, the ref name conflicts with an existing, differently-cased ref name.
     */
    RefNameConflict = 12,
    /**
     * The ref update could not be completed because it was rejected by policy.
     */
    RejectedByPolicy = 13,
    /**
     * Indicates that the ref update request was completed successfully, but the ref doesn't actually exist so no changes were made.  This should only happen during deletes.
     */
    SucceededNonExistentRef = 14,
    /**
     * Indicates that the ref update request was completed successfully, but the passed-in ref was corrupt - as in, the old object ID was bad.  This should only happen during deletes.
     */
    SucceededCorruptRef = 15,
}
export interface GitRepository {
    _links: any;
    defaultBranch: string;
    id: string;
    /**
     * True if the repository was created as a fork
     */
    isFork: boolean;
    name: string;
    parentRepository: GitRepositoryRef;
    project: TFS_Core_Contracts.TeamProjectReference;
    remoteUrl: string;
    sshUrl: string;
    url: string;
    validRemoteUrls: string[];
}
export interface GitRepositoryCreateOptions {
    name: string;
    parentRepository: GitRepositoryRef;
    project: TFS_Core_Contracts.TeamProjectReference;
}
export interface GitRepositoryRef {
    /**
     * Team Project Collection where this Fork resides
     */
    collection: TFS_Core_Contracts.TeamProjectCollectionReference;
    id: string;
    /**
     * True if the repository was created as a fork
     */
    isFork: boolean;
    name: string;
    project: TFS_Core_Contracts.TeamProjectReference;
    remoteUrl: string;
    sshUrl: string;
    url: string;
}
export interface GitRepositoryStats {
    activePullRequestsCount: number;
    branchesCount: number;
    commitsCount: number;
    repositoryId: string;
}
export interface GitResolution {
}
/**
 * The type of a merge conflict.
 */
export enum GitResolutionError {
    /**
     * No error
     */
    None = 0,
    /**
     * User set a blob id for resolving a content merge, but blob was not found in repo during application
     */
    MergeContentNotFound = 1,
    /**
     * Attempted to resolve a conflict by moving a file to another path, but path was already in use
     */
    PathInUse = 2,
    /**
     * No error
     */
    InvalidPath = 3,
    /**
     * GitResolutionAction was set to an unrecognized value
     */
    UnknownAction = 4,
    /**
     * GitResolutionMergeType was set to an unrecognized value
     */
    UnknownMergeType = 5,
    /**
     * Any error for which a more specific code doesn't apply
     */
    OtherError = 255,
}
export interface GitResolutionMergeContent extends GitResolution {
    mergeType: GitResolutionMergeType;
    userMergedBlob: GitBlobRef;
    userMergedContent: number[];
}
export enum GitResolutionMergeType {
    Undecided = 0,
    TakeSourceContent = 1,
    TakeTargetContent = 2,
    AutoMerged = 3,
    UserMerged = 4,
}
export interface GitResolutionPathConflict extends GitResolution {
    action: GitResolutionPathConflictAction;
    renamePath: string;
}
export enum GitResolutionPathConflictAction {
    Undecided = 0,
    KeepSourceRenameTarget = 1,
    KeepSourceDeleteTarget = 2,
    KeepTargetRenameSource = 3,
    KeepTargetDeleteSource = 4,
}
export interface GitResolutionPickOneAction extends GitResolution {
    action: GitResolutionWhichAction;
}
export interface GitResolutionRename1to2 extends GitResolutionMergeContent {
    action: GitResolutionRename1to2Action;
}
export enum GitResolutionRename1to2Action {
    Undecided = 0,
    KeepSourcePath = 1,
    KeepTargetPath = 2,
    KeepBothFiles = 3,
}
/**
 * Resolution status of a conflict.
 */
export enum GitResolutionStatus {
    Unresolved = 0,
    PartiallyResolved = 1,
    Resolved = 2,
}
export enum GitResolutionWhichAction {
    Undecided = 0,
    PickSourceAction = 1,
    PickTargetAction = 2,
}
export interface GitRevert extends GitAsyncRefOperation {
    revertId: number;
}
/**
 * This class contains the metadata of a service/extension posting a status.
 */
export interface GitStatus {
    /**
     * Reference links.
     */
    _links: any;
    /**
     * Context of the status.
     */
    context: GitStatusContext;
    /**
     * Identity that created the status.
     */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Creation date and time of the status.
     */
    creationDate: Date;
    /**
     * Status description. Typically describes current state of the status.
     */
    description: string;
    /**
     * Status identifier.
     */
    id: number;
    /**
     * State of the status.
     */
    state: GitStatusState;
    /**
     * URL with status details.
     */
    targetUrl: string;
    /**
     * Last update date and time of the status.
     */
    updatedDate: Date;
}
/**
 * Status context that uniquely identifies the status.
 */
export interface GitStatusContext {
    /**
     * Genre of the status. Typically name of the service/tool generating the status, can be empty.
     */
    genre: string;
    /**
     * Name identifier of the status, cannot be null or empty.
     */
    name: string;
}
/**
 * State of the status.
 */
export enum GitStatusState {
    /**
     * Status state not set. Default state.
     */
    NotSet = 0,
    /**
     * Status pending.
     */
    Pending = 1,
    /**
     * Status succeeded.
     */
    Succeeded = 2,
    /**
     * Status failed.
     */
    Failed = 3,
    /**
     * Status with an error.
     */
    Error = 4,
    /**
     * Status is not applicable to the target object.
     */
    NotApplicable = 5,
}
/**
 * An object describing the git suggestion.  Git suggestions are currently limited to suggested pull requests.
 */
export interface GitSuggestion {
    /**
     * Specific properties describing the suggestion.
     */
    properties: {
        [key: string]: any;
    };
    /**
     * The type of suggestion (e.g. pull request).
     */
    type: string;
}
export interface GitTargetVersionDescriptor extends GitVersionDescriptor {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    targetVersion: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    targetVersionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    targetVersionType: GitVersionType;
}
export interface GitTemplate {
    /**
     * Name of the Template
     */
    name: string;
    /**
     * Type of the Template
     */
    type: string;
}
export interface GitTreeDiff {
    /**
     * ObjectId of the base tree of this diff.
     */
    baseTreeId: string;
    /**
     * List of tree entries that differ between the base and target tree.  Renames and object type changes are returned as a delete for the old object and add for the new object.  If a continuation token is returned in the response header, some tree entries are yet to be processed and may yeild more diff entries. If the continuation token is not returned all the diff entries have been included in this response.
     */
    diffEntries: GitTreeDiffEntry[];
    /**
     * ObjectId of the target tree of this diff.
     */
    targetTreeId: string;
    /**
     * REST Url to this resource.
     */
    url: string;
}
export interface GitTreeDiffEntry {
    /**
     * SHA1 hash of the object in the base tree, if it exists. Will be null in case of adds.
     */
    baseObjectId: string;
    /**
     * Type of change that affected this entry.
     */
    changeType: VersionControlChangeType;
    /**
     * Object type of the tree entry. Blob, Tree or Commit("submodule")
     */
    objectType: GitObjectType;
    /**
     * Relative path in base and target trees.
     */
    path: string;
    /**
     * SHA1 hash of the object in the target tree, if it exists. Will be null in case of deletes.
     */
    targetObjectId: string;
}
export interface GitTreeDiffResponse {
    /**
     * The HTTP client methods find the continuation token header in the response and populate this field.
     */
    continuationToken: string[];
    treeDiff: GitTreeDiff;
}
export interface GitTreeEntryRef {
    /**
     * Blob or tree
     */
    gitObjectType: GitObjectType;
    /**
     * Mode represented as octal string
     */
    mode: string;
    /**
     * SHA1 hash of git object
     */
    objectId: string;
    /**
     * Path relative to parent tree object
     */
    relativePath: string;
    /**
     * Size of content
     */
    size: number;
    /**
     * url to retrieve tree or blob
     */
    url: string;
}
export interface GitTreeRef {
    _links: any;
    /**
     * SHA1 hash of git object
     */
    objectId: string;
    /**
     * Sum of sizes of all children
     */
    size: number;
    /**
     * Blobs and trees under this tree
     */
    treeEntries: GitTreeEntryRef[];
    /**
     * Url to tree
     */
    url: string;
}
/**
 * User info and date for Git operations.
 */
export interface GitUserDate {
    /**
     * Date of the Git operation.
     */
    date: Date;
    /**
     * Email address of the user performing the Git operation.
     */
    email: string;
    /**
     * Name of the user performing the Git operation.
     */
    name: string;
}
export interface GitVersionDescriptor {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    version: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    versionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    versionType: GitVersionType;
}
/**
 * Accepted types of version options
 */
export enum GitVersionOptions {
    /**
     * Not specified
     */
    None = 0,
    /**
     * Commit that changed item prior to the current version
     */
    PreviousChange = 1,
    /**
     * First parent of commit (HEAD^)
     */
    FirstParent = 2,
}
/**
 * Accepted types of version
 */
export enum GitVersionType {
    /**
     * Interpret the version as a branch name
     */
    Branch = 0,
    /**
     * Interpret the version as a tag name
     */
    Tag = 1,
    /**
     * Interpret the version as a commit ID (SHA1)
     */
    Commit = 2,
}
/**
 * Globally unique key for a repository.
 */
export interface GlobalGitRepositoryKey {
    /**
     * Team Project Collection ID of the collection for the repository.
     */
    collectionId: string;
    /**
     * Team Project ID of the project for the repository.
     */
    projectId: string;
    /**
     * ID of the repository.
     */
    repositoryId: string;
}
export interface HistoryEntry<T> {
    /**
     * The Change list (changeset/commit/shelveset) for this point in history
     */
    changeList: ChangeList<T>;
    /**
     * The change made to the item from this change list (only relevant for File history, not folders)
     */
    itemChangeType: VersionControlChangeType;
    /**
     * The path of the item at this point in history (only relevant for File history, not folders)
     */
    serverItem: string;
}
/**
 * Identity information including a vote on a pull request.
 */
export interface IdentityRefWithVote extends VSS_Common_Contracts.IdentityRef {
    /**
     * Indicates if this is a required reviewer for this pull request. <br /> Branches can have policies that require particular reviewers are required for pull requests.
     */
    isRequired: boolean;
    /**
     * URL to retrieve information about this identity
     */
    reviewerUrl: string;
    /**
     * Vote on a pull request:<br /> 10 - approved 5 - approved with suggestions 0 - no vote -5 - waiting for author -10 - rejected
     */
    vote: number;
    /**
     * Groups or teams that that this reviewer contributed to. <br /> Groups and teams can be reviewers on pull requests but can not vote directly.  When a member of the group or team votes, that vote is rolled up into the group or team vote.  VotedFor is a list of such votes.
     */
    votedFor: IdentityRefWithVote[];
}
export interface ImportRepositoryValidation {
    gitSource: GitImportGitSource;
    password: string;
    tfvcSource: GitImportTfvcSource;
    username: string;
}
export interface IncludedGitCommit {
    commitId: string;
    commitTime: Date;
    parentCommitIds: string[];
    repositoryId: string;
}
export interface ItemContent {
    content: string;
    contentType: ItemContentType;
}
export enum ItemContentType {
    RawText = 0,
    Base64Encoded = 1,
}
/**
 * Optional details to include when returning an item model
 */
export interface ItemDetailsOptions {
    /**
     * If true, include metadata about the file type
     */
    includeContentMetadata: boolean;
    /**
     * Specifies whether to include children (OneLevel), all descendants (Full) or None for folder items
     */
    recursionLevel: VersionControlRecursionType;
}
export interface ItemModel {
    _links: any;
    contentMetadata: FileContentMetadata;
    isFolder: boolean;
    isSymLink: boolean;
    path: string;
    url: string;
}
/**
 * The reason for which the pull request iteration was created.
 */
export enum IterationReason {
    Push = 0,
    ForcePush = 1,
    Create = 2,
    Rebase = 4,
    Unknown = 8,
}
/**
 * Real time event (SignalR) for updated labels on a pull request
 */
export interface LabelsUpdatedEvent extends RealTimePullRequestEvent {
}
/**
 * Real time event (SignalR) for a merge completed on a pull request
 */
export interface MergeCompletedEvent extends RealTimePullRequestEvent {
}
/**
 * Real time event (SignalR) for a policy evaluation update on a pull request
 */
export interface PolicyEvaluationUpdatedEvent extends RealTimePullRequestEvent {
}
/**
 * The status of a pull request merge.
 */
export enum PullRequestAsyncStatus {
    /**
     * Status is not set. Default state.
     */
    NotSet = 0,
    /**
     * Pull request merge is queued.
     */
    Queued = 1,
    /**
     * Pull request merge failed due to conflicts.
     */
    Conflicts = 2,
    /**
     * Pull request merge succeeded.
     */
    Succeeded = 3,
    /**
     * Pull request merge rejected by policy.
     */
    RejectedByPolicy = 4,
    /**
     * Pull request merge failed.
     */
    Failure = 5,
}
/**
 * Real time event (SignalR) for pull request creation
 */
export interface PullRequestCreatedEvent extends RealTimePullRequestEvent {
}
/**
 * The specific type of a pull request merge failure.
 */
export enum PullRequestMergeFailureType {
    /**
     * Type is not set. Default type.
     */
    None = 0,
    /**
     * Pull request merge failure type unknown.
     */
    Unknown = 1,
    /**
     * Pull request merge failed due to case mismatch.
     */
    CaseSensitive = 2,
    /**
     * Pull request merge failed due to an object being too large.
     */
    ObjectTooLarge = 3,
}
/**
 * Status of a pull request.
 */
export enum PullRequestStatus {
    /**
     * Status not set. Default state.
     */
    NotSet = 0,
    /**
     * Pull request is active.
     */
    Active = 1,
    /**
     * Pull request is abandoned.
     */
    Abandoned = 2,
    /**
     * Pull request is completed.
     */
    Completed = 3,
    /**
     * Used in pull request search criterias to include all statuses.
     */
    All = 4,
}
/**
 * Initial config contract sent to extensions creating tabs on the pull request page
 */
export interface PullRequestTabExtensionConfig {
    pullRequestId: number;
    repositoryId: string;
}
/**
 * Base contract for a real time pull request event (SignalR)
 */
export interface RealTimePullRequestEvent {
    /**
     * The id of this event. Can be used to track send/receive state between client and server.
     */
    eventId: string;
    /**
     * The id of the pull request this event was generated for.
     */
    pullRequestId: number;
}
export enum RefFavoriteType {
    Invalid = 0,
    Folder = 1,
    Ref = 2,
}
/**
 * Real time event (SignalR) for an update to reviewers on a pull request
 */
export interface ReviewersUpdatedEvent extends RealTimePullRequestEvent {
}
/**
 * Real time event (SignalR) for reviewer votes being reset on a pull request
 */
export interface ReviewersVotesResetEvent extends RealTimePullRequestEvent {
}
/**
 * Real time event (SignalR) for a reviewer vote update on a pull request
 */
export interface ReviewerVoteUpdatedEvent extends RealTimePullRequestEvent {
}
/**
 * Context used while sharing a pull request.
 */
export interface ShareNotificationContext {
    /**
     * Optional user note or message.
     */
    message: string;
    /**
     * Identities of users who will receive a share notification.
     */
    receivers: VSS_Common_Contracts.IdentityRef[];
}
export interface SourceToTargetRef {
    /**
     * The source ref to copy. For example, refs/heads/master.
     */
    sourceRef: string;
    /**
     * The target ref to update. For example, refs/heads/master.
     */
    targetRef: string;
}
/**
 * Real time event (SignalR) for an added status on a pull request
 */
export interface StatusAddedEvent extends RealTimePullRequestEvent {
}
/**
 * Real time event (SignalR) for deleted statuses on a pull request
 */
export interface StatusesDeletedEvent extends RealTimePullRequestEvent {
}
/**
 * Real time event (SignalR) for a status update on a pull request
 */
export interface StatusUpdatedEvent extends RealTimePullRequestEvent {
}
/**
 * Represents a Supported IDE entity.
 */
export interface SupportedIde {
    /**
     * The download URL for the IDE.
     */
    downloadUrl: string;
    /**
     * The type of the IDE.
     */
    ideType: SupportedIdeType;
    /**
     * The name of the IDE.
     */
    name: string;
    /**
     * The URL to open the protocol handler for the IDE.
     */
    protocolHandlerUrl: string;
    /**
     * A list of SupportedPlatforms.
     */
    supportedPlatforms: string[];
}
/**
 * Enumeration that represents the types of IDEs supported.
 */
export enum SupportedIdeType {
    Unknown = 0,
    AndroidStudio = 1,
    AppCode = 2,
    CLion = 3,
    DataGrip = 4,
    Eclipse = 13,
    IntelliJ = 5,
    MPS = 6,
    PhpStorm = 7,
    PyCharm = 8,
    RubyMine = 9,
    Tower = 10,
    VisualStudio = 11,
    WebStorm = 12,
}
export interface TfvcBranch extends TfvcBranchRef {
    /**
     * List of children for the branch.
     */
    children: TfvcBranch[];
    /**
     * List of branch mappings.
     */
    mappings: TfvcBranchMapping[];
    /**
     * Path of the branch's parent.
     */
    parent: TfvcShallowBranchRef;
    /**
     * List of paths of the related branches.
     */
    relatedBranches: TfvcShallowBranchRef[];
}
export interface TfvcBranchMapping {
    /**
     * Depth of the branch.
     */
    depth: string;
    /**
     * Server item for the branch.
     */
    serverItem: string;
    /**
     * Type of the branch.
     */
    type: string;
}
export interface TfvcBranchRef extends TfvcShallowBranchRef {
    /**
     * A collection of REST reference links.
     */
    _links: any;
    /**
     * Creation date of the branch.
     */
    createdDate: Date;
    /**
     * Description of the branch.
     */
    description: string;
    /**
     * Is the branch deleted?
     */
    isDeleted: boolean;
    /**
     * Alias or display name of user
     */
    owner: VSS_Common_Contracts.IdentityRef;
    /**
     * URL to retrieve the item.
     */
    url: string;
}
export interface TfvcChange extends Change<TfvcItem> {
    /**
     * List of merge sources in case of rename or branch creation.
     */
    mergeSources: TfvcMergeSource[];
    /**
     * Version at which a (shelved) change was pended against
     */
    pendingVersion: number;
}
export interface TfvcChangeset extends TfvcChangesetRef {
    /**
     * Account Id of the changeset.
     */
    accountId: string;
    /**
     * List of associated changes.
     */
    changes: TfvcChange[];
    /**
     * Checkin Notes for the changeset.
     */
    checkinNotes: CheckinNote[];
    /**
     * Collection Id of the changeset.
     */
    collectionId: string;
    /**
     * Are more changes available.
     */
    hasMoreChanges: boolean;
    /**
     * Policy Override for the changeset.
     */
    policyOverride: TfvcPolicyOverrideInfo;
    /**
     * Team Project Ids for the changeset.
     */
    teamProjectIds: string[];
    /**
     * List of work items associated with the changeset.
     */
    workItems: AssociatedWorkItem[];
}
export interface TfvcChangesetRef {
    /**
     * A collection of REST reference links.
     */
    _links: any;
    /**
     * Alias or display name of user
     */
    author: VSS_Common_Contracts.IdentityRef;
    /**
     * Id of the changeset.
     */
    changesetId: number;
    /**
     * Alias or display name of user
     */
    checkedInBy: VSS_Common_Contracts.IdentityRef;
    /**
     * Comment for the changeset.
     */
    comment: string;
    /**
     * Was the Comment result truncated?
     */
    commentTruncated: boolean;
    /**
     * Creation date of the changeset.
     */
    createdDate: Date;
    /**
     * URL to retrieve the item.
     */
    url: string;
}
/**
 * Criteria used in a search for change lists
 */
export interface TfvcChangesetSearchCriteria {
    /**
     * Alias or display name of user who made the changes
     */
    author: string;
    /**
     * Whether or not to follow renames for the given item being queried
     */
    followRenames: boolean;
    /**
     * If provided, only include changesets created after this date (string) Think of a better name for this.
     */
    fromDate: string;
    /**
     * If provided, only include changesets after this changesetID
     */
    fromId: number;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Path of item to search under
     */
    itemPath: string;
    /**
     * If provided, only include changesets created before this date (string) Think of a better name for this.
     */
    toDate: string;
    /**
     * If provided, a version descriptor for the latest change list to include
     */
    toId: number;
}
export interface TfvcChangesetsRequestData {
    /**
     * List of changeset Ids.
     */
    changesetIds: number[];
    /**
     * Length of the comment.
     */
    commentLength: number;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
}
export interface TfvcCheckinEventData {
    changeset: TfvcChangeset;
    project: TFS_Core_Contracts.TeamProjectReference;
}
export interface TfvcHistoryEntry extends HistoryEntry<TfvcItem> {
    /**
     * The encoding of the item at this point in history (only relevant for File history, not folders)
     */
    encoding: number;
    /**
     * The file id of the item at this point in history (only relevant for File history, not folders)
     */
    fileId: number;
}
export interface TfvcItem extends ItemModel {
    changeDate: Date;
    deletionId: number;
    /**
     * MD5 hash as a base 64 string, applies to files only.
     */
    hashValue: string;
    isBranch: boolean;
    isPendingChange: boolean;
    /**
     * The size of the file, if applicable.
     */
    size: number;
    version: number;
}
/**
 * Item path and Version descriptor properties
 */
export interface TfvcItemDescriptor {
    path: string;
    recursionLevel: VersionControlRecursionType;
    version: string;
    versionOption: TfvcVersionOption;
    versionType: TfvcVersionType;
}
export interface TfvcItemRequestData {
    /**
     * If true, include metadata about the file type
     */
    includeContentMetadata: boolean;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    itemDescriptors: TfvcItemDescriptor[];
}
export interface TfvcLabel extends TfvcLabelRef {
    items: TfvcItem[];
}
export interface TfvcLabelRef {
    _links: any;
    description: string;
    id: number;
    labelScope: string;
    modifiedDate: Date;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    url: string;
}
export interface TfvcLabelRequestData {
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    itemLabelFilter: string;
    labelScope: string;
    maxItemCount: number;
    name: string;
    owner: string;
}
export interface TfvcMergeSource {
    /**
     * Indicates if this a rename source. If false, it is a merge source.
     */
    isRename: boolean;
    /**
     * The server item of the merge source
     */
    serverItem: string;
    /**
     * Start of the version range
     */
    versionFrom: number;
    /**
     * End of the version range
     */
    versionTo: number;
}
export interface TfvcPolicyFailureInfo {
    message: string;
    policyName: string;
}
export interface TfvcPolicyOverrideInfo {
    comment: string;
    policyFailures: TfvcPolicyFailureInfo[];
}
export interface TfvcShallowBranchRef {
    /**
     * Path for the branch.
     */
    path: string;
}
/**
 * This is the deep shelveset class
 */
export interface TfvcShelveset extends TfvcShelvesetRef {
    changes: TfvcChange[];
    notes: CheckinNote[];
    policyOverride: TfvcPolicyOverrideInfo;
    workItems: AssociatedWorkItem[];
}
/**
 * This is the shallow shelveset class
 */
export interface TfvcShelvesetRef {
    _links: any;
    comment: string;
    commentTruncated: boolean;
    createdDate: Date;
    id: string;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    url: string;
}
export interface TfvcShelvesetRequestData {
    /**
     * Whether to include policyOverride and notes Only applies when requesting a single deep shelveset
     */
    includeDetails: boolean;
    /**
     * Whether to include the _links field on the shallow references. Does not apply when requesting a single deep shelveset object. Links will always be included in the deep shelveset.
     */
    includeLinks: boolean;
    /**
     * Whether to include workItems
     */
    includeWorkItems: boolean;
    /**
     * Max number of changes to include
     */
    maxChangeCount: number;
    /**
     * Max length of comment
     */
    maxCommentLength: number;
    /**
     * Shelveset's name
     */
    name: string;
    /**
     * Owner's ID. Could be a name or a guid.
     */
    owner: string;
}
export interface TfvcVersionDescriptor {
    version: string;
    versionOption: TfvcVersionOption;
    versionType: TfvcVersionType;
}
export enum TfvcVersionOption {
    None = 0,
    Previous = 1,
    UseRename = 2,
}
export enum TfvcVersionType {
    None = 0,
    Changeset = 1,
    Shelveset = 2,
    Change = 3,
    Date = 4,
    Latest = 5,
    Tip = 6,
    MergeSource = 7,
}
/**
 * Real time event (SignalR) for a title/description update on a pull request
 */
export interface TitleDescriptionUpdatedEvent extends RealTimePullRequestEvent {
}
export interface UpdateRefsRequest {
    refUpdateRequests: GitRefUpdate[];
    updateMode: GitRefUpdateMode;
}
export enum VersionControlChangeType {
    None = 0,
    Add = 1,
    Edit = 2,
    Encoding = 4,
    Rename = 8,
    Delete = 16,
    Undelete = 32,
    Branch = 64,
    Merge = 128,
    Lock = 256,
    Rollback = 512,
    SourceRename = 1024,
    TargetRename = 2048,
    Property = 4096,
    All = 8191,
}
export interface VersionControlProjectInfo {
    defaultSourceControlType: TFS_Core_Contracts.SourceControlTypes;
    project: TFS_Core_Contracts.TeamProjectReference;
    supportsGit: boolean;
    supportsTFVC: boolean;
}
export enum VersionControlRecursionType {
    /**
     * Only return the specified item.
     */
    None = 0,
    /**
     * Return the specified item and its direct children.
     */
    OneLevel = 1,
    /**
     * Return the specified item and its direct children, as well as recursive chains of nested child folders that only contain a single folder.
     */
    OneLevelPlusNestedEmptyFolders = 4,
    /**
     * Return specified item and all descendants
     */
    Full = 120,
}
export var TypeInfo: {
    Attachment: any;
    Change: any;
    ChangeList: any;
    Comment: any;
    CommentThread: any;
    CommentThreadStatus: {
        enumValues: {
            "unknown": number;
            "active": number;
            "fixed": number;
            "wontFix": number;
            "closed": number;
            "byDesign": number;
            "pending": number;
        };
    };
    CommentType: {
        enumValues: {
            "unknown": number;
            "text": number;
            "codeChange": number;
            "system": number;
        };
    };
    GitAnnotatedTag: any;
    GitAsyncOperationStatus: {
        enumValues: {
            "queued": number;
            "inProgress": number;
            "completed": number;
            "failed": number;
            "abandoned": number;
        };
    };
    GitAsyncRefOperation: any;
    GitAsyncRefOperationDetail: any;
    GitAsyncRefOperationFailureStatus: {
        enumValues: {
            "none": number;
            "invalidRefName": number;
            "refNameConflict": number;
            "createBranchPermissionRequired": number;
            "writePermissionRequired": number;
            "targetBranchDeleted": number;
            "gitObjectTooLarge": number;
            "operationIndentityNotFound": number;
            "asyncOperationNotFound": number;
            "other": number;
        };
    };
    GitAsyncRefOperationParameters: any;
    GitAsyncRefOperationSource: any;
    GitBaseVersionDescriptor: any;
    GitBranchStats: any;
    GitChange: any;
    GitCherryPick: any;
    GitCommit: any;
    GitCommitChanges: any;
    GitCommitDiffs: any;
    GitCommitRef: any;
    GitCommitToCreate: any;
    GitConflict: any;
    GitConflictAddAdd: any;
    GitConflictAddRename: any;
    GitConflictDeleteEdit: any;
    GitConflictDeleteRename: any;
    GitConflictDirectoryFile: any;
    GitConflictEditDelete: any;
    GitConflictEditEdit: any;
    GitConflictFileDirectory: any;
    GitConflictRename1to2: any;
    GitConflictRename2to1: any;
    GitConflictRenameAdd: any;
    GitConflictRenameDelete: any;
    GitConflictRenameRename: any;
    GitConflictType: {
        enumValues: {
            "none": number;
            "addAdd": number;
            "addRename": number;
            "deleteEdit": number;
            "deleteRename": number;
            "directoryFile": number;
            "directoryChild": number;
            "editDelete": number;
            "editEdit": number;
            "fileDirectory": number;
            "rename1to2": number;
            "rename2to1": number;
            "renameAdd": number;
            "renameDelete": number;
            "renameRename": number;
        };
    };
    GitConflictUpdateResult: any;
    GitConflictUpdateStatus: {
        enumValues: {
            "succeeded": number;
            "badRequest": number;
            "invalidResolution": number;
            "unsupportedConflictType": number;
            "notFound": number;
        };
    };
    GitDeletedRepository: any;
    GitForkRef: any;
    GitForkSyncRequest: any;
    GitHistoryMode: {
        enumValues: {
            "simplifiedHistory": number;
            "firstParent": number;
            "fullHistory": number;
            "fullHistorySimplifyMerges": number;
        };
    };
    GitImportFailedEvent: any;
    GitImportRequest: any;
    GitImportSucceededEvent: any;
    GitItem: any;
    GitItemDescriptor: any;
    GitItemRequestData: any;
    GitLastChangeTreeItems: any;
    GitObject: any;
    GitObjectType: {
        enumValues: {
            "bad": number;
            "commit": number;
            "tree": number;
            "blob": number;
            "tag": number;
            "ext2": number;
            "ofsDelta": number;
            "refDelta": number;
        };
    };
    GitPathAction: any;
    GitPathActions: {
        enumValues: {
            "none": number;
            "edit": number;
            "delete": number;
            "add": number;
            "rename": number;
        };
    };
    GitPathToItemsCollection: any;
    GitPullRequest: any;
    GitPullRequestChange: any;
    GitPullRequestCommentThread: any;
    GitPullRequestIteration: any;
    GitPullRequestIterationChanges: any;
    GitPullRequestQuery: any;
    GitPullRequestQueryInput: any;
    GitPullRequestQueryType: {
        enumValues: {
            "notSet": number;
            "lastMergeCommit": number;
            "commit": number;
        };
    };
    GitPullRequestReviewFileType: {
        enumValues: {
            "changeEntry": number;
            "attachment": number;
        };
    };
    GitPullRequestSearchCriteria: any;
    GitPullRequestStatus: any;
    GitPush: any;
    GitPushEventData: any;
    GitPushRef: any;
    GitPushSearchCriteria: any;
    GitQueryBranchStatsCriteria: any;
    GitQueryCommitsCriteria: any;
    GitQueryRefsCriteria: any;
    GitRef: any;
    GitRefFavorite: any;
    GitRefSearchType: {
        enumValues: {
            "exact": number;
            "startsWith": number;
            "contains": number;
        };
    };
    GitRefUpdateMode: {
        enumValues: {
            "bestEffort": number;
            "allOrNone": number;
        };
    };
    GitRefUpdateResult: any;
    GitRefUpdateStatus: {
        enumValues: {
            "succeeded": number;
            "forcePushRequired": number;
            "staleOldObjectId": number;
            "invalidRefName": number;
            "unprocessed": number;
            "unresolvableToCommit": number;
            "writePermissionRequired": number;
            "manageNotePermissionRequired": number;
            "createBranchPermissionRequired": number;
            "createTagPermissionRequired": number;
            "rejectedByPlugin": number;
            "locked": number;
            "refNameConflict": number;
            "rejectedByPolicy": number;
            "succeededNonExistentRef": number;
            "succeededCorruptRef": number;
        };
    };
    GitRepository: any;
    GitRepositoryCreateOptions: any;
    GitRepositoryRef: any;
    GitResolutionError: {
        enumValues: {
            "none": number;
            "mergeContentNotFound": number;
            "pathInUse": number;
            "invalidPath": number;
            "unknownAction": number;
            "unknownMergeType": number;
            "otherError": number;
        };
    };
    GitResolutionMergeContent: any;
    GitResolutionMergeType: {
        enumValues: {
            "undecided": number;
            "takeSourceContent": number;
            "takeTargetContent": number;
            "autoMerged": number;
            "userMerged": number;
        };
    };
    GitResolutionPathConflict: any;
    GitResolutionPathConflictAction: {
        enumValues: {
            "undecided": number;
            "keepSourceRenameTarget": number;
            "keepSourceDeleteTarget": number;
            "keepTargetRenameSource": number;
            "keepTargetDeleteSource": number;
        };
    };
    GitResolutionPickOneAction: any;
    GitResolutionRename1to2: any;
    GitResolutionRename1to2Action: {
        enumValues: {
            "undecided": number;
            "keepSourcePath": number;
            "keepTargetPath": number;
            "keepBothFiles": number;
        };
    };
    GitResolutionStatus: {
        enumValues: {
            "unresolved": number;
            "partiallyResolved": number;
            "resolved": number;
        };
    };
    GitResolutionWhichAction: {
        enumValues: {
            "undecided": number;
            "pickSourceAction": number;
            "pickTargetAction": number;
        };
    };
    GitRevert: any;
    GitStatus: any;
    GitStatusState: {
        enumValues: {
            "notSet": number;
            "pending": number;
            "succeeded": number;
            "failed": number;
            "error": number;
            "notApplicable": number;
        };
    };
    GitTargetVersionDescriptor: any;
    GitTreeDiff: any;
    GitTreeDiffEntry: any;
    GitTreeDiffResponse: any;
    GitTreeEntryRef: any;
    GitTreeRef: any;
    GitUserDate: any;
    GitVersionDescriptor: any;
    GitVersionOptions: {
        enumValues: {
            "none": number;
            "previousChange": number;
            "firstParent": number;
        };
    };
    GitVersionType: {
        enumValues: {
            "branch": number;
            "tag": number;
            "commit": number;
        };
    };
    HistoryEntry: any;
    IncludedGitCommit: any;
    ItemContent: any;
    ItemContentType: {
        enumValues: {
            "rawText": number;
            "base64Encoded": number;
        };
    };
    ItemDetailsOptions: any;
    IterationReason: {
        enumValues: {
            "push": number;
            "forcePush": number;
            "create": number;
            "rebase": number;
            "unknown": number;
        };
    };
    PullRequestAsyncStatus: {
        enumValues: {
            "notSet": number;
            "queued": number;
            "conflicts": number;
            "succeeded": number;
            "rejectedByPolicy": number;
            "failure": number;
        };
    };
    PullRequestMergeFailureType: {
        enumValues: {
            "none": number;
            "unknown": number;
            "caseSensitive": number;
            "objectTooLarge": number;
        };
    };
    PullRequestStatus: {
        enumValues: {
            "notSet": number;
            "active": number;
            "abandoned": number;
            "completed": number;
            "all": number;
        };
    };
    RefFavoriteType: {
        enumValues: {
            "invalid": number;
            "folder": number;
            "ref": number;
        };
    };
    SupportedIde: any;
    SupportedIdeType: {
        enumValues: {
            "unknown": number;
            "androidStudio": number;
            "appCode": number;
            "cLion": number;
            "dataGrip": number;
            "eclipse": number;
            "intelliJ": number;
            "mPS": number;
            "phpStorm": number;
            "pyCharm": number;
            "rubyMine": number;
            "tower": number;
            "visualStudio": number;
            "webStorm": number;
        };
    };
    TfvcBranch: any;
    TfvcBranchRef: any;
    TfvcChange: any;
    TfvcChangeset: any;
    TfvcChangesetRef: any;
    TfvcCheckinEventData: any;
    TfvcHistoryEntry: any;
    TfvcItem: any;
    TfvcItemDescriptor: any;
    TfvcItemRequestData: any;
    TfvcLabel: any;
    TfvcLabelRef: any;
    TfvcShelveset: any;
    TfvcShelvesetRef: any;
    TfvcVersionDescriptor: any;
    TfvcVersionOption: {
        enumValues: {
            "none": number;
            "previous": number;
            "useRename": number;
        };
    };
    TfvcVersionType: {
        enumValues: {
            "none": number;
            "changeset": number;
            "shelveset": number;
            "change": number;
            "date": number;
            "latest": number;
            "tip": number;
            "mergeSource": number;
        };
    };
    UpdateRefsRequest: any;
    VersionControlChangeType: {
        enumValues: {
            "none": number;
            "add": number;
            "edit": number;
            "encoding": number;
            "rename": number;
            "delete": number;
            "undelete": number;
            "branch": number;
            "merge": number;
            "lock": number;
            "rollback": number;
            "sourceRename": number;
            "targetRename": number;
            "property": number;
            "all": number;
        };
    };
    VersionControlProjectInfo: any;
    VersionControlRecursionType: {
        enumValues: {
            "none": number;
            "oneLevel": number;
            "oneLevelPlusNestedEmptyFolders": number;
            "full": number;
        };
    };
};
}
declare module "TFS/VersionControl/Controls" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
import VCContracts = require("TFS/VersionControl/Contracts");
export namespace HistoryListColumnKeys {
    const Graph = "graph";
    const Author = "author";
    const Message = "message";
    const PullRequest = "pullrequest";
    const Date = "date";
    const Commit = "commit";
    const Build = "build";
    const ChangeType = "changeType";
    const CommitOptions = "commitOptions";
}
export interface IHistoryList {
    /**
    *  Query the history by providing certain searchCriteria
    * @param itemPaths single or multiple itemPaths for control to search history in Git and Tfvc
    * @param fromVersion fromId for control to search history in Git and Tfvc
    * @param toVersion toId for control to search history in Git and Tfvc
    * @param repositoryId Optional repository Id for control to search history in Git
    */
    createHistoryList(itemPaths: string[] | string, fromVersion: string, toVersion: string, repositoryId?: string): any;
}
/**
* Configuration options when creating the GitHistoryList extension control.
*/
export interface ITfvcHistoryListOptions {
    /** ItemPath for control to search history */
    itemPaths?: string[];
    /** Callback to be invoked when the scenario is completed */
    onScenarioComplete?: () => void;
    /** From commit id for control to search history */
    fromVersion?: string;
    /** To commit id for control to search history */
    toVersion?: string;
}
/**
* Control showing the Git history list
*/
export module TfvcHistoryList {
    var contributionId: string;
    /**
    * Create an instance of the new history list control
    *
    * @param $container Container element to create the history list control in
    * @param options GitHistoryList control options
    * @param webContext Optional web context to scope the control to
    */
    function create($container: JQuery, options?: ITfvcHistoryListOptions, webContext?: Contracts_Platform.WebContext): IPromise<void>;
}
/**
* Configuration options when creating CommitHistoryList extension control.
*/
export interface ISimpleCommitHistoryListOptions {
    /** Displays header above the list */
    isHeaderVisible?: boolean;
    /** Indicates more results available or not */
    moreResultsAvailable: boolean;
    /** List of commit objects to be rendered */
    commits: VCContracts.GitCommitRef[];
    /** Callback to fetch more items */
    fetchMoreItems?: () => void;
    /** Callback to be invoked when the scenario is completed */
    onScenarioComplete?: () => void;
    /** List of columns to be shown */
    visibleColumns?: string[];
}
export module SimpleCommitHistoryList {
    var contributionId: string;
    /**
    * Create an instance of history list control
    *
    * @param $container Container element to create the history list control in
    * @param options SimpleCommitHistoryList control options
    * @param webContext Optional web context to scope the control to
    */
    function create($container: JQuery, options?: ISimpleCommitHistoryListOptions, webContext?: Contracts_Platform.WebContext): IPromise<void>;
}
/**
* Configuration options when creating the GitHistoryList extension control.
*/
export interface IGitHistoryListOptions {
    /** From commit id for control to search history */
    fromVersion?: string;
    /** Displays header above the list */
    isHeaderVisible?: boolean;
    /** ItemPath for control to search history */
    itemPath?: string;
    /** Callback to be invoked when the scenario is completed */
    onScenarioComplete?: () => void;
    /** Optional repository Id for control to search history */
    repositoryId?: string;
    /** To commit id for control to search history */
    toVersion?: string;
    /** List of columns to be shown */
    visibleColumns?: string[];
}
/**
* Control showing the Git history list
*/
export module GitHistoryList {
    var contributionId: string;
    /**
    * Create an instance of the new history list control
    *
    * @param $container Container element to create the history list control in
    * @param options GitHistoryList control options
    * @param webContext Optional web context to scope the control to
    */
    function create($container: JQuery, options?: IGitHistoryListOptions, webContext?: Contracts_Platform.WebContext): IPromise<void>;
}
/**
* Configuration options when creating the IGitVersionSelector extension control.
*/
export interface IGitVersionSelectorOptions {
    /** Hides the "Tags" tab */
    disableTags?: boolean;
    /** Hides the "Branches" tab */
    disableBranches?: boolean;
    /** Hides the "Mine" tab populated with branches created or favorited by the user, plus the default branch. Defaults false.  */
    disableMyBranches?: boolean;
    /** Allows returning the search string as the selected item even if it does not match any items in the list */
    allowUnmatchedSelection?: boolean;
    /** Callback for the selected item changed */
    onItemChanged?: (selectedItem: IGitVersionSelectorItem) => void;
}
/**
* A Git ref item (branch or tag, as indicated by the property used) in the version selector list.
* This is a subset of internal TFS.VersionControl.VersionSpecs properties that are the actual items.
* Arbitrary text may be specified as the branchName if allowUnmatchedSelection is true.
*/
export interface IGitVersionSelectorItem {
    /** Friendly branch name indicates the type as a Git branch. */
    branchName?: string;
    /** Friendly tag name indicates the type as a Git tag. */
    tagName?: string;
}
/**
* Interface of the Git Version Selector for choosing from a filtered list of available Git branches and tags in the specified repository.
*/
export interface IGitVersionSelector {
    /** Fetches repository by Id and updates the lists of branches and tags */
    setRepositoryId(repositoryId: string): IPromise<VCContracts.GitRepository>;
    /** Gets the selected item, including arbitrary text as the branchName if allowUnmatchedSelection is true. */
    getSelectedVersion(): IGitVersionSelectorItem;
    /** Sets the selected item, including arbitrary text as the branchName if allowUnmatchedSelection is true. */
    setSelectedVersion(item: IGitVersionSelectorItem): any;
    /** Show the version picker */
    _showPopup(): any;
}
/**
 * Module for creating an IGitVersionSelector extension control.
 */
export module GitVersionSelector {
    var contributionId: string;
    /**
     * Creates a new instance of an IGitVersionSelector for choosing from a filtered list of available Git branches and tags.
     * setRepositoryId() must be called to fully initialize and fetch the relevant branches and tags.
     */
    function create($container: JQuery, options?: IGitVersionSelectorOptions, webContext?: Contracts_Platform.WebContext): IPromise<IGitVersionSelector>;
}
}
declare module "TFS/VersionControl/GitRestClient" {
import Contracts = require("TFS/VersionControl/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected blobsApiVersion: string;
    protected branchStatsApiVersion: string;
    protected changesApiVersion: string;
    protected commitDiffsApiVersion: string;
    protected commitsApiVersion: string;
    protected commitsBatchApiVersion: string;
    protected itemsApiVersion: string;
    protected itemsBatchApiVersion: string;
    protected pullRequestReviewersApiVersion: string;
    protected pullRequestsApiVersion: string;
    protected pullRequestsApiVersion_a5d28130: string;
    protected pullRequestWorkItemsApiVersion: string;
    protected pushesApiVersion: string;
    protected refsApiVersion: string;
    protected repositoriesApiVersion: string;
    protected treesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
     *
     * @param {string} repositoryId - Repository Id.
     * @param {string} sha1 - SHA1 hash of the tree object.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project Id.
     * @param {boolean} recursive - Search recursively. Include trees underneath this tree. Default is false.
     * @param {string} fileName - Name to use if a .zip file is returned. Default is the object ID.
     * @return IPromise<ArrayBuffer>
     */
    getTreeZip(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
     *
     * @param {string} repositoryId - Repository Id.
     * @param {string} sha1 - SHA1 hash of the tree object.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project Id.
     * @param {boolean} recursive - Search recursively. Include trees underneath this tree. Default is false.
     * @param {string} fileName - Name to use if a .zip file is returned. Default is the object ID.
     * @return IPromise<Contracts.GitTreeRef>
     */
    getTree(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): IPromise<Contracts.GitTreeRef>;
    /**
     * Updates the Git repository with either a new repo name or a new default branch.
     *
     * @param {Contracts.GitRepository} newRepositoryInfo - Specify a new repo name or a new default branch of the repository
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitRepository>
     */
    updateRepository(newRepositoryInfo: Contracts.GitRepository, repositoryId: string, project?: string): IPromise<Contracts.GitRepository>;
    /**
     * Retrieve a git repository.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent - [optional] True to include parent repository. The default value is false.
     * @return IPromise<Contracts.GitRepository>
     */
    getRepository(repositoryId: string, project?: string, includeParent?: boolean): IPromise<Contracts.GitRepository>;
    /**
     * Retrieve git repositories.
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks - [optional] True to include reference links. The default value is false.
     * @param {boolean} includeAllUrls - [optional] True to include all remote URLs. The default value is false.
     * @param {boolean} includeHidden - [optional] True to include hidden repositories. The default value is false.
     * @return IPromise<Contracts.GitRepository[]>
     */
    getRepositories(project?: string, includeLinks?: boolean, includeAllUrls?: boolean, includeHidden?: boolean): IPromise<Contracts.GitRepository[]>;
    /**
     * Delete a git repository
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteRepository(repositoryId: string, project?: string): IPromise<void>;
    /**
     * Create a git repository in a team project.
     *
     * @param {Contracts.GitRepositoryCreateOptions} gitRepositoryToCreate - Specify the repo name, team project and/or parent repository
     * @param {string} project - Project ID or project name
     * @param {string} sourceRef - [optional] Specify the source refs to use while creating a fork repo
     * @return IPromise<Contracts.GitRepository>
     */
    createRepository(gitRepositoryToCreate: Contracts.GitRepositoryCreateOptions, project?: string, sourceRef?: string): IPromise<Contracts.GitRepository>;
    /**
     * Creating, updating, or deleting refs(branches).
     *
     * @param {Contracts.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - ID or name of the team project. Optional if specifying an ID for repository.
     * @return IPromise<Contracts.GitRefUpdateResult[]>
     */
    updateRefs(refUpdates: Contracts.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string): IPromise<Contracts.GitRefUpdateResult[]>;
    /**
     * Lock or Unlock a branch.
     *
     * @param {Contracts.GitRefUpdate} newRefInfo - The ref update action (lock/unlock) to perform
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} filter - The name of the branch to lock/unlock
     * @param {string} project - Project ID or project name
     * @param {string} projectId - ID or name of the team project. Optional if specifying an ID for repository.
     * @return IPromise<Contracts.GitRef>
     */
    updateRef(newRefInfo: Contracts.GitRefUpdate, repositoryId: string, filter: string, project?: string, projectId?: string): IPromise<Contracts.GitRef>;
    /**
     * Queries the provided repository for its refs and returns them.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {string} filter - [optional] A filter to apply to the refs.
     * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     * @param {boolean} includeStatuses - [optional] Includes up to the first 1000 commit statuses for each ref. The default value is false.
     * @param {boolean} includeMyBranches - [optional] Includes only branches that the user owns, the branches the user favorites, and the default branch. The default value is false. Cannot be combined with the filter parameter.
     * @param {boolean} latestStatusesOnly - [optional] True to include only the tip commit status for each ref. This option requires `includeStatuses` to be true. The default value is false.
     * @param {boolean} peelTags - [optional] Annotated tags will populate the PeeledObjectId property. default is false.
     * @return IPromise<Contracts.GitRef[]>
     */
    getRefs(repositoryId: string, project?: string, filter?: string, includeLinks?: boolean, includeStatuses?: boolean, includeMyBranches?: boolean, latestStatusesOnly?: boolean, peelTags?: boolean): IPromise<Contracts.GitRef[]>;
    /**
     * Retrieves pushes associated with the specified repository.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {number} skip - Number of pushes to skip.
     * @param {number} top - Number of pushes to return.
     * @param {Contracts.GitPushSearchCriteria} searchCriteria - Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
     * @return IPromise<Contracts.GitPush[]>
     */
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: Contracts.GitPushSearchCriteria): IPromise<Contracts.GitPush[]>;
    /**
     * Retrieves a particular push.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {number} pushId - ID of the push.
     * @param {string} project - Project ID or project name
     * @param {number} includeCommits - The number of commits to include in the result.
     * @param {boolean} includeRefUpdates - If true, include the list of refs that were updated by the push.
     * @return IPromise<Contracts.GitPush>
     */
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean): IPromise<Contracts.GitPush>;
    /**
     * Push changes to the repository.
     *
     * @param {Contracts.GitPush} push
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPush>
     */
    createPush(push: Contracts.GitPush, repositoryId: string, project?: string): IPromise<Contracts.GitPush>;
    /**
     * Retrieve a list of work items associated with a pull request.
     *
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.AssociatedWorkItem[]>
     */
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.AssociatedWorkItem[]>;
    /**
     * Update a pull request.
     *
     * @param {Contracts.GitPullRequest} gitPullRequestToUpdate - The pull request content to update.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - The ID of the pull request to retrieve.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequest>
     */
    updatePullRequest(gitPullRequestToUpdate: Contracts.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitPullRequest>;
    /**
     * Retrieve all pull requests matching a specified criteria.
     *
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {Contracts.GitPullRequestSearchCriteria} searchCriteria - Pull requests will be returned that match this search criteria.
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength - Not used.
     * @param {number} skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param {number} top - The number of pull requests to retrieve.
     * @return IPromise<Contracts.GitPullRequest[]>
     */
    getPullRequests(repositoryId: string, searchCriteria: Contracts.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number): IPromise<Contracts.GitPullRequest[]>;
    /**
     * Retrieve a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - The ID of the pull request to retrieve.
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength - Not used.
     * @param {number} skip - Not used.
     * @param {number} top - Not used.
     * @param {boolean} includeCommits - If true, the pull request will be returned with the associated commits.
     * @param {boolean} includeWorkItemRefs - If true, the pull request will be returned with the associated work item references.
     * @return IPromise<Contracts.GitPullRequest>
     */
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number, includeCommits?: boolean, includeWorkItemRefs?: boolean): IPromise<Contracts.GitPullRequest>;
    /**
     * Create a pull request.
     *
     * @param {Contracts.GitPullRequest} gitPullRequestToCreate - The pull request to create.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {string} project - Project ID or project name
     * @param {boolean} linkBranchWorkItems - If true, work items that are linked to branches in this pull request will be linked to the pull request.
     * @param {boolean} linkCommitWorkItems - If true, work items that are linked to commits in this pull request will be linked to the pull request.
     * @param {boolean} supportsIterations - If true, subsequent pushes to the pull request will be individually reviewable. Set this to false for large pull requests for performance reasons if this functionality is not needed.
     * @return IPromise<Contracts.GitPullRequest>
     */
    createPullRequest(gitPullRequestToCreate: Contracts.GitPullRequest, repositoryId: string, project?: string, linkBranchWorkItems?: boolean, linkCommitWorkItems?: boolean, supportsIterations?: boolean): IPromise<Contracts.GitPullRequest>;
    /**
     * Retrieve all pull requests matching a specified criteria.
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.GitPullRequestSearchCriteria} searchCriteria - Pull requests will be returned that match this search criteria.
     * @param {number} maxCommentLength - Not used.
     * @param {number} skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param {number} top - The number of pull requests to retrieve.
     * @return IPromise<Contracts.GitPullRequest[]>
     */
    getPullRequestsByProject(project: string, searchCriteria: Contracts.GitPullRequestSearchCriteria, maxCommentLength?: number, skip?: number, top?: number): IPromise<Contracts.GitPullRequest[]>;
    /**
     * Reset the votes of multiple reviewers on a pull request.
     *
     * @param {Contracts.IdentityRefWithVote[]} patchVotes - IDs of the reviewers whose votes will be reset to zero
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    updatePullRequestReviewers(patchVotes: Contracts.IdentityRefWithVote[], repositoryId: string, pullRequestId: number, project?: string): IPromise<void>;
    /**
     * Retrieve the reviewers for a pull request
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote[]>
     */
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.IdentityRefWithVote[]>;
    /**
     * Retrieve information about a particular reviewer on a pull request
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} reviewerId - ID of the reviewer.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote>
     */
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): IPromise<Contracts.IdentityRefWithVote>;
    /**
     * Remove a reviewer from a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} reviewerId - ID of the reviewer to remove.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): IPromise<void>;
    /**
     * Add reviewers to a pull request.
     *
     * @param {VSS_Common_Contracts.IdentityRef[]} reviewers - Reviewers to add to the pull request.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote[]>
     */
    createPullRequestReviewers(reviewers: VSS_Common_Contracts.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.IdentityRefWithVote[]>;
    /**
     * Add a reviewer to a pull request or cast a vote.
     *
     * @param {Contracts.IdentityRefWithVote} reviewer - Reviewer's vote.<br />If the reviewer's ID is included here, it must match the reviewerID parameter.<br />Reviewers can set their own vote with this method.  When adding other reviewers, vote must be set to zero.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} reviewerId - ID of the reviewer.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote>
     */
    createPullRequestReviewer(reviewer: Contracts.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): IPromise<Contracts.IdentityRefWithVote>;
    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     *
     * @param {Contracts.GitItemRequestData} requestData - Request data attributes: ItemDescriptors, IncludeContentMetadata, LatestProcessedChange, IncludeLinks. ItemDescriptors: Collection of items to fetch, including path, version, and recursion level. IncludeContentMetadata: Whether to include metadata for all items LatestProcessedChange: Whether to include shallow ref to commit that last changed each item. IncludeLinks: Whether to include the _links field on the shallow references.
     * @param {string} repositoryId - The name or ID of the repository
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitItem[][]>
     */
    getItemsBatch(requestData: Contracts.GitItemRequestData, repositoryId: string, project?: string): IPromise<Contracts.GitItem[][]>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param {string} repositoryId - The Id of the repository.
     * @param {string} path - The item path.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {Contracts.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the lastest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {Contracts.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is null.
     * @return IPromise<ArrayBuffer>
     */
    getItemZip(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param {string} repositoryId - The Id of the repository.
     * @param {string} path - The item path.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {Contracts.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the lastest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {Contracts.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is null.
     * @return IPromise<string>
     */
    getItemText(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<string>;
    /**
     * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId - The Id of the repository.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {Contracts.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the lastest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {boolean} includeLinks - Set to true to include links to items.  Default is false.
     * @param {Contracts.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is null.
     * @return IPromise<Contracts.GitItem[]>
     */
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitItem[]>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param {string} repositoryId - The Id of the repository.
     * @param {string} path - The item path.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {Contracts.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the lastest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {Contracts.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is null.
     * @return IPromise<ArrayBuffer>
     */
    getItemContent(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param {string} repositoryId - The Id of the repository.
     * @param {string} path - The item path.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {Contracts.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the lastest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {Contracts.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is null.
     * @return IPromise<Contracts.GitItem>
     */
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitItem>;
    /**
     * Retrieve git commits for a project matching the search criteria
     *
     * @param {Contracts.GitQueryCommitsCriteria} searchCriteria - Search options
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {number} skip - Number of commits to skip.
     * @param {number} top - Maximum number of commits to return.
     * @param {boolean} includeStatuses - True to include additional commit status information.
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getCommitsBatch(searchCriteria: Contracts.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number, includeStatuses?: boolean): IPromise<Contracts.GitCommitRef[]>;
    /**
     * Retrieve a list of commits associated with a particular push.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of commits to return ("get the top x commits").
     * @param {number} skip - The number of commits to skip.
     * @param {boolean} includeLinks
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean): IPromise<Contracts.GitCommitRef[]>;
    /**
     * Retrieve git commits for a project
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {Contracts.GitQueryCommitsCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getCommits(repositoryId: string, searchCriteria: Contracts.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number): IPromise<Contracts.GitCommitRef[]>;
    /**
     * Retrieve a particular commit.
     *
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} changeCount - The number of changes to include in the result.
     * @return IPromise<Contracts.GitCommit>
     */
    getCommit(commitId: string, repositoryId: string, project?: string, changeCount?: number): IPromise<Contracts.GitCommit>;
    /**
     * Get a list of differences between two commits.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {boolean} diffCommonCommit
     * @param {number} top - Maximum number of changes to return. Defaults to 100.
     * @param {number} skip - Number of changes to skip
     * @param {Contracts.GitBaseVersionDescriptor} baseVersionDescriptor - Base item version. Compared against target item version to find changes in between.
     * @param {Contracts.GitTargetVersionDescriptor} targetVersionDescriptor - Target item version to use for finding the diffs. Compared against base item version to find changes in between.
     * @return IPromise<Contracts.GitCommitDiffs>
     */
    getCommitDiffs(repositoryId: string, project?: string, diffCommonCommit?: boolean, top?: number, skip?: number, baseVersionDescriptor?: Contracts.GitBaseVersionDescriptor, targetVersionDescriptor?: Contracts.GitTargetVersionDescriptor): IPromise<Contracts.GitCommitDiffs>;
    /**
     * Retrieve changes for a particular commit.
     *
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of changes to return.
     * @param {number} skip - The number of changes to skip.
     * @return IPromise<Contracts.GitCommitChanges>
     */
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number): IPromise<Contracts.GitCommitChanges>;
    /**
     * @param {Contracts.GitQueryBranchStatsCriteria} searchCriteria
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitBranchStats[]>
     */
    getBranchStatsBatch(searchCriteria: Contracts.GitQueryBranchStatsCriteria, repositoryId: string, project?: string): IPromise<Contracts.GitBranchStats[]>;
    /**
     * Retrieve statistics about all branches within a repository.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {Contracts.GitVersionDescriptor} baseVersionDescriptor - Identifies the commit or branch to use as the base.
     * @return IPromise<Contracts.GitBranchStats[]>
     */
    getBranches(repositoryId: string, project?: string, baseVersionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitBranchStats[]>;
    /**
     * Retrieve statistics about a single branch.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} name - Name of the branch.
     * @param {string} project - Project ID or project name
     * @param {Contracts.GitVersionDescriptor} baseVersionDescriptor - Identifies the commit or branch to use as the base.
     * @return IPromise<Contracts.GitBranchStats>
     */
    getBranch(repositoryId: string, name: string, project?: string, baseVersionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitBranchStats>;
    /**
     * Get a single blob.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the “Git/Items/Get Item” endpoint.
     * @param {string} project - Project ID or project name
     * @param {boolean} download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param {string} fileName - Provide a fileName to use for a download.
     * @return IPromise<ArrayBuffer>
     */
    getBlobZip(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * Gets one or more blobs in a zip file download.
     *
     * @param {string[]} blobIds - Blob IDs (SHA1 hashes) to be returned in the zip file.
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {string} filename
     * @return IPromise<ArrayBuffer>
     */
    getBlobsZip(blobIds: string[], repositoryId: string, project?: string, filename?: string): IPromise<ArrayBuffer>;
    /**
     * Get a single blob.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the “Git/Items/Get Item” endpoint.
     * @param {string} project - Project ID or project name
     * @param {boolean} download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param {string} fileName - Provide a fileName to use for a download.
     * @return IPromise<ArrayBuffer>
     */
    getBlobContent(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * Get a single blob.
     *
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the “Git/Items/Get Item” endpoint.
     * @param {string} project - Project ID or project name
     * @param {boolean} download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param {string} fileName - Provide a fileName to use for a download.
     * @return IPromise<Contracts.GitBlobRef>
     */
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): IPromise<Contracts.GitBlobRef>;
}
export class CommonMethods2_1To4_1 extends CommonMethods2To4_1 {
    protected pullRequestCommitsApiVersion: string;
    protected statusesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get statuses associated with the Git commit.
     *
     * @param {string} commitId - ID of the Git commit.
     * @param {string} repositoryId - ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {number} top - Optional. The number of statuses to retrieve. Default is 1000.
     * @param {number} skip - Optional. The number of statuses to ignore. Default is 0. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param {boolean} latestOnly - The flag indicates whether to get only latest statuses grouped by `Context.Name` and `Context.Genre`.
     * @return IPromise<Contracts.GitStatus[]>
     */
    getStatuses(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number, latestOnly?: boolean): IPromise<Contracts.GitStatus[]>;
    /**
     * Create Git commit status.
     *
     * @param {Contracts.GitStatus} gitCommitStatusToCreate - Git commit status object to create.
     * @param {string} commitId - ID of the Git commit.
     * @param {string} repositoryId - ID of the repository.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitStatus>
     */
    createCommitStatus(gitCommitStatusToCreate: Contracts.GitStatus, commitId: string, repositoryId: string, project?: string): IPromise<Contracts.GitStatus>;
    /**
     * Get the commits for the specified pull request.
     *
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getPullRequestCommits(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitCommitRef[]>;
}
export class CommonMethods2_2To4_1 extends CommonMethods2_1To4_1 {
    protected deletedRepositoriesApiVersion: string;
    protected suggestionsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Retrieve a pull request suggestion for a particular repository or team project.
     *
     * @param {string} repositoryId - ID of the git repository.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitSuggestion[]>
     */
    getSuggestions(repositoryId: string, project?: string): IPromise<Contracts.GitSuggestion[]>;
    /**
     * [Preview API] Retrieve deleted git repositories.
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitDeletedRepository[]>
     */
    getDeletedRepositories(project: string): IPromise<Contracts.GitDeletedRepository[]>;
}
export class CommonMethods3To4_1 extends CommonMethods2_2To4_1 {
    protected cherryPicksApiVersion: string;
    protected filePathsApiVersion: string;
    protected importRepositoryValidationsApiVersion: string;
    protected importRequestsApiVersion: string;
    protected pullRequestCommitsApiVersion_e7ea0883: string;
    protected pullRequestConflictsApiVersion: string;
    protected pullRequestIterationChangesApiVersion: string;
    protected pullRequestIterationsApiVersion: string;
    protected pullRequestIterationStatusesApiVersion: string;
    protected pullRequestQueryApiVersion: string;
    protected pullRequestsApiVersion_01a46dea: string;
    protected pullRequestStatusesApiVersion: string;
    protected pullRequestThreadCommentsApiVersion: string;
    protected pullRequestThreadsApiVersion: string;
    protected refsFavoritesApiVersion: string;
    protected repositoryStatsApiVersion: string;
    protected revertsApiVersion: string;
    protected templatesApiVersion: string;
    protected treeDiffsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API] Retrieve all available templates of specified 'type'. If not specified, entire list is returned
     *
     * @param {string} project - Project ID or project name
     * @param {string} type - searches for templates with this type
     * @return IPromise<Contracts.GitTemplate[]>
     */
    getTemplateList(project: string, type?: string): IPromise<Contracts.GitTemplate[]>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve information about a revert operation for a specific branch.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID of the repository.
     * @param {string} refName - The GitAsyncRefOperationParameters generatedRefName used for the revert operation.
     * @return IPromise<Contracts.GitRevert>
     */
    getRevertForRefName(project: string, repositoryId: string, refName: string): IPromise<Contracts.GitRevert>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve information about a revert operation by revert Id.
     *
     * @param {string} project - Project ID or project name
     * @param {number} revertId - ID of the revert operation.
     * @param {string} repositoryId - ID of the repository.
     * @return IPromise<Contracts.GitRevert>
     */
    getRevert(project: string, revertId: number, repositoryId: string): IPromise<Contracts.GitRevert>;
    /**
     * @exemptedapi
     * [Preview API] Starts the operation to create a new branch which reverts changes introduced by either a specific commit or commits that are associated to a pull request.
     *
     * @param {Contracts.GitAsyncRefOperationParameters} revertToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID of the repository.
     * @return IPromise<Contracts.GitRevert>
     */
    createRevert(revertToCreate: Contracts.GitAsyncRefOperationParameters, project: string, repositoryId: string): IPromise<Contracts.GitRevert>;
    /**
     * @exemptedapi
     * [Preview API] Retrieves statistics of a repository.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - Friendly name or guid of repository.
     * @return IPromise<Contracts.GitRepositoryStats>
     */
    getStats(project: string, repositoryId: string): IPromise<Contracts.GitRepositoryStats>;
    /**
     * @exemptedapi
     * [Preview API] Gets the refs favorites for a repo and an identity.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The id of the repository.
     * @param {string} identityId - The id of the identity whose favorites are to be retrieved. If null, the requesting identity is used.
     * @return IPromise<Contracts.GitRefFavorite[]>
     */
    getRefFavorites(project: string, repositoryId?: string, identityId?: string): IPromise<Contracts.GitRefFavorite[]>;
    /**
     * @exemptedapi
     * [Preview API] Gets the refs favorite for a favorite Id.
     *
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId - The Id of the requested ref favorite.
     * @return IPromise<Contracts.GitRefFavorite>
     */
    getRefFavorite(project: string, favoriteId: number): IPromise<Contracts.GitRefFavorite>;
    /**
     * @exemptedapi
     * [Preview API] Deletes the refs favorite specified
     *
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId - The Id of the ref favorite to delete.
     * @return IPromise<void>
     */
    deleteRefFavorite(project: string, favoriteId: number): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API] Creates a ref favorite
     *
     * @param {Contracts.GitRefFavorite} favorite - The ref favorite to create.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitRefFavorite>
     */
    createFavorite(favorite: Contracts.GitRefFavorite, project: string): IPromise<Contracts.GitRefFavorite>;
    /**
     * Update a thread in a pull request.
     *
     * @param {Contracts.GitPullRequestCommentThread} commentThread - The thread content that should be updated.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread to update.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestCommentThread>
     */
    updateThread(commentThread: Contracts.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, threadId: number, project?: string): IPromise<Contracts.GitPullRequestCommentThread>;
    /**
     * Retrieve all threads in a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @param {number} iteration - If specified, thread positions will be tracked using this iteration as the right side of the diff.
     * @param {number} baseIteration - If specified, thread positions will be tracked using this iteration as the left side of the diff.
     * @return IPromise<Contracts.GitPullRequestCommentThread[]>
     */
    getThreads(repositoryId: string, pullRequestId: number, project?: string, iteration?: number, baseIteration?: number): IPromise<Contracts.GitPullRequestCommentThread[]>;
    /**
     * Retrieve a thread in a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread.
     * @param {string} project - Project ID or project name
     * @param {number} iteration - If specified, thread position will be tracked using this iteration as the right side of the diff.
     * @param {number} baseIteration - If specified, thread position will be tracked using this iteration as the left side of the diff.
     * @return IPromise<Contracts.GitPullRequestCommentThread>
     */
    getPullRequestThread(repositoryId: string, pullRequestId: number, threadId: number, project?: string, iteration?: number, baseIteration?: number): IPromise<Contracts.GitPullRequestCommentThread>;
    /**
     * Create a thread in a pull request.
     *
     * @param {Contracts.GitPullRequestCommentThread} commentThread - The thread to create. Thread must contain at least one comment.
     * @param {string} repositoryId - Repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestCommentThread>
     */
    createThread(commentThread: Contracts.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitPullRequestCommentThread>;
    /**
     * Update a comment associated with a specific thread in a pull request.
     *
     * @param {Contracts.Comment} comment - The comment content that should be updated.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread that the desired comment is in.
     * @param {number} commentId - ID of the comment to update.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Comment>
     */
    updateComment(comment: Contracts.Comment, repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): IPromise<Contracts.Comment>;
    /**
     * Retrieve all comments associated with a specific thread in a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Comment[]>
     */
    getComments(repositoryId: string, pullRequestId: number, threadId: number, project?: string): IPromise<Contracts.Comment[]>;
    /**
     * Retrieve a comment associated with a specific thread in a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread that the desired comment is in.
     * @param {number} commentId - ID of the comment.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Comment>
     */
    getComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): IPromise<Contracts.Comment>;
    /**
     * Delete a comment associated with a specific thread in a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread that the desired comment is in.
     * @param {number} commentId - ID of the comment.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): IPromise<void>;
    /**
     * Create a comment on a specific thread in a pull request.
     *
     * @param {Contracts.Comment} comment - The comment to create.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread that the desired comment is in.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Comment>
     */
    createComment(comment: Contracts.Comment, repositoryId: string, pullRequestId: number, threadId: number, project?: string): IPromise<Contracts.Comment>;
    /**
     * @exemptedapi
     * [Preview API] Update pull request statuses collection. The only supported operation type is `remove`.
     *
     * @param {VSS_Common_Contracts.JsonPatchDocument} patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    updatePullRequestStatuses(patchDocument: VSS_Common_Contracts.JsonPatchDocument, repositoryId: string, pullRequestId: number, project?: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API] Get all the statuses associated with a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus[]>
     */
    getPullRequestStatuses(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitPullRequestStatus[]>;
    /**
     * @exemptedapi
     * [Preview API] Get the specific pull request status by ID. The status ID is unique within the pull request across all iterations.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} statusId - ID of the pull request status.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus>
     */
    getPullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project?: string): IPromise<Contracts.GitPullRequestStatus>;
    /**
     * @exemptedapi
     * [Preview API] Delete pull request status.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} statusId - ID of the pull request status.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deletePullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project?: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API] Create a pull request status.
     *
     * @param {Contracts.GitPullRequestStatus} status - Pull request status to create.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus>
     */
    createPullRequestStatus(status: Contracts.GitPullRequestStatus, repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitPullRequestStatus>;
    /**
     * Retrieve a pull request.
     *
     * @param {number} pullRequestId - The ID of the pull request to retrieve.
     * @return IPromise<Contracts.GitPullRequest>
     */
    getPullRequestById(pullRequestId: number): IPromise<Contracts.GitPullRequest>;
    /**
     * This API is used to find what pull requests are related to a given commit.  It can be used to either find the pull request that created a particular merge commit or it can be used to find all pull requests that have ever merged a particular commit.  The input is a list of queries which each contain a list of commits. For each commit that you search against, you will get back a dictionary of commit -> pull requests.
     *
     * @param {Contracts.GitPullRequestQuery} queries - The list of queries to perform.
     * @param {string} repositoryId - ID of the repository.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestQuery>
     */
    getPullRequestQuery(queries: Contracts.GitPullRequestQuery, repositoryId: string, project?: string): IPromise<Contracts.GitPullRequestQuery>;
    /**
     * @exemptedapi
     * [Preview API] Update pull request iteration statuses collection. The only supported operation type is `remove`.
     *
     * @param {VSS_Common_Contracts.JsonPatchDocument} patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    updatePullRequestIterationStatuses(patchDocument: VSS_Common_Contracts.JsonPatchDocument, repositoryId: string, pullRequestId: number, iterationId: number, project?: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API] Get all the statuses associated with a pull request iteration.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus[]>
     */
    getPullRequestIterationStatuses(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): IPromise<Contracts.GitPullRequestStatus[]>;
    /**
     * @exemptedapi
     * [Preview API] Get the specific pull request iteration status by ID. The status ID is unique within the pull request across all iterations.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
     * @param {number} statusId - ID of the pull request status.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus>
     */
    getPullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project?: string): IPromise<Contracts.GitPullRequestStatus>;
    /**
     * @exemptedapi
     * [Preview API] Delete pull request iteration status.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
     * @param {number} statusId - ID of the pull request status.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deletePullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project?: string): IPromise<void>;
    /**
     * @exemptedapi
     * [Preview API] Create a pull request status on the iteration. This operation will have the same result as Create status on pull request with specified iteration ID in the request body.
     *
     * @param {Contracts.GitPullRequestStatus} status - Pull request status to create.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestStatus>
     */
    createPullRequestIterationStatus(status: Contracts.GitPullRequestStatus, repositoryId: string, pullRequestId: number, iterationId: number, project?: string): IPromise<Contracts.GitPullRequestStatus>;
    /**
     * Get the list of iterations for the specified pull request.
     *
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeCommits - If true, include the commits associated with each iteration in the response.
     * @return IPromise<Contracts.GitPullRequestIteration[]>
     */
    getPullRequestIterations(repositoryId: string, pullRequestId: number, project?: string, includeCommits?: boolean): IPromise<Contracts.GitPullRequestIteration[]>;
    /**
     * Get the specified iteration for a pull request.
     *
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration to return.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequestIteration>
     */
    getPullRequestIteration(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): IPromise<Contracts.GitPullRequestIteration>;
    /**
     * Retrieve the changes made in a pull request between two iterations.
     *
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration. <br /> Iteration IDs are zero-based with zero indicating the common commit between the source and target branches. Iteration one is the head of the source branch at the time the pull request is created and subsequent iterations are created when there are pushes to the source branch.
     * @param {string} project - Project ID or project name
     * @param {number} top - Optional. The number of changes to retrieve.  The default value is 100 and the maximum value is 2000.
     * @param {number} skip - Optional. The number of changes to ignore.  For example, to retrieve changes 101-150, set top 50 and skip to 100.
     * @param {number} compareTo - ID of the pull request iteration to compare against.  The default value is zero which indicates the comparison is made against the common commit between the source and target branches
     * @return IPromise<Contracts.GitPullRequestIterationChanges>
     */
    getPullRequestIterationChanges(repositoryId: string, pullRequestId: number, iterationId: number, project?: string, top?: number, skip?: number, compareTo?: number): IPromise<Contracts.GitPullRequestIterationChanges>;
    /**
     * @exemptedapi
     * [Preview API] Update multiple merge conflict resolutions
     *
     * @param {Contracts.GitConflict[]} conflictUpdates
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitConflictUpdateResult[]>
     */
    updatePullRequestConflicts(conflictUpdates: Contracts.GitConflict[], repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitConflictUpdateResult[]>;
    /**
     * @exemptedapi
     * [Preview API] Update merge conflict resolution
     *
     * @param {Contracts.GitConflict} conflict
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitConflict>
     */
    updatePullRequestConflict(conflict: Contracts.GitConflict, repositoryId: string, pullRequestId: number, conflictId: number, project?: string): IPromise<Contracts.GitConflict>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve all conflicts for a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includeObsolete
     * @param {boolean} excludeResolved
     * @param {boolean} onlyResolved
     * @return IPromise<Contracts.GitConflict[]>
     */
    getPullRequestConflicts(repositoryId: string, pullRequestId: number, project?: string, skip?: number, top?: number, includeObsolete?: boolean, excludeResolved?: boolean, onlyResolved?: boolean): IPromise<Contracts.GitConflict[]>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve one conflict for a pull request by ID
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitConflict>
     */
    getPullRequestConflict(repositoryId: string, pullRequestId: number, conflictId: number, project?: string): IPromise<Contracts.GitConflict>;
    /**
     * Get the commits for the specified iteration of a pull request.
     *
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the iteration from which to get the commits.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getPullRequestIterationCommits(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): IPromise<Contracts.GitCommitRef[]>;
    /**
     * @exemptedapi
     * [Preview API] Retry or abandon a failed import request.
     *
     * @param {Contracts.GitImportRequest} importRequestToUpdate - The updated version of the import request. Currently, the only change allowed is setting the Status to Queued or Abandoned.
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {number} importRequestId - The unique identifier for the import request to update.
     * @return IPromise<Contracts.GitImportRequest>
     */
    updateImportRequest(importRequestToUpdate: Contracts.GitImportRequest, project: string, repositoryId: string, importRequestId: number): IPromise<Contracts.GitImportRequest>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve import requests for a repository.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {boolean} includeAbandoned - True to include abandoned import requests in the results.
     * @return IPromise<Contracts.GitImportRequest[]>
     */
    queryImportRequests(project: string, repositoryId: string, includeAbandoned?: boolean): IPromise<Contracts.GitImportRequest[]>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve a particular import request.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {number} importRequestId - The unique identifier for the import request.
     * @return IPromise<Contracts.GitImportRequest>
     */
    getImportRequest(project: string, repositoryId: string, importRequestId: number): IPromise<Contracts.GitImportRequest>;
    /**
     * @exemptedapi
     * [Preview API] Create an import request.
     *
     * @param {Contracts.GitImportRequest} importRequest - The import request to create.
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The name or ID of the repository.
     * @return IPromise<Contracts.GitImportRequest>
     */
    createImportRequest(importRequest: Contracts.GitImportRequest, project: string, repositoryId: string): IPromise<Contracts.GitImportRequest>;
    /**
     * @exemptedapi
     * [Preview API] Validates a remote repository. Returns 404 if remote repository is not reachable
     *
     * @param {Contracts.ImportRepositoryValidation} remoteRepository - The remote repository to validate.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ImportRepositoryValidation>
     */
    validateRemoteRepository(remoteRepository: Contracts.ImportRepositoryValidation, project: string): IPromise<Contracts.ImportRepositoryValidation>;
    /**
     * @exemptedapi
     * [Preview API] Get file paths in a repository branch
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - repository identifier
     * @param {string} scopePath - path to search under
     * @param {Contracts.GitVersionDescriptor} versionDescriptor - version, version type and options
     * @return IPromise<Contracts.GitFilePathsCollection>
     */
    getFilePaths(project: string, repositoryId: string, scopePath?: string, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitFilePathsCollection>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve information about a cherry pick for a specific branch.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID of the repository.
     * @param {string} refName - The GitAsyncRefOperationParameters generatedRefName used for the cherry pick operation.
     * @return IPromise<Contracts.GitCherryPick>
     */
    getCherryPickForRefName(project: string, repositoryId: string, refName: string): IPromise<Contracts.GitCherryPick>;
    /**
     * @exemptedapi
     * [Preview API] Retrieve information about a cherry pick by cherry pick Id.
     *
     * @param {string} project - Project ID or project name
     * @param {number} cherryPickId - ID of the cherry pick.
     * @param {string} repositoryId - ID of the repository.
     * @return IPromise<Contracts.GitCherryPick>
     */
    getCherryPick(project: string, cherryPickId: number, repositoryId: string): IPromise<Contracts.GitCherryPick>;
    /**
     * @exemptedapi
     * [Preview API] Cherry pick a specific commit or commits that are associated to a pull request into a new branch.
     *
     * @param {Contracts.GitAsyncRefOperationParameters} cherryPickToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID of the repository.
     * @return IPromise<Contracts.GitCherryPick>
     */
    createCherryPick(cherryPickToCreate: Contracts.GitAsyncRefOperationParameters, project: string, repositoryId: string): IPromise<Contracts.GitCherryPick>;
}
export class CommonMethods3_1To4_1 extends CommonMethods3To4_1 {
    protected annotatedTagsApiVersion: string;
    protected pullRequestAttachmentsApiVersion: string;
    protected pullRequestShareApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Sends an e-mail notification about a specific pull request to a set of recipients
     *
     * @param {Contracts.ShareNotificationContext} userMessage
     * @param {string} repositoryId - ID of the git repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    sharePullRequest(userMessage: Contracts.ShareNotificationContext, repositoryId: string, pullRequestId: number, project?: string): IPromise<void>;
    /**
     * [Preview API] Get the file content of a pull request attachment.
     *
     * @param {string} fileName - The name of the attachment.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentZip(fileName: string, repositoryId: string, pullRequestId: number, project?: string): IPromise<ArrayBuffer>;
    /**
     * [Preview API] Get a list of files attached to a given pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Attachment[]>
     */
    getAttachments(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.Attachment[]>;
    /**
     * [Preview API] Get the file content of a pull request attachment.
     *
     * @param {string} fileName - The name of the attachment.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentContent(fileName: string, repositoryId: string, pullRequestId: number, project?: string): IPromise<ArrayBuffer>;
    /**
     * [Preview API] Delete a pull request attachment.
     *
     * @param {string} fileName - The name of the attachment to delete.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteAttachment(fileName: string, repositoryId: string, pullRequestId: number, project?: string): IPromise<void>;
    /**
     * [Preview API] Attach a new file to a pull request.
     *
     * @param {any} content - Content to upload
     * @param {string} fileName - The name of the file.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Attachment>
     */
    createAttachment(content: any, fileName: string, repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.Attachment>;
    /**
     * [Preview API] Get an annotated tag.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID or name of the repository.
     * @param {string} objectId - ObjectId (Sha1Id) of tag to get.
     * @return IPromise<Contracts.GitAnnotatedTag>
     */
    getAnnotatedTag(project: string, repositoryId: string, objectId: string): IPromise<Contracts.GitAnnotatedTag>;
    /**
     * [Preview API] Create an annotated tag.
     *
     * @param {Contracts.GitAnnotatedTag} tagObject - Object containing details of tag to be created.
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID or name of the repository.
     * @return IPromise<Contracts.GitAnnotatedTag>
     */
    createAnnotatedTag(tagObject: Contracts.GitAnnotatedTag, project: string, repositoryId: string): IPromise<Contracts.GitAnnotatedTag>;
}
export class CommonMethods4To4_1 extends CommonMethods3_1To4_1 {
    protected forksApiVersion: string;
    protected forkSyncRequestsApiVersion: string;
    protected pullRequestCommentLikesApiVersion: string;
    protected pullRequestLabelsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Get all the labels assigned to a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project ID or project name.
     * @return IPromise<TFS_Core_Contracts.WebApiTagDefinition[]>
     */
    getPullRequestLabels(repositoryId: string, pullRequestId: number, project?: string, projectId?: string): IPromise<TFS_Core_Contracts.WebApiTagDefinition[]>;
    /**
     * [Preview API] Retrieves a single label that has been assigned to a pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} labelIdOrName - The name or ID of the label requested.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project ID or project name.
     * @return IPromise<TFS_Core_Contracts.WebApiTagDefinition>
     */
    getPullRequestLabel(repositoryId: string, pullRequestId: number, labelIdOrName: string, project?: string, projectId?: string): IPromise<TFS_Core_Contracts.WebApiTagDefinition>;
    /**
     * [Preview API] Removes a label from the set of those assigned to the pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} labelIdOrName - The name or ID of the label requested.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project ID or project name.
     * @return IPromise<void>
     */
    deletePullRequestLabels(repositoryId: string, pullRequestId: number, labelIdOrName: string, project?: string, projectId?: string): IPromise<void>;
    /**
     * [Preview API] Create a label for a specified pull request. The only required field is the name of the new label.
     *
     * @param {TFS_Core_Contracts.WebApiCreateTagRequestData} label - Label to assign to the pull request.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project ID or project name.
     * @return IPromise<TFS_Core_Contracts.WebApiTagDefinition>
     */
    createPullRequestLabel(label: TFS_Core_Contracts.WebApiCreateTagRequestData, repositoryId: string, pullRequestId: number, project?: string, projectId?: string): IPromise<TFS_Core_Contracts.WebApiTagDefinition>;
    /**
     * [Preview API] Get likes for a comment.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - The ID of the thread that contains the comment.
     * @param {number} commentId - The ID of the comment.
     * @param {string} project - Project ID or project name
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getLikes(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * [Preview API] Delete a like on a comment.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - The ID of the thread that contains the comment.
     * @param {number} commentId - The ID of the comment.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): IPromise<void>;
    /**
     * [Preview API] Add a like on a comment.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - The ID of the thread that contains the comment.
     * @param {number} commentId - The ID of the comment.
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    createLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): IPromise<void>;
    /**
     * [Preview API] Retrieve all requested fork sync operations on this repository.
     *
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeAbandoned - True to include abandoned requests.
     * @param {boolean} includeLinks - True to include links.
     * @return IPromise<Contracts.GitForkSyncRequest[]>
     */
    getForkSyncRequests(repositoryNameOrId: string, project?: string, includeAbandoned?: boolean, includeLinks?: boolean): IPromise<Contracts.GitForkSyncRequest[]>;
    /**
     * [Preview API] Get a specific fork sync operation's details.
     *
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {number} forkSyncOperationId - OperationId of the sync request.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks - True to include links.
     * @return IPromise<Contracts.GitForkSyncRequest>
     */
    getForkSyncRequest(repositoryNameOrId: string, forkSyncOperationId: number, project?: string, includeLinks?: boolean): IPromise<Contracts.GitForkSyncRequest>;
    /**
     * [Preview API] Request that another repository's refs be fetched into this one.
     *
     * @param {Contracts.GitForkSyncRequestParameters} syncParams - Source repository and ref mapping.
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks - True to include links
     * @return IPromise<Contracts.GitForkSyncRequest>
     */
    createForkSyncRequest(syncParams: Contracts.GitForkSyncRequestParameters, repositoryNameOrId: string, project?: string, includeLinks?: boolean): IPromise<Contracts.GitForkSyncRequest>;
    /**
     * [Preview API] Retrieve all forks of a repository in the collection.
     *
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {string} collectionId - Team project collection ID.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks - True to include links.
     * @return IPromise<Contracts.GitRepositoryRef[]>
     */
    getForks(repositoryNameOrId: string, collectionId: string, project?: string, includeLinks?: boolean): IPromise<Contracts.GitRepositoryRef[]>;
}
/**
 * @exemptedapi
 */
export class GitHttpClient4_1 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Find the merge bases of two commits, optionally across forks. If otherRepositoryId is not specified, the merge bases will only be calculated within the context of the local repositoryNameOrId.
     *
     * @param {string} repositoryNameOrId - ID or name of the local repository.
     * @param {string} commitId - First commit, usually the tip of the target branch of the potential merge.
     * @param {string} otherCommitId - Other commit, usually the tip of the source branch of the potential merge.
     * @param {string} project - Project ID or project name
     * @param {string} otherCollectionId - The collection ID where otherCommitId lives.
     * @param {string} otherRepositoryId - The repository ID where otherCommitId lives.
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getMergeBases(repositoryNameOrId: string, commitId: string, otherCommitId: string, project?: string, otherCollectionId?: string, otherRepositoryId?: string): IPromise<Contracts.GitCommitRef[]>;
    /**
     * [Preview API] Get external properties of the pull request.
     *
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<any>
     */
    getPullRequestProperties(repositoryId: string, pullRequestId: number, project?: string): IPromise<any>;
    /**
     * [Preview API] Create or update pull request external properties. The patch operation can be `add`, `replace` or `remove`. For `add` operation, the path can be empty. If the path is empty, the value must be a list of key value pairs. For `replace` operation, the path cannot be empty. If the path does not exist, the property will be added to the collection. For `remove` operation, the path cannot be empty. If the path does not exist, no action will be performed.
     *
     * @param {VSS_Common_Contracts.JsonPatchDocument} patchDocument - Properties to add, replace or remove in JSON Patch format.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @return IPromise<any>
     */
    updatePullRequestProperties(patchDocument: VSS_Common_Contracts.JsonPatchDocument, repositoryId: string, pullRequestId: number, project?: string): IPromise<any>;
}
/**
 * @exemptedapi
 */
export class GitHttpClient4 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient3_2 extends CommonMethods3_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient3_1 extends CommonMethods3_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient3 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient2_3 extends CommonMethods2_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient2_2 extends CommonMethods2_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient2_1 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class GitHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class GitHttpClient extends GitHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return GitHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): GitHttpClient4;
}
declare module "TFS/VersionControl/Services" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
/**
* Host service for common code actions
*/
export interface IVersionControlActionService {
    /** Launches create branch dialog
    * @param workItemIds The work item ids to link to the newly created branch
    * @param project The Project Name to open the dialog for
    * @param projectId The Project ID/Guid to open the dialog for
    */
    beginLaunchCreateBranchDialog(workItemIds: number[], project?: string, projectId?: string): IPromise<void>;
    /** Features required for actions, the actions will not work as desired when users do not have license for the listed features. */
    requiredFeaturesForActions?: string[];
}
/**
* Host service for version control actions
*/
export module VersionControlActionService {
    var contributionId: string;
    var fullyQualifiedContributionId: string;
    /** Get an instance of the code action service
    * @param webContext Optional web context to scope the service to
    */
    function getService(webContext?: Contracts_Platform.WebContext): IPromise<IVersionControlActionService>;
}
}
declare module "TFS/VersionControl/TfvcRestClient" {
import TFS_VersionControl_Contracts = require("TFS/VersionControl/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected branchesApiVersion: string;
    protected changesetChangesApiVersion: string;
    protected changesetsBatchApiVersion: string;
    protected changesetWorkItemsApiVersion: string;
    protected itemBatchApiVersion: string;
    protected itemsApiVersion: string;
    protected labelItemsApiVersion: string;
    protected labelsApiVersion: string;
    protected shelvesetChangesApiVersion: string;
    protected shelvesetsApiVersion: string;
    protected shelvesetWorkItemsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get work items associated with a shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @return IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>
     */
    getShelvesetWorkItems(shelvesetId: string): IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>;
    /**
     * Return a collection of shallow shelveset references.
     *
     * @param {TFS_VersionControl_Contracts.TfvcShelvesetRequestData} requestData - name, owner, and maxCommentLength
     * @param {number} top - Max number of shelvesets to return
     * @param {number} skip - Number of shelvesets to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcShelvesetRef[]>
     */
    getShelvesets(requestData?: TFS_VersionControl_Contracts.TfvcShelvesetRequestData, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcShelvesetRef[]>;
    /**
     * Get a single deep shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {TFS_VersionControl_Contracts.TfvcShelvesetRequestData} requestData - includeDetails, includeWorkItems, maxChangeCount, and maxCommentLength
     * @return IPromise<TFS_VersionControl_Contracts.TfvcShelveset>
     */
    getShelveset(shelvesetId: string, requestData?: TFS_VersionControl_Contracts.TfvcShelvesetRequestData): IPromise<TFS_VersionControl_Contracts.TfvcShelveset>;
    /**
     * Get changes included in a shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {number} top - Max number of changes to return
     * @param {number} skip - Number of changes to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChange[]>
     */
    getShelvesetChanges(shelvesetId: string, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcChange[]>;
    /**
     * Get a collection of shallow label references.
     *
     * @param {TFS_VersionControl_Contracts.TfvcLabelRequestData} requestData - labelScope, name, owner, and itemLabelFilter
     * @param {string} project - Project ID or project name
     * @param {number} top - Max number of labels to return
     * @param {number} skip - Number of labels to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcLabelRef[]>
     */
    getLabels(requestData: TFS_VersionControl_Contracts.TfvcLabelRequestData, project?: string, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcLabelRef[]>;
    /**
     * Get a single deep label.
     *
     * @param {string} labelId - Unique identifier of label
     * @param {TFS_VersionControl_Contracts.TfvcLabelRequestData} requestData - maxItemCount
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcLabel>
     */
    getLabel(labelId: string, requestData: TFS_VersionControl_Contracts.TfvcLabelRequestData, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcLabel>;
    /**
     * Get items under a label.
     *
     * @param {string} labelId - Unique identifier of label
     * @param {number} top - Max number of items to return
     * @param {number} skip - Number of items to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem[]>
     */
    getLabelItems(labelId: string, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcItem[]>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path - Version control path of an individual item to return.
     * @param {string} project - Project ID or project name
     * @param {string} fileName - file name of item returned.
     * @param {boolean} download - If true, create a downloadable attachment.
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<ArrayBuffer>
     */
    getItemZip(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path - Version control path of an individual item to return.
     * @param {string} project - Project ID or project name
     * @param {string} fileName - file name of item returned.
     * @param {boolean} download - If true, create a downloadable attachment.
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<string>
     */
    getItemText(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<string>;
    /**
     * Get a list of Tfvc items
     *
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {boolean} includeLinks - True to include links.
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem[]>
     */
    getItems(project?: string, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, includeLinks?: boolean, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<TFS_VersionControl_Contracts.TfvcItem[]>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path - Version control path of an individual item to return.
     * @param {string} project - Project ID or project name
     * @param {string} fileName - file name of item returned.
     * @param {boolean} download - If true, create a downloadable attachment.
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<ArrayBuffer>
     */
    getItemContent(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path - Version control path of an individual item to return.
     * @param {string} project - Project ID or project name
     * @param {string} fileName - file name of item returned.
     * @param {boolean} download - If true, create a downloadable attachment.
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem>
     */
    getItem(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<TFS_VersionControl_Contracts.TfvcItem>;
    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     *
     * @param {TFS_VersionControl_Contracts.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     * @return IPromise<ArrayBuffer>
     */
    getItemsBatchZip(itemRequestData: TFS_VersionControl_Contracts.TfvcItemRequestData, project?: string): IPromise<ArrayBuffer>;
    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     *
     * @param {TFS_VersionControl_Contracts.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem[][]>
     */
    getItemsBatch(itemRequestData: TFS_VersionControl_Contracts.TfvcItemRequestData, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcItem[][]>;
    /**
     * Retrieves the work items associated with a particular changeset.
     *
     * @param {number} id - ID of the changeset. Default: null
     * @return IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>
     */
    getChangesetWorkItems(id?: number): IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>;
    /**
     * Returns changesets for a given list of changeset Ids.
     *
     * @param {TFS_VersionControl_Contracts.TfvcChangesetsRequestData} changesetsRequestData - List of changeset IDs.
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getBatchedChangesets(changesetsRequestData: TFS_VersionControl_Contracts.TfvcChangesetsRequestData): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
    /**
     * Retrieve Tfvc changes for a given changeset.
     *
     * @param {number} id - ID of the changeset. Default: null
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChange[]>
     */
    getChangesetChanges(id?: number, skip?: number, top?: number): IPromise<TFS_VersionControl_Contracts.TfvcChange[]>;
    /**
     * Get branch hierarchies below the specified scopePath
     *
     * @param {string} scopePath - Full path to the branch.  Default: $/ Examples: $/, $/MyProject, $/MyProject/SomeFolder.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted - Return deleted branches. Default: False
     * @param {boolean} includeLinks - Return links. Default: False
     * @return IPromise<TFS_VersionControl_Contracts.TfvcBranchRef[]>
     */
    getBranchRefs(scopePath: string, project?: string, includeDeleted?: boolean, includeLinks?: boolean): IPromise<TFS_VersionControl_Contracts.TfvcBranchRef[]>;
    /**
     * Get a collection of branch roots -- first-level children, branches with no parents.
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent - Return the parent branch, if there is one. Default: False
     * @param {boolean} includeChildren - Return the child branches for each root branch. Default: False
     * @param {boolean} includeDeleted - Return deleted branches. Default: False
     * @param {boolean} includeLinks - Return links. Default: False
     * @return IPromise<TFS_VersionControl_Contracts.TfvcBranch[]>
     */
    getBranches(project?: string, includeParent?: boolean, includeChildren?: boolean, includeDeleted?: boolean, includeLinks?: boolean): IPromise<TFS_VersionControl_Contracts.TfvcBranch[]>;
    /**
     * Get a single branch hierarchy at the given path with parents or children as specified.
     *
     * @param {string} path - Full path to the branch.  Default: $/ Examples: $/, $/MyProject, $/MyProject/SomeFolder.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent - Return the parent branch, if there is one. Default: False
     * @param {boolean} includeChildren - Return child branches, if there are any. Default: False
     * @return IPromise<TFS_VersionControl_Contracts.TfvcBranch>
     */
    getBranch(path: string, project?: string, includeParent?: boolean, includeChildren?: boolean): IPromise<TFS_VersionControl_Contracts.TfvcBranch>;
}
export class CommonMethods3To4_1 extends CommonMethods2To4_1 {
    protected changesetsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Retrieve Tfvc Changesets
     *
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getChangesets(project?: string, maxCommentLength?: number, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
    /**
     * Retrieve a Tfvc Changeset
     *
     * @param {number} id - Changeset Id to retrieve.
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangeset>
     */
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangeset>;
    /**
     * Create a new changeset.
     *
     * @param {TFS_VersionControl_Contracts.TfvcChangeset} changeset
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>
     */
    createChangeset(changeset: TFS_VersionControl_Contracts.TfvcChangeset, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>;
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient4_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient4 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient3_2 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient3_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class TfvcHttpClient3 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class TfvcHttpClient2_3 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Create a new changeset.
     *
     * @param {TFS_VersionControl_Contracts.TfvcChangeset} changeset
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>
     */
    createChangeset(changeset: TFS_VersionControl_Contracts.TfvcChangeset, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>;
    /**
     * Retrieve a Tfvc Changeset
     *
     * @param {number} id - Changeset Id to retrieve.
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangeset>
     */
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangeset>;
    /**
     * Retrieve Tfvc Changesets
     *
     * @param {string} project - Project ID or project name
     * @param {string} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getChangesets(project?: string, maxChangeCount?: string, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
}
export class TfvcHttpClient2_2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Create a new changeset.
     *
     * @param {TFS_VersionControl_Contracts.TfvcChangeset} changeset
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>
     */
    createChangeset(changeset: TFS_VersionControl_Contracts.TfvcChangeset, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>;
    /**
     * Retrieve a Tfvc Changeset
     *
     * @param {number} id - Changeset Id to retrieve.
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangeset>
     */
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangeset>;
    /**
     * Retrieve Tfvc Changesets
     *
     * @param {string} project - Project ID or project name
     * @param {string} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getChangesets(project?: string, maxChangeCount?: string, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
    /**
     * [Obsolete - Use the Projects API instead] Retrieve the version control information for a given Team Project
     *
     * @param {string} projectId - The id (or name) of the team project
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>
     */
    getProjectInfo(projectId: string, project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>;
    /**
     * [Obsolete - Use the Projects API instead] Retrieve the version control information for all Team projects in this project collection
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>
     */
    getProjectInfos(project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>;
}
export class TfvcHttpClient2_1 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Create a new changeset.
     *
     * @param {TFS_VersionControl_Contracts.TfvcChangeset} changeset
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>
     */
    createChangeset(changeset: TFS_VersionControl_Contracts.TfvcChangeset, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>;
    /**
     * Retrieve a Tfvc Changeset
     *
     * @param {number} id - Changeset Id to retrieve.
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangeset>
     */
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangeset>;
    /**
     * Retrieve Tfvc Changesets
     *
     * @param {string} project - Project ID or project name
     * @param {string} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getChangesets(project?: string, maxChangeCount?: string, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
    /**
     * [Obsolete - Use the Projects API instead] Retrieve the version control information for a given Team Project
     *
     * @param {string} projectId - The id (or name) of the team project
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>
     */
    getProjectInfo(projectId: string, project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>;
    /**
     * [Obsolete - Use the Projects API instead] Retrieve the version control information for all Team projects in this project collection
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>
     */
    getProjectInfos(project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>;
}
export class TfvcHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Create a new changeset.
     *
     * @param {TFS_VersionControl_Contracts.TfvcChangeset} changeset
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>
     */
    createChangeset(changeset: TFS_VersionControl_Contracts.TfvcChangeset, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef>;
    /**
     * Retrieve a Tfvc Changeset
     *
     * @param {number} id - Changeset Id to retrieve.
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangeset>
     */
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangeset>;
    /**
     * Retrieve Tfvc Changesets
     *
     * @param {string} project - Project ID or project name
     * @param {string} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getChangesets(project?: string, maxChangeCount?: string, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
    /**
     * [Obsolete - Use the Projects API instead] Retrieve the version control information for a given Team Project
     *
     * @param {string} projectId - The id (or name) of the team project
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>
     */
    getProjectInfo(projectId: string, project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>;
    /**
     * [Obsolete - Use the Projects API instead] Retrieve the version control information for all Team projects in this project collection
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>
     */
    getProjectInfos(project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>;
}
export class TfvcHttpClient extends TfvcHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return TfvcHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): TfvcHttpClient4;
}
declare module "TFS/VersionControl/UIContracts" {
import VCContracts = require("TFS/VersionControl/Contracts");
export interface ISourceItem extends VCContracts.ItemModel {
    sourceProvider: string;
    item: VCContracts.GitItem | VCContracts.TfvcItem;
}
export interface SourceItemContext {
    item: ISourceItem;
    version: string;
    gitRepository?: VCContracts.GitRepository;
}
export interface GitBranchContext {
    repository: VCContracts.GitRepository;
    ref: VCContracts.GitRef;
    view: {
        refresh: () => void;
    };
}
export interface GitBranchDiffContext {
    gitBranchDiff: VCContracts.GitCommitDiffs;
    repository: VCContracts.GitRepository;
    view: {
        refresh: () => void;
    };
}
export interface ChangeListSourceItemContext {
    change: VCContracts.GitChange | VCContracts.TfvcChange;
    changeList: VCContracts.ChangeList<VCContracts.GitItem> | VCContracts.ChangeList<VCContracts.TfvcItem>;
}
}
declare module "TFS/Wiki/Contracts" {
import TFS_VersionControl_Contracts = require("TFS/VersionControl/Contracts");
/**
 * Defines a wiki repository which encapsulates the git repository backing the wiki.
 */
export interface Wiki extends WikiCreateParameters {
    /**
     * The head commit associated with the git repository backing up the wiki.
     */
    headCommit: string;
    /**
     * The ID of the wiki which is same as the ID of the Git repository that it is backed by.
     */
    id: string;
    /**
     * The git repository that backs up the wiki.
     */
    repository: TFS_VersionControl_Contracts.GitRepository;
}
/**
 * Defines properties for wiki attachment file.
 */
export interface WikiAttachment {
    /**
     * Name of the wiki attachment file.
     */
    name: string;
    /**
     * Path of the wiki attachment file.
     */
    path: string;
}
/**
 * Response contract for the Wiki Attachments API
 */
export interface WikiAttachmentResponse {
    /**
     * Defines properties for wiki attachment file.
     */
    attachment: WikiAttachment;
    /**
     * Contains the list of ETag values from the response header of the attachments API call. The first item in the list contains the version of the wiki attachment.
     */
    eTag: string[];
}
/**
 * Wiki creations parameters.
 */
export interface WikiCreateParameters {
    /**
     * Wiki name.
     */
    name: string;
    /**
     * ID of the project in which the wiki is to be created.
     */
    projectId: string;
}
/**
 * Defines a page in a wiki.
 */
export interface WikiPage extends WikiPageCreateOrUpdateParameters {
    /**
     * Path of the git item corresponding to the wiki page stored in the backing Git repository.
     */
    gitItemPath: string;
    /**
     * True if a page is non-conforming, i.e. 1) if the name doesn't match page naming standards. 2) if the page does not have a valid entry in the appropriate order file.
     */
    isNonConformant: boolean;
    /**
     * True if this page has subpages under its path.
     */
    isParentPage: boolean;
    /**
     * Order of the wiki page, relative to other pages in the same hierarchy level.
     */
    order: number;
    /**
     * Path of the wiki page.
     */
    path: string;
    /**
     * List of subpages of the current page.
     */
    subPages: WikiPage[];
}
/**
 * Contract encapsulating parameters for the page create or update operations.
 */
export interface WikiPageCreateOrUpdateParameters {
    /**
     * Content of the wiki page.
     */
    content: string;
}
/**
 * Request contract for Wiki Page Move.
 */
export interface WikiPageMove extends WikiPageMoveParameters {
    /**
     * Resultant page of this page move operation.
     */
    page: WikiPage;
}
/**
 * Contract encapsulating parameters for the page move operation.
 */
export interface WikiPageMoveParameters {
    /**
     * New order of the wiki page.
     */
    newOrder: number;
    /**
     * New path of the wiki page.
     */
    newPath: string;
    /**
     * Current path of the wiki page.
     */
    path: string;
}
/**
 * Response contract for the Wiki Page Move API.
 */
export interface WikiPageMoveResponse {
    /**
     * Contains the list of ETag values from the response header of the page move API call. The first item in the list contains the version of the wiki page subject to page move.
     */
    eTag: string[];
    /**
     * Defines properties for wiki page move.
     */
    pageMove: WikiPageMove;
}
/**
 * Response contract for the Wiki Pages PUT, PATCH and DELETE APIs.
 */
export interface WikiPageResponse {
    /**
     * Contains the list of ETag values from the response header of the pages API call. The first item in the list contains the version of the wiki page.
     */
    eTag: string[];
    /**
     * Defines properties for wiki page.
     */
    page: WikiPage;
}
export var TypeInfo: {
    Wiki: any;
};
}
declare module "TFS/Wiki/WikiRestClient" {
import Contracts = require("TFS/Wiki/Contracts");
import TFS_VersionControl_Contracts = require("TFS/VersionControl/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods4To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected attachmentsApiVersion: string;
    protected pagesApiVersion: string;
    protected wikisApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Gets wiki repositories in a project or collection.
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Wiki[]>
     */
    getWikis(project?: string): IPromise<Contracts.Wiki[]>;
    /**
     * [Preview API] Creates a backing git repository and does the intialization of the wiki for the given project.
     *
     * @param {Contracts.WikiCreateParameters} wikiCreateParams - Object containing name of the wiki to be created and the ID of the project in which the wiki is to be created. The provided name will also be used in the name of the backing git repository. If this is empty, the name will be auto generated.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Wiki>
     */
    createWiki(wikiCreateParams: Contracts.WikiCreateParameters, project?: string): IPromise<Contracts.Wiki>;
    /**
     * [Preview API] Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     *
     * @param {string} project - Project ID or project name
     * @param {string} wikiId - Wiki ID.
     * @param {string} path - Wiki page path.
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel - Recursion level for subpages retrieval. Defaults to `None` (Optional).
     * @param {TFS_VersionControl_Contracts.GitVersionDescriptor} versionDescriptor - Version descriptor for the page. Defaults to the default branch (Optional).
     * @param {boolean} includeContent - True to include the content of the page in the response for Json content type. Defaults to false (Optional)
     * @return IPromise<ArrayBuffer>
     */
    getPageZip(project: string, wikiId: string, path?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.GitVersionDescriptor, includeContent?: boolean): IPromise<ArrayBuffer>;
    /**
     * [Preview API] Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     *
     * @param {string} project - Project ID or project name
     * @param {string} wikiId - Wiki ID.
     * @param {string} path - Wiki page path.
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel - Recursion level for subpages retrieval. Defaults to `None` (Optional).
     * @param {TFS_VersionControl_Contracts.GitVersionDescriptor} versionDescriptor - Version descriptor for the page. Defaults to the default branch (Optional).
     * @param {boolean} includeContent - True to include the content of the page in the response for Json content type. Defaults to false (Optional)
     * @return IPromise<string>
     */
    getPageText(project: string, wikiId: string, path?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.GitVersionDescriptor, includeContent?: boolean): IPromise<string>;
    /**
     * [Preview API] Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     *
     * @param {string} project - Project ID or project name
     * @param {string} wikiId - Wiki ID.
     * @param {string} path - Wiki page path.
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel - Recursion level for subpages retrieval. Defaults to `None` (Optional).
     * @param {TFS_VersionControl_Contracts.GitVersionDescriptor} versionDescriptor - Version descriptor for the page. Defaults to the default branch (Optional).
     * @param {boolean} includeContent - True to include the content of the page in the response for Json content type. Defaults to false (Optional)
     * @return IPromise<Contracts.WikiPageResponse>
     */
    getPage(project: string, wikiId: string, path?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.GitVersionDescriptor, includeContent?: boolean): IPromise<Contracts.WikiPageResponse>;
    /**
     * [Preview API] Deletes a wiki page.
     *
     * @param {string} project - Project ID or project name
     * @param {string} wikiId - Wiki ID.
     * @param {string} path - Wiki page path.
     * @param {string} comment - Comment to be associated with this page delete.
     * @return IPromise<Contracts.WikiPageResponse>
     */
    deletePage(project: string, wikiId: string, path: string, comment?: string): IPromise<Contracts.WikiPageResponse>;
    /**
     * [Preview API] Creates or edits a wiki page.
     *
     * @param {Contracts.WikiPageCreateOrUpdateParameters} parameters - Wiki create or update operation parameters.
     * @param {string} project - Project ID or project name
     * @param {string} wikiId - Wiki ID.
     * @param {string} path - Wiki page path.
     * @param {String} Version - Version of the page on which the change is to be made. Mandatory for `Edit` scenario. To be populated in the If-Match header of the request.
     * @param {string} comment - Comment to be associated with the page operation.
     * @return IPromise<Contracts.WikiPageResponse>
     */
    createOrUpdatePage(parameters: Contracts.WikiPageCreateOrUpdateParameters, project: string, wikiId: string, path: string, Version: String, comment?: string): IPromise<Contracts.WikiPageResponse>;
    /**
     * [Preview API] Creates an attachment in the wiki.
     *
     * @param {any} content - Content to upload
     * @param {string} project - Project ID or project name
     * @param {string} wikiId - Wiki ID.
     * @param {string} name - Wiki attachment name.
     * @return IPromise<Contracts.WikiAttachmentResponse>
     */
    createAttachment(content: any, project: string, wikiId: string, name: string): IPromise<Contracts.WikiAttachmentResponse>;
}
/**
 * @exemptedapi
 */
export class WikiHttpClient4_1 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Creates a page move operation that updates the path and order of the page as provided in the parameters.
     *
     * @param {Contracts.WikiPageMoveParameters} pageMoveParameters - Page more operation parameters.
     * @param {string} project - Project ID or project name
     * @param {string} wikiId - Wiki ID.
     * @param {string} comment - Comment that is to be associated with this page move.
     * @return IPromise<Contracts.WikiPageMoveResponse>
     */
    createPageMove(pageMoveParameters: Contracts.WikiPageMoveParameters, project: string, wikiId: string, comment?: string): IPromise<Contracts.WikiPageMoveResponse>;
}
/**
 * @exemptedapi
 */
export class WikiHttpClient4 extends CommonMethods4To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WikiHttpClient extends WikiHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WikiHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WikiHttpClient4;
}
declare module "TFS/WorkItemTracking/BatchRestClient" {
import VSS_WebApi = require("VSS/WebApi/RestClient");
import VSS_WebApi_Contracts = require("VSS/WebApi/Contracts");
/**
* Interface for the Json request message
*/
export interface JsonHttpRequest {
    /**
    * HTTP verb.
    */
    method: string;
    /**
    * Uri of the resource to be invoked.
    */
    uri: string;
    /**
    * Dictionary of the headers to passed along.
    */
    headers: IDictionaryStringTo<string>;
    /**
    * Request body.
    */
    body?: any;
}
/**
* Interface for the Json response message
*/
export interface JsonHttpResponse {
    /**
    * Response code.
    */
    code: number;
    /**
    * Dictionary of the headers to passed along.
    */
    headers?: IDictionaryStringTo<string>;
    /**
    * Request body.
    */
    body?: any;
}
/**
* Interface for the Json response message
*/
export interface JsonHttpBatchResponse {
    /**
    * The number of response objects batched together.
    */
    count: number;
    /**
    * Collection of the responses.
    */
    value: JsonHttpResponse[];
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpBatchClient extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    private _batchApiVersion;
    constructor(rootRequestPath: string);
    /**
     * [Preview API]
     *
     * @param documents
     * @param project
     * @param type
     * @return IPromise<JsonHttpBatchResponse>
     */
    createWorkItemsBatch(documents: VSS_WebApi_Contracts.JsonPatchDocument[], project: string, type: string): IPromise<JsonHttpBatchResponse>;
    /**
     * [Preview API]
     *
     * @param updateDocuments
     * @return IPromise<JsonHttpBatchResponse>
     */
    updateWorkItemsBatch(updateDocuments: [number, VSS_WebApi_Contracts.JsonPatchDocument][]): IPromise<JsonHttpBatchResponse>;
    /**
     * [Preview API]
     *
     * @param {number[]} ids
     * @return IPromise<JsonHttpBatchResponse>
     */
    destroyWorkItemsBatch(ids: number[]): IPromise<JsonHttpBatchResponse>;
    /**
     * [Preview API]
     *
     * @param {number[]} ids
     * @return IPromise<JsonHttpBatchResponse>
     */
    restoreWorkItemsBatch(ids: number[]): IPromise<JsonHttpBatchResponse>;
    /**
     * [Preview API]
     *
     * @param {number[]} ids
     * @return IPromise<JsonHttpBatchResponse>
     */
    deleteWorkItemsBatch(ids: number[]): IPromise<JsonHttpBatchResponse>;
    /**
     * [Preview API]
     *
     * @param {string[]} ids
     * @return IPromise<JsonHttpBatchResponse>
     */
    getQueriesBatch(ids: string[]): IPromise<JsonHttpBatchResponse>;
    private _createBatchRequests(ids, httpMethod, resource, body?);
    private _createBatchRequest(id, httpMethod, resource, body?);
    private _beginBatchRequest(requests);
    private _beginQueryBatchRequest(requests);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingHttpBatchClient
 */
export function getClient(): WorkItemTrackingHttpBatchClient;
}
declare module "TFS/WorkItemTracking/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AccountMyWorkResult {
    /**
     * True, when length of WorkItemDetails is same as the limit
     */
    querySizeLimitExceeded: boolean;
    /**
     * WorkItem Details
     */
    workItemDetails: AccountWorkWorkItemModel[];
}
/**
 * Represents Work Item Recent Activity
 */
export interface AccountRecentActivityWorkItemModel {
    /**
     * Date of the last Activity by the user
     */
    activityDate: Date;
    /**
     * Type of the activity
     */
    activityType: WorkItemRecentActivityType;
    /**
     * Assigned To
     */
    assignedTo: string;
    /**
     * Last changed date of the work item
     */
    changedDate: Date;
    /**
     * Work Item Id
     */
    id: number;
    /**
     * TeamFoundationId of the user this activity belongs to
     */
    identityId: string;
    /**
     * State of the work item
     */
    state: string;
    /**
     * Team project the work item belongs to
     */
    teamProject: string;
    /**
     * Title of the work item
     */
    title: string;
    /**
     * Type of Work Item
     */
    workItemType: string;
}
/**
 * Represents Recent Mention Work Item
 */
export interface AccountRecentMentionWorkItemModel {
    /**
     * Assigned To
     */
    assignedTo: string;
    /**
     * Work Item Id
     */
    id: number;
    /**
     * Lastest date that the user were mentioned
     */
    mentionedDateField: Date;
    /**
     * State of the work item
     */
    state: string;
    /**
     * Team project the work item belongs to
     */
    teamProject: string;
    /**
     * Title of the work item
     */
    title: string;
    /**
     * Type of Work Item
     */
    workItemType: string;
}
export interface AccountWorkWorkItemModel {
    assignedTo: string;
    changedDate: Date;
    id: number;
    state: string;
    teamProject: string;
    title: string;
    workItemType: string;
}
/**
 * Contains criteria for querying work items based on artifact URI.
 */
export interface ArtifactUriQuery {
    /**
     * List of artifact URIs to use for querying work items.
     */
    artifactUris: string[];
}
/**
 * Defines result of artifact URI query on work items. Contains mapping of work item IDs to artifact URI.
 */
export interface ArtifactUriQueryResult {
    /**
     * A Dictionary that maps a list of work item references to the given list of artifact URI.
     */
    artifactUrisQueryResult: {
        [key: string]: WorkItemReference[];
    };
}
export interface AttachmentReference {
    id: string;
    url: string;
}
export enum CommentSortOrder {
    Asc = 1,
    Desc = 2,
}
/**
 * Describes a list of dependent fields for a rule.
 */
export interface FieldDependentRule extends WorkItemTrackingResource {
    /**
     * The dependent fields.
     */
    dependentFields: WorkItemFieldReference[];
}
/**
 * Describes a set fields for rule evaluation.
 */
export interface FieldsToEvaluate {
    /**
     * List of fields to evaluate.
     */
    fields: string[];
    /**
     * Updated field values to evaluate.
     */
    fieldUpdates: {
        [key: string]: any;
    };
    /**
     * Initial field values.
     */
    fieldValues: {
        [key: string]: any;
    };
    /**
     * URL of the work item type for which the rules need to be executed.
     */
    rulesFrom: string[];
}
/**
 * Enum for field types.
 */
export enum FieldType {
    /**
     * String field type.
     */
    String = 0,
    /**
     * Integer field type.
     */
    Integer = 1,
    /**
     * Datetime field type.
     */
    DateTime = 2,
    /**
     * Plain text field type.
     */
    PlainText = 3,
    /**
     * HTML (Multiline) field type.
     */
    Html = 4,
    /**
     * Treepath field type.
     */
    TreePath = 5,
    /**
     * History field type.
     */
    History = 6,
    /**
     * Double field type.
     */
    Double = 7,
    /**
     * Guid field type.
     */
    Guid = 8,
    /**
     * Boolean field type.
     */
    Boolean = 9,
    /**
     * Identity field type.
     */
    Identity = 10,
    /**
     * String picklist field type.
     */
    PicklistString = 11,
    /**
     * Integer picklist field type.
     */
    PicklistInteger = 12,
    /**
     * Double picklist field type.
     */
    PicklistDouble = 13,
}
/**
 * Enum for field usages.
 */
export enum FieldUsage {
    /**
     * Empty usage.
     */
    None = 0,
    /**
     * Work item field usage.
     */
    WorkItem = 1,
    /**
     * Work item link field usage.
     */
    WorkItemLink = 2,
    /**
     * Treenode field usage.
     */
    Tree = 3,
    /**
     * Work Item Type Extension usage.
     */
    WorkItemTypeExtension = 4,
}
/**
 * Flag to expand types of fields.
 */
export enum GetFieldsExpand {
    /**
     * Default behavior.
     */
    None = 0,
    /**
     * Adds extension fields to the response.
     */
    ExtensionFields = 1,
}
/**
 * Describes a reference to an identity.
 */
export interface IdentityReference extends VSS_Common_Contracts.IdentityRef {
    id: string;
    /**
     * Legacy back-compat property. This has been the WIT specific value from Constants. Will be hidden (but exists) on the client unless they are targeting the newest version
     */
    name: string;
}
/**
 * Link description.
 */
export interface Link {
    /**
     * Collection of link attributes.
     */
    attributes: {
        [key: string]: any;
    };
    /**
     * Relation type.
     */
    rel: string;
    /**
     * Link url.
     */
    url: string;
}
export enum LinkChangeType {
    Create = 0,
    Remove = 1,
}
/**
 * The link query mode which determines the behavior of the query.
 */
export enum LinkQueryMode {
    WorkItems = 0,
    /**
     * Returns work items where the source, target, and link criteria are all satisfied.
     */
    LinksOneHopMustContain = 1,
    /**
     * Returns work items that satisfy the source and link criteria, even if no linked work item satisfies the target criteria.
     */
    LinksOneHopMayContain = 2,
    /**
     * Returns work items that satisfy the source, only if no linked work item satisfies the link and target criteria.
     */
    LinksOneHopDoesNotContain = 3,
    LinksRecursiveMustContain = 4,
    /**
     * Returns work items a hierarchy of work items that by default satisfy the source
     */
    LinksRecursiveMayContain = 5,
    LinksRecursiveDoesNotContain = 6,
}
export enum LogicalOperation {
    NONE = 0,
    AND = 1,
    OR = 2,
}
/**
 * Project work item type state colors
 */
export interface ProjectWorkItemStateColors {
    /**
     * Project name
     */
    projectName: string;
    /**
     * State colors for all work item type in a project
     */
    workItemTypeStateColors: WorkItemTypeStateColors[];
}
/**
 * Enumerates the possible provisioning actions that can be triggered on process template update.
 */
export enum ProvisioningActionType {
    Import = 0,
    Validate = 1,
}
/**
 * Result of an update work item type XML update operation.
 */
export interface ProvisioningResult {
    /**
     * Details about of the provisioning import events.
     */
    provisioningImportEvents: string[];
}
/**
 * Determines which set of additional query properties to display
 */
export enum QueryExpand {
    /**
     * Expands Columns, Links and ChangeInfo
     */
    None = 0,
    /**
     * Expands Columns, Links,  ChangeInfo and WIQL text
     */
    Wiql = 1,
    /**
     * Expands Columns, Links, ChangeInfo, WIQL text and clauses
     */
    Clauses = 2,
    /**
     * Expands all properties
     */
    All = 3,
    /**
     * Displays minimal properties and the WIQL text
     */
    Minimal = 4,
}
/**
 * Represents an item in the work item query hierarchy. This can be either a query or a folder.
 */
export interface QueryHierarchyItem extends WorkItemTrackingResource {
    /**
     * The child query items inside a query folder.
     */
    children: QueryHierarchyItem[];
    /**
     * The clauses for a flat query.
     */
    clauses: WorkItemQueryClause;
    /**
     * The columns of the query.
     */
    columns: WorkItemFieldReference[];
    /**
     * The identity who created the query item.
     */
    createdBy: IdentityReference;
    /**
     * When the query item was created.
     */
    createdDate: Date;
    /**
     * The link query mode.
     */
    filterOptions: LinkQueryMode;
    /**
     * If this is a query folder, indicates if it contains any children.
     */
    hasChildren: boolean;
    /**
     * The id of the query item.
     */
    id: string;
    /**
     * Indicates if this query item is deleted.
     */
    isDeleted: boolean;
    /**
     * Indicates if this is a query folder or a query.
     */
    isFolder: boolean;
    /**
     * Indicates if the WIQL of this query is invalid. This could be due to invalid syntax or a no longer valid area/iteration path.
     */
    isInvalidSyntax: boolean;
    /**
     * Indicates if this query item is public or private.
     */
    isPublic: boolean;
    /**
     * The identity who last ran the query.
     */
    lastExecutedBy: IdentityReference;
    /**
     * When the query was last run.
     */
    lastExecutedDate: Date;
    /**
     * The identity who last modified the query item.
     */
    lastModifiedBy: IdentityReference;
    /**
     * When the query item was last modified.
     */
    lastModifiedDate: Date;
    /**
     * The link query clause.
     */
    linkClauses: WorkItemQueryClause;
    /**
     * The name of the query item.
     */
    name: string;
    /**
     * The path of the query item.
     */
    path: string;
    /**
     * The recursion option for use in a tree query.
     */
    queryRecursionOption: QueryRecursionOption;
    /**
     * The type of query.
     */
    queryType: QueryType;
    /**
     * The sort columns of the query.
     */
    sortColumns: WorkItemQuerySortColumn[];
    /**
     * The source clauses in a tree or one-hop link query.
     */
    sourceClauses: WorkItemQueryClause;
    /**
     * The target clauses in a tree or one-hop link query.
     */
    targetClauses: WorkItemQueryClause;
    /**
     * The WIQL text of the query
     */
    wiql: string;
}
export interface QueryHierarchyItemsResult {
    /**
     * The count of items.
     */
    count: number;
    /**
     * Indicates if the max return limit was hit but there are still more items
     */
    hasMore: boolean;
    /**
     * The list of items
     */
    value: QueryHierarchyItem[];
}
export enum QueryOption {
    Doing = 1,
    Done = 2,
    Followed = 3,
}
/**
 * Determines whether a tree query matches parents or children first.
 */
export enum QueryRecursionOption {
    /**
     * Returns work items that satisfy the source, even if no linked work item satisfies the target and link criteria.
     */
    ParentFirst = 0,
    /**
     * Returns work items that satisfy the target criteria, even if no work item satisfies the source and link criteria.
     */
    ChildFirst = 1,
}
/**
 * The query result type
 */
export enum QueryResultType {
    /**
     * A list of work items (for flat queries).
     */
    WorkItem = 1,
    /**
     * A list of work item links (for OneHop and Tree queries).
     */
    WorkItemLink = 2,
}
/**
 * The type of query.
 */
export enum QueryType {
    /**
     * Gets a flat list of work items.
     */
    Flat = 1,
    /**
     * Gets a tree of work items showing their link hierarchy.
     */
    Tree = 2,
    /**
     * Gets a list of work items and their direct links.
     */
    OneHop = 3,
}
export enum ReportingRevisionsExpand {
    None = 0,
    Fields = 1,
}
export interface ReportingWorkItemLink {
    changedBy: VSS_Common_Contracts.IdentityRef;
    changedDate: Date;
    changedOperation: LinkChangeType;
    comment: string;
    isActive: boolean;
    linkType: string;
    rel: string;
    sourceId: number;
    targetId: number;
}
export interface ReportingWorkItemLinksBatch extends StreamedBatch<ReportingWorkItemLink> {
}
export interface ReportingWorkItemRevisionsBatch extends StreamedBatch<WorkItem> {
}
export interface ReportingWorkItemRevisionsFilter {
    /**
     * A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     */
    fields: string[];
    /**
     * Include deleted work item in the result.
     */
    includeDeleted: boolean;
    /**
     * Return an identity reference instead of a string value for identity fields.
     */
    includeIdentityRef: boolean;
    /**
     * Include only the latest version of a work item, skipping over all previous revisions of the work item.
     */
    includeLatestOnly: boolean;
    /**
     * Include tag reference instead of string value for System.Tags field
     */
    includeTagRef: boolean;
    /**
     * A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     */
    types: string[];
}
export interface StreamedBatch<T> {
    continuationToken: string;
    isLastBatch: boolean;
    nextLink: string;
    values: T[];
}
/**
 * Enumerates types of supported xml templates used for customization.
 */
export enum TemplateType {
    WorkItemType = 0,
    GlobalWorkflow = 1,
}
/**
 * Types of tree node structures.
 */
export enum TreeNodeStructureType {
    /**
     * Area type.
     */
    Area = 0,
    /**
     * Iteration type.
     */
    Iteration = 1,
}
/**
 * Types of tree structures groups.
 */
export enum TreeStructureGroup {
    Areas = 0,
    Iterations = 1,
}
/**
 * A WIQL query
 */
export interface Wiql {
    /**
     * The text of the WIQL query
     */
    query: string;
}
/**
 * A work artifact link describes an outbound artifact link type.
 */
export interface WorkArtifactLink {
    /**
     * Target artifact type.
     */
    artifactType: string;
    /**
     * Outbound link type.
     */
    linkType: string;
    /**
     * Target tool type.
     */
    toolType: string;
}
/**
 * Describes a work item.
 */
export interface WorkItem extends WorkItemTrackingResource {
    /**
     * Map of field and values for the work item.
     */
    fields: {
        [key: string]: any;
    };
    /**
     * The work item ID.
     */
    id: number;
    /**
     * Relations of the work item.
     */
    relations: WorkItemRelation[];
    /**
     * Revision number of the work item.
     */
    rev: number;
}
/**
 * Defines a classification node for work item tracking.
 */
export interface WorkItemClassificationNode extends WorkItemTrackingResource {
    /**
     * Dictionary that has node attributes like start/finish date for iteration nodes.
     */
    attributes: {
        [key: string]: any;
    };
    /**
     * List of child nodes fetched.
     */
    children: WorkItemClassificationNode[];
    /**
     * Flag that indicates if the classification node has any child nodes.
     */
    hasChildren: boolean;
    /**
     * Integer ID of the classification node.
     */
    id: number;
    /**
     * GUID ID of the classification node.
     */
    identifier: string;
    /**
     * Name of the classification node.
     */
    name: string;
    /**
     * Node structure type.
     */
    structureType: TreeNodeStructureType;
}
export interface WorkItemComment extends WorkItemTrackingResource {
    revisedBy: IdentityReference;
    revisedDate: Date;
    revision: number;
    text: string;
}
/**
 * Comment results container.
 */
export interface WorkItemComments {
    /**
     * Comments collection.
     */
    comments: WorkItemComment[];
    /**
     * The count of comments.
     */
    count: number;
    /**
     * Count of comments from the revision.
     */
    fromRevisionCount: number;
    /**
     * Total count of comments.
     */
    totalCount: number;
}
/**
 * Full deleted work item object. Includes the work item itself.
 */
export interface WorkItemDelete extends WorkItemDeleteReference {
    /**
     * The work item object that was deleted.
     */
    resource: WorkItem;
}
/**
 * Reference to a deleted work item.
 */
export interface WorkItemDeleteReference {
    /**
     * The HTTP status code for work item operation in a batch request.
     */
    code: number;
    /**
     * The user who deleted the work item type.
     */
    deletedBy: string;
    /**
     * The work item deletion date.
     */
    deletedDate: string;
    /**
     * Work item ID.
     */
    id: number;
    /**
     * The exception message for work item operation in a batch request.
     */
    message: string;
    /**
     * Name or title of the work item.
     */
    name: string;
    /**
     * Parent project of the deleted work item.
     */
    project: string;
    /**
     * Type of work item.
     */
    type: string;
    /**
     * REST API URL of the resource
     */
    url: string;
}
/**
 * Describes an update request for a deleted work item.
 */
export interface WorkItemDeleteUpdate {
    /**
     * Sets a value indicating whether this work item is deleted.
     */
    isDeleted: boolean;
}
/**
 * Enum to control error policy in a bulk get work items request.
 */
export enum WorkItemErrorPolicy {
    Fail = 1,
    Omit = 2,
}
/**
 * Flag to control payload properties from get work item command.
 */
export enum WorkItemExpand {
    None = 0,
    Relations = 1,
    Fields = 2,
    Links = 3,
    All = 4,
}
/**
 * Describes a field on a work item and it's properties specific to that work item type.
 */
export interface WorkItemField extends WorkItemTrackingResource {
    /**
     * The description of the field.
     */
    description: string;
    /**
     * Indicates whether this field is an identity field.
     */
    isIdentity: boolean;
    /**
     * Indicates whether this instance is picklist.
     */
    isPicklist: boolean;
    /**
     * Indicates whether this instance is a suggested picklist .
     */
    isPicklistSuggested: boolean;
    /**
     * The name of the field.
     */
    name: string;
    /**
     * Indicates whether the field is [read only].
     */
    readOnly: boolean;
    /**
     * The reference name of the field.
     */
    referenceName: string;
    /**
     * The supported operations on this field.
     */
    supportedOperations: WorkItemFieldOperation[];
    /**
     * The type of the field.
     */
    type: FieldType;
    /**
     * The usage of the field.
     */
    usage: FieldUsage;
}
/**
 * Describes a work item field operation.
 */
export interface WorkItemFieldOperation {
    /**
     * Name of the operation.
     */
    name: string;
    /**
     * Reference name of the operation.
     */
    referenceName: string;
}
/**
 * Reference to a field in a work item
 */
export interface WorkItemFieldReference {
    /**
     * The name of the field.
     */
    name: string;
    /**
     * The reference name of the field.
     */
    referenceName: string;
    /**
     * The REST URL of the resource.
     */
    url: string;
}
/**
 * Describes an update to a work item field.
 */
export interface WorkItemFieldUpdate {
    /**
     * The new value of the field.
     */
    newValue: any;
    /**
     * The old value of the field.
     */
    oldValue: any;
}
export interface WorkItemHistory extends WorkItemTrackingResource {
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
    value: string;
}
/**
 * Reference to a work item icon.
 */
export interface WorkItemIcon {
    /**
     * The identifier of the icon.
     */
    id: string;
    /**
     * The REST URL of the resource.
     */
    url: string;
}
/**
 * A link between two work items.
 */
export interface WorkItemLink {
    /**
     * The type of link.
     */
    rel: string;
    /**
     * The source work item.
     */
    source: WorkItemReference;
    /**
     * The target work item.
     */
    target: WorkItemReference;
}
/**
 * Describes the next state for a work item.
 */
export interface WorkItemNextStateOnTransition {
    /**
     * Error code if there is no next state transition possible.
     */
    errorCode: string;
    /**
     * Work item ID.
     */
    id: number;
    /**
     * Error message if there is no next state transition possible.
     */
    message: string;
    /**
     * Name of the next state on transition.
     */
    stateOnTransition: string;
}
/**
 * Represents a clause in a work item query. This shows the structure of a work item query.
 */
export interface WorkItemQueryClause {
    /**
     * Child clauses if the current clause is a logical operator
     */
    clauses: WorkItemQueryClause[];
    /**
     * Field associated with condition
     */
    field: WorkItemFieldReference;
    /**
     * Right side of the condition when a field to field comparison
     */
    fieldValue: WorkItemFieldReference;
    /**
     * Determines if this is a field to field comparison
     */
    isFieldValue: boolean;
    /**
     * Logical operator separating the condition clause
     */
    logicalOperator: LogicalOperation;
    /**
     * The field operator
     */
    operator: WorkItemFieldOperation;
    /**
     * Right side of the condition when a field to value comparison
     */
    value: string;
}
/**
 * The result of a work item query.
 */
export interface WorkItemQueryResult {
    /**
     * The date the query was run in the context of.
     */
    asOf: Date;
    /**
     * The columns of the query.
     */
    columns: WorkItemFieldReference[];
    /**
     * The result type
     */
    queryResultType: QueryResultType;
    /**
     * The type of the query
     */
    queryType: QueryType;
    /**
     * The sort columns of the query.
     */
    sortColumns: WorkItemQuerySortColumn[];
    /**
     * The work item links returned by the query.
     */
    workItemRelations: WorkItemLink[];
    /**
     * The work items returned by the query.
     */
    workItems: WorkItemReference[];
}
/**
 * A sort column.
 */
export interface WorkItemQuerySortColumn {
    /**
     * The direction to sort by.
     */
    descending: boolean;
    /**
     * A work item field.
     */
    field: WorkItemFieldReference;
}
/**
 * Type of the activity
 */
export enum WorkItemRecentActivityType {
    Visited = 0,
    Edited = 1,
    Deleted = 2,
    Restored = 3,
}
/**
 * Contains reference to a work item.
 */
export interface WorkItemReference {
    /**
     * Work item ID.
     */
    id: number;
    /**
     * REST API URL of the resource
     */
    url: string;
}
export interface WorkItemRelation extends Link {
}
/**
 * Represents the work item type relatiion type.
 */
export interface WorkItemRelationType extends WorkItemTrackingReference {
    /**
     * The collection of relation type attributes.
     */
    attributes: {
        [key: string]: any;
    };
}
/**
 * Descrives updates to a work item's relations.
 */
export interface WorkItemRelationUpdates {
    /**
     * List of newly added relations.
     */
    added: WorkItemRelation[];
    /**
     * List of removed relations.
     */
    removed: WorkItemRelation[];
    /**
     * List of updated relations.
     */
    updated: WorkItemRelation[];
}
/**
 * Work item type state name, color and state category
 */
export interface WorkItemStateColor {
    /**
     * Category of state
     */
    category: string;
    /**
     * Color value
     */
    color: string;
    /**
     * Work item type state name
     */
    name: string;
}
/**
 * Describes a state transition in a work item.
 */
export interface WorkItemStateTransition {
    /**
     * Gets a list of actions needed to transition to that state.
     */
    actions: string[];
    /**
     * Name of the next state.
     */
    to: string;
}
/**
 * Describes a work item template.
 */
export interface WorkItemTemplate extends WorkItemTemplateReference {
    /**
     * Mapping of field and its templated value.
     */
    fields: {
        [key: string]: string;
    };
}
/**
 * Describes a shallow reference to a work item template.
 */
export interface WorkItemTemplateReference extends WorkItemTrackingResource {
    /**
     * The description of the work item template.
     */
    description: string;
    /**
     * The identifier of the work item template.
     */
    id: string;
    /**
     * The name of the work item template.
     */
    name: string;
    /**
     * The name of the work item type.
     */
    workItemTypeName: string;
}
export interface WorkItemTrackingReference extends WorkItemTrackingResource {
    /**
     * The name.
     */
    name: string;
    /**
     * The reference name.
     */
    referenceName: string;
}
/**
 * Base class for WIT REST resources.
 */
export interface WorkItemTrackingResource extends WorkItemTrackingResourceReference {
    /**
     * Link references to related REST resources.
     */
    _links: any;
}
/**
 * Base class for work item tracking resource references.
 */
export interface WorkItemTrackingResourceReference {
    url: string;
}
/**
 * Describes a work item type.
 */
export interface WorkItemType extends WorkItemTrackingResource {
    /**
     * The color.
     */
    color: string;
    /**
     * The description of the work item type.
     */
    description: string;
    /**
     * The fields that exist on the work item type.
     */
    fieldInstances: WorkItemTypeFieldInstance[];
    /**
     * The fields that exist on the work item type.
     */
    fields: WorkItemTypeFieldInstance[];
    /**
     * The icon of the work item type.
     */
    icon: WorkItemIcon;
    /**
     * True if work item type is disabled
     */
    isDisabled: boolean;
    /**
     * Gets the name of the work item type.
     */
    name: string;
    /**
     * The reference name of the work item type.
     */
    referenceName: string;
    /**
     * Gets the various state transition mappings in the work item type.
     */
    transitions: {
        [key: string]: WorkItemStateTransition[];
    };
    /**
     * The XML form.
     */
    xmlForm: string;
}
/**
 * Describes a work item type category.
 */
export interface WorkItemTypeCategory extends WorkItemTrackingResource {
    /**
     * Gets or sets the default type of the work item.
     */
    defaultWorkItemType: WorkItemTypeReference;
    /**
     * The name of the category.
     */
    name: string;
    /**
     * The reference name of the category.
     */
    referenceName: string;
    /**
     * The work item types that belond to the category.
     */
    workItemTypes: WorkItemTypeReference[];
}
/**
 * Describes a work item type's colors.
 */
export interface WorkItemTypeColor {
    /**
     * Gets or sets the color of the primary.
     */
    primaryColor: string;
    /**
     * Gets or sets the color of the secondary.
     */
    secondaryColor: string;
    /**
     * The name of the work item type.
     */
    workItemTypeName: string;
}
/**
 * Describes work item type nam, its icon and color.
 */
export interface WorkItemTypeColorAndIcon {
    /**
     * The color of the work item type in hex format.
     */
    color: string;
    /**
     * Tthe work item type icon.
     */
    icon: string;
    /**
     * The name of the work item type.
     */
    workItemTypeName: string;
}
export interface WorkItemTypeFieldInstance extends WorkItemFieldReference {
    /**
     * Indicates whether field value is always required.
     */
    alwaysRequired: boolean;
    /**
     * Gets the help text for the field.
     */
    helpText: string;
}
/**
 * Reference to a work item type.
 */
export interface WorkItemTypeReference extends WorkItemTrackingResourceReference {
    /**
     * Name of the work item type.
     */
    name: string;
}
/**
 * State colors for a work item type
 */
export interface WorkItemTypeStateColors {
    /**
     * Work item type state colors
     */
    stateColors: WorkItemStateColor[];
    /**
     * Work item type name
     */
    workItemTypeName: string;
}
/**
 * Describes a work item type template.
 */
export interface WorkItemTypeTemplate {
    /**
     * XML template in string format.
     */
    template: string;
}
/**
 * Describes a update work item type template request body.
 */
export interface WorkItemTypeTemplateUpdateModel {
    /**
     * Describes the type of the action for the update request.
     */
    actionType: ProvisioningActionType;
    /**
     * Methodology to which the template belongs, eg. Agile, Scrum, CMMI.
     */
    methodology: string;
    /**
     * String representation of the work item type template.
     */
    template: string;
    /**
     * The type of the template described in the request body.
     */
    templateType: TemplateType;
}
/**
 * Describes an update to a work item.
 */
export interface WorkItemUpdate extends WorkItemTrackingResource {
    /**
     * List of updates to fields.
     */
    fields: {
        [key: string]: WorkItemFieldUpdate;
    };
    /**
     * ID of update.
     */
    id: number;
    /**
     * List of updates to relations.
     */
    relations: WorkItemRelationUpdates;
    /**
     * The revision number of work item update.
     */
    rev: number;
    /**
     * Identity for the work item update.
     */
    revisedBy: IdentityReference;
    /**
     * The work item updates revision date.
     */
    revisedDate: Date;
    /**
     * The work item ID.
     */
    workItemId: number;
}
export var TypeInfo: {
    AccountMyWorkResult: any;
    AccountRecentActivityWorkItemModel: any;
    AccountRecentMentionWorkItemModel: any;
    AccountWorkWorkItemModel: any;
    CommentSortOrder: {
        enumValues: {
            "asc": number;
            "desc": number;
        };
    };
    FieldType: {
        enumValues: {
            "string": number;
            "integer": number;
            "dateTime": number;
            "plainText": number;
            "html": number;
            "treePath": number;
            "history": number;
            "double": number;
            "guid": number;
            "boolean": number;
            "identity": number;
            "picklistString": number;
            "picklistInteger": number;
            "picklistDouble": number;
        };
    };
    FieldUsage: {
        enumValues: {
            "none": number;
            "workItem": number;
            "workItemLink": number;
            "tree": number;
            "workItemTypeExtension": number;
        };
    };
    GetFieldsExpand: {
        enumValues: {
            "none": number;
            "extensionFields": number;
        };
    };
    LinkChangeType: {
        enumValues: {
            "create": number;
            "remove": number;
        };
    };
    LinkQueryMode: {
        enumValues: {
            "workItems": number;
            "linksOneHopMustContain": number;
            "linksOneHopMayContain": number;
            "linksOneHopDoesNotContain": number;
            "linksRecursiveMustContain": number;
            "linksRecursiveMayContain": number;
            "linksRecursiveDoesNotContain": number;
        };
    };
    LogicalOperation: {
        enumValues: {
            "nONE": number;
            "aND": number;
            "oR": number;
        };
    };
    ProvisioningActionType: {
        enumValues: {
            "import": number;
            "validate": number;
        };
    };
    QueryExpand: {
        enumValues: {
            "none": number;
            "wiql": number;
            "clauses": number;
            "all": number;
            "minimal": number;
        };
    };
    QueryHierarchyItem: any;
    QueryHierarchyItemsResult: any;
    QueryOption: {
        enumValues: {
            "doing": number;
            "done": number;
            "followed": number;
        };
    };
    QueryRecursionOption: {
        enumValues: {
            "parentFirst": number;
            "childFirst": number;
        };
    };
    QueryResultType: {
        enumValues: {
            "workItem": number;
            "workItemLink": number;
        };
    };
    QueryType: {
        enumValues: {
            "flat": number;
            "tree": number;
            "oneHop": number;
        };
    };
    ReportingRevisionsExpand: {
        enumValues: {
            "none": number;
            "fields": number;
        };
    };
    ReportingWorkItemLink: any;
    TemplateType: {
        enumValues: {
            "workItemType": number;
            "globalWorkflow": number;
        };
    };
    TreeNodeStructureType: {
        enumValues: {
            "area": number;
            "iteration": number;
        };
    };
    TreeStructureGroup: {
        enumValues: {
            "areas": number;
            "iterations": number;
        };
    };
    WorkItemClassificationNode: any;
    WorkItemComment: any;
    WorkItemComments: any;
    WorkItemErrorPolicy: {
        enumValues: {
            "fail": number;
            "omit": number;
        };
    };
    WorkItemExpand: {
        enumValues: {
            "none": number;
            "relations": number;
            "fields": number;
            "links": number;
            "all": number;
        };
    };
    WorkItemField: any;
    WorkItemHistory: any;
    WorkItemQueryClause: any;
    WorkItemQueryResult: any;
    WorkItemRecentActivityType: {
        enumValues: {
            "visited": number;
            "edited": number;
            "deleted": number;
            "restored": number;
        };
    };
    WorkItemTypeTemplateUpdateModel: any;
    WorkItemUpdate: any;
};
}
declare module "TFS/WorkItemTracking/Controls" {
/**
* Configuration options when creating the QuerySelector extension control.
*/
export interface IQuerySelectorComponentProps {
    /** ID of the WIT query */
    value: string;
    /** callback for selected item changed */
    onValueChanged(value: string): void;
}
export module QuerySelectorControl {
    var contributionId: string;
}
export interface IWorkItemsListData {
    fieldFriendlyNames: string[];
    fieldReferenceNames: string[];
    fieldValues: any[][];
    tabId: string;
}
export module WorkItemsContentControl {
    var contributionId: string;
    function create($container: JQuery, options: IWorkItemsListData): IPromise<{}>;
}
}
declare module "TFS/WorkItemTracking/ExtensionContracts" {
import { IArtifactData } from "VSS/Artifacts/Services";
/**
* Interface defining the arguments for notifications sent by the ActiveWorkItemService
*/
export interface IWorkItemChangedArgs {
    /**
    * Id of the work item.
    */
    id: number;
}
/**
* Interface defining the arguments for the 'onLoaded' notification sent by the ActiveWorkItemService
*/
export interface IWorkItemLoadedArgs extends IWorkItemChangedArgs {
    /**
    * 'true' if the work item is a 'new', unsaved work item, 'false' otherwise.
    */
    isNew: boolean;
}
/**
* Interface defining the arguments for the 'onFieldChanged' notification sent by the ActiveWorkItemService
*/
export interface IWorkItemFieldChangedArgs extends IWorkItemChangedArgs {
    /**
    * Set of fields that have been changed.  'key' is the field reference name.
    */
    changedFields: {
        [key: string]: any;
    };
}
/**
* Interface defining notifications provided by the ActiveWorkItemService
*/
export interface IWorkItemNotificationListener {
    /**
    * Called when an extension is loaded
    *
    * @param workItemLoadedArgs Information about the work item that was loaded.
    */
    onLoaded(workItemLoadedArgs: IWorkItemLoadedArgs): void;
    /**
    * Called when a field is modified
    *
    * @param fieldChangedArgs Information about the work item that was modified and the fields that were changed.
    */
    onFieldChanged(fieldChangedArgs: IWorkItemFieldChangedArgs): void;
    /**
    * Called when a work item is saved
    *
    * @param savedEventArgs Information about the work item that was saved.
    */
    onSaved(savedEventArgs: IWorkItemChangedArgs): void;
    /**
    * Called when a work item is refreshed
    *
    * @param refreshEventArgs Information about the work item that was refreshed.
    */
    onRefreshed(refreshEventArgs: IWorkItemChangedArgs): void;
    /**
    * Called when a work item is reset (undo back to unchanged state)
    *
    * @param undoEventArgs Information about the work item that was reset.
    */
    onReset(undoEventArgs: IWorkItemChangedArgs): void;
    /**
    * Called when a work item is unloaded
    *
    * @param unloadedEventArgs Information about the work item that was saved.
    */
    onUnloaded(unloadedEventArgs: IWorkItemChangedArgs): void;
}
export interface ILinkedArtifact extends IArtifactData {
    /** Reference name of link type */
    linkType: string;
    /** Human readable link display name */
    linkTypeDisplayName: string;
    /** Comment set for link */
    comment?: string;
}
/** This interface represents a related artifact */
export interface ILinkedArtifactDisplayData extends ILinkedArtifact {
    /** Title row for the artifact */
    primaryData?: ILinkedArtifactPrimaryData;
    /** Zero or more additional data */
    additionalData?: IDictionaryStringTo<ILinkedArtifactAdditionalData>;
    /** Any error associated with the artifact */
    error?: Error;
}
/** Defines the Title row for Artifact */
export interface ILinkedArtifactPrimaryData {
    /** Type icon */
    typeIcon: IArtifactIcon;
    /** Artifact display id */
    displayId?: string | ILinkedArtifactId;
    /** Artifact title */
    title: string;
    /** Artifact href */
    href: string;
}
/** Defines additional information for the artifact   */
export interface ILinkedArtifactAdditionalData {
    /** Optional icon */
    icon?: IArtifactIcon;
    /** Text for the artifact */
    styledText?: IArtifactStyledText;
    /** Tooltip */
    title?: string;
    /** Raw data (used for example for sorting). If no data is given, sort will fall back to title */
    rawData?: number | string | Date;
}
export interface ILinkedArtifactId {
    text: string;
    title: string;
}
/** Defines a descriptor of an artifact icon */
export interface IArtifactIconDescriptor {
    /** Color */
    color: string;
    /** Icon class */
    icon: string;
}
/** Defines an artifact icon */
export interface IArtifactIcon {
    /** Type of the icon  */
    type: ArtifactIconType;
    /** Descriptor based on type e.g. icon-class, color */
    descriptor: string | IArtifactIconDescriptor;
    /** Tooltip for the icon  */
    title: string;
}
export enum ArtifactIconType {
    /** Renders icon from an icon class */
    icon = 0,
    /** Renders a color bar */
    colorBar = 1,
    /** Renders a color circle */
    colorCircle = 2,
    /** Render identity icon */
    identity = 3,
}
/** Defines an artifact text element with styling*/
export interface IArtifactStyledText {
    /** Actual text to be displayed */
    text: string;
    /** css class name - e.g. color class, etc */
    className?: string;
}
/**
 * Well known columns supported by the linked artifacts control
 */
export const KnownColumns: {
    State: string;
    LastUpdate: string;
};
/**
 * Interface that extensions need to implement to contribute a LinkType.
 */
export interface IContributedArtifactLinkProvider {
    validate(artifact: ILinkedArtifact): IPromise<boolean>;
    browseLink(): IPromise<string>;
    getDisplayData(artifacts: ILinkedArtifact[]): IPromise<ILinkedArtifactDisplayData[]>;
}
}
declare module "TFS/WorkItemTracking/ProcessContracts" {
/**
 * Represent a control in the form.
 */
export interface Control {
    /**
     * Contribution for the control.
     */
    contribution: WitContribution;
    /**
     * Type of the control.
     */
    controlType: string;
    /**
     * Height of the control, for html controls.
     */
    height: number;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution or not.
     */
    isContribution: boolean;
    /**
     * Label for the field
     */
    label: string;
    /**
     * Inner text of the control.
     */
    metadata: string;
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * A value indicating if the control is readonly.
     */
    readOnly: boolean;
    /**
     * A value indicating if the control should be hidden or not.
     */
    visible: boolean;
    /**
     * Watermark text for the textbox.
     */
    watermark: string;
}
export interface CreateProcessModel {
    description: string;
    name: string;
    parentProcessTypeId: string;
    referenceName: string;
}
/**
 * Represents the extensions part of the layout
 */
export interface Extension {
    id: string;
}
export interface FieldModel {
    description: string;
    id: string;
    isIdentity: boolean;
    name: string;
    type: FieldType;
    url: string;
}
export interface FieldRuleModel {
    actions: RuleActionModel[];
    conditions: RuleConditionModel[];
    friendlyName: string;
    id: string;
    isDisabled: boolean;
    isSystem: boolean;
}
export enum FieldType {
    String = 1,
    Integer = 2,
    DateTime = 3,
    PlainText = 5,
    Html = 7,
    TreePath = 8,
    History = 9,
    Double = 10,
    Guid = 11,
    Boolean = 12,
    Identity = 13,
    PicklistInteger = 14,
    PicklistString = 15,
    PicklistDouble = 16,
}
export interface FormLayout {
    /**
     * Gets and sets extensions list
     */
    extensions: Extension[];
    /**
     * Top level tabs of the layout.
     */
    pages: Page[];
    /**
     * Headers controls of the layout.
     */
    systemControls: Control[];
}
export enum GetBehaviorsExpand {
    None = 0,
    Fields = 1,
}
export enum GetProcessExpandLevel {
    None = 0,
    Projects = 1,
}
export enum GetWorkItemTypeExpand {
    None = 0,
    States = 1,
    Behaviors = 2,
    Layout = 4,
}
/**
 * Represent a group in the form that holds controls in it.
 */
export interface Group {
    /**
     * Contribution for the group.
     */
    contribution: WitContribution;
    /**
     * Controls to be put in the group.
     */
    controls: Control[];
    /**
     * The height for the contribution.
     */
    height: number;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution: boolean;
    /**
     * Label for the group.
     */
    label: string;
    /**
     * Order in which the group should appear in the section.
     */
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * A value indicating if the group should be hidden or not.
     */
    visible: boolean;
}
export interface Page {
    /**
     * Contribution for the page.
     */
    contribution: WitContribution;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution: boolean;
    /**
     * The label for the page.
     */
    label: string;
    /**
     * A value indicating whether any user operations are permitted on this page and the contents of this page
     */
    locked: boolean;
    /**
     * Order in which the page should appear in the layout.
     */
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * The icon for the page.
     */
    pageType: PageType;
    /**
     * The sections of the page.
     */
    sections: Section[];
    /**
     * A value indicating if the page should be hidden or not.
     */
    visible: boolean;
}
export enum PageType {
    Custom = 1,
    History = 2,
    Links = 3,
    Attachments = 4,
}
export enum ProcessClass {
    System = 0,
    Derived = 1,
    Custom = 2,
}
export interface ProcessModel {
    description: string;
    name: string;
    projects: ProjectReference[];
    properties: ProcessProperties;
    referenceName: string;
    typeId: string;
}
export interface ProcessProperties {
    class: ProcessClass;
    isDefault: boolean;
    isEnabled: boolean;
    parentProcessTypeId: string;
    version: string;
}
export interface ProjectReference {
    description: string;
    id: string;
    name: string;
    url: string;
}
export interface RuleActionModel {
    actionType: string;
    targetField: string;
    value: string;
}
export interface RuleConditionModel {
    conditionType: string;
    field: string;
    value: string;
}
export interface Section {
    groups: Group[];
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
}
export interface UpdateProcessModel {
    description: string;
    isDefault: boolean;
    isEnabled: boolean;
    name: string;
}
export interface WitContribution {
    /**
     * The id for the contribution.
     */
    contributionId: string;
    /**
     * The height for the contribution.
     */
    height: number;
    /**
     * A dictionary holding key value pairs for contribution inputs.
     */
    inputs: {
        [key: string]: any;
    };
    /**
     * A value indicating if the contribution should be show on deleted workItem.
     */
    showOnDeletedWorkItem: boolean;
}
export interface WorkItemBehavior {
    abstract: boolean;
    color: string;
    description: string;
    fields: WorkItemBehaviorField[];
    id: string;
    inherits: WorkItemBehaviorReference;
    name: string;
    overriden: boolean;
    rank: number;
    url: string;
}
export interface WorkItemBehaviorField {
    behaviorFieldId: string;
    id: string;
    url: string;
}
export interface WorkItemBehaviorReference {
    id: string;
    url: string;
}
export interface WorkItemStateResultModel {
    color: string;
    hidden: boolean;
    id: string;
    name: string;
    order: number;
    stateCategory: string;
    url: string;
}
export interface WorkItemTypeBehavior {
    behavior: WorkItemBehaviorReference;
    isDefault: boolean;
    url: string;
}
export enum WorkItemTypeClass {
    System = 0,
    Derived = 1,
    Custom = 2,
}
export interface WorkItemTypeModel {
    behaviors: WorkItemTypeBehavior[];
    class: WorkItemTypeClass;
    color: string;
    description: string;
    icon: string;
    id: string;
    /**
     * Parent WIT Id/Internal ReferenceName that it inherits from
     */
    inherits: string;
    isDisabled: boolean;
    layout: FormLayout;
    name: string;
    states: WorkItemStateResultModel[];
    url: string;
}
export var TypeInfo: {
    FieldModel: any;
    FieldType: {
        enumValues: {
            "string": number;
            "integer": number;
            "dateTime": number;
            "plainText": number;
            "html": number;
            "treePath": number;
            "history": number;
            "double": number;
            "guid": number;
            "boolean": number;
            "identity": number;
            "picklistInteger": number;
            "picklistString": number;
            "picklistDouble": number;
        };
    };
    FormLayout: any;
    GetBehaviorsExpand: {
        enumValues: {
            "none": number;
            "fields": number;
        };
    };
    GetProcessExpandLevel: {
        enumValues: {
            "none": number;
            "projects": number;
        };
    };
    GetWorkItemTypeExpand: {
        enumValues: {
            "none": number;
            "states": number;
            "behaviors": number;
            "layout": number;
        };
    };
    Page: any;
    PageType: {
        enumValues: {
            "custom": number;
            "history": number;
            "links": number;
            "attachments": number;
        };
    };
    ProcessClass: {
        enumValues: {
            "system": number;
            "derived": number;
            "custom": number;
        };
    };
    ProcessModel: any;
    ProcessProperties: any;
    WorkItemTypeClass: {
        enumValues: {
            "system": number;
            "derived": number;
            "custom": number;
        };
    };
    WorkItemTypeModel: any;
};
}
declare module "TFS/WorkItemTracking/ProcessDefinitionsContracts" {
export interface BehaviorCreateModel {
    /**
     * Color
     */
    color: string;
    /**
     * Parent behavior id
     */
    inherits: string;
    /**
     * Name of the behavior
     */
    name: string;
}
export interface BehaviorModel {
    /**
     * Is the behavior abstract (i.e. can not be associated with any work item type)
     */
    abstract: boolean;
    /**
     * Color
     */
    color: string;
    /**
     * Description
     */
    description: string;
    /**
     * Behavior Id
     */
    id: string;
    /**
     * Parent behavior reference
     */
    inherits: WorkItemBehaviorReference;
    /**
     * Behavior Name
     */
    name: string;
    /**
     * Is the behavior overrides a behavior from system process
     */
    overridden: boolean;
    /**
     * Rank
     */
    rank: number;
    url: string;
}
export interface BehaviorReplaceModel {
    /**
     * Color
     */
    color: string;
    /**
     * Behavior Name
     */
    name: string;
}
/**
 * Represent a control in the form.
 */
export interface Control {
    /**
     * Contribution for the control.
     */
    contribution: WitContribution;
    /**
     * Type of the control.
     */
    controlType: string;
    /**
     * Height of the control, for html controls.
     */
    height: number;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution or not.
     */
    isContribution: boolean;
    /**
     * Label for the field
     */
    label: string;
    /**
     * Inner text of the control.
     */
    metadata: string;
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * A value indicating if the control is readonly.
     */
    readOnly: boolean;
    /**
     * A value indicating if the control should be hidden or not.
     */
    visible: boolean;
    /**
     * Watermark text for the textbox.
     */
    watermark: string;
}
/**
 * Represents the extensions part of the layout
 */
export interface Extension {
    id: string;
}
export interface FieldModel {
    description: string;
    id: string;
    name: string;
    pickList: PickListMetadataModel;
    type: FieldType;
    url: string;
}
export enum FieldType {
    String = 1,
    Integer = 2,
    DateTime = 3,
    PlainText = 5,
    Html = 7,
    TreePath = 8,
    History = 9,
    Double = 10,
    Guid = 11,
    Boolean = 12,
    Identity = 13,
    PicklistInteger = 14,
    PicklistString = 15,
    PicklistDouble = 16,
}
export interface FieldUpdate {
    description: string;
    id: string;
}
export interface FormLayout {
    /**
     * Gets and sets extensions list
     */
    extensions: Extension[];
    /**
     * Top level tabs of the layout.
     */
    pages: Page[];
    /**
     * Headers controls of the layout.
     */
    systemControls: Control[];
}
export enum GetWorkItemTypeExpand {
    None = 0,
    States = 1,
    Behaviors = 2,
    Layout = 4,
}
/**
 * Represent a group in the form that holds controls in it.
 */
export interface Group {
    /**
     * Contribution for the group.
     */
    contribution: WitContribution;
    /**
     * Controls to be put in the group.
     */
    controls: Control[];
    /**
     * The height for the contribution.
     */
    height: number;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution: boolean;
    /**
     * Label for the group.
     */
    label: string;
    /**
     * Order in which the group should appear in the section.
     */
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * A value indicating if the group should be hidden or not.
     */
    visible: boolean;
}
export interface HideStateModel {
    hidden: boolean;
}
export interface Page {
    /**
     * Contribution for the page.
     */
    contribution: WitContribution;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution: boolean;
    /**
     * The label for the page.
     */
    label: string;
    /**
     * A value indicating whether any user operations are permitted on this page and the contents of this page
     */
    locked: boolean;
    /**
     * Order in which the page should appear in the layout.
     */
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * The icon for the page.
     */
    pageType: PageType;
    /**
     * The sections of the page.
     */
    sections: Section[];
    /**
     * A value indicating if the page should be hidden or not.
     */
    visible: boolean;
}
export enum PageType {
    Custom = 1,
    History = 2,
    Links = 3,
    Attachments = 4,
}
export interface PickListItemModel {
    id: string;
    value: string;
}
export interface PickListMetadataModel {
    id: string;
    isSuggested: boolean;
    name: string;
    type: string;
    url: string;
}
export interface PickListModel extends PickListMetadataModel {
    items: PickListItemModel[];
}
export interface Section {
    groups: Group[];
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
}
export interface WitContribution {
    /**
     * The id for the contribution.
     */
    contributionId: string;
    /**
     * The height for the contribution.
     */
    height: number;
    /**
     * A dictionary holding key value pairs for contribution inputs.
     */
    inputs: {
        [key: string]: any;
    };
    /**
     * A value indicating if the contribution should be show on deleted workItem.
     */
    showOnDeletedWorkItem: boolean;
}
export interface WorkItemBehaviorReference {
    id: string;
    url: string;
}
export interface WorkItemStateInputModel {
    color: string;
    name: string;
    order: number;
    stateCategory: string;
}
export interface WorkItemStateResultModel {
    color: string;
    hidden: boolean;
    id: string;
    name: string;
    order: number;
    stateCategory: string;
    url: string;
}
export interface WorkItemTypeBehavior {
    behavior: WorkItemBehaviorReference;
    isDefault: boolean;
    url: string;
}
export enum WorkItemTypeClass {
    System = 0,
    Derived = 1,
    Custom = 2,
}
export interface WorkItemTypeFieldModel {
    allowGroups: boolean;
    defaultValue: string;
    name: string;
    pickList: PickListMetadataModel;
    readOnly: boolean;
    referenceName: string;
    required: boolean;
    type: FieldType;
    url: string;
}
export interface WorkItemTypeModel {
    behaviors: WorkItemTypeBehavior[];
    class: WorkItemTypeClass;
    color: string;
    description: string;
    icon: string;
    id: string;
    /**
     * Parent WIT Id/Internal ReferenceName that it inherits from
     */
    inherits: string;
    isDisabled: boolean;
    layout: FormLayout;
    name: string;
    states: WorkItemStateResultModel[];
    url: string;
}
export interface WorkItemTypeUpdateModel {
    color: string;
    description: string;
    icon: string;
    isDisabled: boolean;
}
export var TypeInfo: {
    FieldModel: any;
    FieldType: {
        enumValues: {
            "string": number;
            "integer": number;
            "dateTime": number;
            "plainText": number;
            "html": number;
            "treePath": number;
            "history": number;
            "double": number;
            "guid": number;
            "boolean": number;
            "identity": number;
            "picklistInteger": number;
            "picklistString": number;
            "picklistDouble": number;
        };
    };
    FormLayout: any;
    GetWorkItemTypeExpand: {
        enumValues: {
            "none": number;
            "states": number;
            "behaviors": number;
            "layout": number;
        };
    };
    Page: any;
    PageType: {
        enumValues: {
            "custom": number;
            "history": number;
            "links": number;
            "attachments": number;
        };
    };
    WorkItemTypeClass: {
        enumValues: {
            "system": number;
            "derived": number;
            "custom": number;
        };
    };
    WorkItemTypeFieldModel: any;
    WorkItemTypeModel: any;
};
}
declare module "TFS/WorkItemTracking/ProcessDefinitionsRestClient" {
import ProcessDefinitionsContracts = require("TFS/WorkItemTracking/ProcessDefinitionsContracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2_1To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected behaviorsApiVersion: string;
    protected controlsApiVersion: string;
    protected fieldsApiVersion: string;
    protected groupsApiVersion: string;
    protected layoutApiVersion: string;
    protected listsApiVersion: string;
    protected listsApiVersion_b45cc931: string;
    protected pagesApiVersion: string;
    protected statesApiVersion: string;
    protected workItemTypesApiVersion: string;
    protected workItemTypesApiVersion_921dfb88: string;
    protected workItemTypesFieldsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefNameForFields
     * @param {string} fieldRefName
     * @return IPromise<void>
     */
    removeFieldFromWorkItemType(processId: string, witRefNameForFields: string, fieldRefName: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefNameForFields
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeFieldModel[]>
     */
    getWorkItemTypeFields(processId: string, witRefNameForFields: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeFieldModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefNameForFields
     * @param {string} fieldRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeFieldModel>
     */
    getWorkItemTypeField(processId: string, witRefNameForFields: string, fieldRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeFieldModel>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemTypeFieldModel} field
     * @param {string} processId
     * @param {string} witRefNameForFields
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeFieldModel>
     */
    addFieldToWorkItemType(field: ProcessDefinitionsContracts.WorkItemTypeFieldModel, processId: string, witRefNameForFields: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeFieldModel>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemTypeUpdateModel} workItemTypeUpdate
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>
     */
    updateWorkItemType(workItemTypeUpdate: ProcessDefinitionsContracts.WorkItemTypeUpdateModel, processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {ProcessDefinitionsContracts.GetWorkItemTypeExpand} expand
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeModel[]>
     */
    getWorkItemTypes(processId: string, expand?: ProcessDefinitionsContracts.GetWorkItemTypeExpand): IPromise<ProcessDefinitionsContracts.WorkItemTypeModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {ProcessDefinitionsContracts.GetWorkItemTypeExpand} expand
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>
     */
    getWorkItemType(processId: string, witRefName: string, expand?: ProcessDefinitionsContracts.GetWorkItemTypeExpand): IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<void>
     */
    deleteWorkItemType(processId: string, witRefName: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemTypeModel} workItemType
     * @param {string} processId
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>
     */
    createWorkItemType(workItemType: ProcessDefinitionsContracts.WorkItemTypeModel, processId: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeModel>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemTypeBehavior} behavior
     * @param {string} processId
     * @param {string} witRefNameForBehaviors
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>
     */
    updateBehaviorToWorkItemType(behavior: ProcessDefinitionsContracts.WorkItemTypeBehavior, processId: string, witRefNameForBehaviors: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefNameForBehaviors
     * @param {string} behaviorRefName
     * @return IPromise<void>
     */
    removeBehaviorFromWorkItemType(processId: string, witRefNameForBehaviors: string, behaviorRefName: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefNameForBehaviors
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior[]>
     */
    getBehaviorsForWorkItemType(processId: string, witRefNameForBehaviors: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefNameForBehaviors
     * @param {string} behaviorRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>
     */
    getBehaviorForWorkItemType(processId: string, witRefNameForBehaviors: string, behaviorRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemTypeBehavior} behavior
     * @param {string} processId
     * @param {string} witRefNameForBehaviors
     * @return IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>
     */
    addBehaviorToWorkItemType(behavior: ProcessDefinitionsContracts.WorkItemTypeBehavior, processId: string, witRefNameForBehaviors: string): IPromise<ProcessDefinitionsContracts.WorkItemTypeBehavior>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemStateInputModel} stateModel
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} stateId
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>
     */
    updateStateDefinition(stateModel: ProcessDefinitionsContracts.WorkItemStateInputModel, processId: string, witRefName: string, stateId: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.HideStateModel} hideStateModel
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} stateId
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>
     */
    hideStateDefinition(hideStateModel: ProcessDefinitionsContracts.HideStateModel, processId: string, witRefName: string, stateId: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel[]>
     */
    getStateDefinitions(processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} stateId
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>
     */
    getStateDefinition(processId: string, witRefName: string, stateId: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} stateId
     * @return IPromise<void>
     */
    deleteStateDefinition(processId: string, witRefName: string, stateId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.WorkItemStateInputModel} stateModel
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>
     */
    createStateDefinition(stateModel: ProcessDefinitionsContracts.WorkItemStateInputModel, processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.WorkItemStateResultModel>;
    /**
     * [Preview API] Removes a page from the work item form
     *
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page
     * @return IPromise<void>
     */
    removePage(processId: string, witRefName: string, pageId: string): IPromise<void>;
    /**
     * [Preview API] Updates a page on the work item form
     *
     * @param {ProcessDefinitionsContracts.Page} page - The page
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @return IPromise<ProcessDefinitionsContracts.Page>
     */
    editPage(page: ProcessDefinitionsContracts.Page, processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.Page>;
    /**
     * [Preview API] Adds a page to the work item form
     *
     * @param {ProcessDefinitionsContracts.Page} page - The page
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @return IPromise<ProcessDefinitionsContracts.Page>
     */
    addPage(page: ProcessDefinitionsContracts.Page, processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.Page>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.PickListModel} picklist
     * @param {string} listId
     * @return IPromise<ProcessDefinitionsContracts.PickListModel>
     */
    updateList(picklist: ProcessDefinitionsContracts.PickListModel, listId: string): IPromise<ProcessDefinitionsContracts.PickListModel>;
    /**
     * [Preview API]
     *
     * @param {string} listId
     * @return IPromise<ProcessDefinitionsContracts.PickListModel>
     */
    getList(listId: string): IPromise<ProcessDefinitionsContracts.PickListModel>;
    /**
     * [Preview API]
     *
     * @param {string} listId
     * @return IPromise<void>
     */
    deleteList(listId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.PickListModel} picklist
     * @return IPromise<ProcessDefinitionsContracts.PickListModel>
     */
    createList(picklist: ProcessDefinitionsContracts.PickListModel): IPromise<ProcessDefinitionsContracts.PickListModel>;
    /**
     * [Preview API]
     *
     * @return IPromise<ProcessDefinitionsContracts.PickListMetadataModel[]>
     */
    getListsMetadata(): IPromise<ProcessDefinitionsContracts.PickListMetadataModel[]>;
    /**
     * [Preview API] Gets the form layout
     *
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @return IPromise<ProcessDefinitionsContracts.FormLayout>
     */
    getFormLayout(processId: string, witRefName: string): IPromise<ProcessDefinitionsContracts.FormLayout>;
    /**
     * [Preview API] Moves a group to a different section
     *
     * @param {ProcessDefinitionsContracts.Group} group - The updated group
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page the group is in
     * @param {string} sectionId - The ID of the section the group is in
     * @param {string} groupId - The ID of the group
     * @param {string} removeFromSectionId - ID of the section to remove the group from
     * @return IPromise<ProcessDefinitionsContracts.Group>
     */
    setGroupInSection(group: ProcessDefinitionsContracts.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string, removeFromSectionId: string): IPromise<ProcessDefinitionsContracts.Group>;
    /**
     * [Preview API] Moves a group to a different page and section
     *
     * @param {ProcessDefinitionsContracts.Group} group - The updated group
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page the group is in
     * @param {string} sectionId - The ID of the section the group is in
     * @param {string} groupId - The ID of the group
     * @param {string} removeFromPageId - ID of the page to remove the group from
     * @param {string} removeFromSectionId - ID of the section to remove the group from
     * @return IPromise<ProcessDefinitionsContracts.Group>
     */
    setGroupInPage(group: ProcessDefinitionsContracts.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string, removeFromPageId: string, removeFromSectionId: string): IPromise<ProcessDefinitionsContracts.Group>;
    /**
     * [Preview API] Removes a group from the work item form
     *
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page the group is in
     * @param {string} sectionId - The ID of the section to the group is in
     * @param {string} groupId - The ID of the group
     * @return IPromise<void>
     */
    removeGroup(processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string): IPromise<void>;
    /**
     * [Preview API] Updates a group in the work item form
     *
     * @param {ProcessDefinitionsContracts.Group} group - The updated group
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page the group is in
     * @param {string} sectionId - The ID of the section the group is in
     * @param {string} groupId - The ID of the group
     * @return IPromise<ProcessDefinitionsContracts.Group>
     */
    editGroup(group: ProcessDefinitionsContracts.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string): IPromise<ProcessDefinitionsContracts.Group>;
    /**
     * [Preview API] Adds a group to the work item form
     *
     * @param {ProcessDefinitionsContracts.Group} group - The group
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page to add the group to
     * @param {string} sectionId - The ID of the section to add the group to
     * @return IPromise<ProcessDefinitionsContracts.Group>
     */
    addGroup(group: ProcessDefinitionsContracts.Group, processId: string, witRefName: string, pageId: string, sectionId: string): IPromise<ProcessDefinitionsContracts.Group>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.FieldUpdate} field
     * @param {string} processId
     * @return IPromise<ProcessDefinitionsContracts.FieldModel>
     */
    updateField(field: ProcessDefinitionsContracts.FieldUpdate, processId: string): IPromise<ProcessDefinitionsContracts.FieldModel>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.FieldModel} field
     * @param {string} processId
     * @return IPromise<ProcessDefinitionsContracts.FieldModel>
     */
    createField(field: ProcessDefinitionsContracts.FieldModel, processId: string): IPromise<ProcessDefinitionsContracts.FieldModel>;
    /**
     * [Preview API] Moves a control to a new group
     *
     * @param {ProcessDefinitionsContracts.Control} control - The control
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} groupId - The ID of the group to move the control to
     * @param {string} controlId - The id of the control
     * @param {string} removeFromGroupId - The group to remove the control from
     * @return IPromise<ProcessDefinitionsContracts.Control>
     */
    setControlInGroup(control: ProcessDefinitionsContracts.Control, processId: string, witRefName: string, groupId: string, controlId: string, removeFromGroupId?: string): IPromise<ProcessDefinitionsContracts.Control>;
    /**
     * [Preview API] Removes a control from the work item form
     *
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} groupId - The ID of the group
     * @param {string} controlId - The ID of the control to remove
     * @return IPromise<void>
     */
    removeControlFromGroup(processId: string, witRefName: string, groupId: string, controlId: string): IPromise<void>;
    /**
     * [Preview API] Updates a control on the work item form
     *
     * @param {ProcessDefinitionsContracts.Control} control - The updated control
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} groupId - The ID of the group
     * @param {string} controlId - The ID of the control
     * @return IPromise<ProcessDefinitionsContracts.Control>
     */
    editControl(control: ProcessDefinitionsContracts.Control, processId: string, witRefName: string, groupId: string, controlId: string): IPromise<ProcessDefinitionsContracts.Control>;
    /**
     * [Preview API] Creates a control in a group
     *
     * @param {ProcessDefinitionsContracts.Control} control - The control
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} groupId - The ID of the group to add the control to
     * @return IPromise<ProcessDefinitionsContracts.Control>
     */
    addControlToGroup(control: ProcessDefinitionsContracts.Control, processId: string, witRefName: string, groupId: string): IPromise<ProcessDefinitionsContracts.Control>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.BehaviorReplaceModel} behaviorData
     * @param {string} processId
     * @param {string} behaviorId
     * @return IPromise<ProcessDefinitionsContracts.BehaviorModel>
     */
    replaceBehavior(behaviorData: ProcessDefinitionsContracts.BehaviorReplaceModel, processId: string, behaviorId: string): IPromise<ProcessDefinitionsContracts.BehaviorModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @return IPromise<ProcessDefinitionsContracts.BehaviorModel[]>
     */
    getBehaviors(processId: string): IPromise<ProcessDefinitionsContracts.BehaviorModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} behaviorId
     * @return IPromise<ProcessDefinitionsContracts.BehaviorModel>
     */
    getBehavior(processId: string, behaviorId: string): IPromise<ProcessDefinitionsContracts.BehaviorModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} behaviorId
     * @return IPromise<void>
     */
    deleteBehavior(processId: string, behaviorId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessDefinitionsContracts.BehaviorCreateModel} behavior
     * @param {string} processId
     * @return IPromise<ProcessDefinitionsContracts.BehaviorModel>
     */
    createBehavior(behavior: ProcessDefinitionsContracts.BehaviorCreateModel, processId: string): IPromise<ProcessDefinitionsContracts.BehaviorModel>;
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient4_1 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient4 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_2 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_1 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_3 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_2 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_1 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkItemTrackingHttpClient extends WorkItemTrackingHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkItemTrackingHttpClient4;
}
declare module "TFS/WorkItemTracking/ProcessRestClient" {
import ProcessContracts = require("TFS/WorkItemTracking/ProcessContracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2_1To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected behaviorsApiVersion: string;
    protected fieldsApiVersion: string;
    protected fieldsApiVersion_7a0e7a1a: string;
    protected processesApiVersion: string;
    protected rulesApiVersion: string;
    protected workItemTypesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {ProcessContracts.GetWorkItemTypeExpand} expand
     * @return IPromise<ProcessContracts.WorkItemTypeModel[]>
     */
    getWorkItemTypes(processId: string, expand?: ProcessContracts.GetWorkItemTypeExpand): IPromise<ProcessContracts.WorkItemTypeModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {ProcessContracts.GetWorkItemTypeExpand} expand
     * @return IPromise<ProcessContracts.WorkItemTypeModel>
     */
    getWorkItemType(processId: string, witRefName: string, expand?: ProcessContracts.GetWorkItemTypeExpand): IPromise<ProcessContracts.WorkItemTypeModel>;
    /**
     * [Preview API]
     *
     * @param {ProcessContracts.FieldRuleModel} fieldRule
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} ruleId
     * @return IPromise<ProcessContracts.FieldRuleModel>
     */
    updateWorkItemTypeRule(fieldRule: ProcessContracts.FieldRuleModel, processId: string, witRefName: string, ruleId: string): IPromise<ProcessContracts.FieldRuleModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessContracts.FieldRuleModel[]>
     */
    getWorkItemTypeRules(processId: string, witRefName: string): IPromise<ProcessContracts.FieldRuleModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} ruleId
     * @return IPromise<ProcessContracts.FieldRuleModel>
     */
    getWorkItemTypeRule(processId: string, witRefName: string, ruleId: string): IPromise<ProcessContracts.FieldRuleModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} ruleId
     * @return IPromise<void>
     */
    deleteWorkItemTypeRule(processId: string, witRefName: string, ruleId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessContracts.FieldRuleModel} fieldRule
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessContracts.FieldRuleModel>
     */
    addWorkItemTypeRule(fieldRule: ProcessContracts.FieldRuleModel, processId: string, witRefName: string): IPromise<ProcessContracts.FieldRuleModel>;
    /**
     * [Preview API]
     *
     * @param {ProcessContracts.UpdateProcessModel} updateRequest
     * @param {string} processTypeId
     * @return IPromise<ProcessContracts.ProcessModel>
     */
    updateProcess(updateRequest: ProcessContracts.UpdateProcessModel, processTypeId: string): IPromise<ProcessContracts.ProcessModel>;
    /**
     * [Preview API]
     *
     * @param {ProcessContracts.GetProcessExpandLevel} expand
     * @return IPromise<ProcessContracts.ProcessModel[]>
     */
    getProcesses(expand?: ProcessContracts.GetProcessExpandLevel): IPromise<ProcessContracts.ProcessModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processTypeId
     * @param {ProcessContracts.GetProcessExpandLevel} expand
     * @return IPromise<ProcessContracts.ProcessModel>
     */
    getProcessById(processTypeId: string, expand?: ProcessContracts.GetProcessExpandLevel): IPromise<ProcessContracts.ProcessModel>;
    /**
     * [Preview API]
     *
     * @param {string} processTypeId
     * @return IPromise<void>
     */
    deleteProcess(processTypeId: string): IPromise<void>;
    /**
     * [Preview API]
     *
     * @param {ProcessContracts.CreateProcessModel} createRequest
     * @return IPromise<ProcessContracts.ProcessModel>
     */
    createProcess(createRequest: ProcessContracts.CreateProcessModel): IPromise<ProcessContracts.ProcessModel>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessContracts.FieldModel[]>
     */
    getWorkItemTypeFields(processId: string, witRefName: string): IPromise<ProcessContracts.FieldModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @return IPromise<ProcessContracts.FieldModel[]>
     */
    getFields(processId: string): IPromise<ProcessContracts.FieldModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {ProcessContracts.GetBehaviorsExpand} expand
     * @return IPromise<ProcessContracts.WorkItemBehavior[]>
     */
    getBehaviors(processId: string, expand?: ProcessContracts.GetBehaviorsExpand): IPromise<ProcessContracts.WorkItemBehavior[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} behaviorRefName
     * @param {ProcessContracts.GetBehaviorsExpand} expand
     * @return IPromise<ProcessContracts.WorkItemBehavior>
     */
    getBehavior(processId: string, behaviorRefName: string, expand?: ProcessContracts.GetBehaviorsExpand): IPromise<ProcessContracts.WorkItemBehavior>;
}
export class CommonMethods3_2To4_1 extends CommonMethods2_1To4_1 {
    protected statesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @return IPromise<ProcessContracts.WorkItemStateResultModel[]>
     */
    getStateDefinitions(processId: string, witRefName: string): IPromise<ProcessContracts.WorkItemStateResultModel[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} witRefName
     * @param {string} stateId
     * @return IPromise<ProcessContracts.WorkItemStateResultModel>
     */
    getStateDefinition(processId: string, witRefName: string, stateId: string): IPromise<ProcessContracts.WorkItemStateResultModel>;
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient4_1 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient4 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_2 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_1 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_3 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_2 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient2_1 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkItemTrackingHttpClient extends WorkItemTrackingHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkItemTrackingHttpClient4;
}
declare module "TFS/WorkItemTracking/ProcessTemplateContracts" {
/**
 * Describes an admin behavior for a process.
 */
export interface AdminBehavior {
    /**
     * Is the behavior abstract (i.e. can not be associated with any work item type).
     */
    abstract: boolean;
    /**
     * The color associated with the behavior.
     */
    color: string;
    /**
     * Indicates if the behavior is custom.
     */
    custom: boolean;
    /**
     * The description of the behavior.
     */
    description: string;
    /**
     * List of behavior fields.
     */
    fields: AdminBehaviorField[];
    /**
     * Behavior ID.
     */
    id: string;
    /**
     * Parent behavior reference.
     */
    inherits: string;
    /**
     * The behavior name.
     */
    name: string;
    /**
     * Is the behavior overrides a behavior from system process.
     */
    overriden: boolean;
    /**
     * The rank.
     */
    rank: number;
}
/**
 * Describes an admin behavior field.
 */
export interface AdminBehaviorField {
    /**
     * The behavior field identifier.
     */
    behaviorFieldId: string;
    /**
     * The behavior ID.
     */
    id: string;
    /**
     * The behavior name.
     */
    name: string;
}
/**
 * Describes result of a check template existence request.
 */
export interface CheckTemplateExistenceResult {
    /**
     * Indicates whether a template exists.
     */
    doesTemplateExist: boolean;
    /**
     * The name of the existing template.
     */
    existingTemplateName: string;
    /**
     * The existing template type identifier.
     */
    existingTemplateTypeId: string;
    /**
     * The name of the requested template.
     */
    requestedTemplateName: string;
}
/**
 * Describes the result of a Process Import request.
 */
export interface ProcessImportResult {
    /**
     * Help URL.
     */
    helpUrl: string;
    /**
     * ID of the import operation.
     */
    id: string;
    /**
     * Whether this imported process is new.
     */
    isNew: boolean;
    /**
     * The promote job identifier.
     */
    promoteJobId: string;
    /**
     * The list of validation results.
     */
    validationResults: ValidationIssue[];
}
/**
 * Describes result of process operation promote.
 */
export interface ProcessPromoteStatus {
    /**
     * Number of projects for which promote is complete.
     */
    complete: number;
    /**
     * ID of the promote operation.
     */
    id: string;
    /**
     * The error message assoicated with the promote operation.
     */
    message: string;
    /**
     * Number of projects for which promote is pending.
     */
    pending: number;
    /**
     * The remaining retries.
     */
    remainingRetries: number;
    /**
     * Indicates whether this promote operation is successful.
     */
    successful: boolean;
}
export interface ValidationIssue {
    description: string;
    file: string;
    helpLink: string;
    issueType: ValidationIssueType;
    line: number;
}
export enum ValidationIssueType {
    Warning = 0,
    Error = 1,
}
export var TypeInfo: {
    ProcessImportResult: any;
    ValidationIssue: any;
    ValidationIssueType: {
        enumValues: {
            "warning": number;
            "error": number;
        };
    };
};
}
declare module "TFS/WorkItemTracking/ProcessTemplateRestClient" {
import ProcessTemplateContracts = require("TFS/WorkItemTracking/ProcessTemplateContracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2_2To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected processesApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Whether promote has completed for the specified promote job id
     *
     * @param {string} id
     * @return IPromise<ProcessTemplateContracts.ProcessPromoteStatus>
     */
    importProcessTemplateStatus(id: string): IPromise<ProcessTemplateContracts.ProcessPromoteStatus>;
    /**
     * [Preview API]
     *
     * @param {any} content - Content to upload
     * @param {boolean} ignoreWarnings
     * @return IPromise<ProcessTemplateContracts.ProcessImportResult>
     */
    importProcessTemplate(content: any, ignoreWarnings?: boolean): IPromise<ProcessTemplateContracts.ProcessImportResult>;
    /**
     * [Preview API] Returns requested process template
     *
     * @param {string} id
     * @return IPromise<ArrayBuffer>
     */
    exportProcessTemplate(id: string): IPromise<ArrayBuffer>;
    /**
     * [Preview API] Clone a xml process to an inherited process
     *
     * @param {string} SourceProcessId - The template type id of the source process
     * @param {string} TargetProcessName - The name for the new inherited process
     * @param {string} TargetProcessType - The OOB process name to create the inherited process under
     * @return IPromise<string>
     */
    cloneXmlToInherited(SourceProcessId: string, TargetProcessName: string, TargetProcessType: string): IPromise<string>;
    /**
     * [Preview API] Check if process template exists
     *
     * @param {any} content - Content to upload
     * @return IPromise<ProcessTemplateContracts.CheckTemplateExistenceResult>
     */
    checkTemplateExistence(content: any): IPromise<ProcessTemplateContracts.CheckTemplateExistenceResult>;
}
export class CommonMethods3To4_1 extends CommonMethods2_2To4_1 {
    protected behaviorsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @return IPromise<ProcessTemplateContracts.AdminBehavior[]>
     */
    getBehaviors(processId: string): IPromise<ProcessTemplateContracts.AdminBehavior[]>;
    /**
     * [Preview API]
     *
     * @param {string} processId
     * @param {string} behaviorRefName
     * @return IPromise<ProcessTemplateContracts.AdminBehavior>
     */
    getBehavior(processId: string, behaviorRefName: string): IPromise<ProcessTemplateContracts.AdminBehavior>;
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingProcessTemplateHttpClient4_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingProcessTemplateHttpClient4 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingProcessTemplateHttpClient3_2 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingProcessTemplateHttpClient3_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingProcessTemplateHttpClient3 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingProcessTemplateHttpClient2_3 extends CommonMethods2_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingProcessTemplateHttpClient2_2 extends CommonMethods2_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkItemTrackingProcessTemplateHttpClient extends WorkItemTrackingProcessTemplateHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingProcessTemplateHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkItemTrackingProcessTemplateHttpClient4;
}
declare module "TFS/WorkItemTracking/RestClient" {
import Contracts = require("TFS/WorkItemTracking/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected accountMyWorkApiVersion: string;
    protected accountMyWorkRecentActivityApiVersion: string;
    protected accountRecentMentionsApiVersion: string;
    protected attachmentsApiVersion: string;
    protected classificationNodesApiVersion: string;
    protected classificationNodesApiVersion_a70579d1: string;
    protected fieldsApiVersion: string;
    protected queriesApiVersion: string;
    protected revisionsApiVersion: string;
    protected ruleEngineApiVersion: string;
    protected updatesApiVersion: string;
    protected wiqlApiVersion: string;
    protected wiqlApiVersion_1a9c53f7: string;
    protected workItemIconsApiVersion: string;
    protected workItemRelationTypesApiVersion: string;
    protected workItemsApiVersion: string;
    protected workItemsApiVersion_72c7ddf8: string;
    protected workitemStateColorApiVersion: string;
    protected workItemTypeCategoriesApiVersion: string;
    protected workItemTypeColorAndIconApiVersion: string;
    protected workitemTypeColorApiVersion: string;
    protected workItemTypesApiVersion: string;
    protected workItemTypesFieldApiVersion: string;
    protected workItemTypeStatesApiVersion: string;
    protected workItemTypeTemplateApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * @exemptedapi
     * [Preview API] Returns the state names and colors for a work item type.
     *
     * @param {string} project - Project ID or project name
     * @param {string} type - The state name
     * @return IPromise<Contracts.WorkItemStateColor[]>
     */
    getWorkItemTypeStates(project: string, type: string): IPromise<Contracts.WorkItemStateColor[]>;
    /**
     * Returns the dependent fields for the corresponding workitem type and fieldname.
     *
     * @param {string} project - Project ID or project name
     * @param {string} type - The work item type name
     * @param {string} field
     * @return IPromise<Contracts.FieldDependentRule>
     */
    getDependentFields(project: string, type: string, field: string): IPromise<Contracts.FieldDependentRule>;
    /**
     * Returns the list of work item types
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemType[]>
     */
    getWorkItemTypes(project: string): IPromise<Contracts.WorkItemType[]>;
    /**
     * Returns a work item type definition.
     *
     * @param {string} project - Project ID or project name
     * @param {string} type - Work item type name
     * @return IPromise<Contracts.WorkItemType>
     */
    getWorkItemType(project: string, type: string): IPromise<Contracts.WorkItemType>;
    /**
     * Returns a the deltas between work item revisions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} category - The category name
     * @return IPromise<Contracts.WorkItemTypeCategory>
     */
    getWorkItemTypeCategory(project: string, category: string): IPromise<Contracts.WorkItemTypeCategory>;
    /**
     * Returns a the deltas between work item revisions.
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemTypeCategory[]>
     */
    getWorkItemTypeCategories(project: string): IPromise<Contracts.WorkItemTypeCategory[]>;
    /**
     * Returns a single work item from a template.
     *
     * @param {string} project - Project ID or project name
     * @param {string} type - The work item type name
     * @param {string} fields - Comma-separated list of requested fields
     * @param {Date} asOf - AsOf UTC date time string
     * @param {Contracts.WorkItemExpand} expand - The expand parameters for work item attributes
     * @return IPromise<Contracts.WorkItem>
     */
    getWorkItemTemplate(project: string, type: string, fields?: string, asOf?: Date, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem>;
    /**
     * Creates a single work item.
     *
     * @param {VSS_Common_Contracts.JsonPatchDocument} document - The JSON Patch document representing the work item
     * @param {string} project - Project ID or project name
     * @param {string} type - The work item type of the work item to create
     * @param {boolean} validateOnly - Indicate if you only want to validate the changes without saving the work item
     * @param {boolean} bypassRules - Do not enforce the work item type rules on this update
     * @param {boolean} suppressNotifications - Do not fire any notifications for this change
     * @return IPromise<Contracts.WorkItem>
     */
    createWorkItem(document: VSS_Common_Contracts.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean, suppressNotifications?: boolean): IPromise<Contracts.WorkItem>;
    /**
     * Updates a single work item.
     *
     * @param {VSS_Common_Contracts.JsonPatchDocument} document - The JSON Patch document representing the update
     * @param {number} id - The id of the work item to update
     * @param {boolean} validateOnly - Indicate if you only want to validate the changes without saving the work item
     * @param {boolean} bypassRules - Do not enforce the work item type rules on this update
     * @param {boolean} suppressNotifications - Do not fire any notifications for this change
     * @return IPromise<Contracts.WorkItem>
     */
    updateWorkItem(document: VSS_Common_Contracts.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean, suppressNotifications?: boolean): IPromise<Contracts.WorkItem>;
    /**
     * Returns a list of work items.
     *
     * @param {number[]} ids - The comma-separated list of requested work item ids
     * @param {string[]} fields - Comma-separated list of requested fields
     * @param {Date} asOf - AsOf UTC date time string
     * @param {Contracts.WorkItemExpand} expand - The expand parameters for work item attributes
     * @param {Contracts.WorkItemErrorPolicy} errorPolicy - The flag to control error policy in a bulk get work items request
     * @return IPromise<Contracts.WorkItem[]>
     */
    getWorkItems(ids: number[], fields?: string[], asOf?: Date, expand?: Contracts.WorkItemExpand, errorPolicy?: Contracts.WorkItemErrorPolicy): IPromise<Contracts.WorkItem[]>;
    /**
     * Returns a single work item.
     *
     * @param {number} id - The work item id
     * @param {string[]} fields - Comma-separated list of requested fields
     * @param {Date} asOf - AsOf UTC date time string
     * @param {Contracts.WorkItemExpand} expand - The expand parameters for work item attributes
     * @return IPromise<Contracts.WorkItem>
     */
    getWorkItem(id: number, fields?: string[], asOf?: Date, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem>;
    /**
     * Deletes the specified work item and sends it to the Recycle Bin, so that it can be restored back, if required. Optionally, if the destroy parameter has been set to true, it destroys the work item permanently.
     *
     * @param {number} id - ID of the work item to be deleted
     * @param {boolean} destroy - Optional parameter, if set to true, the work item is deleted permanently
     * @return IPromise<Contracts.WorkItemDelete>
     */
    deleteWorkItem(id: number, destroy?: boolean): IPromise<Contracts.WorkItemDelete>;
    /**
     * Gets the work item relation types.
     *
     * @return IPromise<Contracts.WorkItemRelationType[]>
     */
    getRelationTypes(): IPromise<Contracts.WorkItemRelationType[]>;
    /**
     * Gets the work item relation type definition.
     *
     * @param {string} relation - The relation name
     * @return IPromise<Contracts.WorkItemRelationType>
     */
    getRelationType(relation: string): IPromise<Contracts.WorkItemRelationType>;
    /**
     * @exemptedapi
     * [Preview API] Get a work item icon given the friendly name and icon color.
     *
     * @param {string} icon - The name of the icon
     * @param {string} color - The 6-digit hex color for the icon
     * @param {number} v - The version of the icon (used only for cache invalidation)
     * @return IPromise<any>
     */
    getWorkItemIconSvg(icon: string, color?: string, v?: number): IPromise<any>;
    /**
     * @exemptedapi
     * [Preview API] Get a list of all work item icons.
     *
     * @return IPromise<Contracts.WorkItemIcon[]>
     */
    getWorkItemIcons(): IPromise<Contracts.WorkItemIcon[]>;
    /**
     * @exemptedapi
     * [Preview API] Get a work item icon given the friendly name and icon color.
     *
     * @param {string} icon - The name of the icon
     * @param {string} color - The 6-digit hex color for the icon
     * @param {number} v - The version of the icon (used only for cache invalidation)
     * @return IPromise<Contracts.WorkItemIcon>
     */
    getWorkItemIconJson(icon: string, color?: string, v?: number): IPromise<Contracts.WorkItemIcon>;
    /**
     * Gets the results of the query given the query ID.
     *
     * @param {string} id - The query ID.
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {boolean} timePrecision - Whether or not to use time precision.
     * @return IPromise<Contracts.WorkItemQueryResult>
     */
    queryById(id: string, project?: string, team?: string, timePrecision?: boolean): IPromise<Contracts.WorkItemQueryResult>;
    /**
     * Gets the results of the query given the query ID.
     *
     * @param {string} id - The query ID.
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {boolean} timePrecision - Whether or not to use time precision.
     * @return IPromise<number>
     */
    getQueryResultCount(id: string, project?: string, team?: string, timePrecision?: boolean): IPromise<number>;
    /**
     * Gets the results of the query given its WIQL.
     *
     * @param {Contracts.Wiql} wiql - The query containing the WIQL.
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {boolean} timePrecision - Whether or not to use time precision.
     * @param {number} top - The max number of results to return.
     * @return IPromise<Contracts.WorkItemQueryResult>
     */
    queryByWiql(wiql: Contracts.Wiql, project?: string, team?: string, timePrecision?: boolean, top?: number): IPromise<Contracts.WorkItemQueryResult>;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemUpdate[]>
     */
    getUpdates(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemUpdate[]>;
    /**
     * Returns a single update for a work item
     *
     * @param {number} id
     * @param {number} updateNumber
     * @return IPromise<Contracts.WorkItemUpdate>
     */
    getUpdate(id: number, updateNumber: number): IPromise<Contracts.WorkItemUpdate>;
    /**
     * Returns the list of fully hydrated work item revisions, paged.
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem[]>
     */
    getRevisions(id: number, top?: number, skip?: number, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem[]>;
    /**
     * Returns a fully hydrated work item for the requested revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem>
     */
    getRevision(id: number, revisionNumber: number, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem>;
    /**
     * Update a query or a folder. This allows you to update, rename and move queries and folders.
     *
     * @param {Contracts.QueryHierarchyItem} queryUpdate - The query to update.
     * @param {string} project - Project ID or project name
     * @param {string} query - The path for the query to update.
     * @param {boolean} undeleteDescendants - Undelete the children of this folder.
     * @return IPromise<Contracts.QueryHierarchyItem>
     */
    updateQuery(queryUpdate: Contracts.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean): IPromise<Contracts.QueryHierarchyItem>;
    /**
     * Searches all queries the user has access to in the current project
     *
     * @param {string} project - Project ID or project name
     * @param {string} filter - The text to filter the queries with.
     * @param {number} top - The number of queries to return (Default is 50 and maximum is 200).
     * @param {Contracts.QueryExpand} expand
     * @param {boolean} includeDeleted - Include deleted queries and folders
     * @return IPromise<Contracts.QueryHierarchyItemsResult>
     */
    searchQueries(project: string, filter: string, top?: number, expand?: Contracts.QueryExpand, includeDeleted?: boolean): IPromise<Contracts.QueryHierarchyItemsResult>;
    /**
     * Retrieves an individual query and its children
     *
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {Contracts.QueryExpand} expand - Include the query string (wiql), clauses, query result columns, and sort options in the results.
     * @param {number} depth - In the folder of queries, return child queries and folders to this depth.
     * @param {boolean} includeDeleted - Include deleted queries and folders
     * @return IPromise<Contracts.QueryHierarchyItem>
     */
    getQuery(project: string, query: string, expand?: Contracts.QueryExpand, depth?: number, includeDeleted?: boolean): IPromise<Contracts.QueryHierarchyItem>;
    /**
     * Gets the root queries and their children
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.QueryExpand} expand - Include the query string (wiql), clauses, query result columns, and sort options in the results.
     * @param {number} depth - In the folder of queries, return child queries and folders to this depth.
     * @param {boolean} includeDeleted - Include deleted queries and folders
     * @return IPromise<Contracts.QueryHierarchyItem[]>
     */
    getQueries(project: string, expand?: Contracts.QueryExpand, depth?: number, includeDeleted?: boolean): IPromise<Contracts.QueryHierarchyItem[]>;
    /**
     * Delete a query or a folder
     *
     * @param {string} project - Project ID or project name
     * @param {string} query - ID or path of the query or folder to delete.
     * @return IPromise<void>
     */
    deleteQuery(project: string, query: string): IPromise<void>;
    /**
     * Creates a query, or moves a query.
     *
     * @param {Contracts.QueryHierarchyItem} postedQuery - The query to create.
     * @param {string} project - Project ID or project name
     * @param {string} query - The parent path for the query to create.
     * @return IPromise<Contracts.QueryHierarchyItem>
     */
    createQuery(postedQuery: Contracts.QueryHierarchyItem, project: string, query: string): IPromise<Contracts.QueryHierarchyItem>;
    /**
     * Updates the field.
     *
     * @param {Contracts.WorkItemField} workItemField - New field definition
     * @param {string} fieldNameOrRefName - Field simple name or reference name
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    updateField(workItemField: Contracts.WorkItemField, fieldNameOrRefName: string, project?: string): IPromise<void>;
    /**
     * Returns information for all fields.
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.GetFieldsExpand} expand - Use ExtensionFields to include extension fields, otherwise exclude them. Unless the feature flag for this parameter is enabled, extension fields are always included.
     * @return IPromise<Contracts.WorkItemField[]>
     */
    getFields(project?: string, expand?: Contracts.GetFieldsExpand): IPromise<Contracts.WorkItemField[]>;
    /**
     * Gets information on a specific field.
     *
     * @param {string} fieldNameOrRefName - Field simple name or reference name
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemField>
     */
    getField(fieldNameOrRefName: string, project?: string): IPromise<Contracts.WorkItemField>;
    /**
     * Deletes the field.
     *
     * @param {string} fieldNameOrRefName - Field simple name or reference name
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteField(fieldNameOrRefName: string, project?: string): IPromise<void>;
    /**
     * Update an existing classification node.
     *
     * @param {Contracts.WorkItemClassificationNode} postedNode - Node to create or update.
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup - Structure group of the classification node, area or iteration.
     * @param {string} path - Path of the classification node.
     * @return IPromise<Contracts.WorkItemClassificationNode>
     */
    updateClassificationNode(postedNode: Contracts.WorkItemClassificationNode, project: string, structureGroup: Contracts.TreeStructureGroup, path?: string): IPromise<Contracts.WorkItemClassificationNode>;
    /**
     * Gets the classification node for a given node path.
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup - Structure group of the classification node, area or iteration.
     * @param {string} path - Path of the classification node.
     * @param {number} depth - Depth of children to fetch.
     * @return IPromise<Contracts.WorkItemClassificationNode>
     */
    getClassificationNode(project: string, structureGroup: Contracts.TreeStructureGroup, path?: string, depth?: number): IPromise<Contracts.WorkItemClassificationNode>;
    /**
     * Delete an existing classification node.
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup - Structure group of the classification node, area or iteration.
     * @param {string} path - Path of the classification node.
     * @param {number} reclassifyId - Id of the target classification node for reclassification.
     * @return IPromise<void>
     */
    deleteClassificationNode(project: string, structureGroup: Contracts.TreeStructureGroup, path?: string, reclassifyId?: number): IPromise<void>;
    /**
     * Create new or update an existing classification node.
     *
     * @param {Contracts.WorkItemClassificationNode} postedNode - Node to create or update.
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup - Structure group of the classification node, area or iteration.
     * @param {string} path - Path of the classification node.
     * @return IPromise<Contracts.WorkItemClassificationNode>
     */
    createOrUpdateClassificationNode(postedNode: Contracts.WorkItemClassificationNode, project: string, structureGroup: Contracts.TreeStructureGroup, path?: string): IPromise<Contracts.WorkItemClassificationNode>;
    /**
     * Gets root classification nodes under the project.
     *
     * @param {string} project - Project ID or project name
     * @param {number} depth - Depth of children to fetch.
     * @return IPromise<Contracts.WorkItemClassificationNode[]>
     */
    getRootNodes(project: string, depth?: number): IPromise<Contracts.WorkItemClassificationNode[]>;
    /**
     * Downloads an attachment.
     *
     * @param {string} id - Attachment ID
     * @param {string} fileName - Name of the file
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentZip(id: string, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * Downloads an attachment.
     *
     * @param {string} id - Attachment ID
     * @param {string} fileName - Name of the file
     * @return IPromise<ArrayBuffer>
     */
    getAttachmentContent(id: string, fileName?: string): IPromise<ArrayBuffer>;
    /**
     * Uploads an attachment.
     *
     * @param {any} content - Content to upload
     * @param {string} fileName - The name of the file
     * @param {string} uploadType - Attachment upload type: Simple or Chunked
     * @param {string} areaPath - Target project Area Path
     * @return IPromise<Contracts.AttachmentReference>
     */
    createAttachment(content: any, fileName?: string, uploadType?: string, areaPath?: string): IPromise<Contracts.AttachmentReference>;
}
export class CommonMethods2_1To4_1 extends CommonMethods2To4_1 {
    protected recyclebinApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Restores the deleted work item from Recycle Bin.
     *
     * @param {Contracts.WorkItemDeleteUpdate} payload - Paylod with instructions to update the IsDeleted flag to false
     * @param {number} id - ID of the work item to be restored
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemDelete>
     */
    restoreWorkItem(payload: Contracts.WorkItemDeleteUpdate, id: number, project?: string): IPromise<Contracts.WorkItemDelete>;
    /**
     * Gets the work items from the recycle bin, whose IDs have been specified in the parameters
     *
     * @param {number[]} ids - Comma separated list of IDs of the deleted work items to be returned
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemDeleteReference[]>
     */
    getDeletedWorkItems(ids: number[], project?: string): IPromise<Contracts.WorkItemDeleteReference[]>;
    /**
     * Gets a list of the IDs and the URLs of the deleted the work items in the Recycle Bin.
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemReference[]>
     */
    getDeletedWorkItemReferences(project?: string): IPromise<Contracts.WorkItemReference[]>;
    /**
     * Gets a deleted work item from Recycle Bin.
     *
     * @param {number} id - ID of the work item to be returned
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemDelete>
     */
    getDeletedWorkItem(id: number, project?: string): IPromise<Contracts.WorkItemDelete>;
    /**
     * Destroys the specified work item permanently from the Recycle Bin. This action can not be undone.
     *
     * @param {number} id - ID of the work item to be destroyed permanently
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    destroyWorkItem(id: number, project?: string): IPromise<void>;
}
export class CommonMethods2_2To4_1 extends CommonMethods2_1To4_1 {
    protected workItemLinksApiVersion: string;
    protected workItemRevisionsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Get a batch of work item revisions. This request may be used if your list of fields is large enough that it may run the URL over the length limit.
     *
     * @param {Contracts.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
     * @param {string} project - Project ID or project name
     * @param {string} continuationToken - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {Contracts.ReportingRevisionsExpand} expand
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsPost(filter: Contracts.ReportingWorkItemRevisionsFilter, project?: string, continuationToken?: string, startDateTime?: Date, expand?: Contracts.ReportingRevisionsExpand): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
    /**
     * Get a batch of work item revisions with the option of including deleted items
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} fields - A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     * @param {string} continuationToken - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {boolean} includeIdentityRef - Return an identity reference instead of a string value for identity fields.
     * @param {boolean} includeDeleted - Specify if the deleted item should be returned.
     * @param {boolean} includeTagRef - Specify if the tag objects should be returned for System.Tags field.
     * @param {boolean} includeLatestOnly - Return only the latest revisions of work items, skipping all historical revisions
     * @param {Contracts.ReportingRevisionsExpand} expand - Return all the fields in work item revisions, including long text fields which are not returned by default
     * @param {boolean} includeDiscussionChangesOnly - Return only the those revisions of work items, where only history field was changed
     * @param {number} maxPageSize - The maximum number of results to return in this batch
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsGet(project?: string, fields?: string[], types?: string[], continuationToken?: string, startDateTime?: Date, includeIdentityRef?: boolean, includeDeleted?: boolean, includeTagRef?: boolean, includeLatestOnly?: boolean, expand?: Contracts.ReportingRevisionsExpand, includeDiscussionChangesOnly?: boolean, maxPageSize?: number): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
    /**
     * Get a batch of work item links
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
     * @param {string} continuationToken - Specifies the continuationToken to start the batch from. Omit this parameter to get the first batch of links.
     * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemLinksBatch>
     */
    getReportingLinks(project?: string, types?: string[], continuationToken?: string, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemLinksBatch>;
}
export class CommonMethods3To4_1 extends CommonMethods2_2To4_1 {
    protected commentsApiVersion: string;
    protected templatesApiVersion: string;
    protected templatesApiVersion_6a90345f: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Replace template contents
     *
     * @param {Contracts.WorkItemTemplate} templateContent - Template contents to replace with
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {string} templateId - Template id
     * @return IPromise<Contracts.WorkItemTemplate>
     */
    replaceTemplate(templateContent: Contracts.WorkItemTemplate, project: string, team: string, templateId: string): IPromise<Contracts.WorkItemTemplate>;
    /**
     * [Preview API] Gets the template with specified id
     *
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {string} templateId - Template Id
     * @return IPromise<Contracts.WorkItemTemplate>
     */
    getTemplate(project: string, team: string, templateId: string): IPromise<Contracts.WorkItemTemplate>;
    /**
     * [Preview API] Deletes the template with given id
     *
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {string} templateId - Template id
     * @return IPromise<void>
     */
    deleteTemplate(project: string, team: string, templateId: string): IPromise<void>;
    /**
     * [Preview API] Gets template
     *
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @param {string} workitemtypename - Optional, When specified returns templates for given Work item type.
     * @return IPromise<Contracts.WorkItemTemplateReference[]>
     */
    getTemplates(project: string, team: string, workitemtypename?: string): IPromise<Contracts.WorkItemTemplateReference[]>;
    /**
     * [Preview API] Creates a template
     *
     * @param {Contracts.WorkItemTemplate} template - Template contents
     * @param {string} project - Project ID or project name
     * @param {string} team - Team ID or team name
     * @return IPromise<Contracts.WorkItemTemplate>
     */
    createTemplate(template: Contracts.WorkItemTemplate, project: string, team: string): IPromise<Contracts.WorkItemTemplate>;
    /**
     * [Preview API] Gets the specified number of comments for a work item from the specified revision.
     *
     * @param {number} id - Work item id
     * @param {number} fromRevision - Revision from which comments are to be fetched
     * @param {number} top - The number of comments to return
     * @param {Contracts.CommentSortOrder} order - Ascending or descending by revision id
     * @return IPromise<Contracts.WorkItemComments>
     */
    getComments(id: number, fromRevision?: number, top?: number, order?: Contracts.CommentSortOrder): IPromise<Contracts.WorkItemComments>;
    /**
     * [Preview API] Gets a comment for a work item at the specified revision.
     *
     * @param {number} id - Work item id
     * @param {number} revision - Revision for which the comment need to be fetched
     * @return IPromise<Contracts.WorkItemComment>
     */
    getComment(id: number, revision: number): IPromise<Contracts.WorkItemComment>;
}
export class CommonMethods3_2To4_1 extends CommonMethods3To4_1 {
    protected artifactLinkTypesApiVersion: string;
    protected artifactUriQueryApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Queries work items linked to a given list of artifact URI.
     *
     * @param {Contracts.ArtifactUriQuery} artifactUriQuery - Defines a list of artifact URI for querying work items.
     * @return IPromise<Contracts.ArtifactUriQueryResult>
     */
    queryWorkItemsForArtifactUris(artifactUriQuery: Contracts.ArtifactUriQuery): IPromise<Contracts.ArtifactUriQueryResult>;
    /**
     * [Preview API] Get the list of work item tracking outbound artifact link types.
     *
     * @return IPromise<Contracts.WorkArtifactLink[]>
     */
    getWorkArtifactLinkTypes(): IPromise<Contracts.WorkArtifactLink[]>;
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient4_1 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * [Preview API] Returns the next state on the given work item IDs.
     *
     * @param {number[]} ids - list of work item ids
     * @param {string} action - possible actions. Currently only supports checkin
     * @return IPromise<Contracts.WorkItemNextStateOnTransition[]>
     */
    getWorkItemNextStatesOnCheckinAction(ids: number[], action?: string): IPromise<Contracts.WorkItemNextStateOnTransition[]>;
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient4 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_2 extends CommonMethods3_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkItemTrackingHttpClient3_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkItemTrackingHttpClient3 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
}
export class WorkItemTrackingHttpClient2_3 extends CommonMethods2_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
}
export class WorkItemTrackingHttpClient2_2 extends CommonMethods2_2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
}
export class WorkItemTrackingHttpClient2_1 extends CommonMethods2_1To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
    /**
     * Get a batch of work item links
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of links.
     * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemLinksBatch>
     */
    getReportingLinks(project?: string, types?: string[], watermark?: number, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemLinksBatch>;
    /**
     * Get a batch of work item revisions with the option of including deleted items
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted - Specify if the deleted item should be returned.
     * @param {string[]} fields - A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {boolean} includeIdentityRef - Return an identity reference instead of a string value for identity fields.
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsGet(project?: string, includeDeleted?: boolean, fields?: string[], types?: string[], watermark?: number, startDateTime?: Date, includeIdentityRef?: boolean): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
    /**
     * Get a batch of work item revisions
     *
     * @param {Contracts.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
     * @param {string} project - Project ID or project name
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsPost(filter: Contracts.ReportingWorkItemRevisionsFilter, project?: string, watermark?: number, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
}
export class WorkItemTrackingHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
    /**
     * Get a batch of work item links
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of links.
     * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemLinksBatch>
     */
    getReportingLinks(project?: string, types?: string[], watermark?: number, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemLinksBatch>;
    /**
     * Get a batch of work item revisions with the option of including deleted items
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted - Specify if the deleted item should be returned.
     * @param {string[]} fields - A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {boolean} includeIdentityRef - Return an identity reference instead of a string value for identity fields.
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsGet(project?: string, includeDeleted?: boolean, fields?: string[], types?: string[], watermark?: number, startDateTime?: Date, includeIdentityRef?: boolean): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
    /**
     * Get a batch of work item revisions
     *
     * @param {Contracts.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
     * @param {string} project - Project ID or project name
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @return IPromise<Contracts.ReportingWorkItemRevisionsBatch>
     */
    readReportingRevisionsPost(filter: Contracts.ReportingWorkItemRevisionsFilter, project?: string, watermark?: number, startDateTime?: Date): IPromise<Contracts.ReportingWorkItemRevisionsBatch>;
}
export class WorkItemTrackingHttpClient extends WorkItemTrackingHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkItemTrackingHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkItemTrackingHttpClient4;
}
declare module "TFS/WorkItemTracking/Services" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
import WitContracts = require("TFS/WorkItemTracking/Contracts");
/**
* Host service for opening the work item form
*/
export interface IWorkItemFormNavigationService {
    /**
    * Opens the specified work item. The host page will display the work item in a dialog,
    * or it may update the current page view, depending on the current page.
    *
    * @param {number} workItemId The id of the work item to open
    * @param {boolean} openInNewTab (Optional) If true, opens the work item in a new tab. Default is false
    * @returns {IPromise<WorkItem>} A promise that returns a work item when the work item dialog is closed. If openInNewTab is true, the promise will return null
    */
    openWorkItem(workItemId: number, openInNewTab?: boolean): IPromise<WitContracts.WorkItem>;
    /**
    * Opens a new work item of the specified type. The host page will display the new work item in a dialog,
    * or it may update the current page view, depending on the current page.
    *
    * @param {string} workItemTypeName The name of the work item type to open
    * @param {IDictionaryStringTo<Object>} initialValues (Optional) A dictionary of any initial field values to set after opening the new work item.
    * @returns {IPromise<WorkItem>} A promise that returns a work item when the work item dialog is closed. If the workitem was not saved before closing the dialog, the promise will return null
    */
    openNewWorkItem(workItemTypeName: string, initialValues?: IDictionaryStringTo<Object>): IPromise<WitContracts.WorkItem>;
}
/**
* Host service for opening the work item form
*/
export module WorkItemFormNavigationService {
    var contributionId: string;
    /**
    * Get an instance of the host work item service
    *
    * @param webContext Optional web context to scope the service to
    */
    function getService(webContext?: Contracts_Platform.WebContext): IPromise<IWorkItemFormNavigationService>;
}
/**
* Host service for interacting with the currently active work item form (work item currently displayed in the UI).
* Form service depends on the current active work item context. Will throw an error when there is no open work item.
*/
export interface IWorkItemFormService {
    /**
    * Gets id of active work item.
    *
    * @returns {IPromise<number>} A promise that returns the active work item id.
    */
    getId(): IPromise<number>;
    /**
    * Gets active work item's latest revision.
    *
    * @returns {IPromise<number>} A promise that returns the active work item's latest revision id.
    */
    getRevision(): IPromise<number>;
    /**
    * Gets active work item fields.
    *
    * @returns {IPromise<WorkItemField[]>} A promise that returns an array of work item field.
    */
    getFields(): IPromise<WitContracts.WorkItemField[]>;
    /**
    * Gets field value of the active work item.
    *
    * @param {string} fieldReferenceName Field reference name
    * @param {boolean} returnOriginalValue (Optional) If false, gets unsaved field values. Default is false.
    * @returns {IPromise<Object>} A promise that returns the value of the work item field.
    */
    getFieldValue(fieldReferenceName: string, returnOriginalValue?: boolean): IPromise<Object>;
    /**
    * Gets field values of the active work item.
    *
    * @param {string[]} fieldReferenceNames An arrary of field reference names
    * @param {boolean} returnOriginalValue (Optional) If false, gets unsaved field values. Default is false.
    * @returns {IPromise<IDictionaryStringTo<Object>>} A promise that returns a dictionary of work item field values (refName to values pairs).
    */
    getFieldValues(fieldReferenceNames: string[], returnOriginalValue?: boolean): IPromise<IDictionaryStringTo<Object>>;
    /**
    * Sets field value of the active work item.
    *
    * @param {string} fieldReferenceName Field reference name
    * @param {Object} value Field value
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether the function completed successfully.
    */
    setFieldValue(fieldReferenceName: string, value: Object): IPromise<boolean>;
    /**
    * Sets field values of the active work item.
    *
    * @param {IDictionaryStringTo<Object>} fields A dictionary of field refName/values
    * @returns {IPromise<IDictionaryStringTo<boolean>>} A promise that returns a dictionary of field value update results (refName to results pairs).
    */
    setFieldValues(fields: IDictionaryStringTo<Object>): IPromise<IDictionaryStringTo<boolean>>;
    /**
    * Gets the allowed values for the field on the active work item.
    *
    * @param {string} fieldReferenceName Field reference name
    * @returns {IPromise<object[]>} A promise that returns an array of allowed values.
    */
    getAllowedFieldValues(fieldReferenceName: string): IPromise<Object[]>;
    /**
    * Returns true if the active work item is dirty.
    *
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether the active work item is dirty.
    */
    isDirty(): IPromise<boolean>;
    /**
    * Returns true if the active work item is new.
    *
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether the active work item is new.
    */
    isNew(): IPromise<boolean>;
    /**
    * Returns true if the active work item fields are all valid.
    *
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether all field values are valid.
    */
    isValid(): IPromise<boolean>;
    /**
    * Marks the work item as invalid and disable saving the work item on the form.
    *
    * @param {string} errorMessage A custom error message that would be shown on top of the work item form.
    */
    setError(errorMessage: string): IPromise<void>;
    /**
    * Clears the error set by setError method and unblocks saving of the work item in the form.
    */
    clearError(): IPromise<void>;
    /**
    * Saves the active work item.
    *
    * @returns {IPromise<void>} A promise that is resolved if the work item is saved successfully and rejected if it fails.
    */
    save(): IPromise<void>;
    /**
    * Refreshes the active work item. Will prompt the user if the work item is dirty.
    */
    refresh(): IPromise<void>;
    /**
    * Reset any changes in the active work item. Will prompt the user to confirm.
    */
    reset(): IPromise<void>;
    /**
    * Gets invalid fields who are in an invalid state according to the work item rules. These fields need to be changed before the work item can be saved.
    *
    * @returns {IPromise<WorkItemField[]>} A promise that returns an array of invalid work item fields.
    */
    getInvalidFields(): IPromise<WitContracts.WorkItemField[]>;
    /**
    * Adds links of another work items or artifacts (e.g. commits, hyperlinks) to the work item. Attachment is currently not supported by this function.
    *
    * @param {WorkItemRelation[]} workItemRelations Work item links to add.
    * @returns {IPromise<void>} An empty promise.
    */
    addWorkItemRelations(workItemRelations: WitContracts.WorkItemRelation[]): IPromise<void>;
    /**
    * Removes links to another work items or artifacts (e.g. commits, hyperlinks) from the work item. Attachment is currently not supported by this function.
    *
    * @param {WorkItemRelation[]} workItemRelations Work item links to remove.
    * @returns {IPromise<void>} An empty promise.
    */
    removeWorkItemRelations(workItemRelations: WitContracts.WorkItemRelation[]): IPromise<void>;
    /**
    * Returns an array of  work item links to other work items or artifacts (e.g. commits, hyperlinks). Attachment is currently not supported by this function.
    *
    * @returns {IPromise<WorkItemRelation[]>} A promise that returns an array of work item relations of active work item.
    */
    getWorkItemRelations(): IPromise<WitContracts.WorkItemRelation[]>;
    /**
    * Returns the REST API url of the specified work item resource.
    *
    * @param {number} workItemId Id of the work item that the resource url is requested for.
    * @returns {IPromise<string>} A promise that returns the requested resource url of the work item.
    */
    getWorkItemResourceUrl(workItemId: number): IPromise<string>;
    /**
    * Returns an array of work item relation types.
    *
    * @returns {IPromise<WorkItemRelationType[]>} A promise that returns an array of work item relation types.
    */
    getWorkItemRelationTypes(): IPromise<WitContracts.WorkItemRelationType[]>;
    /**
    * Returns true if the active work item available.
    *
    * @returns {IPromise<boolean>} A promise that returns a boolean value indicates whether the active work item is available.
    */
    hasActiveWorkItem(): IPromise<boolean>;
    /**
    * @deprecated: Please use save
    */
    beginSaveWorkItem(successCallback: () => void, errorCallback: () => void): IPromise<void>;
}
export module WorkItemFormService {
    var contributionId: string;
    /**
    * Get an instance of the host work item service
    *
    * @param webContext Optional web context to scope the service to
    */
    function getService(webContext?: Contracts_Platform.WebContext): IPromise<IWorkItemFormService>;
}
}
declare module "TFS/WorkItemTracking/UIContracts" {
import WitContracts = require("TFS/WorkItemTracking/Contracts");
/**
 * A query result in the WIT UI
 */
export interface QueryResultWorkItemContext {
    columns: string[];
    rows: any[];
    query: WitContracts.QueryHierarchyItem;
}
/**
 * A work item query in the WIT UI
 */
export interface WorkItemQueryContext {
    query: WitContracts.QueryHierarchyItem;
}
}
declare module "TFS/Work/Contracts" {
import System_Contracts = require("VSS/Common/Contracts/System");
import TFS_WorkItemTracking_Contracts = require("TFS/WorkItemTracking/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface Activity {
    capacityPerDay: number;
    name: string;
}
export interface attribute {
}
export interface BacklogColumn {
    columnFieldReference: TFS_WorkItemTracking_Contracts.WorkItemFieldReference;
    width: number;
}
export interface BacklogConfiguration {
    /**
     * Behavior/type field mapping
     */
    backlogFields: BacklogFields;
    /**
     * Bugs behavior
     */
    bugsBehavior: BugsBehavior;
    /**
     * Hidden Backlog
     */
    hiddenBacklogs: string[];
    /**
     * Portfolio backlog descriptors
     */
    portfolioBacklogs: BacklogLevelConfiguration[];
    /**
     * Requirement backlog
     */
    requirementBacklog: BacklogLevelConfiguration;
    /**
     * Task backlog
     */
    taskBacklog: BacklogLevelConfiguration;
    url: string;
    /**
     * Mapped states for work item types
     */
    workItemTypeMappedStates: WorkItemTypeStateInfo[];
}
export interface BacklogFields {
    /**
     * Field Type (e.g. Order, Activity) to Field Reference Name map
     */
    typeFields: {
        [key: string]: string;
    };
}
/**
 * Contract representing a backlog level
 */
export interface BacklogLevel {
    /**
     * Reference name of the corresponding WIT category
     */
    categoryReferenceName: string;
    /**
     * Plural name for the backlog level
     */
    pluralName: string;
    /**
     * Collection of work item states that are included in the plan. The server will filter to only these work item types.
     */
    workItemStates: string[];
    /**
     * Collection of valid workitem type names for the given backlog level
     */
    workItemTypes: string[];
}
export interface BacklogLevelConfiguration {
    /**
     * List of fields to include in Add Panel
     */
    addPanelFields: TFS_WorkItemTracking_Contracts.WorkItemFieldReference[];
    /**
     * Color for the backlog level
     */
    color: string;
    /**
     * Default list of columns for the backlog
     */
    columnFields: BacklogColumn[];
    /**
     * Defaulst Work Item Type for the backlog
     */
    defaultWorkItemType: TFS_WorkItemTracking_Contracts.WorkItemTypeReference;
    /**
     * Backlog Id (for Legacy Backlog Level from process config it can be categoryref name)
     */
    id: string;
    /**
     * Backlog Name
     */
    name: string;
    /**
     * Backlog Rank (Taskbacklog is 0)
     */
    rank: number;
    /**
     * Max number of work items to show in the given backlog
     */
    workItemCountLimit: number;
    /**
     * Work Item types participating in this backlog as known by the project/Process, can be overridden by team settings for bugs
     */
    workItemTypes: TFS_WorkItemTracking_Contracts.WorkItemTypeReference[];
}
export interface Board extends BoardReference {
    _links: any;
    allowedMappings: {
        [key: string]: {
            [key: string]: string[];
        };
    };
    canEdit: boolean;
    columns: BoardColumn[];
    fields: BoardFields;
    isValid: boolean;
    revision: number;
    rows: BoardRow[];
}
export interface BoardCardRuleSettings {
    _links: any;
    rules: {
        [key: string]: Rule[];
    };
    url: string;
}
export interface BoardCardSettings {
    cards: {
        [key: string]: FieldSetting[];
    };
}
export interface BoardChart extends BoardChartReference {
    /**
     * The links for the resource
     */
    _links: any;
    /**
     * The settings for the resource
     */
    settings: {
        [key: string]: any;
    };
}
export interface BoardChartReference {
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface BoardColumn {
    columnType: BoardColumnType;
    description: string;
    id: string;
    isSplit: boolean;
    itemLimit: number;
    name: string;
    stateMappings: {
        [key: string]: string;
    };
}
export enum BoardColumnType {
    Incoming = 0,
    InProgress = 1,
    Outgoing = 2,
}
export interface BoardFields {
    columnField: FieldReference;
    doneField: FieldReference;
    rowField: FieldReference;
}
export interface BoardReference {
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface BoardRow {
    id: string;
    name: string;
}
export interface BoardSuggestedValue {
    name: string;
}
export interface BoardUserSettings {
    autoRefreshState: boolean;
}
/**
 * The behavior of the work item types that are in the work item category specified in the BugWorkItems section in the Process Configuration
 */
export enum BugsBehavior {
    Off = 0,
    AsRequirements = 1,
    AsTasks = 2,
}
/**
 * Expected data from PATCH
 */
export interface CapacityPatch {
    activities: Activity[];
    daysOff: DateRange[];
}
/**
 * Card settings, such as fields and rules
 */
export interface CardFieldSettings {
    /**
     * A collection of field information of additional fields on cards. The index in the collection signifies the order of the field among the additional fields. Currently unused. Should be used with User Story 691539: Card setting: additional fields
     */
    additionalFields: FieldInfo[];
    /**
     * Display format for the assigned to field
     */
    assignedToDisplayFormat: IdentityDisplayFormat;
    /**
     * A collection of field information of rendered core fields on cards.
     */
    coreFields: FieldInfo[];
    /**
     * Flag indicating whether to show assigned to field on cards. When true, AssignedToDisplayFormat will determine how the field will be displayed
     */
    showAssignedTo: boolean;
    /**
     * Flag indicating whether to show empty fields on cards
     */
    showEmptyFields: boolean;
    /**
     * Flag indicating whether to show ID on cards
     */
    showId: boolean;
    /**
     * Flag indicating whether to show state field on cards
     */
    showState: boolean;
    /**
     * Flag indicating whether to show tags on cards
     */
    showTags: boolean;
}
/**
 * Card settings, such as fields and rules
 */
export interface CardSettings {
    /**
     * A collection of settings related to rendering of fields on cards
     */
    fields: CardFieldSettings;
}
/**
 * Details about a given backlog category
 */
export interface CategoryConfiguration {
    /**
     * Name
     */
    name: string;
    /**
     * Category Reference Name
     */
    referenceName: string;
    /**
     * Work item types for the backlog category
     */
    workItemTypes: TFS_WorkItemTracking_Contracts.WorkItemTypeReference[];
}
export interface CreatePlan {
    /**
     * Description of the plan
     */
    description: string;
    /**
     * Name of the plan to create.
     */
    name: string;
    /**
     * Plan properties.
     */
    properties: any;
    /**
     * Type of plan to create.
     */
    type: PlanType;
}
export interface DateRange {
    /**
     * End of the date range.
     */
    end: Date;
    /**
     * Start of the date range.
     */
    start: Date;
}
/**
 * Data contract for Data of Delivery View
 */
export interface DeliveryViewData extends PlanViewData {
    /**
     * Work item child id to parenet id map
     */
    childIdToParentIdMap: {
        [key: number]: number;
    };
    /**
     * Filter criteria status of the timeline
     */
    criteriaStatus: TimelineCriteriaStatus;
    /**
     * The end date of the delivery view data
     */
    endDate: Date;
    /**
     * The start date for the delivery view data
     */
    startDate: Date;
    /**
     * All the team data
     */
    teams: TimelineTeamData[];
}
/**
 * Collection of properties, specific to the DeliveryTimelineView
 */
export interface DeliveryViewPropertyCollection extends PlanPropertyCollection {
    /**
     * Card settings
     */
    cardSettings: CardSettings;
    /**
     * Field criteria
     */
    criteria: FilterClause[];
    /**
     * Markers. Will be missing/null if there are no markers.
     */
    markers: Marker[];
    /**
     * Team backlog mappings
     */
    teamBacklogMappings: TeamBacklogMapping[];
}
/**
 * Object bag storing the set of permissions relevant to this plan
 */
export interface FieldInfo {
    /**
     * The additional field display name
     */
    displayName: string;
    /**
     * The additional field type
     */
    fieldType: FieldType;
    /**
     * Indicates if the field definition is for an identity field.
     */
    isIdentity: boolean;
    /**
     * The additional field reference name
     */
    referenceName: string;
}
/**
 * An abstracted reference to a field
 */
export interface FieldReference {
    /**
     * fieldRefName for the field
     */
    referenceName: string;
    /**
     * Full http link to more information about the field
     */
    url: string;
}
export interface FieldSetting {
}
export enum FieldType {
    String = 0,
    PlainText = 1,
    Integer = 2,
    DateTime = 3,
    TreePath = 4,
    Boolean = 5,
    Double = 6,
}
export interface FilterClause {
    fieldName: string;
    index: number;
    logicalOperator: string;
    operator: string;
    value: string;
}
export interface FilterGroup {
    end: number;
    level: number;
    start: number;
}
/**
 * Enum for the various modes of identity picker
 */
export enum IdentityDisplayFormat {
    /**
     * Display avatar only
     */
    AvatarOnly = 0,
    /**
     * Display Full name only
     */
    FullName = 1,
    /**
     * Display Avatar and Full name
     */
    AvatarAndFullName = 2,
}
/**
 * Client serialization contract for Delivery Timeline Markers.
 */
export interface Marker {
    /**
     * Color associated with the marker.
     */
    color: string;
    /**
     * Where the marker should be displayed on the timeline.
     */
    date: Date;
    /**
     * Label/title for the marker.
     */
    label: string;
}
export interface Member {
    displayName: string;
    id: string;
    imageUrl: string;
    uniqueName: string;
    url: string;
}
export interface ParentChildWIMap {
    childWorkItemIds: number[];
    id: number;
    title: string;
}
/**
 * Data contract for the plan definition
 */
export interface Plan {
    /**
     * Identity that created this plan. Defaults to null for records before upgrading to ScaledAgileViewComponent4.
     */
    createdByIdentity: VSS_Common_Contracts.IdentityRef;
    /**
     * Date when the plan was created
     */
    createdDate: Date;
    /**
     * Description of the plan
     */
    description: string;
    /**
     * Id of the plan
     */
    id: string;
    /**
     * Identity that last modified this plan. Defaults to null for records before upgrading to ScaledAgileViewComponent4.
     */
    modifiedByIdentity: VSS_Common_Contracts.IdentityRef;
    /**
     * Date when the plan was last modified. Default to CreatedDate when the plan is first created.
     */
    modifiedDate: Date;
    /**
     * Name of the plan
     */
    name: string;
    /**
     * The PlanPropertyCollection instance associated with the plan. These are dependent on the type of the plan. For example, DeliveryTimelineView, it would be of type DeliveryViewPropertyCollection.
     */
    properties: any;
    /**
     * Revision of the plan. Used to safeguard users from overwriting each other's changes.
     */
    revision: number;
    /**
     * Type of the plan
     */
    type: PlanType;
    /**
     * The resource url to locate the plan via rest api
     */
    url: string;
    /**
     * Bit flag indicating set of permissions a user has to the plan.
     */
    userPermissions: PlanUserPermissions;
}
/**
 * Metadata about a plan definition that is stored in favorites service
 */
export interface PlanMetadata {
    /**
     * Identity of the creator of the plan
     */
    createdByIdentity: VSS_Common_Contracts.IdentityRef;
    /**
     * Description of plan
     */
    description: string;
    /**
     * Last modified date of the plan
     */
    modifiedDate: Date;
    /**
     * Bit flag indicating set of permissions a user has to the plan.
     */
    userPermissions: PlanUserPermissions;
}
/**
 * Base class for properties of a scaled agile plan
 */
export interface PlanPropertyCollection {
}
/**
 * Enum for the various types of plans
 */
export enum PlanType {
    DeliveryTimelineView = 0,
}
/**
 * Flag for permissions a user can have for this plan.
 */
export enum PlanUserPermissions {
    /**
     * None
     */
    None = 0,
    /**
     * Permission to view this plan.
     */
    View = 1,
    /**
     * Permission to update this plan.
     */
    Edit = 2,
    /**
     * Permission to delete this plan.
     */
    Delete = 4,
    /**
     * Permission to manage this plan.
     */
    Manage = 8,
    /**
     * Full control permission for this plan.
     */
    AllPermissions = 15,
}
/**
 * Base class for plan view data contracts. Anything common goes here.
 */
export interface PlanViewData {
    id: string;
    revision: number;
}
/**
 * Process Configurations for the project
 */
export interface ProcessConfiguration {
    /**
     * Details about bug work items
     */
    bugWorkItems: CategoryConfiguration;
    /**
     * Details about portfolio backlogs
     */
    portfolioBacklogs: CategoryConfiguration[];
    /**
     * Details of requirement backlog
     */
    requirementBacklog: CategoryConfiguration;
    /**
     * Details of task backlog
     */
    taskBacklog: CategoryConfiguration;
    /**
     * Type fields for the process configuration
     */
    typeFields: {
        [key: string]: TFS_WorkItemTracking_Contracts.WorkItemFieldReference;
    };
    url: string;
}
export interface Rule {
    clauses: FilterClause[];
    filter: string;
    isEnabled: string;
    name: string;
    settings: attribute;
}
/**
 * Mapping of teams to the corresponding work item category
 */
export interface TeamBacklogMapping {
    categoryReferenceName: string;
    teamId: string;
}
/**
 * Represents a single TeamFieldValue
 */
export interface TeamFieldValue {
    includeChildren: boolean;
    value: string;
}
/**
 * Essentially a collection of team field values
 */
export interface TeamFieldValues extends TeamSettingsDataContractBase {
    /**
     * The default team field value
     */
    defaultValue: string;
    /**
     * Shallow ref to the field being used as a team field
     */
    field: FieldReference;
    /**
     * Collection of all valid team field values
     */
    values: TeamFieldValue[];
}
/**
 * Expected data from PATCH
 */
export interface TeamFieldValuesPatch {
    defaultValue: string;
    values: TeamFieldValue[];
}
export interface TeamIterationAttributes {
    finishDate: Date;
    startDate: Date;
    timeFrame: TimeFrame;
}
/**
 * Represents capacity for a specific team member
 */
export interface TeamMemberCapacity extends TeamSettingsDataContractBase {
    /**
     * Collection of capacities associated with the team member
     */
    activities: Activity[];
    /**
     * The days off associated with the team member
     */
    daysOff: DateRange[];
    /**
     * Shallow Ref to the associated team member
     */
    teamMember: Member;
}
/**
 * Data contract for TeamSettings
 */
export interface TeamSetting extends TeamSettingsDataContractBase {
    /**
     * Backlog Iteration
     */
    backlogIteration: TeamSettingsIteration;
    /**
     * Information about categories that are visible on the backlog.
     */
    backlogVisibilities: {
        [key: string]: boolean;
    };
    /**
     * BugsBehavior (Off, AsTasks, AsRequirements, ...)
     */
    bugsBehavior: BugsBehavior;
    /**
     * Default Iteration, the iteration used when creating a new work item on the queries page.
     */
    defaultIteration: TeamSettingsIteration;
    /**
     * Default Iteration macro (if any)
     */
    defaultIterationMacro: string;
    /**
     * Days that the team is working
     */
    workingDays: System_Contracts.DayOfWeek[];
}
/**
 * Base class for TeamSettings data contracts. Anything common goes here.
 */
export interface TeamSettingsDataContractBase {
    /**
     * Collection of links relevant to resource
     */
    _links: any;
    /**
     * Full http link to the resource
     */
    url: string;
}
export interface TeamSettingsDaysOff extends TeamSettingsDataContractBase {
    daysOff: DateRange[];
}
export interface TeamSettingsDaysOffPatch {
    daysOff: DateRange[];
}
/**
 * Represents a shallow ref for a single iteration
 */
export interface TeamSettingsIteration extends TeamSettingsDataContractBase {
    /**
     * Attributes such as start and end date
     */
    attributes: TeamIterationAttributes;
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Relative path of the iteration
     */
    path: string;
}
/**
 * Data contract for what we expect to receive when PATCH
 */
export interface TeamSettingsPatch {
    backlogIteration: string;
    backlogVisibilities: {
        [key: string]: boolean;
    };
    bugsBehavior: BugsBehavior;
    defaultIteration: string;
    defaultIterationMacro: string;
    workingDays: System_Contracts.DayOfWeek[];
}
export enum TimeFrame {
    Past = 0,
    Current = 1,
    Future = 2,
}
export interface TimelineCriteriaStatus {
    message: string;
    type: TimelineCriteriaStatusCode;
}
export enum TimelineCriteriaStatusCode {
    /**
     * No error - filter is good.
     */
    OK = 0,
    /**
     * One of the filter clause is invalid.
     */
    InvalidFilterClause = 1,
    /**
     * Unknown error.
     */
    Unknown = 2,
}
export interface TimelineIterationStatus {
    message: string;
    type: TimelineIterationStatusCode;
}
export enum TimelineIterationStatusCode {
    /**
     * No error - iteration data is good.
     */
    OK = 0,
    /**
     * This iteration overlaps with another iteration, no data is returned for this iteration.
     */
    IsOverlapping = 1,
}
export interface TimelineTeamData {
    /**
     * Backlog matching the mapped backlog associated with this team.
     */
    backlog: BacklogLevel;
    /**
     * The field reference names of the work item data
     */
    fieldReferenceNames: string[];
    /**
     * The id of the team
     */
    id: string;
    /**
     * Was iteration and work item data retrieved for this team. <remarks> Teams with IsExpanded false have not had their iteration, work item, and field related data queried and will never contain this data. If true then these items are queried and, if there are items in the queried range, there will be data. </remarks>
     */
    isExpanded: boolean;
    /**
     * The iteration data, including the work items, in the queried date range.
     */
    iterations: TimelineTeamIteration[];
    /**
     * The name of the team
     */
    name: string;
    /**
     * The order by field name of this team
     */
    orderByField: string;
    /**
     * The field reference names of the partially paged work items, such as ID, WorkItemType
     */
    partiallyPagedFieldReferenceNames: string[];
    /**
     * The project id the team belongs team
     */
    projectId: string;
    /**
     * Status for this team.
     */
    status: TimelineTeamStatus;
    /**
     * The team field default value
     */
    teamFieldDefaultValue: string;
    /**
     * The team field name of this team
     */
    teamFieldName: string;
    /**
     * The team field values
     */
    teamFieldValues: TeamFieldValue[];
    /**
     * Colors for the work item types.
     */
    workItemTypeColors: WorkItemColor[];
}
export interface TimelineTeamIteration {
    /**
     * The end date of the iteration
     */
    finishDate: Date;
    /**
     * The iteration name
     */
    name: string;
    /**
     * All the partially paged workitems in this iteration.
     */
    partiallyPagedWorkItems: any[][];
    /**
     * The iteration path
     */
    path: string;
    /**
     * The start date of the iteration
     */
    startDate: Date;
    /**
     * The status of this iteration
     */
    status: TimelineIterationStatus;
    /**
     * The work items that have been paged in this iteration
     */
    workItems: any[][];
}
export interface TimelineTeamStatus {
    message: string;
    type: TimelineTeamStatusCode;
}
export enum TimelineTeamStatusCode {
    /**
     * No error - all data for team is good.
     */
    OK = 0,
    /**
     * Team does not exist or access is denied.
     */
    DoesntExistOrAccessDenied = 1,
    /**
     * Maximum number of teams was exceeded. No team data will be returned for this team.
     */
    MaxTeamsExceeded = 2,
    /**
     * Maximum number of team fields (ie Area paths) have been exceeded. No team data will be returned for this team.
     */
    MaxTeamFieldsExceeded = 3,
    /**
     * Backlog does not exist or is missing crucial information.
     */
    BacklogInError = 4,
    /**
     * Team field value is not set for this team. No team data will be returned for this team
     */
    MissingTeamFieldValue = 5,
    /**
     * Team does not have a single iteration with date range.
     */
    NoIterationsExist = 6,
}
export interface UpdatePlan {
    /**
     * Description of the plan
     */
    description: string;
    /**
     * Name of the plan to create.
     */
    name: string;
    /**
     * Plan properties.
     */
    properties: any;
    /**
     * Revision of the plan that was updated - the value used here should match the one the server gave the client in the Plan.
     */
    revision: number;
    /**
     * Type of the plan
     */
    type: PlanType;
}
/**
 * Work item color and icon.
 */
export interface WorkItemColor {
    icon: string;
    primaryColor: string;
    workItemTypeName: string;
}
export interface WorkItemTypeStateInfo {
    /**
     * State name to state category map
     */
    states: {
        [key: string]: string;
    };
    /**
     * Work Item type name
     */
    workItemTypeName: string;
}
export var TypeInfo: {
    BacklogConfiguration: any;
    Board: any;
    BoardColumn: any;
    BoardColumnType: {
        enumValues: {
            "incoming": number;
            "inProgress": number;
            "outgoing": number;
        };
    };
    BugsBehavior: {
        enumValues: {
            "off": number;
            "asRequirements": number;
            "asTasks": number;
        };
    };
    CapacityPatch: any;
    CardFieldSettings: any;
    CardSettings: any;
    CreatePlan: any;
    DateRange: any;
    DeliveryViewData: any;
    DeliveryViewPropertyCollection: any;
    FieldInfo: any;
    FieldType: {
        enumValues: {
            "string": number;
            "plainText": number;
            "integer": number;
            "dateTime": number;
            "treePath": number;
            "boolean": number;
            "double": number;
        };
    };
    IdentityDisplayFormat: {
        enumValues: {
            "avatarOnly": number;
            "fullName": number;
            "avatarAndFullName": number;
        };
    };
    Marker: any;
    Plan: any;
    PlanMetadata: any;
    PlanType: {
        enumValues: {
            "deliveryTimelineView": number;
        };
    };
    PlanUserPermissions: {
        enumValues: {
            "none": number;
            "view": number;
            "edit": number;
            "delete": number;
            "manage": number;
            "allPermissions": number;
        };
    };
    TeamIterationAttributes: any;
    TeamMemberCapacity: any;
    TeamSetting: any;
    TeamSettingsDaysOff: any;
    TeamSettingsDaysOffPatch: any;
    TeamSettingsIteration: any;
    TeamSettingsPatch: any;
    TimeFrame: {
        enumValues: {
            "past": number;
            "current": number;
            "future": number;
        };
    };
    TimelineCriteriaStatus: any;
    TimelineCriteriaStatusCode: {
        enumValues: {
            "oK": number;
            "invalidFilterClause": number;
            "unknown": number;
        };
    };
    TimelineIterationStatus: any;
    TimelineIterationStatusCode: {
        enumValues: {
            "oK": number;
            "isOverlapping": number;
        };
    };
    TimelineTeamData: any;
    TimelineTeamIteration: any;
    TimelineTeamStatus: any;
    TimelineTeamStatusCode: {
        enumValues: {
            "oK": number;
            "doesntExistOrAccessDenied": number;
            "maxTeamsExceeded": number;
            "maxTeamFieldsExceeded": number;
            "backlogInError": number;
            "missingTeamFieldValue": number;
            "noIterationsExist": number;
        };
    };
    UpdatePlan: any;
};
}
declare module "TFS/Work/RestClient" {
import Contracts = require("TFS/Work/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CommonMethods2To4_1 extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    protected backlogconfigurationApiVersion: string;
    protected boardcolumnsApiVersion: string;
    protected boardrowsApiVersion: string;
    protected boardsApiVersion: string;
    protected capacitiesApiVersion: string;
    protected cardrulesettingsApiVersion: string;
    protected cardsettingsApiVersion: string;
    protected chartsApiVersion: string;
    protected columnsApiVersion: string;
    protected iterationsApiVersion: string;
    protected processconfigurationApiVersion: string;
    protected rowsApiVersion: string;
    protected teamdaysoffApiVersion: string;
    protected teamfieldvaluesApiVersion: string;
    protected teamsettingsApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Update a team's settings
     *
     * @param {Contracts.TeamSettingsPatch} teamSettingsPatch - TeamSettings changes
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamSetting>
     */
    updateTeamSettings(teamSettingsPatch: Contracts.TeamSettingsPatch, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamSetting>;
    /**
     * Get a team's settings
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamSetting>
     */
    getTeamSettings(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamSetting>;
    /**
     * Update team field values
     *
     * @param {Contracts.TeamFieldValuesPatch} patch
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamFieldValues>
     */
    updateTeamFieldValues(patch: Contracts.TeamFieldValuesPatch, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamFieldValues>;
    /**
     * Get a collection of team field values
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamFieldValues>
     */
    getTeamFieldValues(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamFieldValues>;
    /**
     * Set a team's days off for an iteration
     *
     * @param {Contracts.TeamSettingsDaysOffPatch} daysOffPatch - Team's days off patch containting a list of start and end dates
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     * @return IPromise<Contracts.TeamSettingsDaysOff>
     */
    updateTeamDaysOff(daysOffPatch: Contracts.TeamSettingsDaysOffPatch, teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamSettingsDaysOff>;
    /**
     * Get team's days off for an iteration
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     * @return IPromise<Contracts.TeamSettingsDaysOff>
     */
    getTeamDaysOff(teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamSettingsDaysOff>;
    /**
     * Update rows on a board
     *
     * @param {Contracts.BoardRow[]} boardRows - List of board rows to update
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Name or ID of the specific board
     * @return IPromise<Contracts.BoardRow[]>
     */
    updateBoardRows(boardRows: Contracts.BoardRow[], teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardRow[]>;
    /**
     * Get rows on a board
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Name or ID of the specific board
     * @return IPromise<Contracts.BoardRow[]>
     */
    getBoardRows(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardRow[]>;
    /**
     * @exemptedapi
     * [Preview API] Get process configuration
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ProcessConfiguration>
     */
    getProcessConfiguration(project: string): IPromise<Contracts.ProcessConfiguration>;
    /**
     * Add an iteration to the team
     *
     * @param {Contracts.TeamSettingsIteration} iteration - Iteration to add
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamSettingsIteration>
     */
    postTeamIteration(iteration: Contracts.TeamSettingsIteration, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamSettingsIteration>;
    /**
     * Get a team's iterations using timeframe filter
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} timeframe - A filter for which iterations are returned based on relative time
     * @return IPromise<Contracts.TeamSettingsIteration[]>
     */
    getTeamIterations(teamContext: TFS_Core_Contracts.TeamContext, timeframe?: string): IPromise<Contracts.TeamSettingsIteration[]>;
    /**
     * Get team's iteration by iterationId
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - ID of the iteration
     * @return IPromise<Contracts.TeamSettingsIteration>
     */
    getTeamIteration(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<Contracts.TeamSettingsIteration>;
    /**
     * Delete a team's iteration by iterationId
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - ID of the iteration
     * @return IPromise<void>
     */
    deleteTeamIteration(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<void>;
    /**
     * Update columns on a board
     *
     * @param {Contracts.BoardColumn[]} boardColumns - List of board columns to update
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Name or ID of the specific board
     * @return IPromise<Contracts.BoardColumn[]>
     */
    updateBoardColumns(boardColumns: Contracts.BoardColumn[], teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardColumn[]>;
    /**
     * Get columns on a board
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Name or ID of the specific board
     * @return IPromise<Contracts.BoardColumn[]>
     */
    getBoardColumns(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardColumn[]>;
    /**
     * Update a board chart
     *
     * @param {Contracts.BoardChart} chart
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either board's backlog level name (Eg:"Stories") or Id
     * @param {string} name - The chart name
     * @return IPromise<Contracts.BoardChart>
     */
    updateBoardChart(chart: Contracts.BoardChart, teamContext: TFS_Core_Contracts.TeamContext, board: string, name: string): IPromise<Contracts.BoardChart>;
    /**
     * Get board charts
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either board's backlog level name (Eg:"Stories") or Id
     * @return IPromise<Contracts.BoardChartReference[]>
     */
    getBoardCharts(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardChartReference[]>;
    /**
     * Get a board chart
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either board's backlog level name (Eg:"Stories") or Id
     * @param {string} name - The chart name
     * @return IPromise<Contracts.BoardChart>
     */
    getBoardChart(teamContext: TFS_Core_Contracts.TeamContext, board: string, name: string): IPromise<Contracts.BoardChart>;
    /**
     * Update board card settings for the board id or board by name
     *
     * @param {Contracts.BoardCardSettings} boardCardSettingsToSave
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardSettings>
     */
    updateBoardCardSettings(boardCardSettingsToSave: Contracts.BoardCardSettings, teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardSettings>;
    /**
     * Get board card settings for the board id or board by name
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardSettings>
     */
    getBoardCardSettings(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardSettings>;
    /**
     * Update board card Rule settings for the board id or board by name
     *
     * @param {Contracts.BoardCardRuleSettings} boardCardRuleSettings
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardRuleSettings>
     */
    updateBoardCardRuleSettings(boardCardRuleSettings: Contracts.BoardCardRuleSettings, teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardRuleSettings>;
    /**
     * Get board card Rule settings for the board id or board by name
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardRuleSettings>
     */
    getBoardCardRuleSettings(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardRuleSettings>;
    /**
     * Update a team member's capacity
     *
     * @param {Contracts.CapacityPatch} patch - Updated capacity
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     * @param {string} teamMemberId - ID of the team member
     * @return IPromise<Contracts.TeamMemberCapacity>
     */
    updateCapacity(patch: Contracts.CapacityPatch, teamContext: TFS_Core_Contracts.TeamContext, iterationId: string, teamMemberId: string): IPromise<Contracts.TeamMemberCapacity>;
    /**
     * Replace a team's capacity
     *
     * @param {Contracts.TeamMemberCapacity[]} capacities - Team capacity to replace
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     * @return IPromise<Contracts.TeamMemberCapacity[]>
     */
    replaceCapacities(capacities: Contracts.TeamMemberCapacity[], teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamMemberCapacity[]>;
    /**
     * Get a team member's capacity
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     * @param {string} teamMemberId - ID of the team member
     * @return IPromise<Contracts.TeamMemberCapacity>
     */
    getCapacity(teamContext: TFS_Core_Contracts.TeamContext, iterationId: string, teamMemberId: string): IPromise<Contracts.TeamMemberCapacity>;
    /**
     * Get a team's capacity
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     * @return IPromise<Contracts.TeamMemberCapacity[]>
     */
    getCapacities(teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamMemberCapacity[]>;
    /**
     * Update board options
     *
     * @param {{ [key: string] : string; }} options - options to updated
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - identifier for board, either category plural name (Eg:"Stories") or guid
     * @return IPromise<{ [key: string] : string; }>
     */
    setBoardOptions(options: {
        [key: string]: string;
    }, teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<{
        [key: string]: string;
    }>;
    /**
     * Get boards
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.BoardReference[]>
     */
    getBoards(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.BoardReference[]>;
    /**
     * Get board
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - identifier for board, either board's backlog level name (Eg:"Stories") or Id
     * @return IPromise<Contracts.Board>
     */
    getBoard(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<Contracts.Board>;
    /**
     * Get available board rows in a project
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BoardSuggestedValue[]>
     */
    getRowSuggestedValues(project?: string): IPromise<Contracts.BoardSuggestedValue[]>;
    /**
     * Get available board columns in a project
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BoardSuggestedValue[]>
     */
    getColumnSuggestedValues(project?: string): IPromise<Contracts.BoardSuggestedValue[]>;
    /**
     * Gets backlog configuration for a team
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.BacklogConfiguration>
     */
    getBacklogConfigurations(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.BacklogConfiguration>;
}
export class CommonMethods3To4_1 extends CommonMethods2To4_1 {
    protected boardparentsApiVersion: string;
    protected boardusersettingsApiVersion: string;
    protected deliverytimelineApiVersion: string;
    protected plansApiVersion: string;
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
    /**
     * Update the information for the specified plan
     *
     * @param {Contracts.UpdatePlan} updatedPlan - Plan definition to be updated
     * @param {string} project - Project ID or project name
     * @param {string} id - Identifier of the plan
     * @return IPromise<Contracts.Plan>
     */
    updatePlan(updatedPlan: Contracts.UpdatePlan, project: string, id: string): IPromise<Contracts.Plan>;
    /**
     * Get the information for all the plans configured for the given team
     *
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Plan[]>
     */
    getPlans(project: string): IPromise<Contracts.Plan[]>;
    /**
     * Get the information for the specified plan
     *
     * @param {string} project - Project ID or project name
     * @param {string} id - Identifier of the plan
     * @return IPromise<Contracts.Plan>
     */
    getPlan(project: string, id: string): IPromise<Contracts.Plan>;
    /**
     * Delete the specified plan
     *
     * @param {string} project - Project ID or project name
     * @param {string} id - Identifier of the plan
     * @return IPromise<void>
     */
    deletePlan(project: string, id: string): IPromise<void>;
    /**
     * Add a new plan for the team
     *
     * @param {Contracts.CreatePlan} postedPlan - Plan definition
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Plan>
     */
    createPlan(postedPlan: Contracts.CreatePlan, project: string): IPromise<Contracts.Plan>;
    /**
     * Get Delivery View Data
     *
     * @param {string} project - Project ID or project name
     * @param {string} id - Identifier for delivery view
     * @param {number} revision - Revision of the plan for which you want data. If the current plan is a different revision you will get an ViewRevisionMismatchException exception. If you do not supply a revision you will get data for the latest revision.
     * @param {Date} startDate - The start date of timeline
     * @param {Date} endDate - The end date of timeline
     * @return IPromise<Contracts.DeliveryViewData>
     */
    getDeliveryTimelineData(project: string, id: string, revision?: number, startDate?: Date, endDate?: Date): IPromise<Contracts.DeliveryViewData>;
    /**
     * @exemptedapi
     * [Preview API] Update board user settings for the board id
     *
     * @param {{ [key: string] : string; }} boardUserSettings
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardUserSettings>
     */
    updateBoardUserSettings(boardUserSettings: {
        [key: string]: string;
    }, teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardUserSettings>;
    /**
     * @exemptedapi
     * [Preview API] Get board user settings for a board id
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Board ID or Name
     * @return IPromise<Contracts.BoardUserSettings>
     */
    getBoardUserSettings(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardUserSettings>;
    /**
     * @exemptedapi
     * [Preview API] Returns the list of parent field filter model for the given list of workitem ids
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} childBacklogContextCategoryRefName
     * @param {number[]} workitemIds
     * @return IPromise<Contracts.ParentChildWIMap[]>
     */
    getBoardMappingParentItems(teamContext: TFS_Core_Contracts.TeamContext, childBacklogContextCategoryRefName: string, workitemIds: number[]): IPromise<Contracts.ParentChildWIMap[]>;
}
/**
 * @exemptedapi
 */
export class WorkHttpClient4_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient4 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient3_2 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient3_1 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient3 extends CommonMethods3To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient2_3 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient2_2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient2_1 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * @exemptedapi
 */
export class WorkHttpClient2 extends CommonMethods2To4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
export class WorkHttpClient extends WorkHttpClient4_1 {
    constructor(rootRequestPath: string, options?: VSS_WebApi.IVssHttpClientOptions);
}
/**
 * Gets an http client targeting the latest released version of the APIs.
 *
 * @return WorkHttpClient4
 */
export function getClient(options?: VSS_WebApi.IVssHttpClientOptions): WorkHttpClient4;
}
