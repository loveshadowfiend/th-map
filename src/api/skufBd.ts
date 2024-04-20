import axios from "axios";

const baseUrl = "http://172.20.10.7:3001/";

export const fetchRegionData = async (id: string) => {
    // TODO: fix any
    const response = await axios.get<any>(`${baseUrl}map/combinedQuery`, {
        params: {
            params: id,
        },
    });

    return response;
};

export const mockData = async () => {
    const response = await axios.get<any>(`http://localhost:5173/data.json`);

    return response;
};

// console.log((await fetchRegionData("Г. Москва")).data);
