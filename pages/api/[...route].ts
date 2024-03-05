import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import filtre from '../livre'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/bible-ref', async ({json, text, req}) => {
	const {book, chap, v1, v2} = req.queries()
	
	const result = filtre({livre : book[0], chap : chap[0], vers1 : v1[0], vers2 : v2[0] === 'undefined' ? undefined : v2[0]})

	console.log({book, chap, v1, v2, result})

	return json(result)
})

export default handle(app)
