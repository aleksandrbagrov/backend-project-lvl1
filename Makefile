# Makefile

publish: # npm publish

	npm publish --dry-run


install: # install dependencies

	npm ci


brain-games: # start program Brain Games

	node bin/brain-games.js

lint: # launch eslint

	npx eslint .

