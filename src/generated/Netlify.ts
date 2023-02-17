/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AccessTokenService } from './services/AccessTokenService';
import { AccountMembershipService } from './services/AccountMembershipService';
import { AccountTypeService } from './services/AccountTypeService';
import { AssetService } from './services/AssetService';
import { AssetPublicSignatureService } from './services/AssetPublicSignatureService';
import { AuditLogService } from './services/AuditLogService';
import { BuildService } from './services/BuildService';
import { BuildHookService } from './services/BuildHookService';
import { BuildLogMsgService } from './services/BuildLogMsgService';
import { DeployService } from './services/DeployService';
import { DeployedBranchService } from './services/DeployedBranchService';
import { DeployKeyService } from './services/DeployKeyService';
import { DnsZoneService } from './services/DnsZoneService';
import { EnvironmentVariablesService } from './services/EnvironmentVariablesService';
import { FileService } from './services/FileService';
import { FormService } from './services/FormService';
import { FunctionService } from './services/FunctionService';
import { HookService } from './services/HookService';
import { HookTypeService } from './services/HookTypeService';
import { MemberService } from './services/MemberService';
import { MetadataService } from './services/MetadataService';
import { PaymentMethodService } from './services/PaymentMethodService';
import { ServiceService } from './services/ServiceService';
import { ServiceInstanceService } from './services/ServiceInstanceService';
import { SiteService } from './services/SiteService';
import { SniCertificateService } from './services/SniCertificateService';
import { SnippetService } from './services/SnippetService';
import { SplitTestService } from './services/SplitTestService';
import { SubmissionService } from './services/SubmissionService';
import { TicketService } from './services/TicketService';
import { UserService } from './services/UserService';
import { XInternalService } from './services/XInternalService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Netlify {

    public readonly accessToken: AccessTokenService;
    public readonly accountMembership: AccountMembershipService;
    public readonly accountType: AccountTypeService;
    public readonly asset: AssetService;
    public readonly assetPublicSignature: AssetPublicSignatureService;
    public readonly auditLog: AuditLogService;
    public readonly build: BuildService;
    public readonly buildHook: BuildHookService;
    public readonly buildLogMsg: BuildLogMsgService;
    public readonly deploy: DeployService;
    public readonly deployedBranch: DeployedBranchService;
    public readonly deployKey: DeployKeyService;
    public readonly dnsZone: DnsZoneService;
    public readonly environmentVariables: EnvironmentVariablesService;
    public readonly file: FileService;
    public readonly form: FormService;
    public readonly function: FunctionService;
    public readonly hook: HookService;
    public readonly hookType: HookTypeService;
    public readonly member: MemberService;
    public readonly metadata: MetadataService;
    public readonly paymentMethod: PaymentMethodService;
    public readonly service: ServiceService;
    public readonly serviceInstance: ServiceInstanceService;
    public readonly site: SiteService;
    public readonly sniCertificate: SniCertificateService;
    public readonly snippet: SnippetService;
    public readonly splitTest: SplitTestService;
    public readonly submission: SubmissionService;
    public readonly ticket: TicketService;
    public readonly user: UserService;
    public readonly xInternal: XInternalService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.netlify.com/api/v1',
            VERSION: config?.VERSION ?? '2.12.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.accessToken = new AccessTokenService(this.request);
        this.accountMembership = new AccountMembershipService(this.request);
        this.accountType = new AccountTypeService(this.request);
        this.asset = new AssetService(this.request);
        this.assetPublicSignature = new AssetPublicSignatureService(this.request);
        this.auditLog = new AuditLogService(this.request);
        this.build = new BuildService(this.request);
        this.buildHook = new BuildHookService(this.request);
        this.buildLogMsg = new BuildLogMsgService(this.request);
        this.deploy = new DeployService(this.request);
        this.deployedBranch = new DeployedBranchService(this.request);
        this.deployKey = new DeployKeyService(this.request);
        this.dnsZone = new DnsZoneService(this.request);
        this.environmentVariables = new EnvironmentVariablesService(this.request);
        this.file = new FileService(this.request);
        this.form = new FormService(this.request);
        this.function = new FunctionService(this.request);
        this.hook = new HookService(this.request);
        this.hookType = new HookTypeService(this.request);
        this.member = new MemberService(this.request);
        this.metadata = new MetadataService(this.request);
        this.paymentMethod = new PaymentMethodService(this.request);
        this.service = new ServiceService(this.request);
        this.serviceInstance = new ServiceInstanceService(this.request);
        this.site = new SiteService(this.request);
        this.sniCertificate = new SniCertificateService(this.request);
        this.snippet = new SnippetService(this.request);
        this.splitTest = new SplitTestService(this.request);
        this.submission = new SubmissionService(this.request);
        this.ticket = new TicketService(this.request);
        this.user = new UserService(this.request);
        this.xInternal = new XInternalService(this.request);
    }
}

