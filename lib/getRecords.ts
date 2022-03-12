import { data } from "./data";

const dataStrings = data.split('\n').filter(Boolean);

export const getRecords = (search: string): { error: string, records: string[] } => {
    if (!search.replace(/[^a-z]/gi, '')) {
        return {
            error: 'Query must contain at least one letter.',
            records: []
        };
    }
    const lowercaseSearch = search.toLowerCase();
    return {
        error: null,
        records: dataStrings.filter(line => line.toLowerCase().includes(lowercaseSearch))
    };
}
