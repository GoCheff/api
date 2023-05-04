import { CreateCustomerUseCaseDTO } from "../../../CreateCustomerUseCaseDTO";

namespace CreateCustomerUseCaseFactoryDTO {
  export interface ICreateCustomerUseCaseFactory {
    getExecuteData(): CreateCustomerUseCaseDTO.ExecuteDTO;
  }
}

export { CreateCustomerUseCaseFactoryDTO };
