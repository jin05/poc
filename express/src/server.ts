import express from "express"

const app: express.Express = express()

// サーバ起動
app.listen(3000, () => {
    console.log("Start on port 3000.")
})

// 最小構成
app.get("/", (req: express.Request, res: express.Response) => {
    res.send("OK")
})
