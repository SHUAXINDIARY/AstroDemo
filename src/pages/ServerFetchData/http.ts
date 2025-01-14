export const getData = async (): Promise<{ title: string }[]> => {
    try {
        return (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
    } catch (error) {
        throw error;
    }
}