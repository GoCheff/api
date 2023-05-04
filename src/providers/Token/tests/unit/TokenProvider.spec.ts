import { tokenProvider } from "../..";
import { tokenProviderFactory } from "../factories/Token";

describe("TokenProvider", () => {
  describe("admin", () => {
    describe("generate", () => {
      it("should generate a token", async () => {
        const token = await tokenProvider.admin.generate({
          id: 1
        });

        expect(token).toBeTruthy();
      });
    });

    describe("verify", () => {
      it("should verify a token", async () => {
        const id = 1;
        const token = await tokenProviderFactory.admin.generate({
          id
        });

        const decodedToken = await tokenProvider.admin.verify(token);

        expect(decodedToken.id).toBe(id);
      });

      it("should return id null if token is invalid", async () => {
        const id = 1;
        const token = await tokenProviderFactory.admin.generate({
          id
        });

        const decodedToken = await tokenProvider.admin.verify(
          `${token}invalid`
        );

        expect(decodedToken.id).toBe(null);
      });
    });
  });

  describe("chef", () => {
    describe("generate", () => {
      it("should generate a token", async () => {
        const token = await tokenProvider.cheff.generate({
          id: 1
        });

        expect(token).toBeTruthy();
      });
    });

    describe("verify", () => {
      it("should verify a token", async () => {
        const id = 1;
        const token = await tokenProviderFactory.cheff.generate({
          id
        });

        const decodedToken = await tokenProvider.cheff.verify(token);

        expect(decodedToken.id).toBe(id);
      });

      it("should return id null if token is invalid", async () => {
        const id = 1;
        const token = await tokenProviderFactory.cheff.generate({
          id
        });

        const decodedToken = await tokenProvider.cheff.verify(
          `${token}invalid`
        );

        expect(decodedToken.id).toBe(null);
      });
    });
  });

  describe("customer", () => {
    describe("generate", () => {
      it("should generate a token", async () => {
        const token = await tokenProvider.customer.generate({
          id: 1
        });

        expect(token).toBeTruthy();
      });
    });

    describe("verify", () => {
      it("should verify a token", async () => {
        const id = 1;
        const token = await tokenProviderFactory.customer.generate({
          id
        });

        const decodedToken = await tokenProvider.customer.verify(token);

        expect(decodedToken.id).toBe(id);
      });

      it("should return id null if token is invalid", async () => {
        const id = 1;
        const token = await tokenProviderFactory.customer.generate({
          id
        });
        const decodedToken = await tokenProvider.customer.verify(
          `${token}invalid`
        );

        expect(decodedToken.id).toBe(null);
      });
    });
  });
});
