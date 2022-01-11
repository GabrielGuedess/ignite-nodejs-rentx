export interface IVariables {
  name: string;
  link: string;
}

export interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    variables: IVariables,
    path: string,
  ): Promise<void>;
}
