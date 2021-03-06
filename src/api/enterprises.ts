import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Enterprises {
  constructor(private client: Client) { }

  /**
   * Get an enterprise by its ID. */
  async getEnterprise<T = unknown>(parameters: Parameters.GetEnterprise, callback: Callback<T>): Promise<void>;
  /**
   * Get an enterprise by its ID. */
  async getEnterprise<T = unknown>(parameters: Parameters.GetEnterprise, callback?: undefined): Promise<T>;
  async getEnterprise<T = unknown>(parameters: Parameters.GetEnterprise, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        members: parameters.members,
        member_fields: parameters.memberFields,
        member_filter: parameters.memberFilter,
        member_sort: parameters.memberSort,
        member_sortBy: parameters.memberSortBy,
        member_sortOrder: parameters.memberSortOrder,
        member_startIndex: parameters.memberStartIndex,
        member_count: parameters.memberCount,
        organizations: parameters.organizations,
        organization_fields: parameters.organizationFields,
        organization_paid_accounts: parameters.organizationPaidAccounts,
        organization_memberships: parameters.organizationMemberships,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getEnterprise' });
  }

  /**
   * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route. */
  async getEnterpriseAuditLog<T = unknown>(parameters: Parameters.GetEnterpriseAuditLog, callback?: Callback<T>): Promise<void>;
  /**
   * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route. */
  async getEnterpriseAuditLog<T = unknown>(parameters: Parameters.GetEnterpriseAuditLog, callback?: undefined): Promise<T>;
  async getEnterpriseAuditLog<T = unknown>(parameters: Parameters.GetEnterpriseAuditLog, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/auditlog`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getEnterpriseAuditLog' });
  }

  /**
   * Get an enterprise's admin members. */
  async getEnterpriseAdmins<T = Models.Enterprise>(parameters: Parameters.GetEnterpriseAdmins, callback: Callback<T>): Promise<void>;
  /**
   * Get an enterprise's admin members. */
  async getEnterpriseAdmins<T = Models.Enterprise>(parameters: Parameters.GetEnterpriseAdmins, callback?: undefined): Promise<T>;
  async getEnterpriseAdmins<T = Models.Enterprise>(parameters: Parameters.GetEnterpriseAdmins, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/admins`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getEnterpriseAdmins' });
  }

  /**
   * Get the signup URL for an enterprise. */
  async getEnterpriseSignupUrl<T = unknown>(parameters: Parameters.GetEnterpriseSignupUrl, callback: Callback<T>): Promise<void>;
  /**
   * Get the signup URL for an enterprise. */
  async getEnterpriseSignupUrl<T = unknown>(parameters: Parameters.GetEnterpriseSignupUrl, callback?: undefined): Promise<T>;
  async getEnterpriseSignupUrl<T = unknown>(parameters: Parameters.GetEnterpriseSignupUrl, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/signupUrl`,
      method: 'GET',
      params: {
        authenticate: parameters.authenticate,
        confirmationAccepted: parameters.confirmationAccepted,
        returnUrl: parameters.returnUrl,
        tosAccepted: parameters.tosAccepted,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getEnterpriseSignupUrl' });
  }

  /**
   * Get the members of an enterprise. */
  async getEnterpriseMembers<T = unknown>(parameters: Parameters.GetEnterpriseMembers, callback: Callback<T>): Promise<void>;
  /**
   * Get the members of an enterprise. */
  async getEnterpriseMembers<T = unknown>(parameters: Parameters.GetEnterpriseMembers, callback?: undefined): Promise<T>;
  async getEnterpriseMembers<T = unknown>(parameters: Parameters.GetEnterpriseMembers, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/members`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        filter: parameters.filter,
        sort: parameters.sort,
        sortBy: parameters.sortBy,
        sortOrder: parameters.sortOrder,
        startIndex: parameters.startIndex,
        count: parameters.count,
        organization_fields: parameters.organizationFields,
        board_fields: parameters.boardFields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getEnterpriseMembers' });
  }

  /**
   * Get a specific member of an enterprise by ID. */
  async getEnterpriseMember<T = Models.Member>(parameters: Parameters.GetEnterpriseMember, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific member of an enterprise by ID. */
  async getEnterpriseMember<T = Models.Member>(parameters: Parameters.GetEnterpriseMember, callback?: undefined): Promise<T>;
  async getEnterpriseMember<T = Models.Member>(parameters: Parameters.GetEnterpriseMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/members/${parameters.idMember}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        organization_fields: parameters.organizationFields,
        board_fields: parameters.boardFields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getEnterpriseMember' });
  }

  /**
   * Get whether an organization can be transferred to an enterprise. */
  async getEnterpriseTransferrableOrganization<T = Models.Organization>(parameters: Parameters.GetEnterpriseTransferrableOrganization, callback: Callback<T>): Promise<void>;
  /**
   * Get whether an organization can be transferred to an enterprise. */
  async getEnterpriseTransferrableOrganization<T = Models.Organization>(parameters: Parameters.GetEnterpriseTransferrableOrganization, callback?: undefined): Promise<T>;
  async getEnterpriseTransferrableOrganization<T = Models.Organization>(parameters: Parameters.GetEnterpriseTransferrableOrganization, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/transferrable/organization/${parameters.idOrganization}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getEnterpriseTransferrableOrganization' });
  }

  /**
   * Create an auth Token for an Enterprise. */
  async createEnterpriseToken<T = unknown>(parameters: Parameters.CreateEnterpriseToken, callback: Callback<T>): Promise<void>;
  /**
   * Create an auth Token for an Enterprise. */
  async createEnterpriseToken<T = unknown>(parameters: Parameters.CreateEnterpriseToken, callback?: undefined): Promise<T>;
  async createEnterpriseToken<T = unknown>(parameters: Parameters.CreateEnterpriseToken, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/tokens`,
      method: 'POST',
      params: {
        expiration: parameters.expiration,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createEnterpriseToken' });
  }

  /**
   * Transfer an organization to an enterprise. */
  async transferOrganizationToEnterprise<T = unknown>(parameters: Parameters.TransferOrganizationToEnterprise, callback: Callback<T>): Promise<void>;
  /**
   * Transfer an organization to an enterprise. */
  async transferOrganizationToEnterprise<T = unknown>(parameters: Parameters.TransferOrganizationToEnterprise, callback?: undefined): Promise<T>;
  async transferOrganizationToEnterprise<T = unknown>(parameters: Parameters.TransferOrganizationToEnterprise, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/organizations`,
      method: 'PUT',
      params: {
        idOrganization: parameters.idOrganization,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'transferOrganizationToEnterprise' });
  }

  /**
   * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. */
  async updateEnterpriseMemberLicense<T = Models.Member>(parameters: Parameters.UpdateEnterpriseMemberLicense, callback: Callback<T>): Promise<void>;
  /**
   * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. */
  async updateEnterpriseMemberLicense<T = Models.Member>(parameters: Parameters.UpdateEnterpriseMemberLicense, callback?: undefined): Promise<T>;
  async updateEnterpriseMemberLicense<T = Models.Member>(parameters: Parameters.UpdateEnterpriseMemberLicense, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/members/${parameters.idMember}/licensed`,
      method: 'PUT',
      params: {
        Values: parameters.values,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateEnterpriseMemberLicense' });
  }

  /**
   * Deactivate a Member of an Enterprise. */
  async deactivateEnterpriseMember<T = unknown>(parameters: Parameters.DeactivateEnterpriseMember, callback: Callback<T>): Promise<void>;
  /**
   * Deactivate a Member of an Enterprise. */
  async deactivateEnterpriseMember<T = unknown>(parameters: Parameters.DeactivateEnterpriseMember, callback?: undefined): Promise<T>;
  async deactivateEnterpriseMember<T = unknown>(parameters: Parameters.DeactivateEnterpriseMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/members/${parameters.idMember}/deactivated`,
      method: 'PUT',
      params: {
        value: parameters.value,
        fields: parameters.fields,
        organization_fields: parameters.organizationFields,
        board_fields: parameters.boardFields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'deactivateEnterpriseMember' });
  }

  /**
   * Make Member an admin of Enterprise. */
  async makeEnterpriseMemberAdmin<T = unknown>(parameters: Parameters.MakeEnterpriseMemberAdmin, callback: Callback<T>): Promise<void>;
  /**
   * Make Member an admin of Enterprise. */
  async makeEnterpriseMemberAdmin<T = unknown>(parameters: Parameters.MakeEnterpriseMemberAdmin, callback?: undefined): Promise<T>;
  async makeEnterpriseMemberAdmin<T = unknown>(parameters: Parameters.MakeEnterpriseMemberAdmin, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/admins/${parameters.idMember}`,
      method: 'PUT',
    };

    return this.client.sendRequest(config, callback, { methodName: 'makeEnterpriseMemberAdmin' });
  }

  /**
   * Remove an organization from an enterprise. */
  async deleteEnterpriseOrganization<T = unknown>(parameters: Parameters.DeleteEnterpriseOrganization, callback: Callback<T>): Promise<void>;
  /**
   * Remove an organization from an enterprise. */
  async deleteEnterpriseOrganization<T = unknown>(parameters: Parameters.DeleteEnterpriseOrganization, callback?: undefined): Promise<T>;
  async deleteEnterpriseOrganization<T = unknown>(parameters: Parameters.DeleteEnterpriseOrganization, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/organizations/${parameters.idOrg}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteEnterpriseOrganization' });
  }

  /**
   * Remove an member as admin from an enterprise. */
  async deleteEnterpriseMemberAdmin<T = unknown>(parameters: Parameters.DeleteEnterpriseMemberAdmin, callback: Callback<T>): Promise<void>;
  /**
   * Remove an member as admin from an enterprise. */
  async deleteEnterpriseMemberAdmin<T = unknown>(parameters: Parameters.DeleteEnterpriseMemberAdmin, callback?: undefined): Promise<T>;
  async deleteEnterpriseMemberAdmin<T = unknown>(parameters: Parameters.DeleteEnterpriseMemberAdmin, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/enterprises/${parameters.id}/organizations/${parameters.idMember}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteEnterpriseMemberAdmin' });
  }
}
