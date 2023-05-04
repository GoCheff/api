namespace TokenProviderDTO {
  export interface ITokenProvider {
    generate(data: GenerateDTO): GenerateTokenResponseDTO;

    verify(data: VerifyDTO): VerifyTokenResponseDTO;
  }

  export interface ITokenPayload {
    id: number;
  }

  export type IToken = string;

  export type GenerateDTO = ITokenPayload;

  export type GenerateTokenResponseDTO = Promise<IToken>;

  export type VerifyDTO = IToken;

  export type VerifyTokenResponseDTO = Promise<ITokenPayload | { id: null }>;
}

export { TokenProviderDTO };
