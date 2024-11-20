export interface Credential {
  email: string;
  password: string;
}

export type CredentialErrors = Partial<Credential>;
