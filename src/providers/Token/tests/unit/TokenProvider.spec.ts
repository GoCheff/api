import { tokenProvider } from "../..";
import { tokenProviderFactory } from "../factories/Token";

describe("TokenProvider", () => {
  describe("admin", () => {
    it("should generate a token", async () => {
      const token = await tokenProvider.admin.generate({
        id: 1
      });

      expect(token).toBeTruthy();
    });

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

      const decodedToken = await tokenProvider.admin.verify(`${token}invalid`);

      expect(decodedToken.id).toBe(null);
    });
  });

  describe("chef", () => {
    it("should generate a token", async () => {
      const token = await tokenProvider.chef.generate({
        id: 1
      });

      expect(token).toBeTruthy();
    });

    it("should verify a token", async () => {
      const id = 1;
      const token = await tokenProviderFactory.chef.generate({
        id
      });

      const decodedToken = await tokenProvider.chef.verify(token);

      expect(decodedToken.id).toBe(id);
    });

    it("should return id null if token is invalid", async () => {
      const id = 1;
      const token = await tokenProviderFactory.chef.generate({
        id
      });

      const decodedToken = await tokenProvider.chef.verify(`${token}invalid`);

      expect(decodedToken.id).toBe(null);
    });
  });

  describe("customer", () => {
    it("should generate a token", async () => {
      const token = await tokenProvider.customer.generate({
        id: 1
      });

      expect(token).toBeTruthy();
    });

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
