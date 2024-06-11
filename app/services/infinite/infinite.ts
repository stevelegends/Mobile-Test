import {delay} from "app/utils/delay";

class InfiniteService {
    public async getInfiniteData(page: number) {
        await delay(10);
        return Array.from({ length: 100 }, (_, index) => (page * 100 + index) + 1);
    }
}

export const infiniteService = new InfiniteService();