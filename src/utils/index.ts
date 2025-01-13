export const getTTI = () => {
    window.addEventListener('load', async () => {
        try {
            console.log("测试tti")
            // @ts-ignore
            const data = await ttiPolyfill?.getFirstConsistentlyInteractive();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    })
}