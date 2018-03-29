const express = require('express')
const next = require('next')
const { parse } = require('url')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
	.then(() => {



		const server = express()

		server.get('/projects/:slug/:id', (req, res) => {


			const parsedUrl = parse(req.url, true)
			const rootStaticFiles = [
				'/robots.txt',
				'/sitemap.xml',
				'/favicon.ico'
			]
			if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
				const path = join(__dirname, 'static', parsedUrl.pathname)
				app.serveStatic(req, res, path)
			} else {
				handle(req, res, parsedUrl)
			}


			const actualPage = '/projects'
			const queryParams = { id: req.params.id, slug: req.params.slug }
			app.render(req, res, actualPage, queryParams)
		});

		server.get('/news/:slug/:id', (req, res) => {
			const actualPage = '/news'
			const queryParams = { id: req.params.id, slug: req.params.slug }
			app.render(req, res, actualPage, queryParams)
		});

		server.get('/directors/:slug/:id', (req, res) => {
			const actualPage = '/directors'
			const queryParams = { id: req.params.id, slug: req.params.slug }
			app.render(req, res, actualPage, queryParams)
		});

		server.get('*', (req, res) => {
			return handle(req, res)
		});

		server.listen(port, (err) => {
			if (err) throw err
			console.log('> Ready on http://localhost:3000')
		})
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})



