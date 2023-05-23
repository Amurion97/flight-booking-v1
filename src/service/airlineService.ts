import {AppDataSource} from "../data-source";
import {Airline} from "../entity/Airline";

class AirlineService {
    private airlineRepository = AppDataSource.getRepository(Airline);

    all = async () => {
        return await AppDataSource.createQueryBuilder()
            .select("airline")
            .from(Airline, "airline")
            .getMany()
    }
}

export default new AirlineService();